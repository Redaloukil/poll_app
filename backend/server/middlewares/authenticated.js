const jwt = require('../helpers/jwt');

module.exports = {
  authenticated: (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).send({ message: 'you shoud authenticated' });
    }
    try {
      const user = jwt.verify(authorization.split(' ')[1]);
      if (!user) {
        return res.status(401).send({ message: 'you shoud be authenticated' });
      }
      req.user = user;
    } catch (e) {
      return res.status(401).send({ message: 'you shoud be authenticated' });
    }

    next();
  }
};
