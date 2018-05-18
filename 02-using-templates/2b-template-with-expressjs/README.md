# Using Template Engine with Express

* using express, no need to explicitly call renderFile to convert template files into HTML. Express uses `res.render()` method for this purpose.

```js
res.render('index', { user: 'Great User', title: 'Homepage' });
```

* have to set a view engine and a views to let Express Server know about which template engine to use and where are template files stored.

```js
app.set('views', './views');
app.set('view engine', 'ejs');
```
