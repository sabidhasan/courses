# Getting Started

Install typescript by using `npm install --global typescript`

Typescript is a superset of Javascript that adds features for helping with development during compilation time:

- Static typing - TS know more types than JavaScript, and types don't change 
- Next-gen JS features transpilation for older browsers
- Non-JS features - e.g. interfaces and generics
- Metaprogramming features - e.g. decorators

# Typescript Types

Core types:

- **Number** - no differentiation between floats and integers; defined using number literals or `number`
- **String** - using quotes or backticks in a literal, or using `string` type
- **Boolean** - `true`/`false`
- **Array** - can be defined using this syntax: `string[]`
- **Object** - the object type is a basic type; can also define objects by using an object literal with key-type pairs (example below, though we don't need this as it can be inferred)
- **Tuple** - adds support for fixed length, fixed type arrays. Tuples are arrays with mixed types of values, but where the types are predefined. Eg: `[string, number]`
- **Enum** -  one of a few possible values, allowing human-readable values
- **Function** - the generic type (`Function`) or a specific signature for a function: `type f = (a: number) => number;`
- **Void** - the type for functions that return nothing
- **Never** - a specific value for functions that cannot return (e.g. because they throw an error)
- **Any** - escape hatch for any possible Typescript type
- **Unknown** - similar to `any`, except that unknown cannot be casted to a specific type (e.g. `any` can be casted to `string`, but `unknown` cannot be). `unknown` is a better type to `any`, generally.



**JS types**: JavaScript has types of course, but TS types are checked during compilation and JS types during runtime.

Types are assigned in Typescript with a colon and the type: `let something: string;`. **Type Inference** means the compiler will attempt to parse the type from variables' literal value. Explicit types should only be given for function parameter or uninitialized variables.

**Object Type**:

```typescript
const person:{ name: string; } = { name: 'abc' };
```

**Tuples** are fixed length arrays with specified types. Tuples *can* be appended (by using `push`), but 

**Enum** is a custom type (typically starting with a capital letter), containing one of a number of values, typically in capital letters. Enums consist of strings as indexes, and values are numbers that are auto-incremented:

```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR };
```

**Union Types**, **Literal Types**  and **Type Aliases** - Union types allows creating a new type composed of one of multiple types. Literal types imply that a type is a specific value, rather than generic types (`string` vs `'my-string'`). Custom types allow creating a type composed of more than one type. Example: `type x = string | number;`.

# Compiler & Compiler Options

Run in watch mode by using `-w` as watch mode.

Running `tsc --init`creates a `tsconfig.json` file, indicating that this folder is a project. In a Typescript project, you can run `tsc` directly to compile ALL `.ts` files in the project 

By default, TypeScript assumes all HTML DOM APIs are defined. This can be changed by modifying the `lib` field in compiler options.

A `.d.ts` file is a manifest file, which describes the types for a project in case it is shipped as a library.

Source map links original Typescript files to generated JS files

Strict null checks make TS be strict regarding values that could be `null`. If this option is turned on, use `!` to force TS to override null - basically it removes `null` from an value’s union type.

# Classes and Interfaces

Classes are syntactic sugar for constructor functions.

Class methods can be given a parameter called `this`, whose type is the class itself, which instructs Typescript to enforce that the method must be called so that the `this` is bound to the class itself, rather than something else.

Features of classes:

- The `private` and `protected` modifiers to allow for private properties and methods. **Private** is available in the class, and **protected** is available in the class and its child classes. The constructor method can take modifiers (public/private) to set class-level properties automatically.

- The `readonly` keyword, for properties that cannot be changed

- The `static` keyword for methods and properties that do not require class instantiation. Static members cannot be accessed on class instances, but they can be accessed from other static methods

- The `extends` and `super` keywords. Super must be called before using the `this` keyword

- `implements` keyword to implement a class

- **Getters and setters** using `get` and `set` keywords. These methods allow reading/writing to properties, with some logic

- Abstract methods MUST be in an **abstract class**, and must not have an implementation. Abstract classes cannot be instantiated themselves.

  A singleton is implemented similar to Java - using a private constructor. The instance is stored as a`private static` property on the class, and a `getInstance` method is implemented to create/get that instance.

  

**Interfaces** describe the structure of complex *objects* - both properties and methods - by using the `interface` keyword, and can be used to create a contract that classes implement. Some points:

- Interface properties cannot have initial values, or private fields, but `readonly` properties are allowed
- An interface can `extends` other interfaces
- *Optional properties* can be defined using the `?` property
- Interfaces are only available at *compile time*
- Generic properties can be specified: `interface Error { [key: string]: number }`

Use *interfaces over types* when:

1. Defining the blueprint for an object, rather than a type literal
2. Faking multiple inheritance in classes (has-a relationship)
3. For implementation by classes, rather than a variable

Use *abstract classes over interfaces* when:

1. Some methods need a definition (interfaces have no implementation possible)
2. Methods need to be overridden by inheritance (is-a relationship)

# Advanced Types

**Intersection Types** are a combination type of two types (typically object). Create them using `&` from two types:

- for two union types (e.g. `string | number` and `string | boolean`) it will be the intersection/crossover of the two types they have in common
- for two object types (e.g. `type P = { name: string }` and `type Q = { age: number }`), it is the combination of the two objects' keys.



**Type Guards** allow checking for something about types at runtime, before working with the values. Three methods:

1. For primitive union types: use `typeof` operator
2. For objects/literals: Use `in` operator to see if property present
3. Instances: use `instanceof` operator - only works with classes, not interfaces (as they are not compiled)



**Discriminated Union Type** is a pattern that allows implementing type guards easier for interfaces. You give each interface in a union type a new property (example `type`) and guard against that:

```typescript
interface Flyable {
    type: 'fly';
    flyingSpeed: number;
}
interface Runnable {
    type: 'run';
    runningSpeed: number;
}
type Animal = Flyable | Runnable

function useAnimal(animal: Animal) {
    if (animal.type === 'fly') { /* do something with flyingSpeed */ }
    else if (animal.type === 'run') { /* do something with runningSpeed */ }
}
```



**Type Casting** tells Typescript that a variable is of a specific type. Two syntaxes:

1. Angle brackets: `<HTMLInputElement>document.getElementById('user-input')`
2. As keyword: `document.getElementById('user-input') as HTMLInputElement`

To tell Typescript that something is never going to be`null`, use the `!` after the variable definition.



**Function Overloading** allows specifying function return types for functions that take complex union types as parameters, and where TS can't infer the return type, by supplying overload definitions:

```typescript
function add(a: number): number
function add(a: string): string
function add(a: string | number) {
    // do something
}
```



**Nullish Coalescing** is used for providing a backup value for `null` and `undefined` values for assignment. **Optional Chaining** allows for easy checking of dotted paths

```typescript
const val = possiblyNull ?? 'DEFAULT';
const value2 = someObject?.key?.subKey;
```



# Generic Functions and Classes

A **generic type** is a type that requires a type argument to be created. The idea is your class/function can work with a bunch of different types, but once a type is defined, it is locked. Simple examples are an array or a promise type. To specify the generic type, use angle brackets:

````typescript
const names: Array<string> = [‘a’, ‘b’];
```

Generic types can also take **constraints**, to narrow down the types that are accepted by the generic function. To build a custom generic function:

```typescript
interface Lengthy { length: number };

function countAndDescribe<T extends Lengthy>(elem: T): [T, string] {
    if (elem.length) {
        return [elem, 'Has length ' + elem.length];
    }
	return [elem, 'No length'];
}
```



The **keyof** operator can be used to get the keys of a type:

```typescript
function extractKey<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
```



**Generic classes** can be used to create classes for a generic type.

Utility types makes for an easier time working with types:

- **Partial** - creates a object type from a type that makes all its properties optional
- **Readonly** - creates a type that locked and can't be modified
- **Pick** - creates new object type with only specified keys
- **Omit** - opposite of `pick`; creates new object type with given properties omitted  

# Decorators

Useful for **metaprogramming**, **decorators** can be added to classes or methods. A decorator:

- is a function that is applied to a class/property/method, by using the at symbol  - `@`. 
- decorators are called when the class blueprint is defined
- Decorators are called with parameters depending on what kind of class/property/method are being decorated
- multiple decorators are possible for one class, and are applied from the bottom up
- Method decorators can be applied on:
  - class properties
  - setters/getters
  - method parameters
- Decorator function can also **return a new class/value** (putatively extending the original class, which is passed as a parameter to the decorator). In the case of a class decorator, you can add functionality to the class (e.g. logging) and in the case of properties decorators you can change some properties of the property descriptor

A decorator factory function can create a decorator based on parameters passed into the decorator factory. The factory should a function with the signature for the proper decorator for the class/property/method

Uses for decorators:

- validation for properties or method calls, etc. (`ClassValidator`)
- logging
- autobinder - decorator that binds a method to `this` of the class, even when called from callbacks

# Namespaces, Modules, Webpack and Third Party Libs

Two options for modularizing code:

1. **Namespacing** and file bundling - it groups some code as a namespace and imports the namespace into another file. This is kind of outdated now 
2. **ES6 Modules** using native Javascript import/exports. Browsers automatically deal with code written this way. The downside to this is the following, and **Webpack** can fix both:
   - Each JS module/file is a separate HTTP request
   - Older browsers don't understand this

## Namespaces

To define a **namespace**, use the `namespace` keyword with the namespace name, define the items within and export the items needed from another file. Then, in the other file, import the namespace but use the *same* namespace in that file.

```typescript
namespace App {
    export const name = 'some';
    export interface ITest { id: number };
    export class MyClass {}
    export type Test = string | number
    // ...
}
```

In other file in which namespace is needed, use:

```typescript
/// <reference path="path-to-other-file.ts">
namespace App {
    // can access MyClass, ITest, name, Test in here
}
```

When using name spacing, it is a good idea to output the result as a **bundle** in `tsconfig.json`'s `module` key's value, so that the transpiled files will work.

## ES6 Modules + Webpack

**ES6 Modules** allow `export`/`import` keywords to import and export items. Without Webpack, the browser will have to make a separate network request for each file. Must update `tsconfig.json` to use es6 in the `module` key.

An extension to modules is **Webpack**: a bundling and build orchestration tool

Webpack can:

- Add support for older browsers for import/export syntax
- Bundle all outputted files into one, so that all JS assets are downloaded with one network request
- Use minification

TS-useful dependencies: `ts-loader`, `webpack`, `webpack-cli`, `webpack-dev-server`

Webpack config lives in `webpack.config.js`

## **Third Party Libraries**

Install types for a third party library to install TS support for third party libraries

If types are not available for a package, we can **declare** types. This tells TS that this variable will exist:

```typescript
declare var SOME_VAR: string;
```





