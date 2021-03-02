# Introduction

Goals of **LINQ** (**Language Integrated Query**) was to harmonize how data is queried. Previously, there was a different API for in-memory, databases and XML files.

Random notes:

- `Array.Sort` can sort an array, but for custom arbitrary objects, it requires a class that implements the `IComparer`  interface for comparing the objects.
- `System.IO` is the namespace containing file system related things
- String interpolation can be given left or right padding: `$"Some {someString, -20}"`

LINQ has two syntaxes - the query syntax and the object-style syntax, but both functionally do the same thing.



# LINQ and C# Features

C# has a few features that enable LINQ's existence:

- The `IEnumerable` interface
- Lambda Expressions
- Extension methods



## Generic Interfaces

C# supports generic interfaces that making working with collections easier; for example, the `IEnumerable<T>` interface. For implementing an **enumerable** in C# (the `IEnumerable` interface), a `GetEnumerator` method must be defined which has a `MoveNext` method and `.Current` field.

LINQ works against the `IEnumerable` interface.

**To use LINQ**: `using System.LINQ;`



## Extension Methods

**Extension Methods** define a method that extends a type <u>without</u> subclassing.
It **must** be a static method in a static class, but the extended method acts like an instance method.

```c#
public static class StringExtension
{
	public static double ToDouble(this string source)
	{
		return double.Parse(source);
	}
}

string mystring = "3.3";
double parsed = mystring.ToDouble();
```

You can create an extension method on any class: the `System.Object` class, sealed classes, etc. but you can't hide an already existent instance method a class has.

To use an extension method, you must activate the namespace (either be in the same namespace as the extension method or import it with `using`).



## Lambda Functions

LINQ operators can take both lambda methods and named methods. 

Lambda expressions are a cleaner syntax for creating a **delegate**. The type for delegates and lambda expressions is **Func** and that type represents function types.

The `Func` type thus describes the generic return type and parameter types of a method:

```C#
Func<int, string> Stringify = (inp) => inp.ToString();
```

 

A related type is **Action**, and `Action` is exactly the same as `Func`, except that its return type is `void`, so it doesn't need to be explicitly written. It is also a type for lambda functions or named functions.



## LINQ Syntax

LINQ has two syntaxes: **method syntax** and **query (SQL-like) syntax**. Generally, method syntax is more powerful.

```C#
var query = developers.Where(d => d.Name.Length == 5)
    				  .OrderByDescending(d => d.Name);
```



```C#
var query2 = from dev in developers
    		 where dev.Name.Length == 5
        	 orderby dev.Name descending
    		 select developer;
```



# LINQ Queries

## Immediate

The most basic LINQ queries are **immediate**. They query the underlying data source right away and exhaust it until it is done before returning data. LINQ has `ToArray`, `ToList`, or `ToDictionary` or even `Count`  as such methods.



## Non Streaming Deferred Execution

LINQ performs some of its queries in a **deferred execution** (like `.Where`). Instead of performing the operation and returning a compiled list, it instead returns an enumerator that can be polled on demand.

This is done by `yield return`ing from the code, and this gets consumed on demand. Until data is accessed, the actual query is not performed.

```C#
var enumerator = query.GetEnumerator();

while (enumerator.MoveNext())
{
  Console.WriteLine(enumerator.Current);
}
```



Deferred execution is not always good - for example, if you want a count and then iterate over the query items, the `.Count()` will iterate over the list once (to give a count as it is **immediate**) and then the loop will iterate yet again. In these cases, you want to create a concrete List/Array first (`ToList`).

Also, if there is an `Exception` in the lambda function, the code can fail later on for deferred queries because the lambda function callback is only executed later (on demand).



## Streaming Deferred Execution

Something that is run as deferred execution can be either **streaming** or **non streaming**. Streaming means it pulls data as needed (for example, the `Where` or `Take` pull data one at a time).

