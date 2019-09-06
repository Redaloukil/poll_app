const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const Constants = require('./../../utils/constants');


const login = async (req , res , next) => {
    const { username , password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !user.authenticate(password)){
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            return next(err);
        }
        const token = user.generateToken();
        res.json({token}).status(200);
    }catch (err) {
        next(err);
    }
}

const signup = async (req , res ,next ) => {
    const { username , password } = req.body;
    console.log(username , password);
    
    let createdUser = new User({ 
            username , 
            password ,
            provider: 'local',
        })
    try {
        
        const user = await createdUser.save();
        console.log(user.password)
        if(!user) {
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            return next(err);
        } 
        const token = user.generateToken();
        res.status(201).json({ token });
    } catch(err) {
          err.status = 401;
          next(err);
    }
}


const current = async (req , res , next) => {
    console.log("current called");
    const { username } = req.currentUser;
    
    try {
        const current = await User.findOne({username});    
        if(!current){
            const err = new Error('You are not authenticated');
            err.status = 401;
            return next(err);
        }
        const token = current.generateToken();
        res.status(200).json({ token })

    } catch(err) {
          err.status = 400;
          next(err);
    }

}


module.exports = {
    login, 
    signup,
    current,
}
