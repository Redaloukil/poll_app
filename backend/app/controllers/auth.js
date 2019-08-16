const { User } = require('../models/user');


const login = async (req , res , next) => {
    const { email , password } = req.body;
    try {
        const user = await User.findOne({ email });
  
        if (!user || !user.authenticate(password)) {
          const err = new Error('Please verify your credentials.');
          err.status = 401;
          return next(err);
        }
        
        const token = user.generateToken();
        return res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
}

const signup = async (req , res , err ) => {
    const { username , email , password } = req.body;
    try {
          const user = await User.create({ username , email , password });
          
          if(!user) {
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            
            return next(err);
          } 
          
          const token = user.generateToken();
          
          res.status(201).json({ token });

    } catch(err) {
          err.status = 400;
          next(err);
    }
}

module.exports = {
    login , 
    signup ,
    
}
