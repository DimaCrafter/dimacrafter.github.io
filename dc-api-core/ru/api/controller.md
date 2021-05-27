# Контроллер

## Отправка данных

Для отправки данных пользователю из HTTP-обработчика Вы можете использовать метод
контекста контроллера [`this.send`](#this-send), вернуть значение (не пустой `return`) или
выбросить исключение [`HttpError`](./core.html#httperror)

**Пример:**

```js
module.exports = class Test {
    // Ниже представлены полностью аналогичные реализации отправки данных
    async getSmth () {
        return await db.Smth.find({ ... }).lean();
    }

    async getSmth () {
        this.send(await db.Smth.find({ ... }).lean());
    }

    getSmth () {
        db.Smth.find({ ... }).lean().exec((err, list) => {
            if (err) this.send(err.toString(), 500);
            else this.send(list);
        });
    }
}
```

## Хуки

### `onLoad`

Вызывается до вызова любого обработчика в данном контроллере с передачей контекста (значения в `this`).
Может прервать обработку запроса, например, если пользователь не имеет нужный уровень доступа.

Так же возможно добавление дополнительных данных в контекст обработчика, таких как информация об авторизации.

**Примеры:**

```js
module.exports = class Bill {
    async onLoad () {
        const header = this.header('Authorization');
        if (!header || !header.startsWith('Bearer')) {
            return this.send('Incorrect auth type', 400);
        }

        const customer = await db.Customer
            .findOne({ apiToken: header.slice(7) })
            .select('_id')
            .lean();

        if (!customer) {
            return this.send('Incorrect auth token', 403);
        }

        this.auth = { customer: customer._id };
    }

    async list () {
        return await db.Bill.find({ customer: this.auth.customer }).lean();
    }
}
```

```js
module.exports = class Admin {
    async onLoad () {
        if (this.session.access != 'admin') {
            // Соединение будет закрыто без ответа
            this.drop();
        }
    }
}
```

## Свойства

### `this.address`

Содержит информацию об IP-адресе пользователя.

```js
{
    // Тип адреса. Значения: ipv4, ipv6
    type: String,
    // IP-адрес в формате, указанном в `type`
    value: String
}
```

### `this.controller`

Объект содержащий все поля и методы текущего контроллера. При вызове любого обработчика
из этого объекта передаётся контекст (значение `this`) в этот обработчик.

### `this.data`

Содержит данные, полученные из тела POST запроса.

Поддерживает такие типы, как `application/json`, `multipart/form-data`
и `application/x-www-form-urlencoded`.

### `this.query`

Содержит значения GET параметров запроса.

**Пример:**

```js
// При запросе страницы http://localhost:8081/MyController/action?foo=bar
this.send(this.query);
// отправит в ответ { "foo": "bar" }
```

### `this.session`

::: warning Внимание!
Доступно, только если сессии включены и корректно настроены в файле конфигурации.
:::

Содержит данные текущей сессии.

**См. также:** [Сессия](./session)

## Методы HTTP обработчиков

### `this.drop`

Сбрасывает соединение без ответа на запрос.

### `this.header`

* `name: String` - имя заголовка
* `value: String` - значение, по-умолчанию не указано

**Использование:**

Если значение не указано, то возвращает значение заголовка из запроса, иначе
устанавливает заголовок `name` в значение `value` для ответа.

**Пример:**

Код ниже при запросе с заголовком `X-Data: my custom header` отправит ответ
с заголовком `X-Data-Status: Accepted`.

```js
if (this.header('X-Data') == 'my custom header') {
    this.header('X-Data-Status', 'Accepted');
}
```

### `this.redirect`

**Аргументы:**

* `url: String`

**Использование:**

Перенаправляет пользователя на указанный URL.

**Пример:**

```js
this.redirect('https://google.com');
```

### `this.send`

**Аргументы:**

* `data: Any` - данные для отправки
* `code: Number` - HTTP код ответа, по-умолчанию `200`
* `isPure: Boolean` - если `true`, то `data` передаётся без изменений, иначе `data` будет сериализован, по-умолчанию `false`

**Использование:**

* Отправка JSON совместимых данных (строки, числа, объекты и т.д.)

  ```js
  this.send({ hello: true });
  ```

* Отправка буфера или файла

  ::: warning Внимание!
  При отправке файла нужно обязательно указывать аргументы `code` и `isPure`.
  :::

  ```js
  this.send(fs.readFileSync('cat.png'), 200, true);
  ```

## Методы WebSocket обработчиков

### `this.emit`

**Аргументы:**

* `event: String` - имя события
* `...args: Any` - любые аргументы, которые будут переданны в обработчик события

**Использование:**

Отправляет событие `event` через открытое WebSocket соединение.

**Пример:**

`controllers/Socket.js`:

```js
this.emit('test-event', 'works', true);
```

Где-то в клиентской части (пример для `dc-api-client`):

```js
API.Socket.on('test-event', (prop, value) => {
    console.log(prop + ': ' + value);
    // works: true
});
```

### `this.subscribe`

**Аргументы:**

* `channel: String` - имя канала

**Использование:**

Добавляет для данного соединения подписку на данные из указанного канала.

**Пример:**

`controllers/Socket.js`:

```js
// Добавляем соединению подписку на канал
this.subscribe('chat');

// Выполняет отправку данных, аналогично `this.emit('chat-message', 'Hello there!')`,
// для всех соединений, подписанных на канал "chat".
this.broadcast('chat', 'chat-message', 'Hello there!');
```

### `this.unsubscribe`

**Аргументы:**

* `channel: String` - имя канала (опционально)

**Использование:**

Удаляет для данного соединения подписку на указанный канал, иначе удаляет все подписки.

### `this.broadcast`

**Аргументы:**

* `channel: String` - имя канала
* `event: String` - имя события
* `...args: Any` - аргументы, передаваемые в обработчик события

**Использование:**

Отправляет событие через все соединения, имеющие подписку на указанный канал.
Если вместо имени канала передаётся `null`, то выполняется рассылка события для всех
активных WebSocket соединений.

### `this.end`

**Аргументы:**

* `msg: String` - по-умолчанию пустая строка
* `code: Number` - по-умолчанию `1000` (закрытие без ошибкок)

**Использование:**

Закрывает текущее WebSocket соединение с сообщением `msg` и кодом закрытия `code`.

Обычное закрытие соединения:

```js
this.end();
```

Закрытие с сообщением:

```js
this.end('Internal server error', 1011);
```

**См. также:** [Коды закрытия WebSocket](https://github.com/Luka967/websocket-close-codes)
