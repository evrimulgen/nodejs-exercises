# File Upload

* Create a new component FileUpload in src
* add this component in App.js as a route for `/upload`
* visit http://localhost:3000/upload to access File upload screen
* on server, install express-fileupload
* create a public/ in server/
* require express-fileupload and add a express.static in server.js to add store uploaded image
* also in server.js add, a new route called `app.post('/upload', ...)`
