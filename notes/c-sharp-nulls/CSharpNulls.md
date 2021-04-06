# Nullable Value Types

## Value vs. Reference Types

| Value Types                                | Reference Types                         |
| ------------------------------------------ | --------------------------------------- |
| Createed using `Struct`                    | Created using `Class`                   |
| Independent Instances                      | Each variable refers to shared instance |
| Changing value doesn't affect other copies | Changes affect all references           |
| The value **is** the information           | Points to reference                     |
| **Cannot be null**                         | **Is nullable**                         |
| No null checks needed                      | Need null checks                        |

- Remember C# passes parameters to function by value (which means a copy is passed; this does not relate to reference/value types).

- Strings are classes (reference types), whereas `int` and `DateTime` are not nullable as they are structs

  

## Making Value Types Nullable

Though value types are not nullable, they may NEED to be made nullable (e.g. a boolean that isn't defined). For this we have **Nullable< T >** type.

One way to make value types nullable, we can use magic numbers (not recommended approach), and add guards around code that uses those fields to check for the magic number.

To represent **nullable value types**, use the `System.Nullable<T>` struct - this basically has all values `T` has in addition to `null`. A shorthand for `Nullable<T>` is the `?`: `int?` or `DateTime?` is the same as `Nullable<int>` or `Nullable<DateTime>`. By default, `Nullable` enclosed types are set to `null`, so they don't need to be initialized to `null`

**Strings** are reference types (meaning they are nullable) and they can be empty also. The `String.IsNullOrEmpty` and `IsNullOrWhiteSpace` static methods help with checking nulls or white spaces.





