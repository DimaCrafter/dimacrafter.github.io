# Драйвер базы данных

Класс драйвера должен наследоваться от стандартного
[`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter).

Конструктор принимает 2 агрумента: конфигурация и её название.

**Пример:**

```js
// conf == require('dc-api-core/config').db[confName]
constructor (conf, confName) {
    super();

    this.connection = createDatabaseConnection(options, err => {
        this.emit('connected', err);
    });
}
```

## События

### `connected`

**Аргументы:**

* `error: Error` - необязательный объект ошибки, возникшей в ходе подключения к БД

**Использование:**

Данное событие должно вызываться сразу после подключения к базе без аргументов, либо
при возникновении ошибки во время подключения с передачей объекта Error.

### `no-model`

**Аргументы:**

* `name: String` - название модели

**Использование:**

Событие используется для сообщения пользователю об отсутствии модели базы данных.
Пример использования события показан в методе [`getModel`](#getmodel).

## Методы

### `getModel`

**Аргументы:**

* `name: String` - название модели

**Использование:**

Этот метод вызывается для получения объекта модели базы данных по её названию.

**Пример:**

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
