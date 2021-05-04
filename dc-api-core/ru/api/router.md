# Роутер

Роутер/маршрутизатор - модуль `dc-api-core/router`, занимающийся обработкой динамических URL.

## Методы

### `register`

* `pattern: String` - шаблон URL, может содержать вставку `${parameterName}` для извлечения части пути
* `target: String | Function` - обработчик запроса

**Использование:**

Регистрирует обработчик для URL, соответствующего шаблону.
В качестве обработчика может быть указана как строка в формате `Контроллер.обработчик`,
так и лямбда с единственным аргументом - [контексом контроллера](./controller).

Все полученные из URL параметры хранятся в [контексте контроллера](./controller) с ключом `params`.

Рекомендуется регистрировать динамические пути до запуска API сервера, т.е. в файле `startup.js`.

**Пример:**

startup.js:

```js
const Router = require('dc-api-core/router');
// Регистрация обработчика для URL вида http://localhost:8080/profile-images/603948254@2x.png
// Указание обработчика из контроллера является более предпочтительным
Router.register('/profile-images/${userID}@${size}.png', 'ProfileData.getImage');

// Регистрация обработчика для URL вида http://localhost:8080/verify-hash/faaed104cba00df41ebabc
// Данные вариант тоже допустим, но только для очень моленьких обработчиков, которые может быть
// сложно отнести к одному из контроллеров
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
