# Custom Middleware

* create a new file called requestChecker.js inside `custom-middleware` folder inside root of our project
* define an arrow function inside requestChecker.js that will check for incoming request when attached as a middleware and will determine whether the incoming request is a GET or POST.
* require this newly created custom middleware and define its usage at the end of other middleware functions
