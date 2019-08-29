const { User } = require('../models/user');

const login = async (req , res , next) => {
    const { email , password } = req.body;
    
    console.log(req.headers);
    console.log(req.body);
    
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

const signup = async (req , res ,next ) => {
    const { name , email , password } = req.body;
    
    console.log(req.headers);
    console.log(req.body);
    
    const createdUser = new User({ name , email ,password})
    try {
          const user = await createdUser.save();
          
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

const current = async (req , res , next) => {
    const { user } = req.currentUser;
    
    console.log(req.headers);
    console.log(req.body);
    
    try {
        const current = await User.findOne({email});
        if(!current){
            const err = new Error('You are not authenticated');
            err.status = 401;
            return next(err);
        }
        const token = current.generateToken();
        res.status(200).json({ token });

    } catch(err) {
          err.status = 400;
          
          next(err);
    }

}


module.exports = {
    login, 
    signup,
    // current,
}
