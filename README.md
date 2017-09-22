# angular-training-1.0
Angular training 1 batch Sept 2017
# Following installation is needed 
1) Install latest node js version on your machine, Igone it if node is already installed on your machine <br/>
reference => https://nodejs.org/en/download/

2) Check node and node package manager is correctly installed or not by using following command <br/>
=> node --version<br/>
=> npm --version

3) Install git if not installed on you machine
=> https://git-scm.com/book/en/v2/Getting-Started-Installing-Git 

4) Install bower on your machine with administrator rights

 => Open up the Git Bash or Command Prompt and Bower is installed globally by running the following command.<br/>
   -> npm install -g bower

# Topics :

## 1) Dependency management tools - NPM, Bower <br/>
## 2) AngularJs 1 <br/>
 ### Core Features
 Following are most important core features of AngularJS −

  a) Data-binding − It is the automatic synchronization of data between model and view components.

  b) Scope − These are objects that refer to the model. They act as a glue between controller and view.

  c) Controller − These are JavaScript functions that are bound to a particular scope.

  d) Services − AngularJS come with several built-in services for example $https: to make a XMLHttpRequests. These are singleton objects    which are instantiated only once in app.

  e) Filters − These select a subset of items from an array and returns a new array.

  f) Directives − Directives are markers on DOM elements (such as elements, attributes, css, and more). These can be used to create     custom HTML tags that serve as new, custom widgets. AngularJS has built-in directives (ngBind, ngModel...)

  g) Templates − These are the rendered view with information from the controller and model. These can be a single file (like index.html)    or multiple views in one page using "partials".

   h) Routing − It is concept of switching views.

   i) Model View Whatever − MVC is a design pattern for dividing an application into different parts (called Model, View and Controller),     each with distinct responsibilities. AngularJS does not implement MVC in the traditional sense, but rather something closer to MVVM     (Model-View-ViewModel). The Angular JS team refers it humorously as Model View Whatever.

## 3) Tasks Manager - Grunt, Gulp


# Assignment No 1: 

1) Create bower.json file on your project directory through bower
2) Install angular js library by using bower
3) Add angular library into your index file
4) Add one input field into your html and show entered value inside any tag by using angular js


## Second Session 

1) We can start angular application manually
2) ng-controller , controller alise, controller scope, rootScope
3) ng-repeat 