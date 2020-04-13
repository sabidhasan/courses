# Dev Tools

**Java Development Kit** is the SDK for Java.
**IntelliJ** is their IDE of choice.

The two steps to running a program:

1. Compile to *bytecode* as a `[name].class` file (using the `javac` command)
2. Running the resulting bytecode (using the `java` command)

The Java Development Kit consists of: (a) Java Virtual Machine (b) `javac` (c) `java` and (d) Standard Edition Library APIs

Two environment variables must be set after installing the Java JDK:

- `JAVA_HOME` - the path to the JDK installation directory
- `PATH` - which has to be updated to add the `bin` directory, allowing access to `java` and `javac` globally



Three major IDEs:

1. JetBrains IntelliJ IDEA (JetBrains)
2. Eclipse (Eclipse Foundation)
3. NetBeans (Apache)



A **Java package** is a namespace for a bunch of classes (classes are to methods what a package is to classes).
Use reverse DNS notation for package names, by tradition.