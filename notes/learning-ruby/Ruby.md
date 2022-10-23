# **Ruby (SoloLearn)**

## Basic Concepts

- Everything is an object

- `puts` and `print` write to stdout. `print` will not end with new line

- For comments, use:

  -  `#` for single line comments
  - `=begin` and `=end` for multiline comments

- Variables can consist of alphanumeric and underscore, but cannot begin with Capital or number.
  Variables starting with caps are **constants**

- **String interpolation** is with hash/curlies: `puts "He is #{name}"`.

- **Arithmetic operators** behave as normal, but division with integers returns integers. To get a float, cast one operand to a float. Operators work in BEDMAS precedence order. The following are supported:

  - `/`, `+`, `-`, `%`, `**`, `*`

- Ruby supports **parallel assignment** and the self assignment operators:

  ```ruby
  a, b, c = 1, 2, 3
  a += 55
  ```

- **Strings** are double or single quoted, but single quote only allow escaping `'` and `\`. To have \n, \t etc., use a double quote string. **Concatenation** works with `+` and we can use `*` to repeat strings.

- To **read user input**, use the `gets` method (or `gets.chomp` which chomps the new line). To get integer input, use `gets.to_i`, which will return `0` if user enters something non sensical.



## Control Structures

**Equality**

- In Ruby `false` and `nil` are falsy; everything else is truthy.
- **Equality** is implemented with `==` and `!=`. However, there is also `.eql?` which checks for type and value equality 
  Thus, 3 == 3.0` is true but `3.eql?(3.0)` is not.

**Control Statements**

- Control statements work as expected - `if...elsif...else...end`

- **Unless** is the same as `if not`

- If and unless can be put **inline**: `do_something() if x == 5`

- Three **logical operators** exist: `&&, `||` and not `!. The `and`, `or` and `not` keywords are also available but have lower precedence.

- Ruby supports **case** statements:

  ```ruby
  case a
    when 1, 2
    	#some code
    when 3
    	#some code
  else
    # some code
  end
  ```

**Loops**

- Ruby supports **while** and **until** loops: `while {cond}...end` as well as `until {cond}...end` loops. There is also the infinite do loop: `loop do...end` (must use `break` to exit out)

- **Ranges** are created using `..` and `...` operators. Both create a range, but the `...` excludes the top number from the returned range. Ranges can be used in `case` statements and for loops

- Ruby also has **for loops**: `for i in (1..10) ... end`.

- Loops support several keywords:

  - To exit the loop use **break**
  - To continue to next iteration use **continue**
  - To restart the loop use **retry**
  - To repeat the current iteration of the loop again use **redo**

  

## Collections

**Arrays**

- Arrays are indexed using integers like Python or ranges, and can be **negative indexed** as well. Returns `nil` if accessing something at non-existent index.

- To add to arrays, use the **shovel operator** (or the **push** and **insert** methods):

  ```ruby
  arr = ["1", 2, false]
  arr << :some_symbol
  ```

- To delete from arrays, use the **pop** and **delete_at** methods.

> For printing arrays to STDOUT, use `print` not `puts` because `puts` will print one element per line.

- Arrays support **concatenation** using the `+` operator, differences using the `-` operator and multiplication using the `*` operator.

- Can do **union** (combine both and remove duplicates) and **set difference** (combine only common elements) on arrays using the `|` and `&` operators respectively.

- Useful array methods:

  - **Reverse the array** - `reverse` and `reverse!`

  - **Get size** - `.size` or `.length`

  - **Sort** - `.sort`

  - Get **unique values** - `.uniq` or `.uniq!`

  - Prevent modification of array - `.freeze`

  - Get the **maximum or minimum** values - `.min` / `.max`

  - Check if element is included - `.include?`

    

**Hashes**

- Maps/dictionary/associative arrays are called **hashes** in Ruby. Syntax:

  ````ruby
  a = { "key" => value, :key2 => value2 }
  b = { symb: value3, symb2: value4 }
  puts b[:symb2] + a["key"]
  ````

- A **symbol** is an immutable object otherwise similar to a string. Symbols save time and memory when doing comparisons and are preferred for hashes.

- Useful methods on hashes:

  - **Delete an item** - `.delete`
  - Get **key from value** - `.key`
  - **Invert the hash**, switching keys and values - `.invert`
  - Get all of the **keys** and **values** - `.keys` or `.values`
  - Get **size** - `.length`
  - Set a **default value** - `.default =`

  

**Iterators**

It is more Ruby-esque to not use `for` loops to iterate over arrays/hashes and instead use an **iterator**. Iterators work on strings, hashes, arrays, and ranges. Some iterators:

- `each` - for arrays and hashes
- `each_char` - for strings
- `times` - for numbers

Iterators are methods on iterables that take a **block** of code and call that block. The `|v|` is the **block parameter**.

```ruby
arr = [1, 2, 3]
arr.each do |v|
  puts v
end

# or, equivalently:
arr.each { |v| puts v }
```

- In Ruby, strings are not immutable - for example we have `downcase` and `downcase!` methods 

  

## Methods

- Use `def method(param)` to create a method with a parameter. Methods **must be defined** before calling them. Ruby **does not support first class functions**, but it does have blocks and procs

