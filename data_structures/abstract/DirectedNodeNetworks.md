# DirectedNodeNetworks

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-12<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.13<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

DirectedNodeNetworks are simply [NodeNetworks#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md) where the [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) are directional. 

## Component Parts

### Leaves:
##### 1.3.6.1.4.1.33097.1.0.13.0

These are simply [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) which do not have any [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) (references to) other [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) but may be referenced by (have [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) from) other [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes). 

##### Formally

Definition5.3.1. Let T be a tree. A vertex of T is said to be a leaf if its degree is 1.
[2308.04512.pdf page 161](https://arxiv.org/pdf/2308.04512)

Also note this formal definition is from undirected [Graphs#1.3.6.1.4.1.33097.1.0.14](Graphs.md).  This changes slightly because of the directed nature of DirectedNodeNetworks.

### UpstreamOriginNodes:
##### 1.3.6.1.4.1.33097.1.0.13.1

These are simply [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) which are not referenced by (have [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) from) other [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes).
OriginNodes may have [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) (references to) other [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes).

## Attributes
### Acyclic

DirectedNodeNetworks may be [Acyclic#1.3.6.1.4.1.33097.1.0.12.7](NodeNetworks.md#acyclic) like all [NodeNetworks#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md).

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)
200