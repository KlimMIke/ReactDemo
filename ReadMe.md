1. Ставим node.js
2. Запускаем prepare.sh, ждем
3. Запускаем сервер: вбиваем node server.js
4. Для сборки бандла из клиентской части проекта либо запускаем build-debug.sh, либо набираем в консоли
<pre>browserify client\scripts\main.js -o client\bundle.js --debug</pre>
(здесь --debug - опциональный параметр; также внимание на то, что слеши здесь виндовые)