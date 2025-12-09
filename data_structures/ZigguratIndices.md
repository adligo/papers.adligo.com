# Ziggurats

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2021-10-01<br/>
<strong>Edited:</strong> 2025-12-02<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.50<br/>
<strong>Copywrite 2021 Adligo Inc</strong>
</div>
<br/>

Ziggurats are a abstract replacement and improvement for several data structures most notably the [B-TreeIndices#1.3.6.1.4.1.33097.1.1.4](B-TreeIndices.md).  Ziggurats are able to achieve O(1) to O(log log n) performance for all major single item operations including delete, insert, find, update.  Ziggurats are similar to Trees however Ziggurats are wide flat structures where Trees are tall narrow structures.  In addition, Ziggurats are never required to perform rebalancing operations which greatly simplify parts of the Ziggurat implementations in particular streamlining synchronized memory operations.
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

## Ziggurat Structures

1.3.6.1.4.1.33097.1.0.50.0

Ziggurats are likely to exist in a wide variety of environments and serve a number of Use-Cases.  

### Bounded Ziggurats

Bounded ZigguratIndices provide a fixed size universe of item slots.  This can be useful for fixed size data including small networks, alphabetization of short words (i.e. less than 8, 12, etc characters), or for the storage of binary decimal parts of decimal numbers.  In both cases the most significant information is padded with binary zeros at the right, in order to keep ordering.

<strong>Note:</strong> when using either String or Decimal Integer Arrays, this would only be possible for Arrays with a size of length one.

Also See
- [StringToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.3](../data/StringToIntegerArrayNormalization.md)
- [DecimalToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.4](../data/DecimalToIntegerArrayNormalization.md)

## Recursive Ziggurat Structures

1.3.6.1.4.1.33097.1.0.50.1

Ziggurats can exhibit recursive behaviour in two ways by growing infinitely or by nesting infinitely (Ziggurats of Ziggurats).

### Unbounded Ziggurats

Unbounded ZigguratIndices simply grow and grow, this is facilitated by adding a new [BitSlotBlock#1.3.6.1.4.1.33097.1.0.7] above the top of the current top block, and assigning the current top block as occupying slot zero of the new parent [BitSlotBlock#1.3.6.1.4.1.33097.1.0.7].

### Nested Ziggurats

Nested ZigguratIndices allow the extension of data in Bounded Ziggurats.  This is quite useful for arbitrary string sizes and arbitrary binary decimal parts of decimal numbers.  

<strong>Note:</strong> when using either String or Decimal Integer Arrays, each Ziggurat in the chain corresponds to an index of the Array.

Also See
- [StringToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.3](../data/StringToIntegerArrayNormalization.md)
- [DecimalToIntegerArrayNormalization#1.3.6.1.4.1.33097.5.4](../data/DecimalToIntegerArrayNormalization.md)

## Ephemeral Ziggurats (in RAM)

1.3.6.1.4.1.33097.1.0.50.2

The use of a ZigguratIndices as a in memory data structure can serve many purposes including low latency indexing (for example Routers, Switches) and unbounded [Heaps1.3.6.1.4.1.33097.1.1.7](Heaps.md) where the Ziggurat is essentially a replacement for the [Array#1.3.6.1.4.1.33097.1.1.0](Arrays.md).

## ZigguratIndices in Databases

1.3.6.1.4.1.33097.1.0.50.3

ZigguratIndices in actual Databases become more complex as the Ziggurats will often exist in multiple places concurrently.  For example there might be a representation on hard disk (i.e. [SimpleZigguratDiskStructures#1.3.6.1.4.1.33097.1.1.100](SimpleZigguratDiskStructures.md)).  While one or more in memory (RAM) representations also exit.

### The BASE ZigguratIndices Lifecycle

1.3.6.1.4.1.33097.1.0.50.3.0 

In order to simplify this section for most readers, this is essentially how something like [Google's](https://www.google.com/) indices should work.  

##### Step 1) Index Creation

1.3.6.1.4.1.33097.1.0.50.3.0.0

Creation of a large Database Ziggurat index will likely entail the creation of files and folders on one or more computers.  For example; Google would accomplish this with its [MapReduce Process](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf) process.  However. there are a large number of algorithms that could be used accomplish this task. 

##### Step 2) Index Load 

1.3.6.1.4.1.33097.1.0.50.3.0.1

Once the Ziggurat indexes is created an exists on disk it would need to be loaded into the memory (RAM) on one or more computers.  In the case of something like Google this would also be a web server. 

##### Step 3) Index Swap

1.3.6.1.4.1.33097.1.0.50.3.0.2

Finally if a previous Ziggurat index was available it would need to be swapped out with the new Ziggurat index.  In the case of something like Google this could be achieved through redirecting a load balancer. 

### The ACID ZigguratIndices Lifecycle

1.3.6.1.4.1.33097.1.0.50.3.1

In order to simplify this section for most readers, this is essentially how something like [Oracle's OLDB RDBMS](https://en.wikipedia.org/wiki/Oracle_Database) or [Mongodb's Entity Database](https://www.mongodb.com/) should work.

##### Step 1) Index Creation or Modification

1.3.6.1.4.1.33097.1.0.50.3.0.0

If the Ziggurat index doesn't exist on disk, a new Ziggurat index would be created in memory (RAM).  If the Ziggurat index did exist it would either be loaded into memory (RAM) or obtained from the Ziggurat Index's Cache.  This would create a transactional buffer that should be small enough in size to fit on a single computer, as creation or modification of large ZigguratIndicies will need to iterate through these steps multiple times.

##### Step 2) Notify Caches and Flush the Transactional Buffer to Disk

1.3.6.1.4.1.33097.1.0.50.3.0.1

The Next Step would be to notify the caches that the Ziggurat index is changing while also flushing the transactional buffer to disk.  This notification ensures that a stale index is not used upholding the C (Consistency) in ACID.

##### Step 3) Notify Caches and Reload the Ziggurat Index's Cache

1.3.6.1.4.1.33097.1.0.50.3.0.2

Finally the new Ziggurat index's data would be loaded into the caches and made available to the rest of the database system.

### Notes

Ziggurats were originally envisioned in 2021 by Scott Morgan by applying Networking Algorithms to data base indices.  This work was inspired by some MIT Course Ware lectures by Erik Demaine and others often citing Peter Van Emde Boas's work.  The initial draft of this paper from 2001 lives here;

- [https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf](https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf)


##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations

- [MIT Course Ware lectures](https://www.youtube.com/@mitocw)
- [Erik Demaine / Peter Van Emde Boas Trees](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-4-divide-conquer-van-emde-boas-trees/)

- [https://heycoach.in/blog/van-emde-boas-trees/](https://heycoach.in/blog/van-emde-boas-trees/)

- [https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf](https://github.com/adligo/i_collections.adligo.org/blob/main/docs/src/drafts/ZigguratIndices.pdf)

- [Google](https://www.google.com/) 
- [Google's MapReduce Paper](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)

- [Mongodb's Entity Database](https://www.mongodb.com/)

- [Oracle's OLDB RDBMS](https://en.wikipedia.org/wiki/Oracle_Database)

- [Rebalancing Hash Tables with Anubhav](https://www.youtube.com/watch?v=Ccl8vI55FJM)

- [](https://www.eecs.harvard.edu/~michaelm/NEWWORK/postscripts/simple_load_balancing.pdf)