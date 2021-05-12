# Angular Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/SG_NG
----------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
3) NodeJS Latest LTS
----------------------------------------------------
Day 1) JS, ES2015/ ES6, NodeJS, Webpack and TypeScript
Day 2 and 3) Angular
-------------------------------------------------------
JavaScript: Scripting language, loosely typed
Runs on JS engine [developed using C++] ==> V8 [google], SpiderMonkey, Chakra, NashHorn, ...

myFile.js
var g = 100;

function add(x, y) {
    var result = x + y;
    return result;
}
var res = add(4,5);
console.log(res);

Execution Context: Global Creation Phase, Global Execution Phase, Function Creation Phase & execution Phase
-----------------------------------------------------------------

var g = 100;
function doTask() {
    var a = 10;
    if( g > a) {
        var b = 20;
        c = 50;
    }
    console.log(g,a,b,c)
}
doTask();

console.log(g,a,b,c);
-------------------------------------

function add(x,y) {
    return x + y;
}

console.log(add(4,5)); // 9

-------------
Engine introduces semi-colon when before performing AST 
function add(x,y) {
    return 
        x + y;
}

console.log(add(4,5)); // undefined
------------------------------------------------------------

JS is single threaded and event-loop based

console.log("Hi");

setInterval(function dotask(){
    comsole.log("Time out!!)
}, 10);

$("#btn").click(function clicked() {
    console.log("clicked!!!);
});


console.log("Bye");
-------------------------------


psuedocode for event loop
var pendingTimers = [];
var pendingCallbacks= [];
var pendingOsTasks = [];

function shouldContinue() {
    return pendingTimers.length >0 || pen dingCallbacks > 0 ...
}
while(shouldContinue()) {

}
setInterval(function dotask(){
    another();
}, 10);


function another() {
    second();
}

function second();
---------------------------------------------------

OOP with JS

1) function constructor with class owned instance methods

function Person(name, age) {
    this.name = name; //state
    this.age = age; // state
}
//instance methods
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}
//static methods
Person.getCount = function () {
    return 100;
}

var p1 = new Person("Raj", 34);
p1.getName();
p1.getAge();
Person.getCount();
-----------

1) function constructor with object owned instance methods

function Person(name, age) {
    this.name = name; //state
    this.age = age; // state
    this.getName = function() {
        return this.name;
    }
    this.getAge = function() {
        return this.age;
    }
};

var p1 = new Person("Raj",55);
var p2 = new Person("Smitha",21);

p1.getName();
p1.getAge();
========================

JSON ==> JavaScript Object Notation  {} ==> usually used to represent state ==> carriers of data

var obj = {}; // object

var person = {
	"id": 1,
	"name" : "Smith",
	"age" : 32,
	"getAge": function() {
		return this.age;
	}
};

person.age;

person.getAge();

=================
understanding "this" and bind()

var obj = {
	"age" : 100
};

var person = {
	"id": 1,
	"name" : "Smith",
	"age" : 32,
	"getAge": function() {
		return this.age;
	},
	"getName" : function() {
		return this.name
	}
};

var ref = person.getAge;

ref(); // undefined ==> Context is lost ==> this refers to "window"


ref = person.getAge.bind(person); // when reference is taken copy "person" context as "this"
ref(); // 32

ref = person.getAge.bind(obj); // when reference is taken copy "person" context as "this"

ref(); // 100
================

function add(x,y) {
	return x + y;
}

var add = new Function("x", "y", "return x + y");
======================================================
call & apply

function updateAge(age) {
	this.age = age;
}


var obj = {
	"age" : 100
};

var person = {
	"id": 1,
	"name" : "Smith",
	"age" : 32
}

updateAge.call(obj,99);
obj.age; // 99

updateAge.call(person,55);
person.age; // 55
-------------------------------------------------------------

Functional Programming with JS
------------------------------

OOP ==> methods() ==> thightly coupled to state of object
	Account ==> credit() and debit() => uses "balance" state

