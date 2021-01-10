# Сессия

## Свойства

Объект сессии может хранить любые данные, которые могут быть записаны в указанную в конфиге базу данных.

## Методы

### `this.session.save`

* `callback: Function`

**Использование:**

Асинхронно сохраняет данные сессии в базу данных.

**Пример:**

```js
// В async функции
await this.session.save();

// Вариант с callback
this.session.save(err => {
    // err - ошибка, полученная от Mongoose, если ошибок не было, то будет равно `null`
});
```

### `this.session.destroy`

* `callback: Function`

**Использование:**

Асинхронно удаляет сессию из базы данных.

**Пример:**

```js
// В async функции
await this.session.destroy();

// Вариант с callback
this.session.destroy(err => {
    // err - ошибка, полученная от Mongoose, если ошибок не было, то будет равно `null`
});
```
