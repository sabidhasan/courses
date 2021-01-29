# C# Fundamentals



## Introducing C# and .NET

The C# code runs on top of a `.NET` framework. There are two different types of .NET frameworks:

1. .NET Framework - exists since 2001 for Windows only
2. .NET Core - newer, and runs on Mac/Windows/Linux

The .NET framework is broken down into two pieces:

1. CLR - common language **runtime**, which manages memory, makes processor calls, garbage collects, etc.
2. FCL - framework class library or base class library - this provides common library functions (network requests, opening file, etc.)



The `dotnet` runtime CLI is used for building programs, running unit tests and other things. It can scaffold projects. Some basic commands:

```
dotnet new <app-type>
dotnet run				// does a restore then builds, then runs the project

dotnet restore			// restore external dependencies into `obj` (similar to node_modules)
dotnet build			// compile the project into bin folder as a dll
```



**NuGet** is essentially a package manager - like npm but for C#. When running `dotnet run`, the following happens:

- `dotnet restore`  is run to fetch dependencies
- `dotnet build` is run to compile

The output of `dotnet build` is a dll file containing the binary of the application. It doesn't have the .NET runtime in this file, so can't run standalone. To run an individual file, you can run `dotnet <dll-file>` directly.



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

For debugging and running in VSCode, you can use the `.vscode/lanuch.json` to modify 



**Declaring Variables** - use `var` keyword to let the compiler infer the type of a variable. Alternatively provide a type for the compiler directly.



**Strings** can be concatenated with `+` or use a template literal `$"Hello {location}"`.

**Numbers** - some types are `int`, `double`, and `float`

To instantiate an empty **array**: `double[] myArr = new double[10];` If you know the array members, you can use the array initialization syntax with the literal members:

```c#
double[] numbers = new double[3] { 1.2, 44, 54.4 };
// the compiler can infer type and length:
var numbers = new [] { 1.2, 44, 54.4 };
```

To iterate, the `foreach` **foreach...in** loop can be used (alternatively, use the `var` keyword to let compiler infer the type):

```c#
foreach(int number in numbers) {
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



