# Dev Tools

## IDE Setup

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



## Packaging Java Apps

Java applications are bundled for distribution in JAR files (**Java Archive**). These are ZIP archives consisting of `.class` files.

The Java SDK ships with a `jar` util for making JAR files, which can be run using the `java` command on the command line:

```bash
jar cvmf manifest-input.mf <Output>.jar .
```

To make the JAR launchable though, a `manifest.mf` file (this tells the JVM which class to use as the entry point) must be specified.

However, in the real world, the build process will be automated, to orchestrate all the different JAR files, running unit tests, code coverage and other analytics, etc.

**Maven** and **Gradle** are the most well known Java build tools.