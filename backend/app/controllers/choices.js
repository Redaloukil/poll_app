const { Poll , Choice } = require('../models/poll');

const createC = async (req , res , next) => {
    const { title , description } = req.body;
    const newChoice = new choice({ 
        title , 
        description
    });
    try {
        const choice = await newChoice.save();
    }catch {

    }
}
const deleteC = async (req , res , next) => {
    const { poll , choice } = req.body;
    try {
        //find poll 
        const poll = await Poll.find({id:poll.id});
        
        //
        
        //verify user permission 
        const choice = await newChoice.save();
    }catch (err) {

        next(err);
    }
}

const selectC = async ( req , res , next ) => {

}

module.exports = {
    createC,
    deleteC,
}