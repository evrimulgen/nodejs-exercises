const chaiHttp = require('chai-http');
const chai = require('chai');

const app = require('../server');
const db = require('../models/index');

const Projects = db.projects;

chai.use(chaiHttp);
const expect = chai.expect;

describe('CustomersRouter', () => {
	before(() => {
		return Projects.sync({ force: true });
	});

	beforeEach(() => {
		const testObject = {
			code: 'ONE',
			id: 1,
			onwer_name: 'James Hansen',
			name: 'Project ONE',
			description: 'First PRoject'
		};
		return Projects.create(testObject);
	});

	afterEach(() => {
		return Projects.truncate();
	});

	after(() => {
		return Projects.drop();
	});

	describe('GET request on /api/projects', () => {
		it('should be json', () => {
			return chai
				.request(app)
				.get('/api/projects')
				.then(res => {
					expect(res.type).to.eql('application/json');
				});
		});
		it('should return a 200 status', () => {
			return chai
				.request(app)
				.get('/api/projects')
				.then(res => {
					expect(res.status).to.eql(200);
				});
		});
	});

	describe('GET request on /projects/:id', () => {
		it('should be a projects object', () => {
			return chai
				.request(app)
				.get('/api/projects/1')
				.then(res => {
					const project = JSON.parse(res.text);
					expect(project).to.be.an('object');
					expect(project.code).to.eql('ONE');
				});
		});
		it('should return a 404 code', () => {
			return chai
				.request(app)
				.get('/api/projects/2')
				.catch(err => {
					expect(err.status).to.eql(404);
					expect(err.message).to.eql('Not Found');
				});
		});
	});
});
