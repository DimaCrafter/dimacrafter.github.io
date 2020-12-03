# Database driver

Database driver's class should extend standart
[`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter).

Constructor receives 2 arguments: configuration and it's name.

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

* `error: Error` - optional error object, catched during connection to DB

**Usage:**

This event must be emitted  without arguments right after successfull connection to database,
or when error occurs during connection with passing an Error object.

### `no-model`

**Arguments:**

* `name: String` - model name

**Usage:**

Event uses to tell user that database model doesn't exists.
Example of usage shown in [`getModel`](#getmodel) method.

## Methods

### `getModel`

**Arguments:**

* `name: String` - model name

**Usage:**

Method will be called for generating database model object by it's name.

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
