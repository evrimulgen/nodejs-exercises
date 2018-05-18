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
	} else if (req.method === 'POST' && req.url === '/echo') {
		let body = [];
		req
			.on('data', chunk => {
				body.push(chunk);
			})
			.on('end', () => {
				body = Buffer.concat(body).toString();
				res.end(body);
			});
	} else if (req.method === 'PUT' && req.url === '/echo') {
		let body = [
			{
				key: 'val'
			}
		];

		req
			.on('data', chunk => {
				body.push(chunk);
			})
			.on('end', () => {
				body = body.toString();
				res.end(body);
			});
	} else if (req.method === 'DELETE' && req.url === '/echo/key1') {
		let params = { key1: 'val' };
		let body = [
			{
				key1: 'val'
			},
			{
				key2: 'val'
			}
		];

		req
			.on('data', () => {
				body = body.filter(key => key !== params);
			})
			.on('end', () => {
				body = body.toString();
				res.end('Data Removed.');
			});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
