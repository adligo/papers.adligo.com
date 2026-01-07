# BinaryFractalRangeSearch

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-12-13<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.0.2.2<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

Given a [BitSlotMap](../../data_structures/BitSlotMaps.md) (aka [BitVector](../../data_structures/abstract/aliases/BitVectors.md)) a BinaryFractalRangeSearch attempts to identify the next or previous slot (aka bit) that is set to true.  This is accomplished in O(log log s) time with O(1) space.

## Steps

##### Step 1) 
Identify bits in the direction your searching and mask them using a binary & operation with a bit mask (i.e. all ones 1111).  Compare the bits interpreted as an integer to zero, if the integer is a zero then none of the bits are set to True.

Note if there are three or fewer bits you can also search bit by bit with a simple check if the specific bit is set. 

##### Step 2)
If the result of [Step 1](#step-1-) was not a zero, segment the bits into a right and left half and repeat searching the closer side first.  Repeat [Step 1](#step-1-) for each half until the closest bit set to 1 is found. 

TODO add more to this paper, i.e. examples!

### Notes
Was reidentified from 1.3.6.1.4.1.33097.0.1 to 1.3.6.1.4.1.33097.0.2.2
on 2025-12-13.

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../../README.md)

### Citations 

[https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf](https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf)

[https://www.researchgate.net/profile/Peter-Van-Emde-Boas/publication/221024873_Associative_Storage_Modification_Machines/links/54102b840cf2df04e75b34ce/Associative-Storage-Modification-Machines.pdf](https://www.researchgate.net/profile/Peter-Van-Emde-Boas/publication/221024873_Associative_Storage_Modification_Machines/links/54102b840cf2df04e75b34ce/Associative-Storage-Modification-Machines.pdf)

[https://www.youtube.com/watch?v=hmReJCupbNU&t=3719s](https://www.youtube.com/watch?v=hmReJCupbNU&t=3719s)

[https://www.youtube.com/watch?v=2UM4bEfMzTA](https://www.youtube.com/watch?v=2UM4bEfMzTA)

[https://staff.fnwi.uva.nl/p.vanemdeboas/](https://staff.fnwi.uva.nl/p.vanemdeboas/)