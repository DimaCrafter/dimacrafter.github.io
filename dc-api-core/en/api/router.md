# Router

Router - `dc-api-core/router` moude that processes dynamic URLs.

## Methods

### `register`

* `pattern: String` - URL pattern, can include `${parameterName}` for path part extraction
* `target: String | Function` - request handler

**Usage:**

Registers handler for URL that matching a pattern.
Handler can be both string like `Controller.handler`or lambda with
single argument - [controller's context](./controller).

All parsed parameters from URL stored in [controller's context](./controller) by key `params`.

It's recommended to register dynamic routes before staring API server, i.e. in file `startup.js`.

**Example:**

startup.js:

```js
const Router = require('dc-api-core/router');
// Registers handler for all URLs like http://localhost:8080/profile-images/603948254@2x.png
// Using handler in controller is more preferred
Router.register('/profile-images/${userID}@${size}.png', 'ProfileData.getImage');

// Registers handler for all URLs like http://localhost:8080/verify-hash/faaed104cba00df41ebabc
// This option is also permissible, but only for small handlers that can't be easily
// attributed to one of the controllers
Router.register('/verify-hash/${hash}', ctx => Hasher.verify(ctx.params.hash));
```

controllers/ProfileData.js:

```js
const fs = require('fs');

module.exports = class ProfileData {
    getImage () {
        const filePath = `${process.cwd()}/data/profile-images/${this.params.userID}/${this.params.size}.png`;
        fs.exists(filePath, exists => {
            if (exists) {
                fs.readFile(filePath, buffer => {
                    this.header('Content-Type', 'image/png');
                    this.send(buffer, 200, true);
                });
            } else {
                this.send('Image not found', 404, true);
            }
        });
    }
}
```
