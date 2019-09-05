import BaseController from './base.controller';
import Poll from '../models/poll';

class PollController extends BaseController {
    
    search = async (req, res, next) => {
        try {
          const polls = await Post.find({})
          res.json(polls);
        } catch(err) {
          next(err);
        }
    }
    
    

    create = async (req, res, next) => {
        const { title , description } = req.body;
    
        try {
          const poll = await Poll.create({title , description})
    
          if (!poll) {
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            return next(err);
          }
    
          return res.status(200).json({ poll });
        
        } catch (err) {
          next(err);
        }
    }
}

export default PollController