# BitSets
<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-29<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.1.2<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

BitSets are simply a growable bunch of bits.  This can often be based on a simple binary integer number (i.e. byte, short, int or long in Java), or a specialized class like a BitSet or BigInteger.  At Adligo we categorize BitSets as a growable essentially unbounded bunch of bits, this is because of the BitSet and BigInteger implementation in Java. 

##### Siblings

- [BitArrays#1.3.6.1.4.1.33097.1.2.3](BitArrays.md)
- [BitSlotMaps#1.3.6.1.4.1.33097.1.1.2](BitSlotMaps.md)
- [BitStrings#1.3.6.1.4.1.33097.1.2.4](BitStrings.md)
- [BitVectors#1.3.6.1.4.1.33097.1.2.5](BitVectors.md)

##### Aliases 

- [BitMaps#1.3.6.1.4.1.33097.1.2.2](BitMaps.md)

### Notes

This was renamed by Scott from BitArrays on 2025-11-29 because of the growable attribute which seemed to conflict with Adligo's [Arrays#1.3.6.1.4.1.33097.1.1.0](Arrays.md) definition.  So he decided to move closer to the Java definition.

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

### Citations

[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/math/BigInteger.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/math/BigInteger.html)

[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/BitSet.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/BitSet.html)

[https://en.wikipedia.org/wiki/Bit_array](https://en.wikipedia.org/wiki/Bit_array)

[https://docs.rs/bitvec/latest/bitvec/](https://docs.rs/bitvec/latest/bitvec/)

[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/BitSet.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/BitSet.html)