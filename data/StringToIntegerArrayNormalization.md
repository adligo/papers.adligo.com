# StringToIntegerArrayNormalization

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-07<br/>
<strong>Edited:</strong> 2025-12-07<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.5.3<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>

The purpose of StringToIntegerArrayNormalization is to create a data structure that is a [ConsistantHashCodeChain#1.3.6.1.4.1.33097.1.0.4.3](../data_structures/ConsistantHashCodeChain.md) that will map to a series of nested / bounded 
[Ziggurats#1.3.6.1.4.1.33097.1.0.50](../data_structures/ZigguratIndices.md) which make up a single index.

There are various manners which provide to integer array normalization, depending on the encoding of the characters in the strings (i.e. ASCII, UTF-8, UTF-16, etc). Regardless the first step is to get the strings into the encoding you want so that you can use that binary encoding as the integer representation.  The integers in the array will always be positive (including zero) unsigned integers.

Next the bit size of the integers must be considered, because the binary data from the strings will need to be padded with binary zeros in the right most integer in the array.

Finally it is generally recommended to use [String#1.3.6.1.4.1.33097.5.1](StringNormalization.md) or [WordNormalization#1.3.6.1.4.1.33097.5.1](StringNormalization.md#1.3.6.1.4.1.33097.5.1.2) before StringToIntegerArrayNormalization.

<strong>a</strong> : a represents the number of slots in the Array.

<strong>b</strong> : b represents the number of bits in the integers in the array.  - Note: this could vary by Array slot, whoever to keep things simple in the example we have used fixed sized integers.
        
<strong>o</strong> : o represents the number of bytes (o for octets a synonym for bytes) for the total length of the string.

- Step 1) Determine the number of integers in the output array 

This can be accomplished by taking 1 + (o/8)/b = a.

- Step 2) Create the array 
- Step 3) Copy the bytes as numbers for all full byte to number conversion

For all elements except the last element, simply convert the bytes into integers and store them in the array.

- Step 4) Zero pad the last (right most) bytes 

On the right side of the remainder string bytes, add binary zero bits until you have enough bits to match the size b.  

 - Step 5) Store the last integer in the Array at the far right.

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
- [ASCII 7 Codes](https://medium.com/@alexwheelervts/character-encodings-nul-bytes-and-changing-appetites-58cd86f386c7)

- [https://www.charset.org/utf-8](https://www.charset.org/utf-8)