# Plugin context

Plugin context - is special object, that lets you to register plugin functionality,
passed as first argument of plugin installer during it's loading.

Also you can get context by importing:

```js
const { ctx: core } = require('dc-api-core/plugins');
```

## Methods

### `core.db`

**Arguments:**

* `driver` - [class of database driver](./database-driver.html)
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

Usage of loaded plugin in controller, for example:

```js
const db = require('dc-api-core/DB').mycooldb('config-name');
```
