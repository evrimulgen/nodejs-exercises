const Sequelize = require('sequelize');
var conn;
(async function() {
	if (!conn) {
		try {
			// Initialize the connection on the first run
			conn = new Sequelize('dbName', null, null, {
				dialect: 'sqlite',
				storage: 'test.sqlite'
			});
			console.log('Connected to the database.');

			// Create the tables
			try {
				await conn.sync({ force: true });
				console.log('Created the tables successfully.');
			} catch (error) {
				console.log('Cannot create the tables.\n' + error);
			}
		} catch (error) {
			console.log('There was a problem with connection.\n' + error);
		}
	}
})();

const Projects = conn.define('Projects', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	code: Sequelize.STRING,
	name: Sequelize.STRING,
	description: Sequelize.STRING,
	owner_id: Sequelize.INTEGER,
	owner_name: Sequelize.STRING,
	category_id: Sequelize.INTEGER,
	created_date: Sequelize.DATE
});

module.exports = {
	connection: conn,
	models: {
		projectsTable: Projects
	}
};
