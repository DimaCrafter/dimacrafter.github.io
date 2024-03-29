# Controller

::: warning Attention!
You can't directly access controller's self methods and properties, because `this` binded
to controller context (that described on this page).
To access self fields use [`this.controller`](#this-controller).
:::

**Won't work:**

```js
module.exports = class Test {
    constructor () {
        this.defaultName = 'stranger';
    }

    _getGreeting (name) {
        return `Hello, ${name || this.defaultName}!`;
    }

    hello () {
        return this._getString(this.query.name);
    }
}
```

**Will work:**

```js
module.exports = class Test {
    _getGreeting (name) {
        return `Hello, ${name || this.controller.defaultName}!`;
    }

    hello () {
        return this.controller._getString(this.query.name);
    }
}
```

## Data sending

To reply user with data from HTTP handler you can use context method [`this.send`](#this-send),
return value (non-enpty `return`) or throw [`HttpError`](./core.html#httperror) exception.

**Example:**

```js
module.exports = class Test {
    // Below are fully analogical implementations of data sending.
    async getSmth () {
        return await db.Smth.find({ ... }).lean();
    }

    async getSmth () {
        this.send(await db.Smth.find({ ... }).lean());
    }

    getSmth () {
        db.Smth.find({ ... }).lean().exec((err, list) => {
            if (err) this.send(err.toString(), 500);
            else this.send(list);
        });
    }
}
```

## Hooks

### `onLoad`

Will be called before calling any handler in controller with passing context (values in `this`).
Can be used to stop request processing if user didn't have required access level.

It is also possible to add additional data to handler context such as authority information.

**Examples:**

```js
module.exports = class Bill {
    async onLoad () {
        const header = this.header('Authorization');
        if (!header || !header.startsWith('Bearer')) {
            return this.send('Incorrect auth type', 400);
        }

        const customer = await db.Customer
            .findOne({ apiToken: header.slice(7) })
            .select('_id')
            .lean();

        if (!customer) {
            return this.send('Incorrect auth token', 403);
        }

        this.auth = { customer: customer._id };
    }

    async list () {
        return await db.Bill.find({ customer: this.auth.customer }).lean();
    }
}
```

```js
module.exports = class Admin {
    async onLoad () {
        if (this.session.access != 'admin') {
            // Connection will be closed without reply
            this.drop();
        }
    }
}
```

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

### `this.drop`

Drops the connection without responding to the request.

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

## Hooks of WebSocket handlers

### `open`

Will be called on connection.

### `close`

Will be called on disconnection.

### `error`

**Arguments:**

* `code: number` - [WebSocket error code](https://github.com/Luka967/websocket-close-codes)
* `message?: string` - description error, optional

Will be called on WebSocket connection error.
Also fires `close` hook.

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

### `this.subscribe`

**Arguments:**

* `channel: String` - channel name

**Usage:**

Makes current connection subscribed to specified channel.

**Example:**

`controllers/Socket.js`:

```js
// Subscribing on channel
this.subscribe('chat');

// This will send data, like `this.emit('chat-message', 'Hello there!')`,
// for all connections subscriber on channel "chat".
this.broadcast('chat', 'chat-message', 'Hello there!');
```

### `this.unsubscribe`

**Arguments:**

* `channel: String` - channel name (optional)

**Usage:**

Removes subscription on specified channel for current connection, otherwise removes all subscriptions.

### `this.broadcast`

**Arguments:**

* `channel: String` - channel name
* `event: String` - event name
* `...args: Any` - arguments for event handler

**Usage:**

Emits event for all conecctions that have subscription on specified channel.
If channel name is `null`, event will be emitted for all active WebSocket connections.

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
