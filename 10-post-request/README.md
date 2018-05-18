# POST Request

* in server.js define another function of bodyparser middleware to read form data `bodyParser.urlencoded` before `bodyParser.json()`
* in `/api/routes` folder define a new route `/projects/add/project` using `routes.post()` that in return will send the same data that it receives from the client, back to client.
