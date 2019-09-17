const { Poll , Choice } = require('../models/poll');



const getPollChoices = async(req , res , next) => {
    console.log("get poll choices")
    const { id } = req.params;
    try {
        const choices = await Choice.find({_post : id});
        console.log(choices)
        res.json(choices);
    }catch {
        next(err)
    }
}

const createChoice = async (req , res , next) => {
    // title of the choice 
    const { title } = req.body;
    // id of the poll
    const { id } = req.params;
    const poll = await Poll.findById(id);
    if (!poll) {
        err.status(404)
        err.body('Cannot find this poll');
        next(err);
    }
    if (poll._user != req.currentUser._id ){
        err.status(401)
        next(err);
    }
    try {
        const _user = req.currentUser._id;
        const _poll = poll._id
        const choice = new Choice({
            title ,
            _user ,
            _poll ,
        })  
        res.status(201).json(await choice.save());
    }catch {
        next(err)
    }
}
const deleteChoice = async (req , res , next) => {
    const { _poll , _choice  , title } = req.body;
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
    getPollChoices,
    createChoice ,
    deleteChoice ,
    selectChoice ,
}