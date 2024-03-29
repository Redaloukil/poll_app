const { catchAsyncError } = require('../helpers/catchAsync');
const pollsService = require('../services/polls');
const choicesService = require('../services/choices');

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
        if (poll) {
          return res.status(200).json(poll);
        }
        return res.status(404).json({ message: 'Ressource not found' });
      },
      (req, res) => {
        return res.status(404).json({ message: 'Ressource not found' });
      }
    ),
  getPollChoicesById: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const { id } = req.params;
        const poll = await pollsService.getPollById(id);
        const choices = await choicesService.getChoicesByPollId(id);
        if (poll) {
          return res.status(200).json({ poll, choices });
        }
        return res.status(404).json({ message: 'Ressource not found' });
      },
      (req, res) => {
        return res.status(404).json({ message: 'Ressource not found' });
      }
    ),
  createPollChoiceById: (req, res) =>
    catchAsyncError(req, res)(
      async (req, res) => {
        const { id } = req.params;
        const { user } = req;
        const { title, description } = req.body;

        const poll = await pollsService.getPollById(id);
        if (!poll || poll.user_id !== user.id) {
          return res.status(401).json({ message: 'Unauthorized request' });
        }
        const choice = await choicesService.createChoiceByPollId(poll.id, {
          title,
          description
        });

        return res.status(201).json({ poll, choice });
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
        const createPoll = await pollsService.createPoll({
          title: title,
          description: description,
          userId: user.id
        });
        return res.json(createPoll).status(201);
      },
      (req, res) => {
        return res.status(201).json({ message: 'Error while creating poll' });
      }
    ),
  updatePoll: () => {
    catchAsyncError()(
      async (req, res) => {
        const { id } = req.params;
        const { title, description } = req.body;

        const poll = await pollsService.getPollById(id);

        poll.title = title || poll.title;
        poll.description = description || poll.description;

        await poll.save();

        return res.status(200).json(poll);
      },
      (req, res) => {
        return res.status(401).json({ message: '' });
      }
    );
  }
};
