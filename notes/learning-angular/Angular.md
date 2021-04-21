# Introduction

- `ng new <name>` creates a new project
- `ng serve` serves the app from cwd
- `ng generate component <name>` creates a new component

Components always have template (html file), styles (css files) and a Typescript file. Unlike React where the root for a component is an HTML `div`, in Angular, it selects for the component itself - `<app-root />` in the HTML.

Angular itself is componentized - pieces are added, as needed and Angular built in methods must be imported before use. To import these, add them to the appropriate **module**'s `imports` array.

# The Basics

`main.ts` bootstraps the entire app by providing the root module (`app-module` typically). Angular's server (or builder/minifier) adds Angular lib imports that will read that `main.ts`.



**Components** are defined using the `@Component` decorator on a Typescript class containing its config:

1. **selector** - should be either plain string, or a CSS selector (i.e. `[app-selector]` selects `<div app-selector />` or `.app` selects `<div class="app" />`)
2. **template**/**templateUrl** - either inline or external html file
3. **styleUrls**/**styles** - either inline or external stylesheet

All app-related components' directories go in the `app` directory. The selector should be unique.



**Modules** bundle related functionality together. In smaller apps, you may only need one module. The `NgModule` decorator defines a module with config:

1. **declarations** - dependent components
2. **imports** - what other modules this module uses (for example, Angular specific functionality from `@angular/forms`)
3. **providers** - services used
4. **bootstrap** - where to kick off this module



**Data Binding** is connecting business logic (TS) to template (HTML). There are different ways:

- From TS to template
  	**String interpolation** `{{ }}` in the template directly that takes any TS expression (or property/method in the TS class)
  	**Property binding** `[disabled]="someTSExpression"` which binds disabled JS attribute to a TS expression
  	So the following two are equivalen: `<p>{{ myText }}</p>` and compared to `<p [innerText]="myText"></p>`
  
- From template to TS (user events) - bind to events in parentheses `<button (click)="clickHandler($event)">+</button>`

- **Two way binding** (like VueJS' `@model`) - this can be done by using `ngModel` - `<input [(ngModel)]="name"/>`.

  ​	Must have forms module enabled in AppModule to use ngModel.



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

  

