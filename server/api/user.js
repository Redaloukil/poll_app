const validator = require('validator');
const  User  = require('../models/User');
//GET USERS LIST 
exports.getAll = async (req , res , next ) => {
    const users = User.find()
     
}


//GET USER DETAIS BY SLUG
exports.get = async (req , res , next ) => {
    const {username} = req.body.slug;
    console.log('searching for username')
    try {
        const user = User.find({username : username})
        if (!user){
            console.log("user not found");
            res.
        }
    }catch {
        
    }
    
}

//UPDATE USER DETAILS BY ID
exports.update = async (req , res , next ) => {
    
}