functional style of programming -=> functions which can be used on any type of data [ objects, prmitives,..]
	Example: filter, iterate, map,...

	Functional style of Programming uses High Order Functions:
		1) functions which accept function as argument
		2) function which returns a function
		==> treat function as first-class members [ primitive , object]

	var x = 10;

	x = function() {

	}

	x = {}
-------------------------------

Without HOF:

var data = [6,41,2,11,77];

for(var i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(var i = 0; i < data.length; i++) {
	alert(data[i]);
}

With HOF:

function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

forEach(data, console.log);
forEach(data, alert);

function someTask(elem) {
		writeToFile(elem)
}
forEach(data, someTask);
--------------------------------------------

Commonly used HOF:
filter, map, reduce, forEach, flatMap, skip, limit,..

	filter ==> subset 
	map ==> transform
	reduce ==> aggregate [ sum, ,max, avg, count] 
	forEach --> iterate
	flatMap => convert one type of stream to another type of stream

 var products = [
       {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
       {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
       {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
       {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
         {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];


         function filter(elems, predicateFn) {
         	create array
         		loop thro elem in elems
         			if predicateFn(elem)
         				add to array
         		end loop
         	return array
         }
-----------------------

  function map(elems, transformFn) {
         	create array
         		loop thro elem in elems
         			add to array transformFn(elem)
         		end loop
         	return array
 }
---------------
https://rxmarbles.com/
---------------------------------------------------

HOF 2: functions returning functions ==> Closure

without closure:
// pure function
function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good Morning", "Geetha");
greeting("Good Morning", "Sita");
greeting("Good Morning", "Harry");


With Closure using HOF:

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var mg = greeting("Good Morning");


mg("Geetha");
mg("Sita");

Closure is a concept wherein inner function has an access to members of outer functions

===========

Implementing Memoziation design pattern with Closure [ cache]

getEmployee(24); ==> REST call to server get JSON

subsequent calls to getEmployee(24); should get from cache

getEmployee(2); ==> REST call for different employee

===========

Without memoization:
function fibanocci(no) {
            return no == 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
        }

        console.time("first");
         console.log(fibanocci(34));
        console.timeEnd("first");

        console.time("second");
         console.log(fibanocci(34));
        console.timeEnd("second");

------------

With memoization:


function memoize(fn) {
            var cache = {};
            return function(arg) {
                if(!cache[arg]) {
                    cache[arg] = fn(arg);
                }
                return cache[arg];
            }
        }
        function fibanocci(no) {
            return no == 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
        }
        var memFib = memoize(fibanocci);

        console.time("first");
         console.log(memFib(34));
        console.timeEnd("first");

        console.time("second");
         console.log(memFib(34));
        console.timeEnd("second");
------------------------------------------------
ES 5 is supported by almost all current browsers

ES 2015 / ES 6
ECMAScript

Development can happen in ES6, we use Transcompiler to convert to lower version ==> ES5

Transcompiler , Transpiler ==> Babel, Traucer

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.

New Features of ES 2015 / ES 6
1) scope variables [ let and const]


var g = 100;
function doTask() {
    var a = 10;
    if( g > a) {
        let b = 20; // scope is within block; with "var" hoisted to function scope
        c = 50;
    }
    console.log(g,a,b,c); // b is not visible
}
doTask();

console.log(g,a,b,c);
---------

const PI = 3.14159; // constant 

2) Arrow Operator ==> Lambda expression and default values

function add(x,y) {
	return x + y;
}

with Arrow operator

let add = (x,y) => {
	return x + y;
}

also

let add = (x,y) => x + y;

also

let add = (x = 0, y = 0) => x + y;

add(); // 0
add(5); // 5
add(4,5); // 9

without default and arrow:

function add(x,y) {
	x = x || 0;
	y = y || 0;
	return x + y;
}
--------------

https://caniuse.com/

3) Destructing arrays

	var colors = ["red", "green","blue","orange","pink"];

	ES 5:
		var r = colors[0];
		var g = colors[1];

	with ES 6:

	let [r,g,b,...others] = colors;

	r will be red
	b is blue
	others  will be ["orange","pink"];


[...] spread operators

4) Destructing objects

let p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};


// Traditional way:
console.log(p.name, p.age); // iPhone

// ES6:
let {name,price} = p;
console.log(name, price ); // iPhone, 124447.44

or
let {name:n,price:amt} = p;
console.log(n, amt ); // iPhone, 124447.44

5) new way to clone 

