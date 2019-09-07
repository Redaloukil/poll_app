const { Poll } = require('../models/poll');


const search = async (req , res , err) => {
    try {
        const polls = await Poll.find({})
        res.json(polls);
      } catch(err) {
        next(err);
      }
}

const detail = async (req , res , err) => {
    const { id } = req.params;
    console.log(id);
    try {
        const poll = await Poll.findById(id)
        if(!poll){
            res.status('404');
              
        }
        res.status('200').json(poll);
    }catch {
        throw err;
    }
}


const update = async (req , res , err) => {
    const { title , description } = res.body;
}

const create = async (req , res , next )=> {
    const { title , description , _user } = req.body;
    const poll = new Poll({ 
        title , 
        description ,
        _user,
    });

    try {
        res.status(201).json(await poll.save());
        
    } catch(err) {
        next(err);
    }
}



module.exports = {
    search,
    create, 
    update,
    detail,
}