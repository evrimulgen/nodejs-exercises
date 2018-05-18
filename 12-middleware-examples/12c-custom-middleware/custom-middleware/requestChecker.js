module.exports = function(req, res, next) {
	if (req.method === 'GET') {
		console.log('=== GET Request ===');
	} else if (req.method === 'POST') {
		console.log('=== POST Request === ');
	}
	next();
};
