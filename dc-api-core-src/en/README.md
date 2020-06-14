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

<Tree :data="$page.frontmatter.structure" />

## Configuration file

```json
{
    // Optional
    "db": {
        // mongo - dc-api-mongo driver's code (MongoDB)
        "mongo": {
            // All fields depends on driver, here specified most common
            // Database name, required
            "name": "test_database",
            // Connection host, required
            "host": "localhost",
            // Connection port, optional
            "port": 27017,
            // Database username, optional
            "user": "root",
            // Database password, optional
            "pass": "test-passwd"
        }
    },

    // Optional. Sessions will be disabled if not filled
    "session": {
        // String, user for ecnrypting sessions, required
        "secret": "some r@ndom str1ng",
        // Database driver code, required
        "store": "mongo",
        // Session lifetime in zeit/ms format, optional
        "ttl": "3d"
    },

    // Optional. HTTP will be used if not filled
    "ssl": {
        // Any μWS.SSLApp field, optional
        "some_key": "value",
        // Absolute path to SSL cetificate
        "cert": "/etc/letsencrypt/live/awesome.site/cert.pem",
        // Absolute path to privare SSL key
        "key": "/etc/letsencrypt/live/awesome.site/privkey.pem"
    },

    // Array with plugins' package names, optional
    "plugins": ["dc-api-mongo"],
    // Accept CORS only from this domain, optional
    "origin": "<Value of Origin header>",
    // API listening port, optional
    "port": 8081,
    // Time for WebSocket connection in seconds, optional
    "ws_timeout": 60,
    // Lifetime of existing WebSocket connection in seconds, optional.
    // 0 - lifetime not limited
    "ttl": 0,
    // Directories whose updates will not trigger update in development mode, optional
    "ignore": [],
    // Readonly, true if development mode enabled
    "isDev": "<Boolean>",

    // Object than will be merged with config in development mode, optional
    "dev": {
        // Overrides value of keys db.mongo.name and db.mongo.name
        "db": {
            "mongo": {
                "name": "dev_database",
                "pass": "dev-passwd"
            }
        },
    }
}
```
