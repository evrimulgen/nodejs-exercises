# Database Connection - MySQL

* install sequelize, mysql2, sequelize-cli
* rename config.json to dev.config.json
* use sequelize cli to initalize our server api: `node_modules/.bin/sequelize init`
* create model for projects
* make sure migration file contains every field that you defined in the model field
* aslo make sure you have database created
* then run node_modules/.bin/sequelize db:migrate
