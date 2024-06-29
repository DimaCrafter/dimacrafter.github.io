(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{221:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"введение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),a("h2",{attrs:{id:"обычная-установка"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#обычная-установка"}},[t._v("#")]),t._v(" Обычная установка")]),t._v(" "),a("p",[a("strong",[t._v("0)")]),t._v(" Сначала сгенерируйте "),a("code",[t._v("package.json")]),t._v(", выполнив "),a("code",[t._v("npm init")]),t._v(" или "),a("code",[t._v("yarn init")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("1)")]),t._v(" Далее установите пакет, используя "),a("code",[t._v("npm i dc-api-core --save")]),t._v("\nили "),a("code",[t._v("yarn add dc-api-core")]),t._v(".\nВо время установки будет предложено глобально установить CLI, если отсутствует,\nи настроить проект в текущей директории\n(подробнее в "),a("a",{attrs:{href:"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-cli"}},[t._v("Установке через CLI")]),t._v(").")]),t._v(" "),a("p",[a("strong",[t._v("1.1)")]),t._v(" Если во время установки Вы настроили проект при помощи CLI,\nто Вы уже можете запустить сервер,")]),t._v(" "),a("p",[a("strong",[t._v("1.2)")]),t._v(" Иначе Вам нужно вручную выполнить действия ниже.")]),t._v(" "),a("p",[a("strong",[t._v("2)")]),t._v(" Заполните "),a("code",[t._v("scripts")]),t._v(" в "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dc-api-core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dc-api-core --dev"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("3)")]),t._v(" Создайте необходимые директории и файлы, указанные в разделе "),a("a",{attrs:{href:"#%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0"}},[t._v("Структура")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"установка-через-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#установка-через-cli"}},[t._v("#")]),t._v(" Установка через CLI")]),t._v(" "),a("p",[t._v("Если у Вас есть глобально установленный CLI, то Вы можете перейти в директорию,\nв которой будет настроен сервер, и выполнить "),a("code",[t._v("dc-api-cli init")]),t._v(" или\n"),a("code",[t._v("dc-api-cli init <path>")]),t._v(" (где "),a("code",[t._v("<path>")]),t._v(" - путь до нужной директории).")]),t._v(" "),a("p",[t._v("Пример хода установки:")]),t._v(" "),a("Terminal",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[#50e3c2]$ dc-api-cli init[/#]\nРабочая директория: /path/to/backend\nВведите порт: [#0fb1c5]8080[/#]\n\nПлагины:\n[#0fb1c5](используйте стрелочки для перемещения, пробел для выбора и enter для подтверждения)[/#]\n[#0ac484]x dc-api-mongo[/#]\n\nВыберите провайдера сессии:\n[#0fb1c5](используйте стрелочки для перемещения и enter для подтверждения)[/#]\n  Без сессии\n[#0ac484]➔ dc-api-mongo[/#]\n")])])])]),t._v(" "),a("h2",{attrs:{id:"структура"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#структура"}},[t._v("#")]),t._v(" Структура")]),t._v(" "),a("p",[t._v("После установки "),a("code",[t._v("dc-api-core")]),t._v(" текущая директория будет выглядеть, как показано ниже:")]),t._v(" "),a("Tree",{attrs:{data:t.$frontmatter.structure}}),t._v(" "),a("p",[t._v("Это основная структура, которую использует "),a("code",[t._v("dc-api-core")]),t._v(".\nВы также можете создавать здесь нужные Вам файлы и директории.")]),t._v(" "),a("h3",{attrs:{id:"конфигурационныи-фаил"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#конфигурационныи-фаил"}},[t._v("#")]),t._v(" Конфигурационный файл")]),t._v(" "),a("p",[a("code",[t._v("config.json")]),t._v(" содержит параметры, используемые "),a("code",[t._v("dc-api-core")]),t._v(",\nно Вы можете хранить здесь и свои данные.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Порт, на котором будет запущен API сервер")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Эта строка нам понадобится в будущем")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth_pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"security"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("См. также:")]),t._v(" "),a("a",{attrs:{href:"./api/config"}},[t._v("Доступные значения в конфигурационном файле")])]),t._v(" "),a("h3",{attrs:{id:"контроллеры"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#контроллеры"}},[t._v("#")]),t._v(" Контроллеры")]),t._v(" "),a("p",[t._v("Контроллер - это класс, содержащий методы, обрабатывающие запросы приходящие на сервер.\nОтсюда методы такого класса называются в основном HTTP обработчиками. Если Вы хотите\nработать с WebSockets, то позже прочтите о "),a("a",{attrs:{href:"#no-link"}},[t._v("Socket контроллере")]),t._v(".")]),t._v(" "),a("p",[t._v("Как было показано выше, контроллеры находятся в директории "),a("code",[t._v("controllers")]),t._v(".\nНазвание файла контроллера должно быть в PascalCase и совпадать с названием\nэкспортируемого класса.")]),t._v(" "),a("p",[t._v("По-умолчанию, URL запроса обрабатывается как "),a("code",[t._v("/контроллер/обработчик")]),t._v(".")]),t._v(" "),a("p",[t._v("Изначально CLI создаёт контроллер "),a("code",[t._v("Info")]),t._v(" с обработчиком "),a("code",[t._v("status")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Импортируем `package.json` установленного пакета `dc-api-core`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dc-api-core/package'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Экспортируем класс контроллера")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Объявляем метод-обработчик, который будет принимать запросы")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// по URL http://localhost:8081/Info/status")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Отсылает в ответ объект с установленной версией `dc-api-core`")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// и текущем временем на сервере")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Если вы "),a("a",{attrs:{href:"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-api-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0"}},[t._v("запустите API сервер")]),t._v(" и откроете в браузере "),a("code",[t._v("http://localhost:8081/Info/status")]),t._v(",\nто Вы увидите ответ сервера, похожий на пример ниже:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.3-9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"05.07.2020, 18:21:32"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("Теперь давайте сделаем свой контроллер "),a("code",[t._v("Test")]),t._v(". Для этого создадим\nфайл "),a("code",[t._v("controllers/Test.js")]),t._v(" со следующим содержимым:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Получаем данные конфигурационного файла")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dc-api-core/config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Данный мектод вызывается перед вызовом обработчиков")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Сравниваем GET параметр `token` с полем `auth_pass`, указанном")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// в конфигурационном файле ранее")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth_pass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Если данный метод возвращает значение `true`,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// то сервер прекратит обработку этого запроса")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Привет, привет!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Теперь если перейти по URL "),a("code",[t._v("http://localhost:8081/Test/hello")]),t._v(" или "),a("code",[t._v("http://localhost:8081/Test/hello?token=incorrect")]),t._v(", то Вы не получите ответа,\nа "),a("code",[t._v("http://localhost:8081/Test/hello?token=security")]),t._v(" вернёт Вам "),a("code",[t._v('"Привет, привет!"')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"запуск-api-сервера"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запуск-api-сервера"}},[t._v("#")]),t._v(" Запуск API сервера")]),t._v(" "),a("p",[t._v("Сервер может быть запущен в двух режимах: обычном и режиме разработки.")]),t._v(" "),a("p",[a("strong",[t._v("Режим разработки:")])]),t._v(" "),a("p",[t._v("Запуск: "),a("code",[t._v("yarn dev")]),t._v(" или "),a("code",[t._v("npm run dev")]),t._v(".")]),t._v(" "),a("p",[t._v("В режиме разработки API сервер будет перезапущен поле изменения любого файла\nв его директории. Также будет использована конфигурация "),a("code",[t._v("config.dev")]),t._v(" как основная.")]),t._v(" "),a("p",[a("strong",[t._v("См. также:")]),t._v(" "),a("code",[t._v("dev")]),t._v(" ветка в "),a("a",{attrs:{href:"./api/config"}},[t._v("конфигурационном файле")])]),t._v(" "),a("p",[a("strong",[t._v("Обычный режим:")])]),t._v(" "),a("p",[t._v("Запуск: "),a("code",[t._v("yarn start")]),t._v(" или "),a("code",[t._v("npm start")]),t._v(".")]),t._v(" "),a("p",[t._v('В данном режиме будет запущен API сервер для "боевого" окружения.')])],1)}),[],!1,null,null,null);s.default=e.exports}}]);