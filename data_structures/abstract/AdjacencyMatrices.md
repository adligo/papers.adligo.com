# AdjacencyMatrices

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-13<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.20<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

An AdjacencyMatrix represents [Nodes#1.3.6.1.4.1.33097.1.0.14.0](Graphs.md#1.3.6.1.4.1.33097.1.0.14.0) (usually represented by circles) and [Edges#1.3.6.1.4.1.33097.1.0.14.1](Graphs.md#1.3.6.1.4.1.33097.1.0.14.1) (usually represented by [curved] lines or arrows) which may belong to a single [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) or [GraphSet#1.3.6.1.4.1.33097.1.0.15](NodeNetworkSets.md).  They are square 2d Matrices.

Although Adjacency Matrices are often used to represent single [NodeNetwork#1.3.6.1.4.1.33097.1.0.14](NodeNetworks.md). They may also represent a 
[NodeNetworkSet#1.3.6.1.4.1.33097.1.0.15](NodeNetworkSets.md) of multiple [NodeNetworks#1.3.6.1.4.1.33097.1.0.14](NodeNetworks.md) which are not connected by any [Edges#1.3.6.1.4.1.33097.1.0.14.1](NodeNetworks.md#edges).  In other words, a [NodeNetwork#1.3.6.1.4.1.33097.1.0.14](NodeNetworks.md) can be represented by an Adjacency Matrix, however an Adjacency Matrix it does not imply that only a single [NodeNetwork#1.3.6.1.4.1.33097.1.0.14](NodeNetworks.md) exists in the matrix.

## Attributes

### Universe

<strong>u</strong>:  The total number of slots in the matrix.

### Rows

<strong>r</strong>:  The total number rows (and columns) in the matrix.  

### Intersections

<strong>i</strong>:  The total number of slots in the matrix which are marked as true indicating an [Edge#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges)

### Compressed 
##### 1.3.6.1.4.1.33097.1.0.20.0

- @See [AdjacencyMaps#](AdjacencyMaps.md#compressed)


### Directional
##### 1.3.6.1.4.1.33097.1.0.20.1

- @See [AdjacencyMaps#](AdjacencyMaps.md#directional)

## Advantages / Pros
##### 1.3.6.1.4.1.33097.1.0.20.2

Since AdjacencyMatrices provide a cross-referencing of the relations between the [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) in a [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) they allow fast operations which would be slow in other data structures.

For Example;

What nodes does [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) with [NodeId#1.3.6.1.4.1.33097.1.0.12.0.0](NodeNetworks.md#nodeids) <strong>'x'</strong> reference?

What nodes (if any) reference [Node#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) with [NodeId#1.3.6.1.4.1.33097.1.0.12.0.0](NodeNetworks.md#nodeids) <strong>'x'</strong>?

## Issues / Cons
##### 1.3.6.1.4.1.33097.1.0.20.3

Performing a complete [Walk](../../algorithms/abstract/Walk.md) of the matrix is expensive as you will encounter many non-adjacent segments of the matrix; 
- O(c) with [Implementation A](#implementation-a-)

Although this can potentially be reduced with something like [Implementation B](#implementation-b-) and [BinaryFractialRangeWalks](../../algorithms/concrete/BinaryFractalRangeWalk.md) the complete [Walk](../../algorithms/abstract/Walk.md) will take some extra time.

- O( r log log r) with [Implementation B](#implementation-b-)

### Notes
This was moved under abstract since there could be multiple implementations (i.e.);
##### Implementation A) 
A boolean 2D array 
##### Implementation B) 
Two [Lists#1.3.6.1.4.1.33097.1.0.0](../Lists.md) of [BitSlotMaps#1.3.6.1.4.1.33097.1.1.3](../BitSlotMaps.md) one for the rows and one for the columns.  

The two (or more) different implementations would provide vastly different asymptotic and exact performance.  

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)

[https://en.wikipedia.org/wiki/Adjacency_matrix](https://en.wikipedia.org/wiki/Adjacency_matrix)

[https://en.wikipedia.org/wiki/Ramsey%27s_theorem](https://en.wikipedia.org/wiki/Ramsey%27s_theorem)

[https://en.wikipedia.org/wiki/Combinatorics](https://en.wikipedia.org/wiki/Combinatorics)