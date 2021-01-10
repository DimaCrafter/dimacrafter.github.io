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
