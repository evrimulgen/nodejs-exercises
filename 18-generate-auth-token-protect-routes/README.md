# Generate Auth Token & Protecting Routes

* We will separate our JWT authentication mechanism from `login` route such that we can use it in other routes too.
* create a `/models` directory and define a mock user inside it in `user.js`
* next we will also separate our JWT verification middleware function and require it on a higher level such as `server.js`
* create a folder middlewares and a file inside it: auth-verification.js
* next in function `verifyToken` we will also send a proper forbidden message along with HTTP status code 403
* remove verifyToken from routes.js `/tasks/`
* require our newly created middleware in `server.js`
* we will also separate our auth routes such as login from rest of the API such that API routes always need user to login. 
* Create a file authRoutes.js in `api/`
* separate unportected routes API such as authRoutes from the previous api we have created
* on the previous API use our auth middleware 
