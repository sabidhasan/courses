## Introduction to Collections and Arrays

A collection groups data together - e.g. arrays, lists and dictionaries. Collections consist of **elements** or **items**. Collections can be **enumerated** or **iterated**.

In C# **Arrays** have a **fixed number** of items in a definite, zero-indexed order - like Python tuples. Iterating an can be done with a **foreach** loop or a **for** loop and can be indexed/modified using an integer.

Accessing an element out of index throws an `IndexOutOfRangeException`. Get the length of an array using `.Length`.

Arrays are normal reference types - they can be **nullable**. To create an array, we can do one of two things, both of which require a size when creating the array. New arrays are full of their type's default values when initialized - `null` for reference types and 0 for int for example.

1. **Collection Initializer** - for example `string[] myArr = { "A", "B" };`
2. **New keyword**: `string[] myArr = new[10];`

Here are the collection initializer possibilities:

```c#
int[] myArr = new int[] { 1, 2, 3 };
int[] myArr2 = new[] { 1, 2, 3 };
int[] myArr3 = { 1, 2, 3 };

var myArr4 = new int[] { 1, 2, 3 };
var myArr5 = new[] { 1, 3, 4 };
```



The `params` keyword is syntactic sugar for variable number of **parameters**. It allows passing parameters individually when calling a method:

```C#
public void Add(params int[] nums) { /* ... */ }
Add(1, 2, 34);
```



To **read a file**, you can use the `File` class or the `StreamReader` class.



## List

Lists implement a generic container of dynamic size. Create a list using the constructor syntax, optionally with some values at instantiation:

```c#
List<string> myList = new List<string>();

List<int> myList2 = new List<int> { 1, 2, 3 };
```

The reason arrays have a different syntax than the list does is because lists are a standard .NET class but arrays are more lower level built into C#.

Get the length of a list by using `.Count`

To insert an item in the middle use `.Insert`

To find an item's index in a list, use `.FindIndex`. This takes a **predicate.** A predicte is a delegate that returns a boolean type, and takes in an object type. Predicates can be defined using a **lambda expression**:

```c#
int cityIndex = cities.FindIndex(x => x.Population < 200);
```











