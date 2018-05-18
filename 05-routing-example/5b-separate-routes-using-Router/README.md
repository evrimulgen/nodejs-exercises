# Separating Routes

* create a folder api in root
* inside `api/` folder create file called routes
* use express.Router() class to define routes and module.exports to the class variable available for use in `server.js`
* move both routes from `server.js` to `routes.js`
* also add `res.status()` as chain method while sending JSON data
* import `routes` from `./api/routes`
* consume our newly created routes after we define middleware functions
