# Basics

Main file of plugin (`index.js` or specified by `main` in `package.json`) must
export either installer/initializer function or object with it.

```js
// Both variants are correct
module.exports = core => {
    // ...
};

module.exports = {
    install (core) {
        // ...
    }
};
```

First and only one argument of installer is [plugin context](../api/plugin-context.html),
special object that lets you registering plugin's functionality. There is an example of
registering database driver below.

```js
class MyCoolDB {
    // Full example will be later
}

module.exports = core => {
    core.db(MyCoolDB, 'mycooldb');
};
```

All available types and methods of their registering are described in topic "[API / Plugin context](../api/plugin-context.html)".