var colors = ["red", "green","blue","orange","pink"];
 
let ref = colors;
 
ref[0] ="GOld"
"GOld"

colors
(5) ["GOld", "green", "blue", "orange", "pink"]
ref
(5) ["GOld", "green", "blue", "orange", "pink"]



Clone using spread operator:
var colors = ["red", "green","blue","orange","pink"];

let clone = [...colors];
clone[0]="Magenta"
"Magenta"
clone
(5) ["Magenta", "green", "blue", "orange", "pink"]
colors
(5) ["GOld", "green", "blue", "orange", "pink"]
---------------------------------------------------

6) Template Literals

ES5: strings can be in "Hello" or 'Hello'

ES6: `tick operator`

var name = "Peter";

var msg = `Welcome ${name},
to Angular Training
Virtual Training`


var elem = `<div>
<h1>${customer.firstName}</h1>
<h2>${customer.lastName}</h2>
<p> Welcome to Angular</p>
</div>`

--------------------------

7) Promise API ==> Asynchronous code execution ==> execute side effects
	Promise => resolve , reject
	Java: Future and Callable

	fetch('https://jsonplaceholder.typicode.com/users/1')

	synchronous method calls:

	let res = doTask();
	console.log(res); // this code executes only after doTask() is complete

	Promise APIs: assume doTask() is promise based
	doTask()
		.then(
			(data) => console.log(data) /*resolved code */,
			(err) => cosole.log(err) /* rejected code */);

	console.log("Hello"); // executes before doTask() completes

	-----
	doTask()
		.then(
			(data) => console.log(data) /*resolved code */,
			(err) => console.log(err) /* rejected code */)
		.catch(ex) {
			console.log(ex)
		};
--------------

8) async and await for Promise API to avoid nested callbacks
-------------

9) Generators are functions with multiple return values
	
	function* saga() {
		console.log("task1");
		console.log("task2");
		yield "result 1";
		console.log("task3");
		console.log("task4");
		yield 100;
	}

	let iter = saga();
	iter.next(); 
	iter.next();
-----------------------------
10) Module System and class
	
	Prior to ES 6: IIFE was used as module system ()();
	Immediate Invoke Function expression
	let customerModule = (function () {
		let g = 100; // private to customerModule
		function one() {
			console.log(g);
		}

		function two() {
			console.log(g);	
		}
	})();

	let orderModule = (function () {
		let g = 500;
		function three() {
			console.log(g);
		}

		function two() {
			console.log("SS", g);	
		}
	})();
-----------

	ES 6 Module System and class

	person.js
	export class Person {
		 constructor(name, age) {
		 	this.name = name;
		 	this.age = age;
		 }

		 getName() {
		 	return this.name;
		 }
	}

	other.js
	import {Person} from './person';

	let p = new Person("Sam", 43);

	=============

	lib.js

	export add = function(x, y) {
		return x + y;
	}

	export sub = function(x, y) {
		return x - y;
	}

	let mul = function(x,y) {
		return x * y;
	}

	other.js
	import {add, sub} from './lib';
	console.log(add(5,6));
	================================

	person.js
	export default class Person {
		 constructor(name, age) {
		 	this.name = name;
		 	this.age = age;
		 }

		 getName() {
		 	return this.name;
		 }
	}

	other.js
	import Person from './person';

	let p = new Person("Sam", 43);
===================

Node.js, webpack and TypeScript 
===============================

