# B-TreeIndices

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-29<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.1.4<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

B-Trees have been the defacto standard for database indices for the 20th century and first 25 years of the 21st century.  B-Trees are self-balancing tree data structure that maintains sorted data and allows searches, insertions, and deletions with a O(log n) time cost.  The B-tree generalizes the [BinarySearchTree#1.3.6.1.4.1.33097.1.0.1](BinarySearchTrees.md), allowing nodes to have more than two children.

### Asymptotic Time Cost (aka. Time Complexity)

| Operation | Asymptotic Cost |
| --------- | --------------- |
| insert | O(log n) |
| delete | O(log n) |
| find | O(log n) |
| stream | O(n) |
 
### Asymptotic Space Cost (aka. Space Complexity)

O(u) is the space cost of an ArrayList.

### Associated Algorithms

[BinarySearch#1.3.6.1.4.1.33097.0.0](../algorithms/concrete/BinarySearch.md)

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations

- [https://en.wikipedia.org/wiki/B-tree](https://en.wikipedia.org/wiki/B-tree)

- [MIT Open Course Ware / 2-3 Trees / B-Trees](https://www.youtube.com/watch?v=TOb1tuEZ2X4)