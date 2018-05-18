# Protected Routes

* edit src/authentication/login.js
* we will edit our `_onSubmit` function and `async await` to wait for response from the server. The server will be returning token in response.
* we will use axios to send form data and get response from api
* we then use localStorage.setItem to set the value of token and save it in browser's (client's) localStorage
* in app.js
  * we will then add `withRouter` in react-router
  * `Auth` object to check if token is available or not
  * AutRoute which will be protected routes
    * will be using `Auth` to check if the protected route has token available or not (that is user is logged in or not)
    * add a Signout Button as `AuthButton` which also uses Auth.signout that removes token from local storage
    * change the way we were previously sending props in `/profile` route
    * apply `AuthRoute to dashboard, profile, tasks, and projects
* then we edit Navbar.js
  * add `import { AuthButton, Auth } from '../App';`
  * add a condition where login nav-link for adding a signout button if user is logged in
* Lastly, we edit Login.js
  * add `import { Auth } from '../App';`
  * in render() we will now submit form using `onClick` on submit button instead of `<form onSubmit={this._onSubmit}>`
  * we will also add authentication check and uodate state in `_onSubmit` function
