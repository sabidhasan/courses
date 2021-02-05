# C# Fundamentals



## Introducing C# and .NET

The C# code runs on top of a `.NET` framework. There are two different types of .NET frameworks:

1. .NET Framework - exists since 2001 for Windows only
2. .NET Core - newer, and runs on Mac/Windows/Linux

The .NET framework is broken down into two pieces:

1. CLR - common language **runtime**, which manages memory, makes processor calls, garbage collects, etc.
2. FCL - **framework class library** or base class library - this provides common library functions (network requests, opening file, etc.)



The `dotnet` runtime CLI is used for building programs, running unit tests and other things. It can scaffold projects. Some basic commands:

```
dotnet new <app-type>
dotnet run				// does a restore then builds, then runs the project

dotnet restore			// restore external dependencies into `obj` (similar to node_modules)
dotnet build			// compile project into bin folder as a dll, or multiple projects
						// with solution file

dotnet add package <name>		// add a package from NuGet
dotnet add reference <path>		// add local package reference

dotnet new sln
dotnet sln add <path>			// add a project to solution file
dotnet build					// build f
```



**NuGet** is essentially a package manager - like npm but for C#. When running `dotnet run`, the following happens:

- `dotnet restore`  is run to fetch dependencies
- `dotnet build` is run to compile

The output of `dotnet build` is a dll file containing the binary of the application. It doesn't have the .NET runtime in this file, so can't run standalone. To run an individual file, you can run `dotnet <dll-file>` directly.

The **csproj** file contains references to packages installed - it is like the package.json file.



A dotnet application is grouped into a **project**, that contains related code. Each C# file contains **namespaces** in which there are **classes**. Namespaces reduce the chances of collision. The main program class is a `static void Main` method. To write to console, use methods from the Console class, which can be imported by `using System`. That means anything in System can be used without prefixing it with `System.`.

```c#
using System;

class Program {
	static void Main(string[] args) {
        Console.WriteLine("String");
    }
}

```



## C# Syntax

For debugging and running in VSCode, you can use the `.vscode/launch.json` to modify CLI parameters passed into the app while it is being run.



**Declaring Variables** - use `var` keyword to let the compiler infer the type of a variable. Alternatively provide a type for the compiler directly.



**Strings** can be concatenated with `+` or use a template literal `$"Hello {location}"`.

**Numbers** - some types are `int`, `double`, and `float`. 
To format numbers in string interpolation, use formatters: `$"This is {number:N3}"` to format to 3 decimal places.

To instantiate an empty **array**: `double[] myArr = new double[10];` If you know the array members, you can use the array initialization syntax with the literal members:

```c#
double[] numbers = new double[3] { 1.2, 44, 54.4 };
// the compiler can infer type and length:
var numbers = new [] { 1.2, 44, 54.4 };
```

To iterate, the `foreach` **foreach...in** loop can be used (alternatively, use the `var` keyword to let compiler infer the type):

```c#
foreach (int number in numbers) {
	// ... do something
}
```



**Console** can be written to by `using System` and using the Console (`cw` is the VSCode snippet for `Console.WriteLine`)



The **Generic** namespace in .NET provides collections such as Stack, Queue, List, etc. These things all have one thing in common - they require a **type argument**. To create a list:

```c#
List<int> myList = new List<int>();
// or
var myList = new List<int>();
```

We can also initialize a list:

```c#
var myList = new List<int>() { 1, 2, 4 };
```



## Classes and Objects

### Basics

Everything needs to be in a class, which defines a **type** for future variables.

If you are defining classes outside of a **namespace**, this is very dangerous though doable - could clash with an existing class definition. Namespace names can have periods as well.

Generally, convention is to define **one class per file**

**Fields** are defined bare in the class, outside of methods. These cannot use `var` for their definition.

The `NullReferenceException` is the null pointer exception in C#. This occurs when you are calling a method tp index (like for an array) on an **uninitialized object**, which is `null` by default. `Null` is a keyword that represents the lack of an object, and any type can be `null`.

