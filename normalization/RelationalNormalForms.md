# Tabular Normal Forms

1.3.6.1.4.1.33097.5.0

Normalization and the normal forms are essentially a system for de-duplication of data.  More formally this has been described as a way of reducing data inconsistancy and improve data integrity. 

### Foundational Terms

1.3.6.1.4.1.33097.5.0.1 

#### Primary Key

1.3.6.1.4.1.33097.5.0.1.0
'A primary key is nonredundant if it is either
a simple domain (not a combination) or a combination
such that none of the participating simple domains is
superfluous in uniquely identifying each element.'
- codd-relational.pdf₁

#### Candiate Key

1.3.6.1.4.1.33097.5.0.1.1

A minimal set of attributes that can uniquely identify a tuple (row) in a relation. A relation can have multiple candidate keys.

#### Prime Attribute

1.3.6.1.4.1.33097.5.0.1.2

#### Super Key

1.3.6.1.4.1.33097.5.0.1.3

Any set of attributes that includes a candidate key. It can uniquely identify tuples but might contain redundant attributes.

#### Elementary Prime Attribute

1.3.6.1.4.1.33097.5.0.1.4

A relationship between two sets of attributes where the value of one set determines the value of another. For example, (CustomerID → CustomerName). The first set (CustomerID) is the determinant.

#### Functional Attribute Dependency

1.3.6.1.4.1.33097.5.0.1.5

A relationship between two sets of attributes where the value of one set determines the value of another. For example, (CustomerID → CustomerName). The first set (CustomerID) is the determinant.

## Normal Forms

1.3.6.1.4.1.33097.5.0.0 

### UNF The Unnormalized Form (circa 1970)

1.3.6.1.4.1.33097.5.0.0.0 

### 1NF The First Normal Form (circa 1970)

1.3.6.1.4.1.33097.5.0.0.1

Every datum in a relational database can be uniquely addressed by means of the relation, name, primary key value, and attribute name.

A relation (or a table, in SQL) can be said to be in first normal form if each field is atomic, containing a single value rather than a set of values or a nested table. In other words, a relation complies with first normal form if no attribute domain (the set of values allowed in a given column) has relations as elements.

##### 1NF.1 Unique rows (no duplicate records)
1.3.6.1.4.1.33097.5.0.0.1.0 

##### 1NF.2 Scalar columns (columns cannot contain relations or composite values)

1.3.6.1.4.1.33097.5.0.0.1.1 

### 2NF The Second Normal Form (circa 1971)

1.3.6.1.4.1.33097.5.0.0.2

##### 2NF.0 Every datum must first be in NF1

1.3.6.1.4.1.33097.5.0.0.2.0 

##### 2NF.1 Every non-prime attribute has a full functional dependency on each candidate key (attributes depend on the whole of every key)

1.3.6.1.4.1.33097.5.0.0.2.1

### 3NF The Third Normal Form (circa 1971)

1.3.6.1.4.1.33097.5.0.0.3

##### 3NF.0 Every datum must first be in NF2

1.3.6.1.4.1.33097.5.0.0.3.0 

##### 3NF.1 Every non-trivial functional dependency either begins with a superkey or ends with a prime attribute (attributes depend only on candidate keys)

1.3.6.1.4.1.33097.5.0.0.3.1

### BCNF The Boyce–Codd Normal Form (circa 1974)

1.3.6.1.4.1.33097.5.0.0.3.5 

### 4NF The Fourth Normal Form (circa 1977)

1.3.6.1.4.1.33097.5.0.0.4

### 4NF The Fifth Normal Form (circa 1979)

1.3.6.1.4.1.33097.5.0.0.5

### 5NF The Fifth Normal Form (circa 1979)

1.3.6.1.4.1.33097.5.0.0.5

### DKNF The Domain Key Form (circa 1981)

1.3.6.1.4.1.33097.5.0.0.80.0

### EKNF The Elementary Key Form (circa 1982)

1.3.6.1.4.1.33097.5.0.0.80.1

### 6NF The Sixth Form (circa 2003)

1.3.6.1.4.1.33097.5.0.0.6

## Codd's 12 Rules

1.3.6.1.4.1.33097.5.0.1 

### Notes

'Sometimes the following questions arise: Why call it the relational model? Why not call it the tabular model? There are two reasons: (1) At the time the relational model was introduced, many people in data processing felt that a relation (or relationship) among two or more objects must be represented by a linked data structure (so the name was selected to counter this misconception); (2) Tables are at a lower level of abstraction than rela- tions, since they give the impression that positional (ar- ray-type) addressing is applicable (which is not true of n-ary relations), and they fail to show that the informa- tion content of a table is independent of row order. Nevertheless, even with these minor flaws, tables are the most important conceptual representation of relations, because they are universally understood. '
- codd-358396.358400₂

The normal forms were added to this file first because they are of more importance than Codd's 12 rules in modern (circa 2025) computing.

### Citations

[codd-358396.358400₂](https://dl.acm.org/doi/10.1145/358396.358400)

[https://en.wikipedia.org/wiki/Unnormalized_form](https://en.wikipedia.org/wiki/Unnormalized_form)

[https://en.wikipedia.org/wiki/Database_normalization](https://en.wikipedia.org/wiki/Database_normalization)

[https://en.wikipedia.org/wiki/Codd%27s_12_rules](https://en.wikipedia.org/wiki/Codd%27s_12_rules)

[https://twobithistory.org/2017/12/29/codd-relational-model.html](https://twobithistory.org/2017/12/29/codd-relational-model.html)

[codd-relational.pdf₁](https://cs.uwaterloo.ca/~david/cs848s14/codd-relational.pdf)

[https://www.vervecopilot.com/interview-questions/can-understanding-boyce-codd-be-your-secret-weapon-in-technical-interviews](https://www.vervecopilot.com/interview-questions/can-understanding-boyce-codd-be-your-secret-weapon-in-technical-interviews)