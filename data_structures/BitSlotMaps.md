# BitSlotMaps

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-29<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.1.3<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

BitSlotMaps a non growable bunch of bits and are identical to [BitVectors#1.3.6.1.4.1.33097.1.1.2](BitVectors.md), however, since they are often used from higher level languages they simply have b bits.  In addition, they are fixed in size at the time of creation.  Additionally they can be converted to unsigned integers and compared to zero to identify when all b bits are equal to zero in O(1) time.  

### Associated Algorithms

[BinaryFractialRangeSearch#1.3.6.1.4.1.33097.0.1](../algorithms/BinaryFractialRangeSearch.md)

### Siblings

- [BitSets#1.3.6.1.4.1.33097.1.1.2](BitSets.md)
- [BitStrings#1.3.6.1.4.1.33097.1.2.4](BitStrings.md)

##### Aliases 

- [BitArrays#1.3.6.1.4.1.33097.1.2.3](BitArrays.md)
- [BitStrings#1.3.6.1.4.1.33097.1.2.4](BitStrings.md)
- [BitVectors#1.3.6.1.4.1.33097.1.2.5](BitVectors.md)

### Notes

I diferentiated from [BitVectors#1.3.6.1.4.1.33097.1.1.2](BitVectors.md) here simply to ensure that they are not growable values after creation.  This is mostly because of the Vector class in the Java language, which is growable and seems to break the Mathmatical [Vector#1.3.6.1.4.1.33097.5.1](../math/Vectors.md) convention of having a end point (or not growing after definition / creation time).  In addition, I wanted to narrow the scope of taxomony, since it looks like there are likely multiple interpretations of the BitVector term as of 2025. 

This definition has no correlation with this project, and I'm sorry for the name overlap as they did use the term 'Slot Map' first;
[https://github.com/orlp/slotmap?tab=readme-ov-file](https://github.com/orlp/slotmap?tab=readme-ov-file)
[https://docs.rs/slotmap/latest/slotmap/](https://docs.rs/slotmap/latest/slotmap/)

However, it is cool that they are doing some similar stuff as far as I can tell at first glance.

It came down to SlotMap or ArrayMap and both were taken ;(
[https://developer.android.com/reference/android/util/ArrayMap](https://developer.android.com/reference/android/util/ArrayMap)

Then I decided to add the word Bit first -> viola BitSlotMaps to keep the taxonomy extra clean.

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

### Citations

[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Vector.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Vector.html)

[https://en.wikipedia.org/wiki/Bit_array](https://en.wikipedia.org/wiki/Bit_array)