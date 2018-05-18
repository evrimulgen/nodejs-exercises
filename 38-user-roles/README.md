# User/Admin Roles

* in Login setLocalStorage coming login route: `res.data.user.role`
* on server, in `/login` route send user information such as role in a json object
* use the useRole in ProjectList where user cannot edit but admin can edit a project
* edit Login.js on client to check for the correct user role
* add state and use that reference in conditional check
* get user role form localStorage
  * if admin, they can edit the project details
  * if user, they can only view the project details
