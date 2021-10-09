const usersService = require('../services/users');
const { catchAsyncError } = require('../helpers/catchAsync');

module.exports = {
  getUsers: catchAsyncError(
    async (req, res) => {
      const users = usersService.getAllUsers();
      return res.status(200).json(users);
    },
    () => (req, res) => {
      return res.status(404);
    }
  ),
  getUserById: catchAsyncError(
    (req, res) => {
      const user = usersService.getUserById(req.params.id);
      return res.status(200).json(user);
    },
    (req, res) => {
      return res.status(400);
    }
  ),
};
