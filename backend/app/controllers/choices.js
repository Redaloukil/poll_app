const { Poll , Choice } = require('../models/poll');



const getChoice = async(req , res , next) => {
    const { id } = req.params;
    try {
        const choices = await Choice.findOne({_user : id});
        res.json(choices).status(200);
    }catch {
        next(err)
    }
}

const createChoice = async (req , res , next) => {
    const { title , _user , _poll } = req.body;
    const newChoice = new Choice({ 
        title , 
        _user ,
        _poll ,
    });
    try {
        res.status(201).json(await poll.save());
    }catch {
        next(err)
    }
}
const deleteChoice = async (req , res , next) => {
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

const selectChoice = async ( req , res , next ) => {

}

module.exports = {
    getChoice ,
    createChoice ,
    deleteChoice ,
    selectChoice ,
}