# Simple Ziggurat Disk Structures
##### Copyright: 2020-2025 Adligo Inc 
##### Author: Scott Morgan
##### Version: 1.1
##### ID: 1.3.6.1.4.1.33097.1.0
##### Document URLs:
[SimpleZigguratDiskStructures.pdf](http://github.com/adligo/papers.adligo.com/data_structures/SimpleZigguratDiskStructures.pdf)
[SimpleZigguratDiskStructures.odt](http://github.com/adligo/papers.adligo.com/data_structures/SimpleZigguratDiskStructures.odt)
##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

# Summary

&nbsp;&nbsp;&nbsp;This paper codifies the Ziggurat Disk Structure which is an abstract on-disk data structure for files and folders (aka Directories).  The Ziggurat Disk Structure stores files which are identified by a positive integer identifier (i.e. 0,1,2,3,4, etc).  It is designed to be human and machine readable, however the emphasis is machine readability and speed.  
&nbsp;&nbsp;&nbsp;There are several possible use-cases for the Ziggurat Disk Structure including;


* 1) Unbounded disk array structures for disk implementations of array style file slotting to support heap prioritization structures.


* 2) Storage of Blockchain Blocks as disk array slot elements, which can be summarized/split on checkpoints similar to the way relational databases split their log.  This facilitates pushing old segments of the blockchain to cold storage, however note the state of the blockchain at a particular checkpoint would need to be summarized.


* 3) Supporting relational, entity based and hybrid database storage structures and storage of indices of those collections/tables.  


&nbsp;&nbsp;&nbsp;The Ziggurat Disk Structure is designed to be layered on standard UNIX (Apple/Mac) and Windows file systems as well as GFS (Google File System), HDFS (Hadoop File System) and can be adapted to other physical disk structures.  It consists of a virtual associative array structure inspired by Peter van Emde Boaz Trees.  However, it makes use of a fractal like disk pattern as the data elements are NOT expected to be known at the time of structure initialization.
   
# Table of Contents
- [The Virtual Ziggurat Disk Structure Elements](#the-virtual-ziggurat-disk-structure-elements)
    - [Diagram #1](#diagram-1)
    - [Diagram #2](#diagram-2)
- [The Physical to Virtual Ziggurat Disk Structure Mappings](#The-Physical-to-Virtual-Ziggurat-Disk-Structure-Mappings)
    - [Diagram 3 Entity per File](Diagram-3-Entity-per-File)
    - [Diagram 4 Multiple Entities per File / RDBMS Style](#Diagram-4-Multiple-Entities-per-File-/-RDBMS-Style)
    - [Diagram 5 Hybrid Entity Relational](#Diagram-5-Hybrid-Entity-Relational)
- [Conclusion](#Conclusion)
- [Citations / References](3Citations-/-References)	


## The Virtual Ziggurat Disk Structure Elements

&nbsp;&nbsp;&nbsp;Ziggurat Disk Structures map a virtual infinite associative array structure to a physical disk structure.   The virtual arrays may be of  different sizes.  However, it is recommended that they are all of the same size 2^X.  In the following example they are all 2^3, creating 8 slots per array.  To illustrate this we start at the bottom of the Ziggurat with the level zero arrays.   Below in diagram #1 we illustrate the parent array of the first three bottom child arrays and their association. 
   
## Diagram 1
![Diagram 1](simpleZigguratDiskStructures/ZigguratVirtualLevel0-1.drawio.png "Diagram #1")

## Diagram 2
![Diagram 2](simpleZigguratDiskStructures/ZigguratVirtualLevel1-3.drawio.png "Diagram #2")

## The Physical to Virtual Ziggurat Disk Structure Mappings

## Diagram 3 Entity per File
![Diagram 3](simpleZigguratDiskStructures/ZigguratPhysicalLevel0-3.drawio.png "Diagram #3")

## Diagram 4 Multiple Entities per File / RDBMS Style

## Diagram 5 Hybrid Entity Relational

## Conclusion

## Citations / References	