To define a **constructor**, define a method with the same name as the class, with no return type.

The **this** `this` keyword refers to current object. Generally `this` is not required to be supplied.

There are a few different **access modifiers**:

- `public` - code outside the class can have access to the method/field. Public fields start with **uppercase**
- `private` - the default access modifier - implies that only the class can access the method/field. Private fields start with **lowercase**

The **static** keyword makes something a static, non-instance member of the class.



### Intermediate

**Method Overloading** is similar to Java, and can be done if the **method signature** is different (name + parameter types + number of parameters). The return type is not a part of the method signature.

Unlike fields which are either fully public or private, **properties** are fields with getters/setters defined. The implicit keyword **value** holds the value of the incoming value:

```C#
public string Name
{
    get { return name; }
    set { name = value; }
}
```

An **auto-property** can be used for the code above, meaning the compiler will generate the getter and setter. This has the power to make one of getter/setter private:

```C#
public string Name { get; private set; }
```



There are two ways for making something unchangeable:

- **Readonly** with the `readonly` keyword prevents a variable/property from being written to other than at definition OR in a constructor
- **Const** can be used with the `const` keyword to mark a variable as unchangeable except at definition. A constant field in a class is automatically made Static - meaning it can only be accessed from the class, not instances.



### Advanced

A class can **inherit** from **one other class** with a `:` character and specifying parent. Every class has a base class of `System.Object`, which provides some basic methods. The `System.Object` is identical to `object` (with a lowercase)

The way to call a parent's constructor:

```c#
public class SomeClass : BaseClass
{
    public SomeClass(string param) : base(param)
    { /* ... other code */ }
}
```



An **abstract class** is like a regular class, but cannot be instantiated (use `abstract` keyword).

An abstract class can contain **abstract** methods marked with the `abstract` keyword, containing no implementation. To override an abstract method, the `override` keyword must be used, otherwise the compiler will complain about method hiding. An abstract method MUST be overridden.

Also, there are **virtual** methods, which contain an implementation, but that implementation can be optionally overridden with the `override` keyword.



An  **interface** contains no implementation details - cannot have methods, nor does it have access levels (public/private/protected). Typically, the naming convention for these is `I<Name>`. Basically, an interface provides the method signatures and field getters/setters. An unlimited number of interfaces can be implemented:

```C#
public interface ITest {
    string Name;					// a field
    string Method(int number);		// method
    string Field { get; }			// a property
}

public class MyClass : BaseClass, ITest, ITest2 { ... } // can extend one base class, and many interfaces 
```





## Unit Tests

**xUnit** is a unit test assertion library - you still need a test runner of some sort to run tests

Convention in C# is to write unit tests in a **separate project** to the source code. Directory structure:

```
parent-dir
	--- src (initiate new C# project in here)
		--- ProjectName
	--- test (initiate new C# project in here)
		--- ProjectName
```



To tell xUnit what tests should be run, they should be decorated with the `[Fact]` **attribute**. Attributes are like decorators. You can run test suite in a few ways

1. Use the dotnet CLI `dotnet test` in the test directory
2. Use VSCode .NET Test Explorer add in
3. Use Visual Studio, which has a built in test runner 

To reference another package from a package (for example, to import the main program classes into the test class), use `dotnet add`. This takes the path to the package (or it can also be used to add stuff from nUnit).



A **Solution File** concatenates multiple projects in one place - for building or testing multiple projects from one place.

- Create a solution file using `dotnet new sln`
- Add individual projects using `dotnet sln add`



## Values and References

Any **class** (custom named classes, .NET classes, etc.) are all **reference type**s and **mutable**. You can test for two such classes being the same by the `Object.ReferenceEquals`.

All **structs** are examples of **value types** and all **immutable**. Value types are implemented as **structs** - these are like simple classes without a lot of the overhead. A lot of structs are aliased:

- bool vs Boolean
- int vs Int32

To check if something is passed by reference (class) or value (struct), check its definition - see if it is a struct or class The outlier to this is the **String** type - strings are reference types because they are implemented as classes, but behave as value types in certain cases - they all return a copy of the string and are immutable.

