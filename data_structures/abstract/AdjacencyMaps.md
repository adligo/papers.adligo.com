# AdjacencyMaps

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-13<br/>
<strong>Edited:</strong> 2025-12-13<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.19<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

AdjacencyMaps are [Maps#1.3.6.1.4.1.33097.1.0.3](../Maps.md) of [NodeIds#1.3.6.1.4.1.33097.1.0.12.0.0](NodeNetworks.md#nodeids) to [Sets#1.3.6.1.4.1.33097.1.0.6](../Sets.md) of [NodeIds#1.3.6.1.4.1.33097.1.0.12.0.0](NodeNetworks.md#nodeids) which indicate [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) in [Graphs#1.3.6.1.4.1.33097.1.0.14](Graphs.md).  

AdjacencyMaps are often used to create [AdjacencyMatrices#1.3.6.1.4.1.33097.1.0.20](AdjacencyMatrices.md) and [AdjacencyMatrixMaps#1.3.6.1.4.1.33097.1.0.21](AdjacencyMatrixMaps.md).
## Attributes

### Compressed:
##### 1.3.6.1.4.1.33097.1.0.19.0

This is a simple Boolean value that (when True) identifies this adjacency map as omitting lone disconnected [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes).  Note that since the entire point of Adjacency Maps are to track the adjacency (aka presence of [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) ), they are typically compressed!

### Directional:
##### 1.3.6.1.4.1.33097.1.0.19.1

This is a simple Boolean value that (when True) signifies if the adjacency map is directional or (when False) bi-directional.  Note that when this is True, bi-directionality can still exist through [Edges#1.3.6.1.4.1.33097.1.0.12.1](NodeNetworks.md#edges) that reference [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) in both directions.

### Notes

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 