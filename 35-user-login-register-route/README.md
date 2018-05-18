# User model

* use sequelize cli to create user model: `node_modules/.bin/sequelize model:generate --name Users --attributes id:string`
* edit migration file for user model
* then run: `node_modules/.bin/sequelize db:migrate`
* modify login route in authRoutes.js to implement user authentication with database
* also implement register route on server side
