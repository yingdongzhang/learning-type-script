# TypeScript Introduction

* A Javascript superset building on Javascript
* Adds new features and advantanges to Javascript
* Features are compiled to JS "workarounds", possible errors are thrown
* Compiles to Javascripts
* Uses "static types" set during development compared to Javascript uses "dynamic types" resolved at runtime

## TypeScript Adds

* Types
* Next-gen Javascript features (compiled down for older browsers)
* Non-Javascript features like Interfaces and Generics
* Meta-programming features like Decorators
* Rich configuration options
* Modern tooling that helps even in non-TypeScript projects

## Roadmap

|-TypeScript Basics
|-Compiler & Configuration
|-Working with Next-gen JS code
|-Classes & Interfaces
|-Advanced Types & TypeScript Features
|-Generics
|-Decorators
|-Full Project
|-Namespaces & Modules
|-Webpack & TypeScript
|-Third-party Libraries & TypeScript
|-React + TypeScript & NodeJS + TypeScript

# TypeScript Bascis & Types

## Core Types

* number: 1, 5.3, -10
* string: 'Hi', "Hi", `Hi`
* boolean: true, false - Just these two, no "truthy" or "falsy" values
* object: {age: 30} - Any javascript object, more specific types (type of object) are possible
* Array: [1, 2, 3] - Any javascript array, type can be flexible or strict
* Tuples: [1, 2] - Added by TypeScript: Fixed-length array
* Enums: enum { NEW, OLD } - Added by TypeScript
* any - Any type, should avoid if possible
* Function
* unknown - not "any"thing but something
* never 

# The TypeScript Compiler
## Watch mode

`tsc app.ts -w`

## Compiling the entire project / multiple files

1. Initialise project: `tsc --init`
1. Run `tsc`

## Includes & Excludes

In `tsconfig.json`, configure `include` and `exclude`.

* `files`: set a list of files

## noEmitOnError
When set to true, no javascript file will be generated if ts files compile with errors.

## Strict Compilation

* "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
* "strictNullChecks": true,              /* Enable strict null checks. */
* "strictFunctionTypes": true,           /* Enable strict checking of function types. */
* "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
* "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
* "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
* "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

# Modules and Namespaces

## Namespaces & File Bundling
* Use "namespace" code syntax to group code
* Per-file or bundled compilation is possible (less imports to manage)

## ES6 Imports/Exports
* Use ES6 import/export syntax
* Per-file compilation but single <script> import
* Bundling via third-part tools (e.g. Webpack)
