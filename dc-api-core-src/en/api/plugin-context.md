# Plugin context

Plugin context is a special object, that lets you to register plugin functionality,
it is passed as first argument of plugin installer during it's loading.

Also you can get context by importing:

```js
const { ctx: core } = require('dc-api-core/plugins');
```

## Methods

### `core.db`

**Arguments:**

* `driver` - [driver database class](./database-driver.html)
* `name: String` - short name or code

**Usage:**

Registers new database driver with specified code.

**Example:**

`index.js`:

```js
class MyCoolDB extends EventEmitter {
    // ...
}

module.exports = core => {
    core.db(MyCoolDB, 'mycooldb');
};
```

An example of using loaded plugin in controller:

```js
const db = require('dc-api-core/DB').mycooldb('config-name');
```
