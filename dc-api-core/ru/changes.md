# Изменения в v0.3

:::danger Внимание!
Большинство изменений этого мажорного релиза ломают обратную совместимость.
Обновляйтесь с осторожностью и не используйте данный релиз в "боевых" проектах,
написанных для прошлой версии.
:::

* Переход с изначального регистра названий контроллера и обработчика на kebab-case.
  Если требуется поддержка старого поведения, то следует использовать параметр [`config.supportOldCase`](./api/config.html).
* Возвращение boolean-значения из [`onLoad`](./api/controller.html#onload) больше не поддерживается, вместо этого используется
  [`this.drop`](./api/controller.html#this-drop), [`this.send`](./api/controller.html#this-send) или
  выбрасываение исключения [`HttpError`](./api/core.html#httperror).
* Добавлена возможность отвечать на запрос при помощи `return`.
* Добавлены каналы для WebSocket соединений. См. [`this.subscribe`](./api/controller.html#this-subscribe),
  [`this.unsubscribe`](./api/controller.html#this-unsubscribe) и [`this.broadcast`](./api/controller.html#this-broadcast).
* Добавлена поддержка кастомных WebSocket контроллеров через наследование класса [`SocketController`](./api/core.html#socketcontroller).
* Теперь использование контроллера `Socket` без наследования [`SocketController`](./api/core.html#socketcontroller) считается устаревшим.
* Добавлен метод `emitFirst` в контекст WebSocket обработчика.
* Сообщение `session` использует объект вместо JSON строки.
* Модуль `dc-api-core/DB` переименован в `dc-api-core/db`.
* Удалена старая система плагинов. Теперь плагин автоматически будет только (возможно пока) загружен.
* Методы `emitError`, `onError` и класс `HttpError` перенесены в модуль `dc-api-core/errors`.
