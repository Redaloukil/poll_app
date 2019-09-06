const jwt = require('jsonwebtoken');
const { User } = require('../models/user')
const Constants = require('../../utils/constants');


const { sessionSecret } = Constants.security;

const authenticate = async (req, res, next) => {
  console.log("authenticate called");
  const { authorization } = req.headers;
  
  jwt.verify(authorization, sessionSecret, async (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    // If token is decoded successfully, find user and attach to our request
    // for use in our route or other middleware
    try {
      
      const user = await User.findById(decoded._id);
      
      if (!user) {
        return res.sendStatus(401);
      }
      
      req.currentUser = user;
      next();
    } catch(err) {
      next(err);
    }
  });
}


module.exports = {
    authenticate ,
}