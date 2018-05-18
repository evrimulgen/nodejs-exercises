# Adding Options in JWT Signing Tokens

* Append authRoutes.js
* add a new options object in `/login` route
* before passing the callback add: `{ algorithm: 'HS256', expiresIn: '10h' }`
