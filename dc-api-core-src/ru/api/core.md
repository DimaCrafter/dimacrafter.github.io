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
