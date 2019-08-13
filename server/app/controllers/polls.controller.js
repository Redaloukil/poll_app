import BaseController from './base.controller';

class PollController extends BaseController {
    create = async (req, res, next) => {
        const { title , description } = req.body;
    
        try {
          const user = await User.findOne({ username });
    
          if (!user || !user.authenticate(password)) {
            const err = new Error('Please verify your credentials.');
            err.status = 401;
            return next(err);
          }
    
          const token = user.generateToken();
          return res.status(200).json({ token });
        } catch (err) {
          next(err);
        }
      }
}