- Ruby supports an arbitrary number of arguments using `*args`. In this case, the arguments are passed as an array:

  ```ruby
  def some_method(a, b, *c)
    # a is an array of all the passed arguments
  end
  ```

- Raises a **SystemStackError** if you recurse too deeply.

- Ruby supports **returning multiple values** from a method (if they are comma separated). They get returned as an array to caller.

**Scope**

Ruby has four things in its scope chain: **local, global, instance, class**

- **Local**: variables in a method or loop, that can't be accessed outside
- **Global**: **Prefixed by the $**, these are available globally regardless of where they are declared (strongly discouraged)
- **Class**
- **Instance**



## Object Oriented Programming

Everything is an object. The **initialize** method is called to instantiate the class (constructor).

An **instance variable**, prefaced with `@`, are variables unique to each instance/object of a class. **Instance methods** are defined on the object itself.

```ruby
class Dog
  attr_accessor :name

  def initialize(age)
  	@age = age
  end

  def age
    @age
  end
  
  def age=(new_age)
    @age = new_age
  end
end
```

Instance variables are private - need to define a getter/setter to allow access. It is conventional to use the same name for the getter, instance variable and setter (with `=` appended). To avoid writing getter and setters, Ruby offers `attr_accessor` **attribute accessor** for auto defining it, in addition to `attr_reader` and `attr_writer`.

**Self** - in a normal instance method, you can use `self` to refer to the class (or to **access its methods**). You can only acess methods (not attributes) thru `self.` In a class setting, `self` refers to the class.



**Class methods** can be called on the class without instantiation. To define a class method, use `self` keyword. **Class Variables** are accesible to all objects of a class and prefixed with `@@`. **Class constants** are unchanging values starting with capital letter

```ruby
def Math
  PI = 3.14
  @@instantiation_count = 0

  def initialize
  	@@instantiation_count += 1
  end
  
  def self.area_of_square(width)
    width ** 2
  end
end

puts Math::PI
```



**Inhertiance** - use the `<` to inherit a class. Overriding requires nothing special in Ruby - we just define the method with the same name as the parent. **Ruby does not support multiple inheritance**. Whenever you call `super` the same named method in the parent class is called.

**Operator overloading** is allowed by simply defining a method: `def +(other); end;`

**Access Modifiers**: All methods in classes are public unless you use the **private** or **protected** modifiers (instance variables are always private):

- **Public** - method available from outside the class
- **Protected** - method available from the object of the <u>same family</u> (the object itself, by using `self.<method>` or from another object of the same class)
- **Private** - method literally only available from within object (*not* from the outside, *not* with `self.<method>`, and not with another object of any type)



## Modules, Mixins and Standard Classes

A **struct** is a class for providing a quick way to define a data dump class which has setters, getters, and instantiation.

```ruby
Point = Struct.new(:x, :y)
my_point = Point.new(2, 5)
```



---

A **module** is a collection that has several uses:

1. Bucket some methods to include as instance methods in other classes (**Mixin Pattern**)
2. Bucket some methods as class methods that can be called from anywhere
3. **Namespacing** some classes



### Mixin Pattern

of methods that can be used in other classes (defines a **has a** relationship). To consume a module, it needs to be **included**. Since Ruby doesn't have multiple inheritance or interfaces, this is a **mixin** like solution. 

```ruby
module Flyable
  def fly
    p "flying!"
  end
end

class Jet
  include Flyable
end
```

A built in module is **Comparable**, which allows a class to have comparison operators by only providing the `<=>` method.



### Class Method Bucketing

```ruby
module MyMath
  def self.negate(x)
    x * -1
  end
end

MyMath.negate(2342) # or MyMath::negate(2324)
```



### Namespacing Classes

```Ruby
module MyModule
  class MyClass; end;
end

x = MyModule::MyClass.new
```

---

**Time** and **Math** are standard classes



## Procs and Lambdas

**Procs** and **lambdas** are replacements for first class functions: blocks of code wrapped in an object. It can be called using `.call`:

```ruby
greet = Proc.new do
  |x| puts "Hello #{x}"
end

greet.call("World")

# lambdas
talk = lambda { puts "Hello" }
talk2 = ->() { puts "Hello "} # both equivalent
```



| Lambda                    | Proc                                   |
| ------------------------- | -------------------------------------- |
| Instance of `Proc`        | Instance of `Proc`                     |
| Called with `.call`       | Called with `.call`                    |
| Strict on expected args   | Doesn't care if args not passed        |
| Returns control to caller | Returns control to the caller's caller |



## Files and I/O

The `File` class allows working with files. Methods on this class:

- `new` to create a file on disk
- `open` to open an existing file for writing to it (use `.puts` or `write` to write content). Call `.close` at the end
- `read` to read contents of a file
- `readlines` will read the lines as an array
- `delete` to delete the file
- `file?` to check if a file exists on disk
- `zero?` tells if the file is empty

A block can be used when opening a file that will auto-close it:

```ruby
File.open("some.txt", "w") do |f|
  f.write("something")
end
```

The `size` method on a file object returns the disk-size of the file.



## Misc Stuff

- **Random numbers** generated using `rand`. For example, `rand(100)` generates a random number from 1-100.
- Conventionally, modules are named with **able** ending: `Walkable` or `Flyable`.
- 