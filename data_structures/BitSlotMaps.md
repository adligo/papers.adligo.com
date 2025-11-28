# BitSlotMaps

<div><strong>
Author: Scott Morgan<br/>
Edited: 2025-11-28<br/>
Id: 1.3.6.1.4.1.33097.1.1.2<br/>
</strong></div>


BitSlotMaps are similar to [BitArrays#1.3.6.1.4.1.33097.1.1.2](BitArrays.md), however, since they are often used from higher level languages they simply have b bits.  In addition, they are fixed in size at the time of creation.  Additionally they can be converted to unsigned integers and compared to zero to identify when all b bits are equal to zero in O(1) time.  

### Associated Algorithms

[BinaryFractialRangeSearch#1.3.6.1.4.1.33097.0.1](../algorithms/BinaryFractialRangeSearch.md)

### Notes

This definition has no correlation with this project, and I'm sorry for the name overlap as they did use the term 'Slot Map' first;
[https://github.com/orlp/slotmap?tab=readme-ov-file](https://github.com/orlp/slotmap?tab=readme-ov-file)
[https://docs.rs/slotmap/latest/slotmap/](https://docs.rs/slotmap/latest/slotmap/)

However, it is cool that they are doing some similar stuff as far as I can tell at first glance.

It came down to SlotMap or ArrayMap and both were taken ;(
[https://developer.android.com/reference/android/util/ArrayMap](https://developer.android.com/reference/android/util/ArrayMap)

Then I decided to add the word Bit first -> viola BitSlotMaps to keep the taxonomy extra clean.

### Citations

[https://en.wikipedia.org/wiki/Bit_array](https://en.wikipedia.org/wiki/Bit_array)