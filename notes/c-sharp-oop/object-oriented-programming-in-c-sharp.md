## Introduction

A **business object** refers to a class for solving a business problem (this is from **domain driven design**), or a blueprint for solving a business problem. An **entity** is a "thing" that is represented as a class in the program.

Eg: A customer is an **entity**, which is represented by the Customer **class**, and this class is instantiated as customer **objects**.

**Abstraction** - simplify reality and ignore details to focus on the representation needed for modeling the data
**Encapsulation** - hide the implementation details (which are not needed for other classes) from outer world.



## Identifying Classes from Requirements

To transform business requirements (i.e. some words) into concrete classes, do the following:

1. Analyze the problem
2. Identify the **nouns**, which will become the classes
3. Define the class members - fields/properties and methods

Remember the effect of **time** when designing classes - one class may refer to another class (like Order refers to a Product object), but the referred class may change and lead to unwanted effects - e.g. the order subtotal changes because product price changed.



## Building Entity Classes

Applications in C# have a layered structure, with each layer being a component. This means concerns are separated (e.g. adding a web UI is easy if UI is separate)

- User interface layer
- Business logic layer
- Data access layer
- (Shared code - e.g. authentication)

These layers are split up as different applications, and connected as a solution. 