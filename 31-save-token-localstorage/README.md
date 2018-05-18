# Save Token in Local Storage

* edit src/authentication/login.js
* we will edit our `_onSubmit` function and `async await` to wait for response from the server. The server will be returning token in response.
* we will use axios to send form data and get response from api
* we then use localStorage.setItem to set the value of token and save it in browser's (client's) localStorage
