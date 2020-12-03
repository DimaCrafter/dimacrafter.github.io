# Controller

## Properties

### `this.address`

Contains information about user's IP address.

```js
{
    // Address type. Values: ipv4, ipv6
    type: String,
    // IP address informat, specified in `type`
    value: String
}
```

### `this.controller`

Object that contains all methods of current controller. When calling any handler
from this object, context (`this` value) will be passed to this handler.

### `this.data`

Contains data, received from POST request body.

Supports types such as `application/json`, `multipart/form-data`
and `application/x-www-form-urlencoded`.

### `this.query`

Contains values of GET parameters.

**Example:**

```js
// On request to http://localhost:8081/MyController/action?foo=bar
this.send(this.query);
// will send response { "foo": "bar" }
```

### `this.session`

::: warning Warning!
Available only when sessions are enabled and correctly configured in configuration file.
:::

Contains data of current session.

**See also:** [Session](./session)

## Methods of HTTP handlers

### `this.header`

* `name: String` - header name
* `value: String` - value by default not specified

**Usage:**

Will return header value from request if `value` not specified,
otherwise will set header `name` to `value` in response.

**Example:**

Code below on request with header `X-Data: my custom header` will send
header `X-Data-Status: Accepted` in response.

```js
if (this.header('X-Data') == 'my custom header') {
    this.header('X-Data-Status', 'Accepted');
}
```

### `this.redirect`

**Arguments:**

* `url: String`

**Usage:**

Redirects user to specified URL.

**Example:**

```js
this.redirect('https://google.com');
```

### `this.send`

**Arguments:**

* `data: Any` - data to send
* `code: Number` - HTTP response code, by default `200`
* `isPure: Boolean` - if `true`, then `data` will sended without transformations, otherwise `data` will be serialized, by default `false`

**Usage:**

* Sending JSON compitable data (strings, numbers, objects etc.)

  ```js
  this.send({ hello: true });
  ```

* Sending buffer or file

  ::: warning Warning!
  When sending file, `code` and `isPure` arguments must be specified.
  :::

  ```js
  this.send(fs.readFileSync('cat.png'), 200, true);
  ```

## Methods of WebSocket handlers

### `this.emit`

**Arguments:**

* `event: String` - event name
* `...args: Any` - any arguments, that will be passed to event handler

**Usage:**

Sends `event` to current WebSocket connection.

**Example:**

`controllers/Socket.js`:

```js
this.emit('test-event', 'works', true);
```

Somewhere in frontend (example for `dc-api-client`):

```js
API.Socket.on('test-event', (prop, value) => {
    console.log(prop + ': ' + value);
    // works: true
});
```

### `this.end`

**Arguments:**

* `msg: String` - empty string by default
* `code: Number` - by default `1000` (closed without errors)

**Usage:**

Closes current WebSocket connection `msg` message and close `code`.

Usual connection closing:

```js
this.end();
```

Closing with message:

```js
this.end('Internal server error', 1011);
```

**See also:** [WebSocket close codes](https://github.com/Luka967/websocket-close-codes)
