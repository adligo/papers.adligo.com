---
layout: cd1
title: Ten64 Decimal Serialization
---

# Ten64 Decimal Serialization

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-03-28<br/>
<strong>Edited:</strong> 2026-03-28<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.0.2.5<br/>
<strong>Copywrite 2026 Adligo Inc</strong>
</div>


Serialization and de-serialization from the Ten64 alphabet is more complex than Integer Serialization.

# Serialization

- O(c log c)

We use [Ryū](#ryū), I have swapped out n with c to track characters.

##### Step 1)

Turn the float, double or BigDecimal into a String.  Count the decimal places, then multiply the decimal part by the number of decimal places to turn the decimal part into a integer.

- O(c log c)

This uses [Ryū](#ryū), I have swapped out n with c to track characters.

##### Step 2

Use [Ten64IntegerSerialization#1.3.6.1.4.1.33097.0.2.5](Ten64IntegerSerialization.md) to serialize each integer seperating them with a decimal character '.'


```
  float f = 123.456
  // Uses Ryū under the hood
  String s = new Float(f).toString();
  BigInteger i = new BigInteger(f); // get rid of the decimal part
  Ten64.write(i, out); // use the Ten64 Integer Serialization for the integer part
  int dotIdx = s.indexOf(".");

  int decimalPlaces = s.substring(dotIdx, s.length -1).length();  
  //identify the magnitude 1, 10, 100
  //this would be cached in the Ten64 library somewhere
  // but to give a vague notion
  StringBuilder sb = new StringBuilder("10");
  if (decimalPlaces >= 2) {
    for (int i = 2; i <= decimalPlaces; i++) {
      sb.append("0");
    } 
  }
  BigInteger dpInt = new BigInteger(sb.toString());
  
  BigDecimal d = new BigDecimal(f - i.toInt()).multiply(dpInt);
  out.write(".");
  Ten64.write(d, out.toBigInteger()); // use the Ten64 Integer Serialization for the decimal part
```

Note if you have trouble with this serialization method, do NOT blame this algorithm. Try to use a BigDecimal and make sure that your two string conversion is accurate first.

Also note this algorithm likely has some bugs, as it's pseudo code and hasn't been tested.  I will eventually update it after I implement Ten64 in Java.

# De-serialization

Ten64DecimalDeSerialization heavily relies on the Ten64IntegerDeSerialization method to split what appears to be a decimal number into a list of integers.

- O(cd²) - O(M(cd))

See notes below for details on the asymptotic analysis.

##### Step 1)

Use the Ten64IntegerDeSerialization method to read in the integers.
- O(c)

Where c is the number of characters.

##### Step 2)

For each integer pair, identify the number of decimal places in the decimal part of the pair. Divide it by the magnitude number of decimal places and add it to the integer part of the decimal pair.

- O(d²) - O(M(d))

Note, this will depend on the division algorithm Schoolbook long division or Newton's method respectively.  Well, so now I have swapped out d for n, as this is related to the number of decimal places, which identifies the magnitude.

```
   Ten64Result parsed = Ten64.read("#1.3,-4.5,9.9");
   List<List<BigInteger>> ints = parsed.toList();
   // r is the returned value
   List<BigDecimal> r = new ArrayList<>();
   for (List<BigInteger> decimals in ints) {
     BigDecimal ri = new BigDecimal(decimals.get(0));
     if (decimals.size() == 1) {
       r.add(ri);
     } else {
       BigInteger bi = decimals.get(1);
       
       String s = bi.toString();
       int decimalPlaces = s.length;
       //identify the magnitude 1, 10, 100
       //this would be cached in the Ten64 library somewhere
       // but to give a vague notion
       StringBuilder sb = new StringBuilder("10");
       if (decimalPlaces >= 2) {
         for (int i = 2; i <= decimalPlaces; i++) {
           sb.append("0");
         } 
       }
       BigInteger magnitude = new BigInteger(sb.toString());
       
       BigDecimal rd = new BigDecimal(bi).divide(magnitude);
       r.add(ri.add(rd));
     }
   }
```

Also note this algorithm likely has some bugs, as it's pseudo code and hasn't been tested.  I will eventually update it after I implement Ten64 in Java.

# Citations

##### Asymptotic Cost of Multiplication

- [https://en.wikipedia.org/wiki/Multiplication_algorithm#Computational_complexity_of_multiplication](https://en.wikipedia.org/wiki/Multiplication_algorithm#Computational_complexity_of_multiplication)

##### Grisu3 

Loitsch, F. (2010). "Printing floating-point numbers quickly and accurately with integers." ACM SIGPLAN Notices, 45(6), 233–243. https://doi.org/10.1145/1806651.1806623

##### Math Asymptotic Processor Performance Wikipedia

- [https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations](https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations)

##### Ryū

Adams, U. (2018). "Ryū: fast float-to-string conversion." Proceedings of the 39th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI), 270–282. 
- [https://doi.org/10.1145/3192366.3192369](https://doi.org/10.1145/3192366.3192369)
