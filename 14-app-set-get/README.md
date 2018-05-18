# Using app.set() and app.get()

* inside server.js change `const port...` to `app.set('port', ...)`
* in `app.listen()` change `port` as first argument to `app.listen(app.get('port'), ...)`
