module.exports = {
  catchAsyncError: async (tryFunction, catchFunction) => {
    try {
      await tryFunction();
    } catch {
      catchFunction();
    }
  },
};
