const routes = require('express').Router();
const data = require('../db/db.json');

// Get a list of all projects
routes.get('/projects', (req, res) => {
  res.status(200).json(data.projects);
});

// Get a list of all tasks

routes.get('/tasks', (req, res) => {
  res.status(200).json(data.tasks);
});

module.exports = routes;