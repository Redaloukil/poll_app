module.exports = {
  catchAsyncError: (req, res) => async (tryFunction, catchFunction) => {
    try {
      return await tryFunction(req, res);
    } catch {
      return catchFunction(req, res);
    }
  },
};
