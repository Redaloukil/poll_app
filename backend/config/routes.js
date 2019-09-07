'use strict';


/**
 * Module dependencies.
 */
const authController = require('../app/controllers/auth');
const homeController = require('../app/controllers/home');
const userController = require('../app/controllers/user');
const pollController = require('../app/controllers/poll');
const postController = require('../app/controllers/post');

const { authenticate } = require('../app/middleware/authentication');
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
  
  
  
  
  /**
   * Home routers
  */
  app.get('/', homeController.home);
  
  /**
   * Auth routers
  */
  app.post('/users/login/' , authController.login);
  app.post('/users/signup/', authController.signup);
  app.get('/user/', authenticate , authController.current);
  
  /**
    * User routers
  */
  app.get('/users/' , userController.search);
  app.patch('/users/:id', userController.update);
  // app.delete('/users/:id' , authenticate , userController.delete);
  
  /**
    * Poll routers
  */
  app.get('/polls/' ,  pollController.search);
  app.post('/polls/' , pollController.create);
  app.get('/polls/:id', pollController.detail);
  // app.patch('/polls/:id' ,authenticate ,pollController.update);
  // app.post('/polls/' , authenticate , pollController.create);
  // app.get('/polls/:id/choices/' , authenticate , pollController.searchChoices );
  // app.post('/polls/:id/choices/' , authenticate , pollController.createChoice);
  
  /**
   * Post routers
  */
  // app.get('/posts/', authenticate , userController.search);
  // app.get('/posts/:id', authenticate ,userController.detail);
  // app.patch('/posts/:id', authenticate ,userController.update);
  // app.delete('/posts/',authenticate , PostsController.delete);
  // app.post('/posts/' , authenticate , userController.create);
  

};
