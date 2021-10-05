const security = {
  sessionSecret: "i-am-the-secret-key",
  sessionExpiration: process.env.SESSION_EXPIRATION || 60 * 60 * 24 * 7, // 1 week
  saltRounds: 12,
};

module.exports = {
  security: security,
};
