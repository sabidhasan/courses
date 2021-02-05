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

To insert in the middle use `.Insert` and to remove use `.RemoveAt` with the given index. Lists are implemented as **dynamically resizable** arrays, so insertion means subsequent elements have to move.

To find an item's index in a list, use `.FindIndex`. This takes a **predicate.** A predicte is a delegate that returns a boolean type, and takes in an object type. Predicates can be defined using a **lambda expression**:

```c#
int cityIndex = cities.FindIndex(x => x.Population < 200);
```



## Dictionary

**Dictionaries** are C# equivalent of a hash map - they are unordered key-value pairs. Dictionaries are also generic types - the generic type is `Dictionary<TKey, TValue>`.

To add to the dictionary, use the `.Add` method, and to find an item use the square bracket with the key. Alternatively, we can init with values at instantiation time:

```C#
var d = new Dictionary<string, int>() { {"1", 2}, {"3", 4} };
```

Adding the same key twice, the dict will throw an `ArgumentException`. Looking up an item that doesn't exist throws a `KeyNotFoundException`. To avoid this, use this pattern:

```C#
bool exists = myDict.TryGetValue("55", out int val);
```



When enumerating a dictionary using a `foreach` loop, the items come back as a `KeyValuePair` instances. Alternatively, the dictionary provides `.Keys` or `.Values` fields.

Other methods: `Remove()`, `[]` for replacing items, `ContainsKey`, 



## Manipulating List Data

The **foreach** loop is generally for **reading data only**. It doesn't give back the index, and doesn't allow modifying the underlying collection.



## LINQ - Language Integrated Query

LINQ allows querying some data source (`IEnumerable<T>`) that supplies objects, in a database query-style syntax. Further, LINQ is a functional programming style approach, as it is read only and cannot modify collections. Generally, LINQ queries are used with a `foreach` loop.

To use LINQ, first import it`using System.Linq`. Some sample LINQ methods:

`<Collection>.Take(int count)` - selects a number of items from collection
`<Collection>.OrderBy(Predicate fn)` - order a collection by a prop
`<Collection>.Where(Predicate fn)` - filter a collection
`<Collection>.Select(Predicate fn)` - map method
`<Collection>.Aggregate(Predicate fn)` - reduce method 

LINQ queries can be chained - we can order them, then select a few. 

Alternatively, LINQ queries offer a completely different SQL-like syntax for selecting data, as well:

```c#
from country in countries
where !country.Name == "S"
select country;
```



