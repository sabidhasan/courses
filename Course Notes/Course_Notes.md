## Modules

A module hosts all components for a related feature

Modules are singletons and meant to be reusable (and because they are singletons, they will only be created once by Nest). All apps have a root module, called `AppModule`. A module is a module because it is decorated by the `@Module` decorator.

To generate a new module

```bash
nest generate module <name>
```

Each module has four properties:

1. **Imports**: other *modules* that this module utilizes. Importing will expose the exported functionality from the other modules into this module
2. **Exports**: providers that this module wishes to export
3. **Controllers**: the route handlers for this module
4. **Providers**: providers (possibly services) that this module will rely on



## Controllers

Controllers are responsible for handling **requests**, and returning **response**s. A controller is bound to a specific path (and subpaths), and has HTTP method handlers within for those paths.

Use the `@Controller` decorator to mark a class a controller. Within a controller, methods are called **handlers** and they determine what HTTP verb they respond to.

To generate a new controller:

```bash
nest generate controller <name>
```



## Providers

A provider  is any class that can be injected into a constructor (for example, of a controller) via **dependency injection**. Use the `@Injectable` decorator to mark a class a provider. They can be:

- simple value
- class
- factory

A **service** is a provider, but not all providers are services. A service is the main source of business logic - for saving/reading data, validating data, etc. Services are singletons.

To inject the provicer/service into a controller, define it in its constructor:

```typescript
@Controller('/tasks')
export class TasksController {
	constructor(private tasksServiceInstance: TaskService) {}
}
```



## Models

A model is the way that data is expected to be on a server. Models can be defined in two ways, and in either case, they are POJOs:

1. Classes
2. Interfaces

An interface is easier/simpler to define, but it is lost after compilation. To define something as a model, nothing special is needed; rather, the model is there to help in typing things coming from the DB.

## 

## Data Transfer Objects (DTOs)

Data transfer objects (note they are not mandatory but super helpful) make it easy to group data coming into the API from the outside, so that the shape of the data coming in is defined in one place and data validation can be easily done. Definition:

> A data transfer object is an object that encapsulates data and sends it between different subsystems of software.

DTOs represent the shape of data for a specific case so they **are not models** - e.g. when creating a task, we have a Create-Task-DTO, but the task model may have many more fields than the DTO.

DTOs can be defined via two ways, but same as models, it is recommended to define them as classes:

1. Classes
2. Interfaces

To use the DTO, extract it in controller methods with Body decorator. The body will be parsed into the shape of the DTO:

```typescript
@Post
createTask(@Body() createTaskDto: CreateTaskDto) {
  // do something
}
```



