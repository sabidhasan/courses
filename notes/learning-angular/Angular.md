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

- `ng-template` and `*ngIf`, a **structural** directive (star indicates it's structural directive, that deletes/adds to DOM).
  The `*ngIf` is a shorthand for `<ng-template [ngIf]="condition"><div>Hello></div></ng-template>` in example below.

  ```html
  <div *ngIf="condition; else conditionFalse">Hello</div>
  <ng-template #conditionFalse>Else Block</ng-template>
  ```

  `*ngFor` can iterate over a list and get its index:

  ```html
  <app-server *ngFor="let server of servers; let i = index"></app-server>
  ```

- `ngStyle` or `ngClass`, both **attribute** directives:

- ```html
  <p [ngStyle]="{ backgroundColor: 'red' }"></p>
  <div [ngClass]="{ onlineCssClass: isOnline() }"></div>
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

# Directives

**Attribute** and **Structural** directives are different - structural attributes delete/add from DOM and attribute only affect internal attributes.