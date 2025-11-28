# Arrays

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2025-11-25<br/>
<strong>Edited:</strong> 2025-11-28<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.1.1.0<br/>
<strong>Copywrite 2025 Adligo Inc</strong>
</div>
<br/>

##### Questions Comments:
[papers.adligo.com/issues](https://github.com/adligo/papers.adligo.com/issues)

[Papers Index](../README.md)

At Adligo we default to the Java style definition of the word Array.  A data structure with a fixed number of slots at creation which can be get or set within O(1) time.  Arrays number their indices between 0 and n, where n is a positive integer defined at the Array creation time.  Mostly this is in order to differentiate between JavaScript (TypeScript) Arrays, which are usually [ArrayLists#1.3.6.1.4.1.33097.1.1.0](ArrayLists.md) implementations.

Arrays may suffer from empty slots which contain null pointers, which waste space.

| Operation | Asympotic Summary |
| -------------------------- | -------------------- |
| Insert / Update / Delete | O(1) |

### Citations 

[https://en.wikipedia.org/wiki/Array_(data_structure)](https://en.wikipedia.org/wiki/Array_(data_structure))

[https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp)