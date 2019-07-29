const {isEmpty} = require('validator');
const Poll = require('../models/Poll');

//CREATE POLL
exports.createPoll = (req , res , next) => {
    const validator = {};
    const { title , description } = req.body;
    if (isEmpty(title) || isEmpty(description)){
        const err = new Error('Please verify your credentials.');
        err.status = 401;
        return next(err);
    }
    return res.status(200).json({ response : "successfully created" });
}

exports.addChoice = (req , res , next) => {

}


//VIEW ALL POLLS 
exports.getPolls = async (req , res , next) => {
    try {
        const polls = Poll.find();
             
    } catch {

    }                             
}

//VIEW POLL DETAILS 
exports.getPoll = async ( req , res , next ) => {
    const { slug } = req.body.slug; 
    try {
        const poll = Poll.find({title : slug});
    } catch {

    }
}          