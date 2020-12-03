# Контроллер

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

* Отправка буффера или файла

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
