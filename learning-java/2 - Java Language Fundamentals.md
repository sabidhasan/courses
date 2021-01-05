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

Java is **strongly typed** - a variable can only hold one type of data, but the value can be modified. To declare a variable:

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



## Classes

**File names** are conventionally is the same as the class name, and must be so for public classes.
Class names are in **PascalCase**
Properties are declared in the beginning of the class.
Constructors in Java have the same name as the class.
Java refers to functions as **methods** and properties as **fields**.

To create a class, use the `new` keyword; objects are stored and passed by reference (they are a **reference type**, unlike primitives).

**Access modifiers** define who can see a property/method:

| Modifier    | VIsibility                       | Usable on Classes          | Usable on Members |
| ----------- | -------------------------------- | -------------------------- | ----------------- |
| No modifier | In package (**package private**) | Y                          | Y                 |
| `public`    | Everywhere                       | Y                          | Y                 |
| `private`   | In class                         | N (only in nested classes) | Y                 |
| `protected` | In class and subclasses          | N (only in nested classes) | Y                 |



```java
public class Flight {
  // these are instance variables
  private int passengers, seats;
  
  public Flight() {
    seats = 150;
    passengers = 0;
  }
  
  public void addOnePassenger() {
    if (passengers < seats) passengers += 1;
  }
  
  private void someMethod() { 
    // this can't be called from outside
  }
}
```



**Special References** (`null` and `this`):
Java includes `this` to refer to the current object itself. For properties, you can optionally prefix with `this`, or if there is disambiguity for the variable names, `this` will explicitly refer to the obj itself.

`Null` refers to an uncreated object - an object reference that hasn't been instantiated is **null**. Likewise, an array of objects is initialized with `null`s. This is unlike other types, which *have* a default value (e.g. `false`, `0`, `0.0f`, `0L`, etc.).



**Acessors/Getters and Mutators/Setters**
Typically called `get<Name>` and `set<Name>` ; the setter returns `void` 



## Class Initializers and Constructors

There are three ways to set initial state for an object upon instantiation:

1. **Field initializers** - set an initial value for a field
2. **Constructors** - set via passed parameters
3. **Initialization Blocks** - init code that can be shared between classes

**Field initializers**:

​	A field takes an inital state based on its data type:

- Byte, short, int, long are `0`
- Float and double are `0.0`
- Char are `\u0000`
- Booleans are `false`
- Reference types are `null`

```java
public class Earth {
  long diameterInMiles = 1234;
  // Can call functions and other fields, to initialize values
  long diameterInKilometers = Math.round(diameterInMiles * 1.6d);
}
```



**Constructors**

Every class must have a constructor, and if you don't give one, Java will provide one that does nothing. If you provide a constructor, you need to provide ALL constructors.

Can have **multiple constructors** - each must have a different signature, and when class is instantiated, Java call the constructor with the matching signature. One constructor can call another, by instantiating itself with `this` (this is like super, but for the same class).

A constructor can be marked `private`, so that it can only be called from within the class.

```java
public class Passenger {
  public Passenger(int freeBags) {
    // Can instantiate class with one int
		this.freeBags = freeBags;
  }
  
  public Passenger(int freeBags, int paidBags) {
    // can instantiate class with two ints
		this(freeBags);				// instantiate this class with constructor above
    this.paidBags = paidBags;
  }
  
  private Passenger(double bagFee) {
    // this can only be called from within the class, not from outside
  }
}
```



**Initialization Blocks**

This allows shared code between all constructors in a class. To create an initialization block, simply define a block (with no name) where the fields/properties are initialized:

```java
public class InitBlock {
  int someField;
  {
    // This will run when class is instantiated
    someField = 1234;
  }
}
```



The order in which this all occurs:

1. Field initializers (literally field is set when defined)
2. Initialization block (code defined below field initializers)
3. Constructor methods



## Parameters

Java passes parameters by value, so any changes made in a method to a parameter is not reflected outside (for a primitve/immutable). **Parameters are immutable**. However, if you affect an object field/property inside an object, it will be reflected outside.

**Overloading** allows the same method to be defined in different ways. Each implementation must differ in **call signature**. The signature determines which implementation of a method gets called. Overloaded methods must differ in one or more of:

- *Number* of parameters
- *Type* of each parameter. Java does **auto casting** if possible to find an overloaded method that meets the call signature.
- *Method name* (all overloaded methods have the same name)

Sometimes, overloading are used for convenience, to avoid the user having to do work before passing a param to a method.

When passing **multiple (indefinite) number of arguments**, you can define a method to accept any number of arguments using the **elipses** notation - this can only be used for the last parameter. Java auto-creates the array for you, and calls the function with it:

