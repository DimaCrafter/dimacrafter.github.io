# Configuration file

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
