'use strict';

/**
 * Module dependencies.
 */

const authController = require('../app/controllers/auth');
const homeController = require('../app/controllers/home');
const userController = require('../app/controllers/user');
const pollController = require('../app/controllers/poll');
const postController = require('../app/controllers/post');

/**
 * Expose
 */

module.exports = function(app) {
  

  /**
   * Error handling
   */

  app.use(function(err, req, res, next) {
    // treat as 404
    if (
      err.message &&
      (~err.message.indexOf('not found') ||
        ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  // app.use(function(req, res) {
  //   res.status(404).render('404', {
  //     url: req.originalUrl,
  //     error: 'Not found'
  //   });
  // });
  /**
   * User routers
   */
  app.get('/login/' , authController.login);
  app.get('/signup/' , authController.signup);
  // app.post('/users/ ' , userController );

};
