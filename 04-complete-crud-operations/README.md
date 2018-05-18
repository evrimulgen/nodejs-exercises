# Testing CRUD Operations

use `Curl` from Terminal.

## GET Request

```shell
 curl -X GET http://localhost:3000/
```

## POST Request

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/echo

# Output
{"key1":"value1", "key2":"value2"}
```

## PUT Request

```shell
curl -X PUT -H "Content-Type: application/json" -d '{"key":"value1"}' http://localhost:3000/echo

# Output
{"key":"value1"}
```

## Delete Request

```shell
curl -X DELETE http://localhost:3000/echo/key1

# Output
Data Removed.
```

You can also test these urls in POSTMAN or any other REST Client app.
