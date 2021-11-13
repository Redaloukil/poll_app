const usersService = require('../services/users');
const { catchAsyncError } = require('../helpers/catchAsync');
const jwtHelper = require('../helpers/jwt');

module.exports = {
  getAllUser: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const users = await usersService.getAllUsers();
        return res.status(200).json(users);
      },
      () => (req, res) => {
        return res.status(404);
      }
    ),
  getOneUser: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const user = await usersService.getUserById(req.params.id);
        return res.status(200).json(user);
      },
      (req, res) => {
        return res.status(400);
      }
    ),
  createUser: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const user = req.body;
        console.log(user);
        const createdUser = await usersService.createUser(user);
        if (createdUser) {
          return res.status(201).json(createdUser);
        }
        return res.status(400).json({
          message: 'could not create with posted credentials',
          credetials: user
        });
      },
      (req, res) => {
        return res.status(400).json({
          message: 'could not create with posted credentials'
        });
      }
    ),
  login: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const { username, password } = req.body;
        const user = await usersService.getUserByUsername(username);
        if (user && user.password === 'hashed_password' + password) {
          const token = jwtHelper.sign(user);
          return res
            .status(201)
            .json({ message: 'succefully logged in', token });
        }
        return res.status(401).json({ message: 'wrong credentials' });
      },
      (req, res) => {
        return res.status(400);
      }
    )
};
