
/* 1 ) npx express-generator --view=hbs
   2 ) npm i nodemon 
   3 ) Una vez instalada, cambiar en el json start: nodemon . 

*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*Rutas*/
app.get('/prueba1', function (req, res, next) {
  res.send('Hola soy la pagina de prueba1!')
})

app.get('/prueba2', function (req, res, next) {
  res.send('Hola soy la pagina de prueba2!')
})

app.get('/prueba3', function (req, res, next) {
  res.send('Hola soy la pagina de prueba3!')
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;