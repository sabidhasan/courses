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
dotnet build			// compile the project into bin folder as a dll

dotnet add package <name>		// add a package from NuGet
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

Everything needs to be in a class, which defines a **type** for future variables.

If you are defining classes outside of a **namespace**, this is very dangerous though doable - could clash with an existing class definition. Namespace names can have periods as well.

Generally, convention is to define **one class per file**

**Fields/properties** are defined bare in the class, outside of methods. These cannot use `var` for their definition.

The `NullReferenceException` is the null pointer exception in C#. This occurs when you are calling a method ot index (like for an array) on an **uninitialized object**, which is `null` by default. `Null` is a keyword that represents the lack of an object, and any type can be `null`.

To define a **constructor**, define a method with the same name as the class, with no return type.

The **this** `this` keyword refers to current object. Generally `this` is not required to be supplied.

There are a few different **access modifiers**:

- `public` - code outside the class can have access to the method/field
- `private` - the default access modifier - implies that only the class can access the method/field

The **static** keyword makes something a static, non-instance member of the class.



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



To tell xUnit what tests should be run, they should be decorated with the `[Fact]` **attribute**. Attributes are like decorators.

You can run test suite in a few ways

1. Use the dotnet CLI `dotnet test` in the test directory
2. Use VSCode .NET Test Explorer add in
3. Use Visual Studio, which has a built in test runner 

To reference another package from a package (for example, to import the main program classes into the test class), use `dotnet add`. This takes the path to the package (or it can also be used to add stuff from nUnit).

