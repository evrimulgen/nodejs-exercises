var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var jwt = require('jsonwebtoken');
var config = require('../config/dev.config.json');

const auth = function(req, res, next) {
	if (
		req.hasOwnProperty('headers') &&
		req.headers.hasOwnProperty('authorization')
	) {
		try {
			req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET);
		} catch (err) {
			return res.status(401).json({
				error: {
					msg: 'Failed to authenticate token!'
				}
			});
		}
	} else {
		return res.status(401).json({
			error: {
				msg: 'No token!'
			}
		});
	}
	next();
	return;
};

describe('Test Auth Middleware', function() {
	var request;
	var response;
	var next;

	beforeEach(function() {
		request = {};
		response = {
			status: sinon.stub().returnsThis(),
			json: sinon.spy()
		};
		next = sinon.spy();
	});

	it('next should not be called if no token provided', function() {
		auth(request, response, next);
		expect(next.called).to.equal(false);
	});

	it('should return 401 status code if no token provided', function() {
		auth(request, response, next);
		expect(response.status.getCall(0).args[0]).to.equal(401);
	});

	it('next should not be called if bad token was provided', function() {
		request.headers = {};
		request.headers.authorization = 'some authorization header';
		auth(request, response, next);
		expect(next.called).to.equal(false);
	});

	it('shoudl return 401 status code if bad token was provided', function() {
		request.headers = {};
		request.headers.authorization = 'some authorization header';
		auth(request, response, next);
		expect(response.status.getCall(0).args[0]).to.equal(401);
	});
});
