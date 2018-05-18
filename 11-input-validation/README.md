# Input Validation

* install express-validator
* in `server.js` import it and define it as a middleware function after bodyParser middleware functions
* in file `api/routes.js` import `check` and `validationResult` from `express-validator/check`.
* then modify our post route `/projects/add/project'` that adds a new project
* pass a input check that it only accpets `id` with no blank spaces and only a number as its value
* if there are any errors while sending the input value from client, we will return it using `validationResult(req)` and passing `req` as an argument.
* if everything is fine we return the result
