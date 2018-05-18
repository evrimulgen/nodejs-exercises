# JWT Tokens Authenticam

* install `jsonwebtoken`
* in `routes.js` require `jsonwebtoken`
* create new route `/login`
* in `/login` add a mock user with fields: id, username and email
* use jwt.sign() asynchronously fetch token and use mock user as payload along with a sercret key
* use postman and visit `http://localhost:3001/api/login` route to fetch token
* create a new middleware function for authorization called `verifyToken`
* inside `verifyToken` define a new variable `bearerHeader` that will look and store token from `req.headers`
* if there is no request.headers or token, we will send status code of 403 (forbidden)
* we will use this middleware in route `/api/tasks`
* if you try now, since there is no token, it will return `Forbidden`
* use `jwt.verify()` in `/api/tasks` to verify the correct token
