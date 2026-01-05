# The Assembler Style

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-01-04<br/>
<strong>Edited:</strong> 2026-01-04br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.4.3<br/>
<strong>Copywrite 2026 Adligo Inc</strong>
</div>
<br/>

This was the original to the imperative style.  It allowed the programmer to execute a sequence of steps with low level instructions like;

```
MOV AL, 61h
```

This style is generally not in use today by modern programmers directly. However, it is still in use under the hood of many tools which produced both (Java) ByteCode or WASM (aka virtual assembler / machine code) and machine code, which can be reinterpreted as assembler commands.  

### Ciations

[https://webassembly.org/](https://webassembly.org/)

[https://docs.oracle.com/javase/specs/jvms/se25/html/index.html](https://docs.oracle.com/javase/specs/jvms/se25/html/index.html)

[https://en.wikipedia.org/wiki/Assembly_language](https://en.wikipedia.org/wiki/Assembly_language)

[https://www.lenovo.com/us/en/glossary/assembler/index.html](https://www.lenovo.com/us/en/glossary/assembler/index.html)