```java
public void addPassenger(Passenger... list) { 
	/* list is an array of Passengers, can access length, iterate over it, etc */
};

addPassenger(pass1, pass2, pass3, pass4); // Java makes the array when calling addPassenger
// This is equivalent to the above
addPassenger(new Passenger[] { pass1, pass2, pass3, pass4 });
```



## Class Inheritance

The `extends` keyword indicates a class is subclassing from a parent. You can instantiate the child class as a parent class. When instantiating this way, the child class will ONLY have the <u>fields</u> of the parent:

```java
public class CargoFlight extends Flight {
  
}

// Can have a CargoFlight in Flight array, if the CargoFlight created as Flight type
Flight[] myFlights = new Flight[2];

Flight flight = new Flight();
// Type flight, but creating CargoFlight - this is valid but it only has stuff from Flight
Flight cargoFl = new CargoFlight();

myFlights[0] = flight;
myFlights[1] = cargoFl;
```

You have to be <u>VERY</u> careful here, as only the fields are hidden, not the methods. A child class casted as parent (as in above) will use the child class' method, but the parent classes fields. Thus, getters and setters are important!!

Java provides an `@Override` annotation for **overriding**, which will make the compiler yell if you don't override the method (i.e. misnamed).



The **Object Class** is the base class for all objects. Some methods:

- `hashCode` - for hashing
- `getClass` - type of class
- `clone` - duplicates the object
- `toString` - stringify
- `equals` - comparing objects

An implication of this is that you can make an array of Objects, and hold multiple types of Objects. They won't any non-Object-like capabilities, but can be re-cast to their native classes:

```java
Object o = new CargoFlight();
o.add1Package(1, 2, 3);				// this doesn't work, as Object doesn't have add1Package method

// Cast to CargoFlight - auto-casting can't work as compiler doesn't know how to cast:
CargoFlight cf = (CargoFlight) o;
```



**Equality** check is done by reference check, so it only works on primitives or objects that are actually the same. The built in `equals` method cannot be used for custom objects as it also just checks object ID:

```java
@Override
public boolean equals(Object o) {
  if (!(o instanceof <this class>)) return false;
  // do logic to determine if equal; likely want to cast `o` to this class' type
  // to access methods, as they are not accessible for type Object
}
```



**Super** gives access to an object's base class, and its methods. Super, like the `this` callable, must be the first line in a constructor.



**Controlling Inheritance** - if you want to prevent class from being extended to a child class use `final` on the class definition. Use `final` on a method to allow only the method to not be overridden.
To **require inheritance** and make an abstract class, use the `abstract` keyword. If the method is abstract, the class MUST be marked abstract.

```java
public final class CargoFlight extends Flight {
  // this class cant be overridden
}

public abstract class CargoFlight extends Flight {
  // this method MUST be overridden
	public abstract boolean canAccept(Flight f);
}
```

A field marked `final` cannot be changed after object instantiation. It MUST be set in the `constructor`, and changing it leads to compile errors.
A field marked `static final` is essentially a constant and cannot be changed PERIOD. Static final fields are named using capital snake case.



**Constructors are not inherited**. If you instantiate a child class, Java will use the default constructor (one that takes no arguments and does nothing), but won't inherit the parents' specialized constructors. However, a base class constructor MUST be called. If not provided, it will use the parent's default constructor.



## Data Types

The **String** is a sequence of characters, and it is an object (not a primitive):

- Create by using double quotes
- Concatenate strings by using `+` and `+=`
- String objects are **immutable**

Major string methods:

- `length`
- `valueOf` (for converting non-string to a string)
- `concat`, `replace`, `toLowerCase`, `toUpperCase`, `trim`, `split`
- `charAt`, `substring`
- `contains`, `indexOf`, `startsWith`, `endsWith`, `lastIndexOf`
- `compareTo`, `equals`, `isEmpty`, `equalsIgnoreCase`



As strings are objects, String objects cannot be compared by `==` operator. To do this there are two options:

1. Use the `stringOne.equals(stringTwo)` to check for equality
2. Call the `.intern()` method, which returns the same object for two strings that have the same value



The `toString` method of an object is called (for example by `System.out.println`) to get a string representation of a class.



For mutating strings, a new string object must be created for each change, so the **StringBuilder** class is more useful. This class provides a mutable string buffer:

```java
// the `40` limit is soft, and it'll get auto-extended, but helps JVM.
StringBuilder sb = new StringBuilder(40);
sb.append("Start of a");
sb.append(" a string.");
sb.insert(0, "Inserted ");
System.out.println(sb.toString()); // "Inserted Start of a a string"
```



All primitives provide **primitive wrapper classes**, which are immutable object wrappers for primitives. Though immutable, they are still objects and so for comparison `.equals` should be used. Wrapper classes exist for all 8 primitives:

- Boolean
- Character
- Number (which is the parent class for Byte, Short, Integer, Long, Float, Double)

