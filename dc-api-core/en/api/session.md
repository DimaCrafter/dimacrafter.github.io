# Session

## Properties

Session object can store any data, that can be written to the database, specified in config.

## Methods

### `this.session.save`

* `callback: Function`

**Usage:**

Asynchronously saves session data to a database.

**Example:**

```js
// In async function
await this.session.save();

// Callback variant
this.session.save(err => {
    // err - error, received from Mongoose, will be `null` if there are no errors
});
```

### `this.session.destroy`

* `callback: Function`

**Usage:**

Asynchronously removes session from database.

**Example:**

```js
// In async function
await this.session.destroy();

// Callback variant
this.session.destroy(err => {
    // err - error, received from Mongoose, will be `null` if there are no errors
});
```
