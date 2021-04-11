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



## Accessing Nullable Values

`Nullable<T>` provides various methods:

- `.HasValue`	(whether underlying value is null; equivalent to `nullableValue != null`)
- `.Value` (gets underlying value - throws at runtime if value hasn't been set)
- `.GetValueOrDefault()` (get underlying value or default value)
- `.GetValueOrDefault(value)` (get underlying value or provided default value)

A nullable variable can be created from a non-nullable by implicit casting, but the reverse throws a compilation error. In that case, we can cast manually:

```C#
int i = 42;
int? j = i;		// this is OK as no data lost

int? a = 42;
int b = a;		// compilation error
int c = (int)a;
```



C# provides several null checking operators:

- `?` **conditional operator** (similar to JavaScript ternary operator)

  ```C#
  int i = nullableValue.HasValue ? nullableValue.Value : -1;
  ```

- `??` **null coalescing operator** (similar to JavaScript `||` shortcut operator)

  ```C#
  int i = nullableValue ?? -1;
  ```

- `?.` or `?` **null conditional operator** (optional chaining operator)
  This evaluates to null if the playerCharacter is `null`.

  ```C#
  int? days = playerCharacter?.DaysSinceLastLogin;
  // or
  int days2 = playerCharacter?.DaysSinceLastLogin ?? -1;
  ```

  For arrays, we can use the `?` operator to guard against the entire array being `null`. If array is defined but given index is out of bounds, you will still get an error.

  ```C#
  PlayerCharacter[] pca = null;
  string p1 = pca?[1]?.Name;
  ```

  

