# Combox in Status, Projects in Tasks Form and save data in API

* first fix home route from `/home` to `/` in App.js and in layout/Navbar.js
* next, go to TaskNew.js and a new select form to select project
  * use componentDidMount and project api to get names of projects to select
* then send the newly selected project back to api
* edit route /tasks/add/task which saves our data and include foreign keys or fields from projects model such as project name, id, owner's id, owner's name.
* also add a combobox for Selecting the status of an individiual task with pre-defined values.
