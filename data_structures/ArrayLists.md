# ArrayLists

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-29<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.4<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>

ArrayLists are unordered [Lists#1.3.6.1.4.1.33097.1.0.0](Lists.md) which are backed by [Arrays#1.3.6.1.4.1.33097.1.1.0](Arrays.md).  ArrayLists benefit from their fast access time of get and set operations.  ArrayLists suffer from doubling in universe size when they run out of space, and have a special type of asymptotic analysis called amortization (which is borrowed from finance) which is used to calculate the cost of this doubling.  

## Asymptotic Variables

- <strong>u: </strong> This is the universe size which is equal to the number of total slots in the underlying array.

- <strong>n: </strong> This is the number of items in the ArrayList.

### Asymptotic Time Cost (aka. Time Complexity)

| Operation | Asymptotic Cost |
| --------- | --------------- |
| get / set | O(1) |
| add | O(1) Amortized |
| insert | O(n) |
| delete | O(n) |
| find | O(n) |
 
### Asymptotic Space Cost (aka. Space Complexity)

O(u) is the space cost of an ArrayList.

### Exact Space Cost

The actual cost of a JavaArray list depends on the Java Platform (32 vs 64) bit Java.  

##### For 32 bit Java

Exact Cost = u*4 bytes + 8 bytes

The <strong>u * 4 bytes</strong> includes a 32 bit pointer (4 bytes) for each slot in the Object array, an additional 32 bit pointer (4 bytes) to point from the ArrayList object to the Object array internally, and another 32 bit pointer (4 bytes) to reference the ArrayList object itself.

##### For 32 bit Java

Exact Cost = u*8 bytes + 16 bytes

The <strong>u * 8 bytes</strong> includes a 64 bit pointer (8 bytes) for each slot in the Object array, an additional 64 bit pointer (8 bytes) to point from the ArrayList object to the Object array internally, and another 64 bit pointer (8 bytes) to reference the ArrayList object itself.

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

### Citations
[https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ArrayList.html](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ArrayList.html)

[https://www.youtube.com/watch?v=3MpzavN3Mco](https://www.youtube.com/watch?v=3MpzavN3Mco)

[https://courses.teresco.org/cs210_f19/notes/complexity.pdf](https://courses.teresco.org/cs210_f19/notes/complexity.pdf)