A example of a **non-streaming operator** is `OrderBy`, which will examine ALL the data before coming up with something. Unlike **immediate execution**, underlying data still *isn't accessed* until it is demanded (`ToList` or `foreach`, etc) but once demanded, it must look at all elements in the data source to perform the operation.

Streaming deferred execution can create infinite sources (like Fibonacci sequence):

```C#
public static IEnumerable<double> Random()
{
  var randomGenerator = new Random();
  while (true)
  {
    yield return randomGenerator.NextDouble();
  }
}

public static void Main()
{
  // Doesn't cause infinite list, as Where and Take are streaming deferred
  var randNums = Random().Where(n => n > 0.4).Take(15).ToList();
}
```



# Filter, Sort and Project

`.Skip` operator skips a certain number of rows, and `.Take` queries. In LINQ, the ordering of the query matters.



A **primary sort** is done using `OrderBy` and `OrderByDescending`. For performing a **secondary sort**, use `ThenBy` or `ThenByDescending`, which will apply for rows tied by primary sort.



The `.First` and `.Last` operators take the first or last item, but they is *not deferred*!



LINQ also has `Any`, `All` and `Contains` operators for getting Boolean values for a datasets.
To check if anything exists, you can call `.Any()` which will return `true` if anything exists



Anonymous types allow defining what is equivalent to object literal syntax in JavaScript. It has strong typing but no need to define a class.  If the anon object's keys will have same name as source, shorthand can be used

```C#
new { Name = "Test", Count = 5 }; // anon object

new { car.Name, car.Count }; // Shorthand (Name and Count keys created in anon obj)
```



**Select Operators**
The `Select` operator is like `map` in JavaScript.

The `SelectMany` operator produces a flattened collection where you have a **sequence of sequences** (for example, if the data source is a list of list, you can iterate over the nested one directly).



# Joining, Grouping and Aggregation

## Basic Joins

Two separate data sources can be joined by using the join keyword, which behaves as an inner join in SQL (so if a join lookup doesn't exist, it will get dropped):

```C#
var query = from car in cars
    join man in carmakers on man.Name equals car.Maker 
    where car.Year > 2010
    orderby car.Year
    select new { car.Year, man.Headquarters }
```



In the extension method syntax, this is a little more complicated, because the join method must give a callback that stitches the objects.

```C#
var query = cars
    .Join(
    	man,
    	c => c.Maker,
    	m => m.Name,
    	(c, m) => new { c.Year, m.Headquarters }
	)
    .Where(c => c.Year > 2010)
    .OrderBy(c => c.Year);
```



## Composite Joins

To join on multiple columns, we can pass an anonymous type into the join method:

```C#
var query = cars.Join(
    manufacturer,
	c => new { Year = c.Year, Name = c.Manufacturer },
    m => new { Year = m.Year, Name = m.Name },
    (c, m) => new { Name = c.Name, Man = m.Name }
	);
```



## Grouping

A grouping is done by using the `group ... by` syntax in the *query syntax*:

```C#
var query = from car in cars
    	    group car by car.Manufacturer into g
    		orderby g.Manufacturer;
```

This produces essentially a **hash map** or **dictionary** with keys being the grouping, and values being `IEnumerable<T>`. In the *extension method syntax*. They key can be accessed by the `.Key` prop when using the group:

```C#
var q = cars
    	.GroupBy(c => c.Manufacturer)
    	.OrderBy(g => g.Key);
```



The **group join** operator can group and join at once.



## Aggregation

SQL-like aggregation functions: **max**, **min** and **average** are available.

For custom aggregations (and prevent looping over collections numerous times), there is an **aggregate** method that behaves similar to JavaScript's `reduce` method:

```C#
var q = cars.GroupBy(c => c.Manufacturer)
    		.Select(g => {
                // Define a custom class CarStats that has Accumulate and Compute methods
                var res = g.Aggregate(
                    new CarStats(),
                    (acc, val) => acc.Accumulate(val),
                    acc => acc.Compute()
                );
                return new { Car = c, Max = res.Max };
            });
```



