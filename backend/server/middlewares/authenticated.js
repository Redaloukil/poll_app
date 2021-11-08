const jwt = require('../helpers/jwt');

module.exports = {
  authenticated: (req, res, next) => {
    try {
      const { authorization } = req.headers;
      console.log(req.headers);
      const user = jwt.verify(authorization);
      if (user) {
        console.log('user exists');
        req['user'] = user;

        next(req);
      }
    } catch (err) {
      next(err);
    }
  },
};
