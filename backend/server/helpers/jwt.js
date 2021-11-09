const jwt = require('jsonwebtoken');

module.exports = {
  sign: user => {
    try {
      const token = jwt.sign(JSON.stringify(user), 'hello world', {
        algorithm: 'HS256',
      });
      if (token) {
        return token;
      }
    } catch (e) {
      throw e;
    }
  },
  verify: token => {
    try {
      console.log(token);
      const user = jwt.verify(token, 'hello world');
      if (user) {
        return user;
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
};
