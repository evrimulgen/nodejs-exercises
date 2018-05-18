const expect = require('expect.js');

describe('models/index', function() {
	it('returns the tasks model', function() {
		let db = require('../models/index');
		expect(db.tasks).to.be.ok();
	});

	it('returns the projects model', function() {
		let db = require('../models/index');
		expect(db.projects).to.be.ok();
	});
});