They provide a `valueOf` method to ingest a primitive, and an `xxxValue` (such as `intValue`) to put out a primitive. For *strings*, there is `parseXxx` and `String.valueOf()`. Converting primitive to wrapper is called **boxing**, and converting wrapper to primitive is called **unboxing**. These aren't required in practice, as the following are equivalent:

```java
Integer i = 100;
Integer i2 = Integer.valueOf(100);
```

The wrapper classes provide all the benefits of `null`able values. When not set, unlike primitives that default to `0` or `0.0` or `false`, the wrapper classes default to `null`.



**Enums**
An **enumeration** or enum type is used to define a list of possible discrete constant values. An enum is basically a list of named constants, normally with no value. Create using `enum` and declare values in the body:

```java
public enum FlightCrewJob {
  Pilot,
  Copilot,
}

public class CrewMember {
  // Can only have one of the 2 values above
  private FlightCrewJob job = FlightCrewJob.Pilot;
}
```





## Exceptions and Error Handling

Try...catch...finally:

```java
try {
  System.out.println(0 / 0);
} catch(Exception e) {
  System.out.println(e.getMessage());
}
```

Exception objects have the base class `Throwable`:

- Object
  - Throwable
    - Error (these are internal JVM exceptions, generally not caught)
    - Exception (these are run time errors)
      - RuntimeException (such as `NullPointerException`) - all **unchecked exceptions**
      - IOException, (such as `FileNotFoundException`) etc. - all **checked exceptions**

A **Checked Exception** must be caught, otherwise compiler won't compile.
An **Unchecked Exception** may be ignored, but will crash application at runtime.



**Throwing Exceptions**
A `throws` clause is used in a method definition to tell the caller what exceptions need to be caught. It lists all the possible errors that a method can throw. This is *REQUIRED* for a method that can throw something (e.g. builtin methods from BufferedReader throw `IOExceptions`, so anything using it must add `throws IOException` if it doesn't catch them itself).

For an overridden method, the `throws` clause must be compatible with the parent class' throws clause, to ensure users that are using a parent-casted version of the child class don't break:

1. it throws the same exceptions
2. it throws no exceptions
3. it throws a more specific exception than the parent class

A **custom exception** inherits from the `Exception` class:

```java
public class MyException extends Exception {
  public MyException(String reason, String statement, Throwable cause) {
    super(reason + " - " + statement, cause);
  }
  
  public MyException(String reason, String statement) {
		super(reason + " - " + statement);
  }
}
```



To throw an exception, use the `throw` keyword.




To read a file from a stream, use a **BufferedReader** object:

```java
BufferedReader reader = new BufferedReader(new FileReader("/Path/t.txt"));
String line;
while ((line = reader.readLine()) != null) {
  System.out.println(line);
}
reader.close();
```



## Packages

A **package** is a group of related files. Each file lists what package it is a part of using the `package` keyword. Benefits:

- Name Spacing
- Access control (the concept of package private)
- Distribution and building a package

Package name becomes a part of the class name. Thus, to keep the uniqueness globally, reverse domain names used. Names coming from the following sources don't need the full package name before them:

1. Any types in the **current package** 
2. Any **core Java methods** in `java.lang` package (`String`, `StringBuilder`, `Object`, etc.)
3. Any **explicitly imported** things

Import doesn't *actually* import anything. It is just a mapping for the compiler so it knows where to access a type from. To import a classes, use this syntax. Import a single class, or use `.*` to specify *any* class from package:

```java
import com.pluralsight.travel.Flight;
import com.anotherpackage.sub.*;
```

If there are multiple packages that reference the same files, the `import *` syntax will fail to compile.

**Distribution**
Building a package leads to a predictable structure based on the package name, which gets compressed into a JAR file (this is a compressed version of the elaborate folder structure).
To build a **JAR file**, use the Artifacts section in IntelliJ.



## Interfaces

An **interface** is a type that defines a **contract**. An interface doesn't provide any implementation (unlike an abstract class that could give concrete methods), and provides methods and fields (unlike an enum that just has properties), and a class can have multiple interfaces (Java doesn't have multiple inheritance).

Examples of interfaces:

1. **Comparable<T>**
   used for sorting by `Array.sort`. A method this interface has is `compareTo`, which returns a negative value, positive, or zero, depending on sort order.
2. **Iterable<T>**
   used for supporting `foreach` loops.

Some interfaces require type information (e.g. comparable's implementation). This can be provided via the **Generics** angled bracket notation.

```java
public class Passenger implements Comparable<Flight> {
  public int compareTo(Flight o) {
		// do the work
  }
}
```

To declare a custom interface, use the `interface` keyword. Methods in interfaces only require name, parameters, and return type. Fields in interfaces are effectively constants, and are always `public static final`. An interface can also extend another interface.

