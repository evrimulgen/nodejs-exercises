# # Store JWT Token Secret ENV Variables

* install `dotenv`
* create `.env` in root and define a `JWT_SECRET` for JWT Secret implementation
* require dotenv with path to .env file in server.js
* in routes.js replace config.secret with process.env.JWT_SECRET
