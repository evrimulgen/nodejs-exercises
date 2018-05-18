# Route Parameters

* inside `/api/routes.js` define a database query function `findByProjectId` to fetch `projects` by using `id`.
* this `id` will be requested from client using route parameters such as `projects/:id`
* define a new route to get the list of projects `/projects/:id` and fetch the data from database using `findByProjectId` function.
