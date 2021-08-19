# Core module

```js
const core = require('dc-api-core');
```

## Methods

### `onError`

* `handler: Function`

**Usage:**

Registers global error handler.

**Example:**

startup.js:

```js
const { onError } = require('dc-api-core');
onError(info => console.log(info));
```

controllers/Test.js:

```js
module.exports = class Test {
    error () { throw new Error('Some unexpected error!'); }
}
```

Console output:

```js
{
    isSystem: false,
    controller: 'Test',
    action: 'error',
    message: 'Some unexpected error!',
    error: <Error object>
}
```

## Classes

### `HttpError`

**Properties:**

* `message: any` - any valid for [`this.send`](./controller.html#this-send) value
* `code: number` - HTTP error code (shoud be ≥400)

**Usage:**

Allows you to stop HTTP handler execution in any place and reply user with specified
message and error code.

::: warning Warning!
It is very unrecommended to use this instead of `this.send` in handler method.
This class is designed to be used in plugins or functions called withoud passing context.
:::

**Example:**

controllers/Test.js:

```js
const { HttpError } = require('dc-api-core');
function someUtilityMethod (value) {
    if (!value || Number.isNaN(value)) throw new HttpError('Incorrect value', 400);
    else return value ** (value / 2);
}

module.exports = class Test {
    // /Test/makeSmth - [400] "Incorrect value"
    // /Test/makeSmth?input=infinity - [400] "Incorrect value"
    // /Test/makeSmth?input=4 - [200] 16
    makeSmth () { this.send(someUtilityMethod(parseFloat(this.query.input))); }
}
```

### `SocketController`

**Usage:**

This class marks controller as a WebSocket handler.

**Example:**

controllers/TestSocket.js:

```js
const { SocketController } = require('dc-api-core');

// Will serving on ws://localhost:8080/test-socket
module.exports = class TestSocket extends SocketController {
    ping () { this.emit('pong'); }
}
```
