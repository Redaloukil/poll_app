const { catchAsyncError } = require('../helpers/catchAsync');
const pollsService = require('../services/polls');

module.exports = {
  getAllPolls: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const polls = await pollsService.getAllPolls();
        return res.status(200).json(polls);
      },
      () => (req, res) => {
        return res.status(404);
      }
    ),
  getPollById: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const { id } = req.params;
        const poll = await pollsService.getPollById(id);
        return res.status(200).json(poll);
      },
      (req, res) => {
        return res.status(404).json({ message: 'Ressource not found' });
      }
    ),
  createPoll: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const { user } = req;
        const { title, description } = req.body;
        const createPoll = pollsService.createPoll({
          title: title,
          description: description,
          userId: user.id
        });
        return res.json(createPoll).status(201);
      },
      (req, res) => {
        return res.status(201).json({ message: 'error while creating poll' });
      }
    )
};
