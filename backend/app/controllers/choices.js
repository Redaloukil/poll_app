const { Choice } = require('../models/poll');

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

module.exports = {
    createC,
    deleteC,
}