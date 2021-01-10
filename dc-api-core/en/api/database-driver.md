# Database driver

Database driver's class should extend from
[`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter).

Constructor receives 2 arguments: configuration and configuration name.

**Example:**

```js
// conf == require('dc-api-core/config').db[confName]
constructor (conf, confName) {
    super();

    this.connection = createDatabaseConnection(options, err => {
        this.emit('connected', err);
    });
}
```

## Events

### `connected`

**Arguments:**

* `error: Error` - optional error object, caught during connection to DB

**Usage:**

This event must be emitted without arguments right after a successful connection to the database,
or with an Error argument object when an error occurs during a connection.

### `no-model`

**Arguments:**

* `name: String` - model name

**Usage:**

Event is used to tell the user that the database model doesn't exists.
Example usage shown in [`getModel`](#getmodel) method.

## Methods

### `getModel`

**Arguments:**

* `name: String` - model name

**Usage:**

Method will be called for generate database model object by given name.

**Example:**

```js
const log = require('dc-api-core/log');
const ROOT = process.cwd();

class Driver {
    // ...

    getModel (name) {
        try {
            parseSchema(`${ROOT}/models/${this.confName}/${name}.schema`)
        } catch (err) {
            if (err.code == 'ENOENT') this.emit('no-model', name);
            else log.error('Database model parse error', err);
            return;
        }
    }
}
```