Node.js ==> an environment with V8 JavaScript engine
	Why Node.JS?
		1) To build realtime streaming API [ for Java: Netty with WebFlux]
			build RESTful web services/ GraphQL
		2) To build standalone application
		3) as build environment for client-side web applications

	As Build environment for client-side applications with the help of build tools:
		* code might be written in TypeScript, ES6, CoffeeScript, LiveScript
		 Transpile thme to ES5 to make it portable across browser
		* We might use Module systems, which are not understood by browsers, we might need
			to bundle them [ Browserify]
		* minify, uglify to reduce payload	
	-------------------------
	WebAPI ==> Libuv [ C++ library]

	Node.js when started loads many pre-defined modules [ fs, http, crypto, repl, cluster]
	NPM / YARN ==> Node Package Manager is handle 3rd party modules
			* download, update, upload

	Project specific modules
		npm install react
	executable modules
			npm install -g json-server

	Every node.js project has "package.json" ==> pom.xml used by Maven
	1) package.json
	{
		"dependencies": {
			"@angular/core": "^8.0.1"
		}
		"devDependencies": {
			"jest": "~26.6.3"
		},
		"scripts": {
			"start" : "ng  serve --port 1234",
			"test": "mocha --spec line"
		}
	}

	npm start

	2) "node_modules" folder
		place where dependencies are downloded for the project
--------------------------------------------------------------------
	Person.js
	babel Person.js ==> Person.js with ES5

	JavaScript build tools ==> to automate tasks like : transcompiler, lint, testing, uglify,
	minify, bundle


	1) Grunt
	2) Gulp
	3) Webpack

	Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 


	CommonJS module system

	lib.js

	module.exports.add = function(x,y) {..}

	module.exports.sub = function(x,y) {..}	


	other.js

	let lib = require('./lib');

	console.log(lib.add(4,5));
----------------
index.html

<script src="funcs.js"></script>
<script src="Person.js"></script>
<script src="index.js"></script>
======================================================
 "bootstrap": "^4.6.0",
  "font-awesome": "^4.7.0",

@import 'bootstrap/dist/css/bootstrap.min.css';

@import 'font-awesome/css/font-awesome.css';

npm i -g @angular/cli@latest
ng --version

npx -p @angular/cli ng new customerapp
npx ng g c 
========================



Day 1 Recap: 
JS, Execution Context, Event loop, callbacks, Functional style of programming, 
HOF, Closures, memoize pattern, ES 6 features, ES 6 module system [ exports and import],
Node.JS as build environment, webpack JavaScript Build tool 


Day 2
------
JavaScript ==> loosely typed and dynamically typed

TypeScript => datatypes for JavaScript

JS engine

ESNext, TypeScript, CoffeeScript, DART, LiveScript are used only in development stage
these are transcompiled into JS for production.

ESNext or ES6 we use babel
babel a.js

TypeScript
npm i -g typescript

Person.ts

tsc Person.ts ===> Person.js [ production]

TypeScript datatypes:

1) Number
	
	let x:number = 10;
	x = "A"; // error

2) String
	let name:string = "Peter";

3) boolean
	let flag:boolean = true;

4) Array type

	let data:number[] = [5,3,62];

	or

	let data:Array<number> = [5,326,2];

5) any

	let data : any;

	data = doTask(); // not sure what type of data this method returns

	// allows to use behaviour on return type

	data.toUpperCase(); // runtime
	data.firstName; // valid for tsc
6) unknown

	let data : unknown;

	data = doTask();

	data.toUpperCase(); //error
	or
	data.firstName; // error

7) enum
	enum Priority {
		LOW, MED, HIGH
	};

	let bug:Priority = Priority.HIGH;

8) void

9) interface
		8.1 ) to define a shape

			interface Person {
					id:number,
					name:string,
					address?: string
			}

			function addPerson(person: Person): void {

			}

			addPerson({"id":2,"name":"Priya"}); // valid
			addPerson({"id":2,"name":"Priya", "address": "some address"}); // valid

			addPerson({ "name":"Priya", "age": 23}); // invalid

		8.2) to define a contract
			interface Flyable {
				fly(): void
			}

			class Bird implements Flyable {
				//

				fly(): void {

				}
			}
9) Tuple
	
	let x:[string,number] = ["Hello", 5];

