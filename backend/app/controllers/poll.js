const { Poll } = require('../models/poll');

const search = async (req , res , err) => {
    try {
        const polls = await Poll.find()
        if(!polls){
            return res.status('404').json({'not found' : 'weli Radoi'});
        }
        return res.status('200').json(polls);
    }catch {
        throw err;
    }
}

const detail = async (req , res , err) => {
    const {title , description } = res.body;

}

const update = async (req , res , err) => {
    const { title , description } = res.body;
}

const create = async (req , res , next )=> {
    const { title , description } = req.body;

    const poll = new Poll({ 
        title , 
        description ,
        _user: req.currentUser._id,
    });

    try {
        res.status(201).json(await poll.save());
    } catch(err) {
        next(err);
    }
}



module.exports = {
    search ,
    detail ,
    create , 
    update , 
}