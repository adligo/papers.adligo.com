# Blocks

<div><strong>
Author: Scott Morgan<br/>
Edited: 2025-11-25<br/>
Id: 1.3.6.1.4.1.33097.1.0.2<br/>
</strong></div>

Blocks are an abstraction around [Arrays#1.3.6.1.4.1.33097.1.1.0](Arrays.md) or in other words a virtual Array like structure.  Like [Arrays#1.3.6.1.4.1.33097.1.1.0](Arrays.md) Blocks contain slots between 0 and n, where n is a positive integer defined at the Block creation time.  The Block abstraction does NOT guarantee any space or time complexity performance, as the underlying concrete data structure will determine performance.

Blocks are also known as Chunks, or arbitrary sections of data.  