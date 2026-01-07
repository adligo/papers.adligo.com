# MMM (Matrix Memory Modeling) [aka 3M]

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-01-04<br/>
<strong>Edited:</strong> 2026-01-04<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.3.95<br/>
<strong>Copywrite 2020-2026 Adligo Inc</strong>
</div>

# Summary

Matrix Memory (RAM) Modeling is a system for modeling the problem domain of software systems.  They are always [Passive Models#1.3.6.1.4.1.33097.3.32](PM.md).  Unlike the [Domain Driven Design#1.3.6.1.4.1.33097.3.20.0 ](Modeling.md#domain-driven-design)  approach, they are derived via a system of modeling rules.  

The intent of Matrix Memory Modeling (aka MMM or 3M) is simply to build models that we NOT need to be refactored in the future.  This saves on time and effort during the duration of large complex projects which may need to be maintained for years, decades, or centuries.

This system splits the difference to some degree between the [Graph Theory#1.3.6.1.4.1.33097.1.0.12](../data_structures/abstract/NodeNetworks.md) and [Relational Model#1.3.6.1.4.1.33097.5.0](../data/RelationalNormalForms.md) divide.  It attempts to combine the best of both worlds, while still allowing for the flexibility of both.

## Step 1) Identify and Create all Enums

## Step 2) Create a relational model of the data

Take a look at Codd's relational model and start there.  Even if you are NOT planning on using a relational database, you should still be able to derive a relational model.  The level of normal form is not super important, however, you will likely want to shoot for [3NF#1.3.6.1.4.1.33097.5.0.0.3](../data/RelationalNormalForms.md#3nf-the-third-normal-form-circa-1971) or higher.
[Relational Normal Forms#1.3.6.1.4.1.33097.5.0](../data/RelationalNormalForms.md)

## Step 3) Mutants

Create a mutable model for each entity (aka row in the relation model) and add the word <strong><b>Mutant</b></strong> to the name.

For Example, Consider the following;
- <strong><b>PersonMutant</b></strong> represents a human.
- <strong><b>OrganizationMutant</b></strong> represents a company, non-profit, club, or government agency.
- <strong><b>PersonToOrgTypeMutant</b></strong> represents the type of relationship between a person and an organization (i.e., Employee, Employer, Volunteer, etc.).

## Step 4) Extract Interfaces [Optional]

Extract the interfaces into a diamond pattern as follows;

- <strong><b>I_XyzConstants</b></strong> The shared constants for this entity.
- <strong><b>I_XyzMutators</b></strong> The mutators (setters) for this entity.
- <strong><b>I_Xyz</b></strong> The immutable interface (getters, accessors) for this entity.
- <strong><b>I_XyzMutant</b></strong> The mutable interface (getters (or accessors) and setters) for this entity.

For Example;
```
    I_PersonConstants
     /              \
    /                \
   /                  \
I_Person          I_PersonMutators
   \                  /
    \                /
     \              /
      I_PersonMutant   
```

## Step 5) Share and Aggregate as Necessary [Optional]

Use the Sharable Aggregation pattern to compose or combine entities where appropriate.  For Example;

- <strong><b>PersonRelationsMutant</b></strong> A single human, and its relationships to other people and organizations.

## Step 6) Create Validators [Optional]

After slightly less than a decade of experience (A posteriori) has identified that validators (form validation / in memory rules) are easiest to create and maintain separate from the other problem domain models.  For example;

- <strong><b>PersonValidator</b></strong> should;

implement the <strong><b>I_PersonMutators</b></strong> interface, collect traceable validation issues (if any) and provide a valid <strong><b>I_Person</b></strong> when the rules pass.

## Step 7)  Extract Shared Aggregate Interfaces [Optional]

Extract the shared aggregate interfaces as necessary following the pattern from Step 4.

```
    I_PersonRelationsConstants
     /                        \
    /                          \
   /                            \
I_PersonRelations          I_PersonRelationsMutators
   \                            /
    \                          /
     \                        /
      I_PersonRelationsMutant   
```

## Step 8) Iterate on the Model [Optional]

Over time, you may discover that you need to add more entities or change the way you model the problem domain.  


### Citations 

[https://en.wikipedia.org/wiki/A_priori_and_a_posteriori](https://en.wikipedia.org/wiki/A_priori_and_a_posteriori)

[Modeling#1.3.6.1.4.1.33097.3.20](Modeling.md)

[Domain Driven Design#1.3.6.1.4.1.33097.3.20.0](Modeling.md#domain-driven-design)