10) never

	function doTask(): never {
		throw new Error("Boom :-(")
	}
=============

	TSX ==> TypeScript and XML

	function Welcome(props) {
		return(
				<div>
						<h1> {props.name} </h1>
				</div>
			)
	}
===================

TypeScript Decorators [ metadata] @decoratorName

Metdata can be placed on class, function, fields ...

@Component({
	"selector": "<product>",
	"templateUrl" : `<div>....</div>`
})
public class ProductComponent { 
	products:Product[] = []; //state

	deleteProduct(id:number):void { // behaviour

	}
}

HTML
	<product></product>

@Component({
	"selector": "<customer>",
	"templateUrl" : `<div>....</div>`
})
public class CustomerComponent { 
	customers:Customer[] = []; //state

	deleteCustomer(id:number):void { // behaviour

	}
}

Object.defineProperty(CustomerComponent.prototype, "selector", {value : "<customer>"});

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


============

Creating Decorators is using HOF using Closure
==================================================
 
 Angular v11
 -----------
 npm install -g @angular/cli
 ng --version

 ng new customerapp
 	==> strict ==> Y
 	==> Routing ==> N
 	==> CSS
 =====================================
 OR
 npx -p @angular/cli ng new customerapp
 ======================================

 Web application development
 1) Server side rendering
 	data ==> presentation on Server
 	Java ==> Servlet, JSP, Themyleaf
 	.NET ==> ASP, ASP.NET
 	JS ==> Jade, PUG, EJS
 2) Client Side renderning
 	server sends data to client, client renders to presentation
 	JS ==> 
 	JS DOM, ajax
 	Template libarires: jQuery, Handlebars, Mustache, Underscore

	 <script id="entry-template" type="text/x-handlebars-template">
	  <div class="entry">
	    <h1>{{title}}</h1>
	    <div class="body">
	      {{body}}
	      <input type="text" value={{name}} />
	    </div>
	  </div>
	</script>

	View Library : React [ In MVC ==> only View part]

	Frameworks: Backbone, Ember.js, CanJS, Angular.JS [ 1.x ] , Angular [ 2+], Vue
		==> Complete Solution

	Why Angular?
		1) Modularized ==> allows me to develop application as modules
				CustomerModule, ProductModule, PaymentModule
		2) better building blocks
		3) DI: Dependency Injection [ SOLID Design Principles]
			many dependency injectors ==> platform, root, module
		4) Two-way binding
		5) Routers	==> SPA ==> Single page application
			different URIs should display different views ==> SEO
			index.html

				http://amazon.com/mobiles/iphone
				http://amazon.com/mobiles/OnePlus
				http://amazon.com/mobiles/iphone/12
				http://amazon.com/tv/android
				http://amazon.com
				http://amazon.com/cart
--------------------------------------------------------------------------------------------

Angular Building Blocks:
1) Module				
	AppModule, CustomerModule, ProductModule, PaymentModule
	@NgModule()
2) Component
	view components
	An application contains many View Components
	state and behaviour specific to entity

	for Example: ProductComponent should have product data, CRUD on product
	@Component
3) Services
	code which has business logic, API calls ==> http 
	@Injectable
4) Router module
5) Directives
	can be used along with DOM elements and Component 
	to introduce additional behaviours which does not imply to CRUD like highlight component
	hide, show
	<customers highlight></customers>
6) Pipe
	to transform data
	{{date | dateFormat('dd-mm-yyyy')}}
	{{ firstName | upper }}
7) HTTPInterceptors
	sending tokens [ JWT], encrypt
8) Guards
====================

ng new customerapp
	creates a scafollding code internally uses webpack [ hidden webpack.config.js]
	to customize webpack ==> angular.json

	 "main": "src/main.ts"
	Angular Compilers: "aot": true form Angular 8+ default
	1) JIT ==> Just In Time Compiler
			Browser will have Angular compiler loaded , which compiles angular to JS code
	2) AOT ==> Ahead of Time
			compiled code is loaded on browser

main.ts
	loads AppModule
	platformBrowserDynamic().bootstrapModule(AppModule)
