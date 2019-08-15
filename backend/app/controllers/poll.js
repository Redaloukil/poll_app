const {Poll} = require('../models/poll');


const search = async (req , res , err) => {
    try {
        const polls = await Poll.find()
        if(!polls){
            return res.status('404').json({'not found' : 'weli Radoi'});
        }
        return res.status('200').json(polls);
    }catch {
        throw err
    }
}

const detail = async (req , res , err) => {

}

const update = async (req , res , err) => {

}

const create = async (req , res , err) => {
    const { title , description } = req.body;

    const poll = await Poll.create({title , description});
    if(!poll){
        return res.status(401).json({ "" : "" });
    }
    return res.status(201).json(poll);
}



module.exports = {
    search ,
    detail ,
    create , 
    update , 
}