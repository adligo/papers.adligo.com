# NodeNetworkSets

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-12-12<br/>
<strong>Edited:</strong> 2025-12-12<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.0.15<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

NodeNetworkSets are specific types of [Graphs#1.3.6.1.4.1.33097.1.0.14](Graphs.md) that only include one or more [NodeNetwork(s)#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md).  Note that each [NodeNetwork(s)#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md) may have its own attributes (i.e. [Acyclic#1.3.6.1.4.1.33097.1.0.12.7](NodeNetworks.md#acyclic) or [Directional#1.3.6.1.4.1.33097.1.0.12.6](NodeNetworks.md#directional)) 

### Illustration 1

The following shows a NodeNetworkSet comprised of two [NodeNetworks#1.3.6.1.4.1.33097.1.0.12](NodeNetworks.md), one starting with a and one starting with b.  Note the starting points are know as [UpstreamOriginNodes#1.3.6.1.4.1.33097.1.0.13.1](DirectedNodeNetworks.md#upstreamoriginnodes) Note this is not a connected graph!

```
 a → b → c
 d → e → f
```

##### Questions Comments:
- [papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

- [Papers Index](../README.md)

### Citations 
[https://en.wikipedia.org/wiki/Graph_theory](https://en.wikipedia.org/wiki/Graph_theory)

[https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

[https://arxiv.org/pdf/2308.04512](https://arxiv.org/pdf/2308.04512)