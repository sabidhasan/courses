# Introduction

- `ng new <name>` creates a new project
- `ng serve` serves the app from cwd
- `ng generate component <name>` creates a new component

Components always have template (html file), styles (css files) and a Typescript file. Unlike React where the root for a component is an HTML `div`, in Angular, it selects for the component itself - `<app-root />` in the HTML.

Angular itself is componentized - pieces are added, as needed and Angular built in methods must be imported before use. To import these, add them to the appropriate **module**'s `imports` array.

# The Basics

## Root Module

`main.ts` bootstraps the entire app by providing the root module (`app-module` typically). Angular's server (or builder/minifier) adds Angular lib imports that will read that `main.ts`.



## Components and Modules

**Components** are defined using the `@Component` decorator on a Typescript class containing its config:

1. **selector** - should be either plain string, or a CSS selector (i.e. `[app-selector]` selects `<div app-selector />` or `.app` selects `<div class="app" />`)
2. **template**/**templateUrl** - either inline or external html file
3. **styleUrls**/**styles** - either inline or external stylesheet.

All app-related components' directories go in the `app` directory. The selector should be unique.



**Modules** bundle related functionality together. In smaller apps, you may only need one module. The `NgModule` decorator defines a module with config:

1. **declarations** - dependent components
2. **imports** - what other modules this module uses (for example, Angular specific functionality from `@angular/forms`)
3. **providers** - services used
4. **bootstrap** - where to kick off this module



## Basics of Data Binding

**Data Binding** is connecting business logic (TS) to template (HTML). There are different ways:

- From TS to template
  	**String interpolation** `{{ }}` in the template directly that takes any TS expression (or property/method in the TS class)
  	**Property binding** `[disabled]="someTSExpression"` which binds disabled JS attribute to a TS expression
  	So the following two are equivalen: `<p>{{ myText }}</p>` and compared to `<p [innerText]="myText"></p>`
  
- From template to TS (user events) - bind to events in parentheses `<button (click)="clickHandler($event)">+</button>`

