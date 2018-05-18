# Database Connection - MySQL

* install sequelize, sqlite3, sequelize-cli
* in server root create: $ touch test.sqlite
* rename config.json to dev.config.json
* use sequelize cli to initalize our server api: `node_modules/.bin/sequelize init`
* this time we will configure models/index.js ourselves for sqlite3
* we create an instance of the model and feed some data in the start
* then we require this file in server.js before routes and any other middleware
* then create a new route below any other route in server.js to get projects list
* another route to seed projects in database and run it
* then go to client and start it
* go to /projects route from browser and you will see the result
