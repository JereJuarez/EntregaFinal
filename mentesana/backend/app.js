var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var pool = require('./models/bd');


var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades')
var novedadesRouter = require('./routes/admin/novedades');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '83f0h561cp2',
  resave: false,
  saveUninitialized: true
}));
//+
app.get('/', function(req,res) {
  var conocido = Boolean(req.session.nombre);

  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre 
  });

});
//+
app.post('/ingresar', function (req,res){
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});
//+
app.get('/salir', function (req, res){
  req.session.destroy();
  res.redirect('/');
});


secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', adminRouter);
app.use('/admin/novedades', novedadesRouter, secured, adminRouter);


//MAIL//
app.use(express.json());

app.post('/api/send-email', (req, res) => {
  const { to, subject, body } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mentesanaargentina@gmail.com',
      pass: 'jere2000',
    },
  });

  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: to,
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});


/*consultas*/
//pool.query('select * from psicologos').then(function (resultados) {
//console.log(resultados)
//});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
