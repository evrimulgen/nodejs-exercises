# Adding Options in JWT Signing Tokens

* edit models/user.js and a password field
* Append authRoutes.js
* check if user's email exists and then store the user coming from request
* then compare user password and password coming from req.body
* if correct, send the token
