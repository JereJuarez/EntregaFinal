var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  if (req.session.usuario) {
    res.render('admin/novedades', {
      layout: 'admin/layout',
      usuario: req.session.usuario 
    });
  } else {
    res.redirect('/admin/login'); 
  }
});

module.exports = router;
