https://app.pluralsight.com/paths/skill/java | https://app.pluralsight.com/paths/skill/unit-testing-in-java | https://app.pluralsight.com/paths/skill/java-coding-practices | https://app.pluralsight.com/paths/skill/core-spring | https://app.pluralsight.com/paths/skill/java-ee-foundations

# Modern Java - The Big Picture

## Introduction

Java belongs to Oracle (via Sun Microsystems)

Java is the **Java Development Kit** (JDK), which consists of:

1. Programming language (defines the syntax for source code)
2. Standard Library (defines built ins)
3. Runtime environment (aka **Java Virtual Machine - JVM**)

In Java, application **Source Code** (written using the programming language) is compiled to **Application Bytecode**. Third party libraries are also shipped as bytecode. The Java Bytecode is understood by the Java Virtual Machine, and run by the CPU.

All files must end with `.java`. Basic compilable java app (compile using `javac` and run using `java` command):

```java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}
```



## Adopting Java

Java philosophy includes many features:

**Portability**: (apps run anywhere - **WORA**: write once, run anywhere). The source code nor byte code need to change; the Java Virtual Machine is responsible for working with different hardware.

**Readability**: maintainability is better than terseness, and understandability is most important.

**Features**: Java gets new features very conservatively - need to make sure the feature is necessary.

**Backward Compatibility**: Long term support is important, and feature deprecation is very controlled.

**Openness**: Lots of vendor and community participation to dictate future. This leads to non-Oracle implementations (e.g. IBM and Eclipse). Also Java is open source



Generally Java is used for backend, database or data intesive applications. Many are *heirarchical* and *code bases*.

The structure of a Java program is:

- **Classes**
- **Packages** (consist of many classes)
- **Modules** (consist of many packages)

Java is statically typed

The JVM:

- Manages memory (allocating memory)
- Garbage collection (freeing unused memory)
- Multithreading
- **Just In Time Compilation** - compiles some bytecode to VERY machine-specific code that is highly optimized.



What Java is bad for:

1. Time-critical code (as Java is too high level)
2. Tight OS integration (as Java is platform agnostic/WORA)
3. Quick prototyping (because it is designed for structured development)



## Modern Java

### Desktop Applications

Java has first class support for desktop apps. **AWT** (Abstract Windowing Toolkit) is a somewhat historical standard library offering platform-native controls. Also allows simple graphics primitives.

**Swing** is a pure Java GUI - offers cross-platform and consistent look and feel, but not native to any specific OS. Swing is an MVC compatible framework. Historically, Swing is a bit slower than AWT.

**JavaFX** is a more complex and modern tool - it allows using CSS, has 3D graphics support, animation, etc. The UI is defined in XML format.

### Enterprise Applications

Aslo called **JavaEE** (Enterprise Edition; originally called J2EE, now called JakartaEE). JavaEE adds a set of enterprise-specific APIs on top of which the application is written. A JavaEE Application Server hosts the actual application. These APIs offer database, scheduling, web applications, security, messaging, etc.

JavaEE implementations include: Tomcat (Apache), Wildfly (RedHat), etc.

### Cloud

While JavaEE allows building cloud apps also, but generally JavaEE apps are monolithic and need managed servers.

The **Spring** framework uses Netflix's open source libraries to run a Spring Boot application; Spring is highly opinionated. This reduces monolithic apps - Spring is the most popular micro framework.

### Android

Android Java platform is quite different than standard Java, and it implements only Java 7/8. Moreover, rather than a standard library, Google offer Android APIs and a subset of the JavaSE APIs. Also, Bytecode doesn't run on a JavaVM, but rather Dalvik, which is another VM running on the phone hardware.



## Java Libararies

### Spring Framework

Historically, **Spring** was designed to remove the monolithic, large and complex nature of JavaEE. Spring features:

- *Dependency Injection*:
    Spring's Dependency Injection container instantiates classes that are related to each other, and it will inject the related classes (e.g. helper classes) into the application classes. This allows classes to be **decoupled**.
- *Integration with JavaEE Technologies*
- *Integration with data access technologies*

### Libraries

The NPM for Java is called **Maven Central**

- Google Guava: grabbag of random utilities (caching, helpers, collection types)
- Apache Commons: random utilities (I/O files, CSV utils, etc.)
- Apache Log4J: structured app logs
- Netty: networking (abstraction for TCP connections)
- RxJava: reactive programming (similar to RxJS) for async apps
- Java Database Connectivity is built into Java for interacting with RDBs - includes drivers for MySQL, PostGres, etc.
    - Hibernate: ORM for SQL (SQL is not in code)
    - QueryDSL: Java-like SQL syntax (SQL is in code)

### Data Processing

- Apache Hadoop is a Java data processing layer, and a distributed system for processing data
- Apache Spark is another data processor.
- Cassandra is an SQL like DB for big data
- HDFS (Hadoop Distributed File System) sits under Hadoop



## Tooling

### IDEs

- **Eclipse** is an open source IDE
- **IntelliJ** is a closed source IDE

### Unit Testing

- **JUnit ** is the defacto
- **Mockito** is a mocking library

### Build Tools

Ensure that applications are built and run the same everywhere, manage external dependencies, and run tests before compilation.

- **Maven** is a build tool for Java. Maven builds are described in a `pom.xml` file. With one command (`mvn package`), it will download dependencies, compile, test and package the source code.
- **Gradle** is a newer build tool than Maven; it is used by Android. Gradle is better because it does incremental builds (doesn't rebuild if not necessary), doesn't use XML for pom files, uses Maven Central for repos.



## Alternative JVM Languages

There are other languages that compile to Application Bytecode that can be run by the JVM. Alternative programming languages offer:

1. Increased productivity (Java is too verbose)
2. Different Paradigms (e.g. non OO programming)
3. Familiarity (e.g. Jython)

Popular JVM Languages:

- **Groovy** - scripting language (interpreted) for Java, offers optional typing
- **Scala** - combines OOP and FP. More extensive type system than Java
- **Kotlin** - created by JetBrains, and used for Android development; runs in the browser