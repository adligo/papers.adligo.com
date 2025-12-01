# BitVectors

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-29<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.2.5<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

BitVectors are a non growable depricated alias in the Adligo catalog, which have been replace by [BitSlotMaps#1.3.6.1.4.1.33097.1.1.3](BitSlotMaps.md) for narrowed taxomony.

##### Siblings

- [BitMaps#1.3.6.1.4.1.33097.1.2.2](BitMaps.md)
- [BitSets#1.3.6.1.4.1.33097.1.1.2](BitSets.md)

##### Aliases 

- [BitArrays#1.3.6.1.4.1.33097.1.2.3](BitArrays.md)
- [BitSlotMaps#1.3.6.1.4.1.33097.1.1.3](BitSlotMaps.md)
- [BitStrings#1.3.6.1.4.1.33097.1.2.4](BitStrings.md)

### Notes

This is depricated mostly because of the Vector class in the Java language, which is growable and seems to break the Mathmatical [Vector#1.3.6.1.4.1.33097.5.1](../math/Vectors.md) convention of having a end point (or not growing after definition / creation time).  In addition, I wanted to narrow the scope of taxomony, since it looks like there are likely multiple interpretations of the BitVector term as of 2025, so [BitSlotMap#1.3.6.1.4.1.33097.1.1.3](BitSlotMaps.md) won the day. 

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

### Citations

[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Vector.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Vector.html)