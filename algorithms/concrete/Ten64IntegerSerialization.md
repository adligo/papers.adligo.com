# Ten64 Integer Serialization

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-03-28<br/>
<strong>Edited:</strong> 2026-03-28<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.0.2.4<br/>
<strong>Copywrite 2026 Adligo Inc</strong>
</div>

Serialization and de-serialization from the Ten64 alphabet is quite straightforward. 

# Serialization

- O(s)

Where s is the number of sextets.  Note I have dropped the cost of Step 1, as it's essentially a constant which depends on how big your bit universe is.

##### Step 1) 

Use a [Binary Fractal Range Search](./BinaryFractalRangeSearch.md) to identify the left most bit in the integer.
- O( log log u)

Where u is the number of bits in the universe (aka. the integer) (i.e. a 32 bit or 64 bit integer).

##### Step 2) 

- O(s)

Loop from right to left for groups of six bits call the right most slot the idx (short for index) starting at 0 (assuming your languages API uses zero based bit assignment).  Use a bit mask of six ones '111111' and do a binary and (aka &) to isolate each sextet.  Then use a switch or case statement to map the little-ending binary to the Ten64 
alphabet character, and write that character to the buffer/stream/disk file.  Note the little-ending binary is the reverse of the big-ending binary in the Ten64 specification.

### Serialization Example

Psudo code in Java Syntax;

```java 
// in java keep an eye on the left most sign bit!
int i = 756; // 1011110100 in binary
// Note Ints.binaryFractalRangeSearch did not exist at the time of this psudo code example
int leftMostBit = Ints.binaryFractalRangeSearch(i); // left most bit is 9
// Creates a mask with 1s in the 6 least significant positions
int mask = (1 << 6) - 1;
for (i = 0; i < 9; i += 6) {
  // shift the mask if necessary
  int thisMask = mask << i;
  // do the masking
  int masked = i & mask;
  // shift back to the right if necessary
  int shifted = masked >> i;
  // use a switch statement to go from the sextet to the character
  char c = Ten64Map.get(shifted); 
  out.write(c);
}

```

# De-serialization

De-serialization is essentially the opposite of serialization.  

##### Step 1)

Read the characters from left to right one at a time.  For each character lookup the little-ending binary sextet that maps to that character.  Note the little-ending binary is the reverse of the big-ending binary in the Ten64 specification. Store the first sextet at the right of the result integer, and each subsequent sextet in it's respective slot.  Use a binary and ( & ) to aggregate the binary into the final result integer.

Psudo code in Java Syntax;

```java
  int r = 0;
  int counter = 0;
  while(in.hasNext()) {
    char c = in.next();
    // note this would use a switch statement to go from the character to the 
    // little-ending binary sextet all in one step
    int sextet = Ten64Map.get(c);
    if (counter == 0) {
      r = sextet;
    } else {
      int shifted = sextet << (counter * 6)
      r = r & shifted;
    }
    counter++;
  }
  return r

```
