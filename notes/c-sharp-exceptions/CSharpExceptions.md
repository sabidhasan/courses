# Error Handling - Introduction

Excepts have an **exceptions hierarchy**, and when thrown have a **stack trace**. Exceptions can be **thrown**, **caught** and **rethrown**. Custom exceptions can be created as needed.

An **Exception** is an object that inherits from **System.Exception**. The `throw` statement can generate an exception. Exceptions can be custom or taken from .NET or a third party library.



# Exception Class Heirarchy

An Exception represents any unexpected behavior or error condition encountered by running program. **System.Exception** is the base exception class from which all exceptions inherit:

![image-20210411153356116](./CSharpExceptions.assets/image-20210411153356116.png)

- **SystemException** is the child class of System.Exception, and has all the core built in exceptions: `StackOverflowException`, `ArgumentException`, `OutOfMemoryException`
- **ArithmeticException** also inherits from System.Exception and has all math-related exceptions - `DivideByZeroException` or `OverflowException`
- Custom exceptions also inherit from `System.Exception`.
- **ApplicationException** contains other exceptions



## System.Exception - the base class

Some properties available to `System.Exception`:

- `Message` - `string` describing reason for the exception for a developer. Should be user-friendly/
- `StackTrace` - `string` describing information about call stack
- `Data` - `IDictionary` with string keys and object values for additional information. Should not contain sensitive data
- `InnerException`- `System.Exception` captures preceding exception (for multiple **exception wrapping**)
- `Source` - `string` represents app/object that caused the error
- `HelpLink` - `string` link to URL for help file
- `TargetSite` - `System.Reflection.MethodBase` gives information about method that threw the error



To throw a generic exception there are three constructors:

```C#
throw new System.Exception();								// default message, no innerException
throw new System.Exception(string message); // message provided, no innerException
throw new System.Exception(string message, Exception innerException); // message and inner exception
```





## Exceptions to Throw

- `InvalidOperationException` 
- `ArgumentException` - generic exception for throwing when method argument is invalid
- `ArgumentNullException` - thrown when null passed to a non-null accepting method
- `ArgumentOutOfRangeException` - e.g. passing 0 for a divisor



## Exceptions Not to Throw

Do not throw these, as they are for runtime system use:

- `NullReferenceException` - thrown when deferencing null object
- `IndexOutOfRangeException` - when accessing an item in array that doesn't exist
- `StackOverflowException` - for infinite recursion
- `OutOfMemoryException` - when
- `ApplicationException` - also, custom exceptions should not derive from the `ApplicationException` base class. This class was originally intended for only the CLR, but has been used all over the place apparently.

