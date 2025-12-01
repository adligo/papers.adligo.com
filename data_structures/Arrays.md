# Arrays

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-28<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.1.0<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

At Adligo we default to the Java style definition of the word Array.  A data structure with a fixed number of slots at creation which can be get or set within O(1) time.  Arrays number their indices between 0 and n, where n is a positive integer defined at the Array creation time.  Mostly this is in order to differentiate between JavaScript (TypeScript) Arrays, which are usually [ArrayLists#1.3.6.1.4.1.33097.1.1.0](ArrayLists.md) implementations.

Arrays may suffer from empty slots which contain null pointers, which waste space.

## Asymptotic Variables

- <strong>u: </strong> This is the universe size which is equal to the number of total slots in the underlying array.

- <strong>n: </strong> This is the number of items in the ArrayList.

### Asymptotic Time Cost (aka. Time Complexity)

| Operation | Asympotic Summary |
| -------------------------- | -------------------- |
| get / set | O(1) |

### Asymptotic Space Cost (aka. Space Complexity)

O(u) is the space cost of an ArrayList.

### Exact Space Cost

The actual cost of a JavaArray list depends on the Java Platform (32 vs 64) bit Java.  In addition Object arrays are much more expensive than primitive arrays because they use a pointer for each slot.

##### For 32 bit Java Object Arrays

Exact Cost = u*4 bytes + 4 bytes

The <strong>u * 4 bytes</strong> includes a 32 bit pointer (4 bytes) for each slot in a Object array, and a 32 bit pointer (4 bytes) to reference the Array Object itself.

##### For 32 bit Java short Arrays

Exact Cost = u*2 bytes + 4 bytes

The <strong>u * 2 bytes</strong> includes 16 bits for each short in the array, and a 32 bit pointer (4 bytes) to reference the Array Object itself.

##### For 64 bit Java Object Arrays

Exact Cost = u*8 bytes + 8 bytes

The <strong>u * 8 bytes</strong> includes a 64 bit pointer (8 bytes) for each slot in a Object array, and a 64 bit pointer (8 bytes) to reference the Array Object itself.

##### For 64 bit Java short Arrays

Exact Cost = u*2 bytes + 8 bytes

The <strong>u * 2 bytes</strong> includes 16 bits for each short in the array, and a 64 bit pointer (8 bytes) to reference the Array Object itself.

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

### Citations 

[https://en.wikipedia.org/wiki/Array_(data_structure)](https://en.wikipedia.org/wiki/Array_(data_structure))

[https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp)