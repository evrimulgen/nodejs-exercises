const chaiHttp = require('chai-http');
const chai = require('chai');

const app = require('../server');
const db = require('../models/index');
const Users = db.Users;

// const User = require('../models/user');
chai.use(chaiHttp);
const expect = chai.expect;

describe('LoginRouter', () => {
	before(() => {
		return Users.sync({ force: true });
	});

	beforeEach(() => {
		const testUser = {
			email: 'root@gmail.com',
			password: 'pass'
		};
		return Users.create(testUser);
	});

	afterEach(() => {
		return Users.truncate();
	});

	after(() => {
		return Users.drop();
	});

	describe('Requests on /login', () => {
		it('should return a 403 status', () => {
			return chai
				.request(app)
				.get('/api/login')
				.auth('root@gmail', 'root')
				.catch(err => {
					expect(err).to.have.status(403);
				});
		});
		it('should return a 403 status', () => {
			return chai
				.request(app)
				.get('/api/login')
				.catch(err => {
					expect(err).to.have.status(403);
					expect(err.message).to.equal('Forbidden');
				});
		});
	});
});
