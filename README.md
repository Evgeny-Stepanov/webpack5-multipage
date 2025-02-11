# Сборка Webpack 5 для многостраничного приложения на чистом JS
![Webpack 5](https://camo.githubusercontent.com/6f6f395346d10dc7371a91d083a541b07cf9abdabc0480194c2009de99ccc5c9/68747470733a2f2f7765627061636b2e6769746875622e696f2f6173736574732f776861742d69732d7765627061636b2e706e67)
## Описание
Сборка генерирует html страницы с подключенными уникальными js и css файлами
### Особенности
* Sass препроцессор
* Минификация кода
* Сжатие картинок без потери качества
* Babel транспилятор
* Импорт html внутрь html
### Использование
Добавляете новый entry point в файле webpack.common.js:
```
entry: {
	index: "./src/index.js",
	home: "./src/home.js",
	example: "./src/example.js"
},
```
Ниже создаете новый экземпляр HtmlWebpackPlugin:
```
new HtmlWebpackPlugin({
	template: "./src/example.html",
	filename: "example.html",
	chunks: ["example"],
}),
```
**И в chunks передаете имя из entry**  

Главный .scss файл подключаете в главный .js файл

Html импорт работает через 
```
<%= require('./footer.html').default %>
```
