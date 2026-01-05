# NodeNetworks

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-14<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.12<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

In the context of data structures, a NodeNetwork is composed of two or more nodes and one or more edges which connect the nodes into a network. Nodes are often depicted by circles, while edges are often represented by (curved) lines or arrows.  This definition may seem synonymous with the term [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md), and although a NodeNetwork is always technically a [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) a [Graph#1.3.6.1.4.1.33097.1.0.14](Graphs.md) can also be comprised of one or more NodeNetworks.

## Commentary

NodeNetworks are synonymous with connected graphs only when they are not part of a [NodeNetworkSet#1.3.6.1.4.1.33097.1.0.15](NodeNetworkSets.md).

##### Illustration 1 
A NodeNetwork that is also a connected Graph
```
 a → b → c
```

## Components
### Nodes:
##### 1.3.6.1.4.1.33097.1.0.12.0

Also known as a [Vertex#1.3.6.1.4.1.33097.1.2.6](aliases/Vertices.md). A point or entity in a network structure.  Nodes may also have attributes, including edges which reference nodes. 

##### Formally;
The fundamental unit of a NodeNetwork $N=(V, E)$, which is part of the set $V$.

#### NodeIds:
###### 1.3.6.1.4.1.33097.1.0.12.0.0

A NodeId is simply some sort of unique identifier which can uniquely identify a [Node](#nodes).

### Edges:
##### 1.3.6.1.4.1.33097.1.0.12.1

An edge is simply a connection between two [Nodes](#nodes).  Edges may also have attributes, including directionality, weight and arbitrary attributes.

##### Formally;
The fundamental unit of a NodeNetwork $N=(V, E)$, which is part of the set $E$.

#### EdgeIds:
###### 1.3.6.1.4.1.33097.1.0.12.1.0

A EdgeId is simply some sort of unique identifier which can uniquely identify a [Edge](#edges).

## Attributes

## Acyclic:
##### 1.3.6.1.4.1.33097.1.0.12.7

This is a simple Boolean value that (when True) signifies if the NodeNetwork is acyclic (not having any [Cycles#1.3.6.1.4.1.33097.1.0.12.5](#cycles)).

### Directional:
##### 1.3.6.1.4.1.33097.1.0.12.6

This is a simple Boolean value that (when True) signifies if the NodeNetwork is directional or (when False) bi-directional.  Note that when this is True, bi-directionality can still exist through [Edges#1.3.6.1.4.1.33097.1.0.12.1](#edges) that reference [Nodes#1.3.6.1.4.1.33097.1.0.12.0](#nodes) in both directions.

## Associated Operations
### Walks:
##### 1.3.6.1.4.1.33097.1.0.12.2

A walk of a graph is a way of transversing the graph from one vertex to another (or to the same vertex) by following a sequence of edges.  Walks may be reduced to paths.

### Attributes of Associated Operations

### Paths: 
##### 1.3.6.1.4.1.33097.1.0.12.3

A path is a walk whose vertices are distinct (i.e., each vertex appears at most once in the walk).

### Circuts:
##### 1.3.6.1.4.1.33097.1.0.12.4

A Circut (or closed walk) means a walk (v0,e1,v1,e2,v2,...,ek,vk) with vk = v0.

### Cycles:
##### 1.3.6.1.4.1.33097.1.0.12.5

A cycle means a circut (v0,e1,v1,e2,v2,...,ek,vk) such that 

- The vertices v0,v1,...,vk−1 are distinct; 
- The edges e1,e2,...,ek are distinct; 
- We have k ≥1.

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)