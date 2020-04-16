# Java Language Fundamentals

In IntelliJ, create a new project steps:

- Project type is Java (rather than Android, or Java FX)
- SDK is supplied to be current version of the JDK
- Give a project name, project location, and base package



## Basic Syntax

**Statement structure** - Java ends statements with semi colons `;` and this allows flexibility in white spacing.

**Comments**:

- Line comments using `//`
- Block comments using `/* ... */`
- JavaDoc comments using `/** ... */` for self-documenting code, this is an official way to document code



## Packages

The `package` keyword is used for organizing code. Package names are all lowercase, and globally (universally) unique - traditionally done by using the reverse domain name, followed by project name. Using the `package` keyword puts a class inside of a package.

```java
package com.abidhasan.myproject;
class Main {
  //...
}
```

In the above example, the main package is now known by `com.abidhasan.myproject.Main`, rather than simply `Main`.
Though Java doesn't care where you put a package, IDEs put each part of the package name to be a directory.

For a package, the built Bytecode also includes the package name. So to run the above use `java com.abidhasan.myproject.Main`



## Variables, Data Types, and Math Operators

Java is strongly typed - a variable can only hold one type of data, but the value can be modified.

Naming conventions:

- 