# Serve Client from Express

* move `client` directory inside the root of `server` directory
* in server
* from client do `npm run build` to build a production optimized distribution. It will create `/build` in client root.
* define a wildcard route `*` that will allow to send index.html from `client/build/`
