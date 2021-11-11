const { catchAsyncError } = require('../helpers/catchAsync');
const pollsService = require('../services/polls');

module.exports = {
  getAllPolls: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const users = await pollsService.getAllUsers();
        return res.status(200).json(users);
      },
      () => (req, res) => {
        return res.status(404);
      }
    ),
  getPollById: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        //
      },
      (req, res) => {
        //
      }
    )
};