- **Two way binding** (like VueJS' `@model`) - this can be done by using `ngModel` - `<input [(ngModel)]="name"/>`.

  ​	Must have forms module enabled in AppModule to use ngModel.



## Directives

**Directives** are instructions in the DOM - two types are **structural** and **attribute** directives. Components are also directives but general directives are TS classes without templates. Examples:

- `ng-template` and `*ngIf`, a **structural** directive (star indicates it's structural directive that deletes/adds to DOM).
  The `*ngIf` is a shorthand for `<ng-template [ngIf]="condition"><div>Hello></div></ng-template>` in example below.

  ```html
  <div *ngIf="condition; else conditionFalse">Hello</div>
  <ng-template #conditionFalse>Else Block</ng-template>
  ```

  `*ngFor` can iterate over a list and get its index:

  ```html
  <app-server *ngFor="let server of servers; let i = index"></app-server>
  ```

- `*ngSwitch` for switch/case in the template:

  ```html
  <div [ngSwitch]="someValue">
    <p *ngSwitchCase="5">someValue is 5</p>
    <p *ngSwitchCase="10">someValue is 10</p>
    <p *ngSwitchDefault>Else case</p>
  </div>
  ```

  

- `ngStyle` or `ngClass`, both **attribute** directives:

- ```html
  <p [ngStyle]="{ backgroundColor: 'red' }"></p>
  <div [ngClass]="{ onlineCssClass: isOnline() }"></div>
  ```

 Only one structural directive can exist on an element at a time.



**Custom attribute directives** can be made as needed; From cli we use `ng generate directive <name>`.

They get access to DOM elems via DI. For updating elements' DOM attrs, use `Renderer2` as a DI within the `ngOnInit` lifecycle hook (safer than modifying DOM directly) or use the `HostListener` for listening to JS events on host, or `HostBinder` for binding to a host JS property. Custom directives also support **Inputs** for setting values from outside.

```typescript
@Directive({
	selector: '[appBasicHighlight]'			// select by element, 
})
export class CustomHighlightDirective {
  @Input() mouseColor: string = 'red';

  // Bind to a host property
  @HostBinding('style.background') backgroundColor: string;

  // Bind to host event, updating style using input
  @HostListener('mouseenter')
  mouseEnter(eventData: Event) {
    this.backgroundColor = this.mouseColor;
  }

  // ElementRef tells Angular to inject the element itself
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // Change on lifecycle method using renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }  
}
```

```html
<div appBasicHighlight [mouseColor]="pink">Hello!</div>
```



In certain cases, we name the directive and an input prop with the same name. This way, they can be used in template at once:

```typescript
@Directive({
  selector: '[myCoolDir]'
})
export class Directive {
	@Input('myCoolDir') myCoolDir: string;
}
```

```html
<div [myCoolDir]="red"></div> <!-- first, NG applies directive, then it uses [] to pass input -->
```

# Data Binding

## Passing Data - Parent to Child (à la Props)

To make a property in a Typescript class available as a prop to a child component (from a parent component), we use the `@Input` decorator:

```typescript
// ServerElementComponent.ts
export class ServerElementComponent {
	@Input('server') element: ServerElement;  	// `element` in this component, `server` from outside 
}
```

```html
<!-- in parent component for server element -->
<app-server-element [server]="serverElement"></app-server-element>
```



## Passing Data - Child to Parent (Custom Events)

A custom event handler can be used to pass data from child to parent. To do this, a new property in the child class (the one emitting the event) is created:  `@Output() evtEmitter = new EventEmitter<TEventData>();`. Then we can emit that event: `this.evtEmitter.emit(data)`.

```html
<!-- from parent template; create handleOnAdded handler as normal -->
<child-component (bpCreated)="handleOnAdded($event)"></child-component>
```



```typescript
// child.component.ts
export class ChildComponent {
  @Output('bpCreated') onAdded = new EventEmitter<TEvent>();
  
  onAdd() {
    this.onAdded.emit({ name: "Hello" });
  }
}
```



**Services** are a way for components to communicate over longer distances to avoid prop drilling.



## Style Scoping

By default, styles are **scoped** to each component - every HTML DOM node gets a unique property to mimic a shadow DOM and allow scoping. This can be turned off - then styles defined here are effectively global:

```typescript
@Component({
  selector: 'app-root',
  template: './app.html',
  encapsulation: ViewEncapsulation.None			// disable attributes on DOM elements
})
```



## Local Reference (à la Refs)

To create a ref in the template, use the `#` symbol - refs are available to other elements but **only in the template**. This way, we can remove unneeded 2-way bindings (e.g a button that needs a value from an input on click doesn't need data in TS class):

```html
<input type="text" #componentRef />
<button (click)="handleClick(myRef)"></button>		<!-- passes myRef element -->
```



To get access to a ref from the Typescript code, make a property that is decorated by `ViewChild`:

```typescript
class MyComponent {
  @ViewChild('componentRef', { static: true }) myProp1: ElementRef;		// gets 1st instance of defined ref
  @ViewChild(ChildComponent, { static: true }) myProp2: ElementRef;		// gets 1st instance of child component
}
```

```html
<a href="#" #componentRef>This is a link</a>
<child-component></child-component>
```



## NgContent (à la Slots)

To pass in content into a child (like slots):

```html
<child-component>
	<p #paragraphTag>This is content that will be passed down!</p>
</child-component>

<!-- in child -->
<div>
  <ng-content></ng-content> <!-- renders the content passed in as a slot -->
</div>
```

```typescript
// In child.component.ts
@ViewContent('paragraphTag', { static: true }) paragraphTagRef: ElementRef;
```



To get access to the `paragraphTag` in the parent, can use `ViewChild`. For the child component's Typescript though, `ViewChild` won't work - use `ViewContent`



## Lifecycle Hooks

1. `ngOnInit` - when component created (after constructor but before mount)
2. `ngOnChanges` - when `@Input` properties change
3. `ngDoCheck` - on every change detection
4. `ngAfterContentInit` and `ngAfterContentChecked` - run after slots are added and then after they update
5. `ngAfterViewInit` and `ngAfterViewChecked` - after component's template added and then after they update
6. `ngOnDestroy` - when component removed

Some points:

- **Change detection only works for primitives!**
- Angular runs change detection often and runs **one extra time in dev mode**

# Services

A **service** is a class with several use cases:

1. Saving/fetching *data* (such as a data store)
2. Centralizing *methods* (like a logger)
3. Route Guards for router (see routing)
4. Route Resolvers (these pre-fetch data before a route is loaded)

Services are decorated by `@Injectable`. Service class is provided to modules by supplying `providedIn`. Use service by requesting it in constructor. Angular's injector is **hierarchical** - same instance is provided to all children of a module, but not parents.

```bash
ng generate service <service-name>
```



```typescript
@Injectable({
  providedIn: 'root'		// or any other module
})
export class LoggingService {
  logStatusChange(status: string) { /* do something */ }
}

// In client class
export class MyComponent {
	constructor(private loggingService: LoggingService) { }  
}

```

Also, services can serve as **observer pattern** - we can create an `EventEmitter` property and `emit` events from one part of the app, and use `.subscribe` on that property to listen for events.

# Routing

## Setting up Routes

Each route must have a **path** (without slash) and a **component**. To register routes, use the **RouterModule** in the root. Routing is generally kept in its own module.

```typescript
import { Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'users/:id', component: UsersComponent, data: { /* any data needed goes here */ } },
  { path: 'four-oh-four', component FourOhFourComponent },
  { path: '**', redirectTo: '/four-oh-four' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
```

```html
<router-outlet></router-outlet>			<!-- inject current route here -->
```



## Navigating in HTML

An Angular route has three features. All can be provided when navigating routes:

1. **params** (dynamic params part of the URL)

2. **queryParams** (`?`)

3. **fragment** (`#`)

4. **data** (arbitrary data passed from router configuration)

   

To navigate, use `routerLink` directive on `<a>` tags by binding or using directly - takes array or exact path, absolute and relative:

```html
<a routerLink="/users">Some Link</a>

<!-- goes to users relative to current page, ./users/5/edit -->
<a [routerLink]="['users', 5, 'edit']">Some Link 2</a>
```

The `routerLinkActive` directive applies a CSS class to the element if that routerLink path is active:

```html
<a
   routerLink="/somePage"
   routerLinkActive="myCssClass"
   [routerLinkActiveOptions]="{ exact: true }"
   [queryParams]="{ allowEdit: '1234' }"
   fragment="loading"
>
  Blah
</a>
```



## Navigating Programatically

The router can be used Typescript-side by injecting it. Optionally, we can pass a second param to make it relative to current path. To get dynamic params, use `currentRoute.snapshot.params`, a dict containing params:

```typescript
class MyComponent {
  constructor(private router: Router, private currentRoute: ActivatedRoute) {
    // currentRoute is current route, fragment is URL hash value (`#`)
  	this.router.navigate(['/servers'], { relativeTo: currentRoute, queryParams: {}, fragment: 'loading' });
  }
}
```



**Route params, queryParams and fragment support observables** - `currentRoute.params` has a `subscribe` method to add an observer for params changes (this happens when navigating from dynamic route to dynamic route for same component [e.g. going from `/users/1` to `/users/2` if they both use `UsersComponent`, then the `ngOnInit` wont be called]).
Angular destroys subscriptions automatically.



## Nesting Routes

Routes can be nested for cleaning up route object. To nest, use `children` property. The parent should be given a `router-outler`.

```typescript
{
  path: 'servers',
  component: ServersComponent,
  children: [
    { path: 'edit', component: ServersEdit }
  ]
}
```



## Guards

A **route guard** is a service that implements the `CanActivate` and/or `CanActivateChild` interfaces or the `CanDeactivate` interface (this one gets access to the current component).

Add `canActivate` or `canActivateChild` (or `canDeactivate`) can to a service to protect it (or its children) with that guard.



## Resolvers

A **route resolver** is a service that pre-fetches data for routes, so that Angular waits until it returns data before loading route. Resolvers implement `Resolve<T>` iterface where `T` is the data the resolver returns from its `resolve` method.

Use the resolver for a route by adding it to the route definition. Then, Angular will inject `editData` as part of `data` being passed:

```typescript
{ path: 'edit', component: EditComponent, resolve: { editData: EditResolver } }
```

