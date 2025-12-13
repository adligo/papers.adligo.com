# NodeNetworks

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-12<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.12<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

In the context of data structures, a NodeNetwork is composed of two or more nodes and one or more edges which connect the nodes into a network. Nodes are often depicted by circles, while edges are often represented by (curved) lines or arrows.  This definition may seem synonymous with the term [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md), and although a NodeNetwork is always technically a [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) a [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) can also be comprised of multiple NodeNetworks.

### Nodes:
##### 1.3.6.1.4.1.33097.1.0.12.0

Also known as a [Vertex#1.3.6.1.4.1.33097.1.2.6](aliases/Vertex.md). A point or entity in a network structure.  Nodes may also have attributes, including edges which reference nodes. 

##### Formally;
The fundamental unit of a graph $G=(V, E)$, which is part of the set $V$.

### Edges:
##### 1.3.6.1.4.1.33097.1.0.12.1

### Walks:
##### 1.3.6.1.4.1.33097.1.0.12.2

A walk of a graph is a way of transversing the graph from one vertex to another (or to the same vertex) by following a sequence of edges.  Walks may be reduced to paths.

### Paths: 
##### 1.3.6.1.4.1.33097.1.0.12.3

A path is a walk whose vertices are distinct (i.e., each vertex appears at most once in the walk).

### Circut
##### 1.3.6.1.4.1.33097.1.0.12.4

A Circut (or closed walk) means a walk (v0,e1,v1,e2,v2,...,ek,vk) with vk = v0.

### Cycles:
##### 1.3.6.1.4.1.33097.1.0.12.5

A cycle means a circut (v0,e1,v1,e2,v2,...,ek,vk) such that 

- The vertices v0,v1,...,vk−1 are distinct; 
- The edges e1,e2,...,ek are distinct; 
- We have k ≥1.
- 
##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)