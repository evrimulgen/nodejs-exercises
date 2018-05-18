# 01- Simple Nodejs Web Server

* use `http` and `fs`
* `fs` is used to read index file
* `__dirname`: global variable that refers to the directory of the current module

```js
const server = http.createServer((req, res) => {
	let filePath = '.' + req.url;

	if (filePath == './') {
		filePath = __dirname + '/public/index.html';
	}

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Error Getting File.');
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
});
```

* use `fs.readFile` to read `index.html` from `public/`
* add if clause in case of an error when reading file from `public/index.html`
* add `server.listen()` to prompt a message that the server started running on a host using a specific port.
