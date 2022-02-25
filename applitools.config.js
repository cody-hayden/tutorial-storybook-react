module.exports = {
  concurrency: 1,
  waitBeforeCapture: async () => {
    await new Promise(r => setTimeout(r, 2000));
    return true;
  },
  showLogs: true
}

