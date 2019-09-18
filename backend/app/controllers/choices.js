const { Poll , Choice } = require('../models/poll');



const getPollChoices = async(req , res , next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const choices = await Choice.find({ _post : id });
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
        err.status(401)
        err.body('Cannot find this poll');
        next(err);
    }
    if (poll._user =! req.currentUser._id ){
        const err = new Error('You are not Allowed');
        err.status = 401;
        return next(err);
        
    }
    try {
        console.log("create choice");
        const choice = new Choice({
            title ,
            _user : req.currentUser._id ,
            _poll : id ,
        }) 
        console.log(choice._poll) 
        const choiceSaved = await choice.save()
        console.log("########################## created")
        res.status(201).json(choiceSaved);
    }catch (err) {
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