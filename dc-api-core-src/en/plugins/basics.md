# Basics

The main file in plugin (which is `index.js` or it is specified in `package.json` `main` property)
is required to export either installer/initializer function or object with it.

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

The argument of installer is [plugin context](../api/plugin-context.html), which is a
special object that lets you registering plugin's functionality. Here is an example of
registering database driver below:

```js
class MyCoolDB {
    // Full example will be available later
}

module.exports = core => {
    core.db(MyCoolDB, 'mycooldb');
};
```

All available types that can be registered are described in this topic "[API / Plugin context](../api/plugin-context.html)".