C# methods are *ALWAYS* passed **by value**, not by reference. If a method modifies the passed variable, it will make changes to the local variable within the method, only. A function can request something by reference... Then, if you set `book` to something else in the function, you literally are working with the caller's variable directly. The caller has to call the function with `ref` also:

```c#
public void MyFunc(ref Book book) {}
```

There is also a **out** keyword, which is the same as reference, with the difference that it assumes the incoming variable is `null` and forces you to initialize the variable in the method.



## Flow of Execution

Standard **Boolean operators** - `&&` and `||`, where the or operator is lazily evaluated/short circuited. C# has no concept of truthy/falsy values - only `true` and `false` are Booleans. When comparing for equality, **be careful when dealing with floating point** operators.

**Loops** come in a few variants, and C# supports jumping statements - `break` and `continue`:

- `do { ... } while(condition);`
- `while (condition) { ... };`
- `foreach(var something in Enumerable) { ... }`
- `for (condition) { ... }`



**Switch statements** are similar to other C-style languages. Since C# v7.0, the switch statement can also support pattern matching:

```C#
switch (SomeValue)
{
    case var d when d > 10:
        // Do something
    default:
        // Do something
}
```



**Exceptions** are `throw`n and `catch` as expected, along with `finally`. Some points:

- All exceptions inherit from the `Exceptions` class
- Useful tool for exceptions is `nameof`, which is a method that gets the name of a variable/class/etc (rather than hard coding the name and it getting stale)
- Multiple exceptions can be caught by chaining `catch` statements
- Like Java, we should not catch the base `Exception` class, instead catch things we expect
- C# does not have a `throws` keyword for method signatures



## Building **Types - Events**

Events are not used often in modern frameworks, but they were historically used extensively (e.g. Xamarin, WPF, ASP.net Forms). Events are built on top of **delegates**.

A **delegate** is a type, and much like a function signature in Typescript - it defines the signature for a method. The name of the delegate, or its parameter names don't matter for the implementing code. Delegates can be defined outside of classes in a namespace. Also, delegates  can be **multi-cast** - a delegate-type variable can be added to (`log += AnotherImplementation`), and all methods that have been added will run when the delegate is called:

```c#
public delegate string GradeAddedDelegate(double grade);

public class MyClass {
    public static void Main(string[] args)
    {
        // Point delegate to a concrete implementation
        GradeAddedDelegate log = ConcreteImplemetation;
        log += ConcreteImplemetation;
        // Will call ALL the methods added to delegate in succession
        Console.WriteLine(log(66.9));
    }

    public string ConcreteImplementation(double input) { return input.ToString(); }
}
```



The purpose of delegates is that when an event occurs in the app, delegates can notify all attached listeners. Conventionally, delegate signatures are: `public delegate void GradeAddedDelegate(object sender, EventArgs args)`. Here is how to create and listen to delegates:

1. In event sending class: Define delegate signature: `public delegate void GradeAddedDelegate(object sender, EventArgs args);`
2. In event sending class: Create a public field for allowing others to attach to delegates: `public event GradeAddedDelegate GradeAdded;` 
3. In event sending class: Call the public delegate field (`this.GradeAdded(this, new EventArgs())`, when the target event as needed (eg a grade is added).
4. In caller class: define a method `OnGradeAdded` with the correct signature.
5. In caller class: Create an instance of the target class, and subscribe to the delegate list (`targetClass.GradeAdded += OnGradeAdded`).

When implementing an event delegate, use the `event` keyword for the field in the class. This keyword restricts assignment to the event from outside the class where it was defined:

```C#
public event GradeAddedDelegate GradeAdded;

public void MyMethod()
{
    GradeAdded(this, new EventArgs());
}
```



C# 8 is better at checking for potential null pointer exceptions. You can make reference types into non-nullable types, and the compiler will warn you when a field that is non nullable is not initialized. This is optional and can be enabled with `# nullable enable` or in the csproj file. The `?` can be used to mark a reference type as nullable when working in this "strict mode". 