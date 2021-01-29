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



A dotnet application is grouped into a **project**, that contains related code. Each C# file contains **namespaces** in which there are **classes**

```c#
using System;

class Program {
	static void Main(string[] args) {
        Console.WriteLine("String");
    }
}

```