==============

Adding components:

ng generate component customers
or
ng g c customers
======================================

Bootstrap is a CSS framework for Responsive Web design
fontAwesome --> Icons

PArent comonent passes data using [] property tag
<app-customer-card [customers]="customers"></app-customer-card>
=======================================================================

npm i bootstrap@4.6.0

npm i font-awesome@4.7.0
=======================================================================

main.ts ==> bootstraps AppModule

AppModule ==> contains many components ==> Bootstrap ==> AppComponent

AppComponent ==> loads CustomersComponent

CustomersComponent ==> loads CustomerCardComponent
=========

Event handling ():
 (click)="deleteCustomer(customer.id)"

 (keyup)=""

=========
					<input
                      type="text"
                      name="searchText"
                      class="novalidate form-control  mr-sm-2"
                      [(ngModel)] ="searchText"
                      (keyup) = "filterCustomers()"
                    />

       Two way binding:
        [(ngModel)] ="searchText"
===========================================================
JS Unit Testing libraries:
1) Mocha
2) Jasmine
3) JEST

//Test Suite
describe("testing customer comp", () => {
	
	// Test case
	it("test delete", () => {
		//action
		//assert
	})


	it("test filter", () => {
		//action
		//assert
	})


})

JS E2E testing:
	1) cypress
	2) Selenium

Angular Testing:

1) Unit testing
	on top of Jasmine
	Karma ==> Test Runner
2) E2E Testing
	protractor

==========
Unit Testing example:
customers.component.spec.ts

E2E Testing using Protractor
==============================================

Angular Services
-----------------
Business logic / Http API calls/ communicate between components which doesn't have parent child relationship

rxjs ==> ReactiveJS ==> Observable Observer Pattern
=====================================================

stackblitz.com
https://ng-banu-http.stackblitz.io

SharedService:

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data: any[] = [];
  subject: Subject<any> = new Subject();
  constructor() { }

  getSubject(): Subject<any> {
    return this.subject;
  }

  addData(elem) {
    this.data.push(elem);
    this.subject.next(this.data);
  }
}


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.sharedService.addData(new Date());
    }, 2000);
  }
}

