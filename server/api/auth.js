const { isEmail , isEmpty } = require('validator');
const User = require('../models/User');

//login 
exports.loginApi = async (req , res , next ) => {
    const validationErrors = {};
    
    const {email , password} = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user || user.comparePassword(password)){
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            return next(err);
        }
        const token = user.generateToken();
      return res.status(200).json({ token });
    }catch (err) {
      next(err);next(err);
    }
}
    
    
    



// //Signup 
// exports.postSignup = (req , res , next ) => {
    
//     const {credentials} = req.data;
//     console.log();
//     next();
// }

// //Get Current User
// exports.currentUser = (req , res , next ) => {
//     const {credentials} = req.data;
//     console.log();
//     next();
// }
