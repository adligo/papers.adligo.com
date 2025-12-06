# Ziggurats

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2021-10-01<br/>
<strong>Edited:</strong> 2025-12-02<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.50<br/>
<strong>Copywrite 2021 Adligo Inc</strong>
</div>
<br/>

Ziggurats are a abstract replacement and improvement for several data structures most notably the [B-Trees#1.3.6.1.4.1.33097.1.1.4](B-Trees.md).  Ziggurats are able to achieve O(1) to O(log log n) performance for all major operations including delete, insert, find, update.  Ziggurats are similar to Trees however Ziggurats are wide flat structures where Trees are tall narrow structures.  In addition, Ziggurats are never required to perform rebalancing operations which greatly simplify parts of the Ziggurat implementations in particular streamlining synchronized memory operations.
Ziggurats are compatible with transactional [ACID#1.3.6.1.4.1.33097.3.0](../architecture/ACID.md) and non-transactional [BASE#1.3.6.1.4.1.33097.3.1](../architecture/BASE.md)  databases.

Ziggurats are comprised of one or more [BitSlotBlocks#1.3.6.1.4.1.33097.1.0.7](BitSlotBlocks.md) which are analygous to nodes in [BinaryTrees#1.3.6.1.4.1.33097.1.0.7](BinaryTrees.md).  [BitSlotBlocks#1.3.6.1.4.1.33097.1.0.7] at the bottom tier of the Ziggurat contain values, where [BitSlotBlocks#1.3.6.1.4.1.33097.1.0.7] above the bottom tiers contain other [BitSlotBlocks#1.3.6.1.4.1.33097.1.0.7].

Ziggurats treat all of their keys as positive integers (including zero).  With the help of [IntegerNormalizationThreory#](../dataIntegerNormalizationTheory.md) various data types (i.e. Strings and Decimals) can be used with Ziggurats often nesting Ziggurats inside of each other.

Ziggurats are considered an abstract data structure because of the need to optimize them for different Use-Cases and the large variety of concrete data structures that will occur as a result.  However, this article provides a summary and links to all of the devilish details of these various concrete data structures.

### Asymptotic Time Cost (aka. Time Complexity)

| Operation | Asymptotic Cost |
| --------- | --------------- |
| insert | O(1) - O(log log n) |
| delete | O(1) - O(log log n)  |
| find | O(1) - O(log log n)  |
| stream | O(n) |
| update | O(1) - O(log log n)  |

### Asymptotic Space Cost (aka. Space Complexity)

O(u) is the space cost of an ArrayList.


### Bounded Ziggurats

Bounded Ziggurats provide a fixed size universe of item slots.  This can be useful for fixed size data including small networks, alphabetization of short words (i.e. less than 8, 12, etc characters), or for the storage of small decimal binary.   

### Nested Ziggurats

Nested Ziggurats allow 

### Unbounded Ziggurats

### Notes

Ziggurats were originally envisioned in 2021 by Scott Morgan by applying Networking Algorithms to data base indices.  This work was inspired by some MIT Course Ware lectures by Erik Demaine and others often citing Peter Van Emde Boas's work.  The initial paper lives here;

- [https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf](https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf)


##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations

- [MIT Course Ware lectures](https://www.youtube.com/@mitocw)
- [Erik Demaine / Peter Van Emde Boas Trees](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-4-divide-conquer-van-emde-boas-trees/)

- [https://heycoach.in/blog/van-emde-boas-trees/](https://heycoach.in/blog/van-emde-boas-trees/)

- [https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf](https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf)