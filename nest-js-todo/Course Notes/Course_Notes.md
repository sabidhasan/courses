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



## Parameters

### URL Parameters

To grab parameters in a controller, use the `@Param` decorator, along with providing a colon based name. If passed no arguments, it returns all parsed parameters in an object. Otherwise, pass it a string to get a specific named parameter:

```typescript
@Get('/:id')
getTaskById(@Param('id') myId: string) {
	// do something
}
```

### Query Parameters

To grab query parameters, use the `@Query` parameter. This can extract one or more query parameters from the URL.



## Pipes

**Pipes** handle a request before it is passed to a handler in the controller. They perform:

- *Data transformation* (transform JSON data into an instantiated class)
- *Data validation* (reject the request if it is not valid)



Pipes can throw errors, return data, modify incoming data, etc. all before the request is passed to the handler. Some common pipes built-in to NestJS:

- **ValidationPipe**: validate incoming DTO for missing/extra fields and types
- **ParseIntPipe**: since everything coming is a string, it can parse them into integers

In addition, **custom pipes** can be made. These are classes decorated with `@Injectable`, and implement the `PipeTransform` interface. This means it has a transform method:

```typescript
transform(value, metadata) { }
```

To use a pipe, there are several ways:

1. Before a controller's handler, by the `UsePipe` decorator, to handle all requests to that handler. This is preferred.

2. For a specific parameter in one handler for a controller:

   ```typescript
   @Post
   createTask(
   	@Body(createTaskDto: CreateTaskDto, SomeCoolPipe)
     // or @Query(ValidationPipe) query: queryDto // validates using class-validator
   ) {}
```
   
3. App-level pipes used for all requests configured when starting app instance.

To validate data in a very simple manner, use the **ValidationPipe** built into Nest.
This means doing two things:

1. Decorate fields in the DTO with one or more validators from the package `class-validator`'s method, e.g. `@IsNotEmpty`. 
2. Tell the controller's handler(s) to use the `ValidationPipe` (by using `UsePipes` decorator, or passing it into the `@Body`/`@Query` parameters)









