---
structure: {
    icon: 'folder-api',
    childs: [
        {
            icon: 'folder-controller',
            name: 'controllers',
            desc: 'Directory that contains controllers',
            childs: [
                {
                    icon: 'javascript',
                    name: '<ControllerName>.js',
                    desc: 'Controller for serving API requests'
                }
            ]
        },
        {
            icon: 'folder-database',
            name: 'models',
            desc: 'Contains data models for work with DB',
            tag: 'Optional',
            childs: [
                {
                    icon: 'database',
                    name: '<driver-name>',
                    desc: 'Identificator of database driver',
                    childs: [
                        {
                            icon: 'json',
                            name: '<ModelName>.js',
                            desc: 'Database model'
                        }
                    ]
                }
            ]
        },
        {
            icon: 'settings',
            name: 'config.json',
            desc: 'Configuration file'
        },
        {
            icon: 'javascript',
            name: 'startup.js',
            tag: 'Optional',
            desc: 'Script that will be executed before starting API server'
        },
    ]
}
---

# Introduction

## Regular installation

**0)** For first generate `package.json` by executing `npm init` or `yarn init`.

**1)** Next install the package using `npm i dc-api-core --save`
       or `yarn add dc-api-core`.
       During installation, you will be prompted to install CLI globally,
       if not installed, and configure project in current directory
       (for more details see [Installation via CLI] (#installation-via-cli)).

**1.1)** If during setup you configured project using CLI,
         you can already start the server,

**1.2)** Otherwise, you need to manually perform the steps below.

**2)** Fill `scripts` in `package.json`:

```json
"scripts": {
    "start": "dc-api-core",
    "dev": "dc-api-core --dev"
}
```

**3)** Create required directories and files, specified in topic [Structure](#structure).

## Installation via CLI

You can enter directory, where server will be placed,
if you already have globally installed CLI, and execute `dc-api-cli init`
or `dc-api-cli init <path>` (where `<path>` - path to desired directory).

Example installation process:

<Terminal>
    [#50e3c2]$ dc-api-cli init[/#]
    Working in: /path/to/backend
    Enter port: [#0fb1c5]8080[/#]

    Plugins:
    [#0fb1c5](use arrow keys to move, space to toggle and enter to submit)[/#]
    [#0ac484]x dc-api-mongo[/#]

    Select session provider:
    [#0fb1c5](use arrow keys to select and enter to submit)[/#]
      No session
    [#0ac484]➔ dc-api-mongo[/#]
</Terminal>

## Structure

After `dc-api-core` installation, current directory will be look like below:

<Tree :data="$page.frontmatter.structure" />

This is main structure, that `dc-api-core` uses.
You also can create here files and directories that you need.

### Configuration file

`config.json` contains parameters, used by `dc-api-core`,
but you can store here you data.

```js
{
    // Port that API server will started on
    "port": 8081,
    // We will need this string in the future.
    "auth_pass": "security"
}
```

**See also:** [Available properties in configuration file](./api/config)

### Controllers

Controller is a class that contains methods that handles requests coming to server.
That's why they are mainly called HTTP handlers. If you want work with WebSockets, read about [Socket controller](#no-link) later.

As shown above, controllers are located in the `controllers` directory.
The name of the controller's file must be in PascalCase and match the name
of exported class.

By default, request URL handles like `/controller/handler`.

Initially, CLI creates the `Info` controller with `status` handler:

```js
// Importing `package.json` from installed `dc-api-core` package
const pkg = require('dc-api-core/package');

// Exporting controller's class
module.exports = class Info {
    // Declaring a handler method that will accept requests
    // on URL http://localhost:8081/Info/status
    status () {
        // Sends an object with installed `dc-api-core` version
        // and current server time in response
        this.send({ version: pkg.version, time: new Date().toLocaleString() });
    }
}
```

If you [start the API server](#starting-api-server) and open in your browser `http://localhost:8081/Info/status`,
then you will see a server response similar to example below:

```json
{
    "version": "0.2.3-9",
    "time": "05.07.2020, 18:21:32"
}
```

---

Now let's make our `Test` controller. To do this, create
`controllers/Test.js` file with the following content:

```js
// Getting configuration file's data
const config = require('dc-api-core/config');

class Test {
    // This method will be called before calling any handler
    onLoad () {
        // Comparing `token` GET parameter with `auth_pass` property,
        // that was specified in configuration file earlier
        if (this.query.token != config.auth_pass) {
            // If this method returns `true`,
            // server will stop this request handling
            return true;
        }
    }

    hello () {
        this.send('Hello, hello!');
    }
}

module.exports = Test;
```

Now, if you open URL `http://localhost:8081/Test/hello` or `http://localhost:8081/Test/hello?token=incorrect`, you willn't receive an answer,
and `http://localhost:8081/Test/hello?token=security` will return you `"Hello, hello!"`.

## Starting API server

The server can be started in two modes: normal and development mode.

**Development mode:**

Starting with: `yarn dev` or `npm run dev`.

In development mode API server will be restarted after changing any file
in his directory. There are also `config.dev` configuration will be used as main.

See also: `dev` branch in [configuration file](./api/config)

**Normal mode:**

Starting with: `yarn start` or `npm start`.

In this mode API server will be started for production environment.
