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

To print to console use `System.out.println` or `System.out.print` (no linebreak at the end).



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

Java is strongly typed - a variable can only hold one type of data, but the value can be modified. To declare a variable:

```java
// <type> <name> = <inital_value>;
int myInt = 10;
```

Variable naming conventions:

- Use only letter and numbers
- camelCasing is used
- First character is not a number

Local values are not initialized with a value, so using an unassigned variable (`int someNumber`) will cause an error

**Primitive Data Types** in Java are the most fundamental data types:

| Type     | Size (bits) | Min Value                                 | Max Value             | Literal Format  | Class     |
| -------- | ----------- | ----------------------------------------- | --------------------- | --------------- | --------- |
| `byte`   | 8           | -128                                      | 127                   | `0`             | Integer   |
| `short`  | 16          | -32,768                                   | 32,767                | `0`             | Integer   |
| `int`    | 32          | -2B                                       | 2B                    | `0`             | Integer   |
| `long`   | 64          | low                                       | high                  | `0L`            | Integer   |
| `float`  | 32          | 1.4$\times 10^{-45}$ (smallest positive)  | 3.4$\times 10^{38}$   | `0.0F`          | Float     |
| `double` | 64          | 4.9$\times 10^{-324}$ (smallest positive) | 1.7 $\times 10^{308}$ | `0.0` or `0.0D` | Float     |
| `true`   | 1           | -                                         | -                     | `true`          | Boolean   |
| `false`  | 1           | -                                         | -                     | `false`         | Boolean   |
| `char`   | 16          |                                           |                       | `'A'`           | Character |

For **integers**, `int` is the most common type.
**Floating point** uses the IEEE 754 floating point standard - they support fractional positive, negative and zero values
**Char** stores a single unicode, using a single `'` apostrophe - can specify Hex code too.

Primitives are **stored by value** - a new variable with the same primitive value, it is copied.

For arithmetic operations, there are three types. Precedence can be altered via parentheses:

- **Math** operators (`+`, `-`, ` /`, `*`, `%`). Integer division results in an integer - you must cast to a float if a floating point is desired.
- **Prefix and Postfix** operators (`++` and `--`)
- **Compound Assigment** operators (`+=`, `-=`, `*=`, `/=`, `%=`)



Type conversion and coercion are of two types. Explicit conversion must be done when a narrowing conversion is done, as data would be lost. When an operation is performed, things are implicitly casted to the widest possible type.

- **Implicit conversion**, done by the compiler automatically based on the assigned type. Also called a **widening conversion**.

  ```java
  int iVal = 50;
  long lVal = iVal;			// 50 is converted to a long automatically
  ```

- **Explicit conversion**, which can be **narrowing** or **widening** conversions.

  ```java
  long lVal = 50L;
  int iVal = (int) lVal;		// here you need to be explicit, as info is lost
  ```

  

## Conditionals, Looping and Arrays

Java supports all **Relational Operators**: `>`, `>=`, `<`, `<=`, `==`, and `!=`

The **ternary operator** uses C-style `? ... :`

Java has three **logical operators**: `&&`, `||`, `!`. Java short circuits these operators. The bitwise operators (`&` and `|` can be used for non-short circuiting).

The conditional operator is JS-like in syntax.

Java is **block scoped**.  Variables declared in a block are only visible inside that block, but variables in scope when a block starts remain in scope for the block.



There are three loops in Java

- **While loop** - check condition, and keep looping while condition is true

  ```java
  while (i < 10) {
    // statement;
  }
  ```

- **Do While loop** - check condition and keep looping while condition is true, but loop at least once.

  ```java
  do {
    // statement;
  } while (i < 10);
  ```

- **For loop**

  ```java
  for (int i = 0; i < 10; i++) {
    // statement;
  }
  ```



**Arrays** are declared using `[]`, and instantiated with the `new` keyword, or using curly braces:

```java
int[] myArray = new int[20];

int[] myArray = {1, 2, 3, 4};
```

Can assign values using the square bracket notation.
Get length using the `.length` method.

The **for each** loop can loop through arrays:

```java
int[] myArray = new int[] { 1, 2, 3 };
for (int i : myArray) {
	// do something
}
```



Java supports **switch statements** similar to JS, but only `char` and `int` can be used.

