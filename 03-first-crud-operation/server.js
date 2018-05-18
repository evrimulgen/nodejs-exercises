const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
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
				res.end(`
				${data}\n
				You sent a  <em>${req.method}</em> request\n
				`);
			}
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
