# Using JSON Config

* create a new directory `config` in root
* create a file called `config.json` inside it
* define a JSON object `development` with sub properties such as host and port
* inside server.js require this config.json file
* instead of using process.env.PORT when defining the port constant, use config.developement.port such that now the port number is coming from config.json
