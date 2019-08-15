const {Poll} = require('../models/poll');

const create = async (req , res , err) => {
    const { title , description } = req.body;

    const poll = await Poll.create({title , description});
    if(!poll){
        return res.status(401).json({ "" : "" });
    }
    return res.status(201).json(poll);
}

const confirmationToken = () => {

}

module.exports = {
    create , 
    confirmationToken
}