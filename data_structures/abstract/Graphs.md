# Graphs

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-14<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.14<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

Graphs are a very broad term that loosely means something with one or more [Nodes#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#nodes) and zero or more [Edges#1.3.6.1.4.1.33097.1.0.12.0](NodeNetworks.md#edges). 


## Issues

### Cycles:
##### 1.3.6.1.4.1.33097.1.0.14.0

[Cycles#1.3.6.1.4.1.33097.1.0.12.5](NodeNetworks.md#cycles) are a common topic of concern related to Graphs.  They often cause problems like infinite loops when [Exploring#1.3.6.1.4.1.33097.0.0.6](../../algorithms/abstract/Exploration.md) Graphs, which can be avoided via Memoization.  

### NodeNetworkSetGaps:
##### 1.3.6.1.4.1.33097.1.0.14.1

NodeNetworkSetGaps are simply gaps between [NodeNetworks#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md) in a Graph.  They identify a type of Graph that is somewhat under represented in the Graph Theory literature.


### Advantages / Pros

Graphs are great for discovering relationships programmatically.  Think of your typical detective show or movie where the board of suspects is somewhere in the detectives office with string connecting pictures of people, places and things (a classic Graph problem).

Graphs have been studied heavily and have their own named discipline in mathmatics [Graph Theory](https://en.wikipedia.org/wiki/Graph_theory). 

### Issues / Cons

Graphs are less structured than [Relational Data](../../data/RelationalNormalForms.md) and often result in complex structures.  This can lead to slow access times, random representations of data types (integers, decimals, etc) and complex tools are required to access and create Graphs.  

## Notes

### See Also

- [NodeNetworks#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md)
- [NodeNetworkSets#1.3.6.1.4.1.33097.1.0.15](NodeNetworkSets.md)

#####

Cool characters •, →, ←, ↓, ↑, ↗, ↖, ↙, ↘

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)
67