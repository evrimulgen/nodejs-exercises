# Strict Routing in Expressjs

* inside api folder create a new file `strict-routing.js`
* inside `strict-routing.js` define two new routes `/route1` and `/route1/` using express.Router() class instance and GET method. Lastly, export the class instance.
* require this class instance inside `server.js` as strictRoutes
* after middleware functions and other api routes, define a new api route `app.use('/strict, strictRoutes)` to consume newly created strcit routes
