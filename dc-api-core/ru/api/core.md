# Основной модуль

```js
const core = require('dc-api-core');
```

## Методы

### `onError`

* `handler: Function`

**Использование:**

Регистрирует глобальный обработчик ошибок.

**Пример:**

startup.js:

```js
const { onError } = require('dc-api-core');
onError(info => console.log(info));
```

controllers/Test.js:

```js
module.exports = class Test {
    error () { throw new Error('Some unexpected error!'); }
}
```

Вывод консоли:

```js
{
    isSystem: false,
    controller: 'Test',
    action: 'error',
    message: 'Some unexpected error!',
    error: <Error object>
}
```

## Классы

### `HttpError`

**Свойства:**

* `message: any` - любое допустимое для [`this.send`](./controller.html#this-send) значение
* `code: number` - HTTP код ошибки (должен быть ≥400)

**Использование:**

Позволяет прервать выполнение HTTP обработчика в любом месте и вернуть пользователю
указанное значение с кодом ошибки.

::: warning Внимание!
Крайне не рекомендуется использовать вместо `this.send` в самом методе обработчика.
Данный класс расчитан на использование в плагинах или функциях, вызываемых из обработчика
без передачи контекста.
:::

**Пример:**

controllers/Test.js:

```js
const { HttpError } = require('dc-api-core');
function someUtilityMethod (value) {
    if (!value || Number.isNaN(value)) throw new HttpError('Incorrect value', 400);
    else return value ** (value / 2);
}

module.exports = class Test {
    // /Test/makeSmth - [400] "Incorrect value"
    // /Test/makeSmth?input=infinity - [400] "Incorrect value"
    // /Test/makeSmth?input=4 - [200] 16
    makeSmth () { this.send(someUtilityMethod(parseFloat(this.query.input))); }
}
```

### `SocketController`

**Использование:**

При наследовании контроллер помечается как WebSocket обработчик.

**Пример:**

controllers/TestSocket.js:

```js
const { SocketController } = require('dc-api-core');

// Будет доступен на ws://localhost:8080/test-socket
module.exports = class TestSocket extends SocketController {
    ping () { this.emit('pong'); }
}
```
