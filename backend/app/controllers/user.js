const { User } = require('../models/user') 

const search = async (req , res , next ) => {
    try {
        res.json(await User.find({}));
    }catch(err) {
        next(err);
    }
}

const deletep = async (req, res, next) => {
    if (!req.currentUser) {
      return res.sendStatus(403);
    }

    try {
      await req.currentUser.remove();
      res.sendStatus(204);
    } catch(err) {
      next(err);
    }
}

const update = async (req, res, next) => {
    const newAttributes = this.filterParams(req.body, this.whitelist);
    const updatedUser = Object.assign({}, req.currentUser, newAttributes);

    try {
      res.status(200).json(await updatedUser.save());
    } catch (err) {
      next(err);
    }
}


module.exports = {
    search , 
    update , 
    
}