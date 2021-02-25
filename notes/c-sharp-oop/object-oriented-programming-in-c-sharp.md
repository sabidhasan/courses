## Introduction

A **business object** refers to a class for solving a business problem (this is from **domain driven design**), or a blueprint for solving a business problem. An **entity** is a "thing" that is represented as a class in the program.

Eg: A customer is an **entity**, which is represented by the Customer **class**, and this class is instantiated as customer **objects**.

**Abstraction** - simplify reality and ignore details to focus on the representation needed for modeling the data
**Encapsulation** - hide the implementation details (which are not needed for other classes) from outer world.



## Identifying Classes from Requirements

To transform business requirements (i.e. some words) into concrete classes, do the following:asol

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



## Separation of Responsibilities

Separate responsibilities by making each class responsible for its own concerns, with minimal overlap.

**YAGNI** - `You Ain't Gonna Need It` principle.

**Minimize Coupling** - reduce dependencies to make it easier to work with the class and test it
**Maximize Cohesion** - measure of how related everything is; loosely related methods should be moved out to a utility class - improves legibility and testability

A **repository** class is responsible for saving and reading from disk. For example `CustomerRepository`.



## Establishing Relationships

There are three types of relationships:

1. **Collaboration** (uses-a), for example a repository class is used by an entity class.
2. **Composition** (has-a) with a **cardinality**. This could be 1-to-1 or 1-to-many, with or without dependent deletion.
3. **Inheritance** (is-a) note that C# does not support multiple inheritance



**Constructor Chaining** is when one overload of a constructor calls another. Similar to `base`, where the parent's constructor is called, chaining calls `this`:

```C#
public Constructor() : this(overload)
{ ... }
```



## Reusable Components & Static Classes

Components are in layers in C# apps - a database layer, business logic layer and user interface layer(s) [such as WPF or Web].

For defining helper methods, there are two options:

- Static classes, with **Static Methods**
- Extension Methods**, that extend an existing class (for example a built in class)



In C#, **entire classes can be static**, which must have all their methods as `static`.

Another alternative to static classes are **Extension Methods**. Extension methods allow extending any type from elsewhere, without need to do overrides/inheritance. Extension methods are defined as **static methods** in a **static class**, but used as instance methods (they are called on instances). The most common example is LINQ methods.

Define a static method:

```c#
public static class MyExtensions
{
    // The `this string` tells compiler that you are extending string
    public static int WordCount(this string source) { /*... */ }
}
public class Main
{
    public static void Main(string[] args)
    {
        string myString = "Test";
        // Now string class will have InsertSpaces defined
        int withSpaces = myString.WordCount();
    }
}
```

This helps because extension methods are populated in intellisense as well.



## Interfaces

An interface is a contract that the class promises to implement. By default, a class' interface is the list of public fields and methods.

An interface provides only the signature (both return type and parameters), and implementing classes must implement the body. **Interfaces cannot have constants, fields or constructors**.

Interfaces are one of the two basic ways of implementing **polymorphism**:

1. **Interface-based polymorphism**: One method (which is unimplemented in the interface) can have many different shapes in client classe
2. **Class-based polymorphism**: One method (defined as `virtual` or `abstract` in the base class) takes many shapes depending on the child class   