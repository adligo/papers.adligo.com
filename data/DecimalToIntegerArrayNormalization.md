# DecimalToIntegerArrayNormalization

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-08<br/>
<strong>Edited:</strong> 2025-12-08<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.5.4<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>

The purpose of DecimalToIntegerArrayNormalization is to create a complex data structure called a DecimalZigguratKey.  A DecimalZigguratKey is comprised of two parts a unbounded (in terms of bit size) (Big) integer that represents the integer part of the decimal number.  This integer part is used as a key for a unbounded 
[ZigguratIndex#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md).
Then the decimal part of the decimal number is encoded as a list of integers of fixed sizes that will map to a series of nested / bounded 
[Ziggurats#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md) which make up a single index.  The nested / bounded [Ziggurats#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md) that represent the decimal part of the decimal number will be nested under the unbounded [Ziggurat#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md) that represents the integer part of the number.
The DecimalZigguratKey includes both a [ConsistantHashCode#1.3.6.1.4.1.33097.1.0.4.3](../data_structures/ConsistantHashCode.md) for the integer part of the number and a
[ConsistantHashCodeChain#1.3.6.1.4.1.33097.1.0.4.3](../data_structures/ConsistantHashCodeChain.md) for the decimal part of the number.

DecimalToIntegerArrayNormalization is slightly trickier than [StringToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.3](StringToIntegerArrayNormalization.md) this is because it is broken down into two parts.  

The integer part of the decimal number is simply not turned into an array and is kept as an arbitrary large integer (in terms of bits needed).  This is to map the integer to a unbounded [ZigguratIndex#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md).

The decimal part of the decimal number needs to be split into an array of integers.  This process is similar to [StringToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.3](StringToIntegerArrayNormalization.md).

<strong>b</strong> This is the number of bits in the decimal part of the decimal number.  Note: As bits go from right to left from the decimal point they represent halves (i.e. 0.5, 0.25, 0.125, etc).

<strong>i</strong> This is the number of bits in the integers in the integer array that will represent the decimal part of the decimal number.

<strong>a</strong> : a represents the number of slots in the Array.

- Step 1) Identify the number of slots in the array.

This can be accomplished with this formula 1 + b/i = a

- Step 2) Create the array 
- Step 3) Convert evenly divisible bits into array integers

Convert the bits that evenly divide into i into integers and put them in the array working left to right from the decimal and in the array (assuming 0 is the slot at the left).

- Step 4) Pad the remaining bits

Add zero bits to the right of the remainder bits, convert the aggregate to a integer.

 - Step 5) Store the last integer in the Array at the far right.
 
##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 