const { User } = require('../models/user') 

const search = async (req , res , next ) => {
    try {
        res.json(await User.find({}));
    }catch(err) {
        next(err);
    }
}

const update = async (req , res , next ) => {
    
}


module.exports = {
    search
}