======
@Component({
  selector: "hello",
  template: `
    <div *ngFor="let d of information">
        {{d}}
</div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  information: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data => {
      this.information = data;
    });
  }
}
-----------------------------------------------------------------

import { fromEvent } from "rxjs";

import { debounceTime } from "rxjs/operators";

let clicks = fromEvent(document, "click");

let result = clicks.pipe(debounceTime(1000));

result.subscribe(x => console.log(x));
result.subscribe(x => console.log("clicked!!!"));

----------------------------------------
Fake REST API:
npx json-server --watch data.json --port 1234
-----------------------------------------------

Day 3:
------

@NgModule, @Component, @Input() ==> Property from parent to child, @Output() ==> EventEmitter

[] property
() event
[()] two-way binding == ngModel

unit Testing with Angular Test Bed [ on top of Jasmine Unit testing framework]
E2E with Protractor [ on top of Jasmine]

--------
main.ts ==> bootstraps AppModule ==> bootstraps AppComponent ==> ...
-----

Service classes ==> @Injectable
1) communication between components [ need not be parent-child relationship]
Service class has rxjs.Subject [ Observer + Observable]
==> Subjects are Observables, Subjects also implement an Observer interface.

Component will update the state in service, service will notify the observers
@Injectable()
export class MyService {
	data:any = [];
	setters and getters
}


AComponent updates data;
BComponent needs data; //?
--------------------------------------------------------------

HttpClientModule has HttpClient service ==> http calls 

data.json
{
	"customers" :[..],
	"orders" :[...],
	"products": [...]
}


npx json-server --watch data.json --port 1234

or

npm i -g json-server
json-server --watch data.json --port 1234
---------------------------------------------------------------------------

using Services:
1) Creating DataService:
	ng g s common/data
2) add HttpClientModule in app.module.ts
import {HttpClientModule} from '@angular/common/http';
 imports: [
    BrowserModule, FormsModule, HttpClientModule
  ]
3) use HttpClient service provided by   HttpClientModule in DataService

rxjs pipe() can take rxjs/operators ==> map(), filter, skip(), limit, shareReplay()


shareReplay() avoid multiple subscriptions

var obs = new Observable(...);

obs.subscribe(data ==> ...)
obs.subscribe(data ==> ...)
obs.subscribe(data ==> ...)

==========

import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/customer';
import { DataService } from '../common/data.service';
import { Observable } from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] 
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  original: Customer[] = [];
  searchText: string = "";
  isCard:boolean = true;
  customerObservable$!: Observable<Customer[]>;
  
  // DI
  constructor(private dataService:DataService) { 
    this.customerObservable$ = this.dataService.getCustomers().pipe(shareReplay());
  }

  ngOnInit(): void {
    this.customerObservable$.subscribe(data => (this.customers = this.original = data));
  }

  deleteCustomerParent(id: number) {
    console.log("parent", id);
    // this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(data => console.log(data));
    this.customerObservable$.subscribe(data => (this.customers = this.original = data));
  }

  filterCustomers() {
    // console.log(this.searchText)
    this.customers = this.original.filter(c => {
      if ((c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0) ||
        (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)) {
        return true;
      }
      return false;
    })
  }
}

===============
Subscribe without unsubcribe() leads to memory leak

UnSubscribe:
customerSubscription$!: Subscription;
  
  // DI
  constructor(private dataService:DataService) { 
   
  }
  ngOnDestroy(): void {
    this.customerSubscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.customerSubscription$ = 
    this.dataService.getCustomers().subscribe(data => (this.customers = this.original = data));
  }
==============

Auto unsubscribe:
 
 customers$!:Observable<Customer[]>;
  
  // DI
  constructor(private dataService:DataService) { 
   
  }
   
  ngOnInit(): void {
      this.customers$ = this.dataService.getCustomers();
  }

<app-customer-card *ngIf="isCard === true"
    [customers]="customers$"
    (delEvent)="deleteCustomerParent($event)" 
    ></app-customer-card>

customer-card component:
subscribe in template using "async"

*ngFor="let customer of customers | async"
------------


+++++++

HttpClientModule has HttpClient Service ==> to make HTTP calls ==> CRUD returns Observable

subscribe on Observable to recieve data

Generally we make subscriptions in ngOnInit()
and unsubscribe in ngOnDestroy()

or use Observable directly in templates with | async; this takes care of autounsubscribe
like:

here product$ is Observable and not products[]
<div *ngFor="let product of products$ | async"> 
	{product.name}
</div>

pipe(operators)
=> map(), tap(), filter(), skip(), limit(), debounce(), shareReplay() "to share observble subscribtion"
===================================================================
1) Component

@Component({
  selector: 'app-customer-card'
 templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
  <app-customer-card />

2) Service ==> SharedService and DataService
3) Directives 
	behaviour which is not based on entity; more like DOM handling
	ng g directive common/hover

	@Directive({
	  selector: '[appHover]'
	})
	export class HoverDirective {

	  constructor(private el:ElementRef, private renderer: Renderer2) { }

	}

	<app-customer-card appHover/>
	<div appHover/>
	ElementRef: A wrapper around a native element inside of a View.
	Renderer2:  Extend this base class to implement custom rendering.
4) Pipe
	is to transform data 

	{{date | format:'dd-MM-yyyy'}}

ng g pipe textconverter

{{customer.firstName | textconverter : 'upper'}}

@Pipe({
  name: 'textconverter'
})
export class TextconverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
============================================================================
parent pass property to child ==> [] and in child @Input()
child passes event of parent () and using EventEmitter

Angular
@ViewChild

==> use this in a scenario where parent component has to access members of child component

class Parent {
	@ViewChild(Child)
	childRef:Child;

	handleClick() {
		this.childRef.doTask();
	}
}
<div>
	<Child></Child>
	<button (click)="handleClick()">Click</button>
</div>

class Child {
	
	doTask() {
		// code
	}
}

https://stackblitz.com/edit/ng-view-child

export class SecondComponent {
  doTask() {
    console.log("Task executed!!!");
  }
}


export class AppComponent {

  @ViewChild("ref")
  txtRef: ElementRef;
  
  @ViewChild(SecondComponent)
  second:SecondComponent;

  ngAfterViewInit() {
    this.txtRef.nativeElement.value = "TEST";
    this.txtRef.nativeElement.focus();
    console.log("called", this.txtRef);

    this.second.doTask();
  }
}

<input #ref type="text" />
<second></second>

=====================================

5) Modules
	create a module:
	ng g module orders

	add components to module:
	ng g c orders --module=orders


6) Routers
	different views we need different URLs
	==> SEO
	==> Bookmark
	==> to use History API [ navigate between views and not pages]

	 "@angular/router": "~11.0.6"

app.module.ts
	 import {Route,RouterModule} from '@angular/router';

 const routes: Route[] = [
  {
    path : 'customers',
    component: CustomersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path : '**',
    component: CustomersComponent
  }
];

imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ]

	http://localhost:4200/home
	http://localhost:4200/customers

	http://localhost:4200/
	http://localhost:4200/abc

	app.component.html
	<router-outlet></router-outlet>


   <a class="nav-link" href="#" routerLink="/customers">Customers</a>
   <a class="nav-link" href="#" routerLink="/orders">Orders</a>

   Lazy loding OrdersModule
   child roots:
   http://localhost:4200/orders 
   this loads orders module
   http://localhost:4200/orders
   http://localhost:4200/orders/fulfilled
   http://localhost:4200/orders/cancelled
   http://localhost:4200/orders/pending


   uses of multi-module system:
   1) more modularized
   2) lazy loading of modules in browser [ better User experence]
   		instead of having a single bundle main.chunk.js
   			many chunks loaded as and when required
===================================================

Post Lunch ==> Guards, Customer Edit Component [ path parameter], Interceptor

RouterModule, Route, RouterModule.forRoot() and RouterModule.forChild()
<router-outlet></router-outlet> placeholder for Router to render component
loadChildren: () => import(...).then(m => ...) for lazy loading modules 

Core Web vitals ==> FCP ==> First Content Paint
	1) Lazy Loading
	2) Perform API calls in ngOnInit() instead of Constructor
		at least view can be rendered with default values

Guard:
ng g guard linkactivate
window.sessionStorage.setItem("user","banu")

==========

Router with Path Parameter:
 {
    path: 'customers/edit/:id',
    component: CustomersEditComponent
  },


 <a class="float-right fa fa-edit" [routerLink]="['customers/edit', customer.id]" ></a> 
           
 customer-edit.component.ts
 customer-edit.component.css
 customer-edit.component.html

 =================

 Using HttpInterceptors:
 ng g service common/auth

ng g interceptor myhttp
=================

npm run build
npm install --D source-map-explorer

node_modules\.bin\source-map-explorer dist\vendor.js
====================================================

ChangeDetection
	==> How angular renders the views?
	uses NgZone
	zone.js runs detection loop whenver a callback executes from timers, http calls



@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  foods = ["Burger", "Rolls", "Pizza"];

  addFood(food) {
    // this.foods = [...this.foods, food];
    this.foods.push(food);
  }
}
<app-child [data]="foods"></app-child>
========

import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent {
  @Input() data: string[];

  constructor(private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }
}



========
 1) Default behaviour:
 whenever data passed as @Input changes it triggers change detection on child elements
 and re-renders
 changeDetection: ChangeDetectionStrategy.Default

 2) OnPush
 Change detection happens only on first passing of @Input values
 subsequent changes won't trigger re-render of child
 changeDetection: ChangeDetectionStrategy.OnPush

 Use ChangeDetectionRef [ ngZone]
 to forceilably re-render
  constructor(private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }
===================================================================

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.document.addEventListener('click', this.onDocumentClick.bind(this));
    });
  }
====================================================

 

