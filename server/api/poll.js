const {isEmpty} = require('validator');
const poll = require('../models/Poll');

//CREATE POLL
exports.createPoll = (req , res , next) => {
    const validator = {};
    const { title , description } = req.body;
    console.log(title);
    console.log(description);
    if (isEmpty(title) || isEmpty(description)){
        const err = new Error('Please verify your credentials.');
        err.status = 401;
        return next(err);
    }
    return res.status(200).json({ response : "successfully created" });
}


//VIEW ALL POLLS 
exports.getPolls = (req , res , next) => {
    try {
        
    } catch {

    }                             
}

//VIEW POLL DETAILS 
exports.getPollDetail = ( req , res , next ) => {
    try {

    } catch {

    }
}          