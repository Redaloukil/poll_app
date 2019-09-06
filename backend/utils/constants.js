const security =  {
    // sessionSecret: process.env.SESSION_SECRET || 'i-am-the-secret-key',
    sessionSecret : 'i-am-the-secret-key',
    sessionExpiration: process.env.SESSION_EXPIRATION || 60 * 60 * 24 * 7, // 1 week
    // saltRounds: process.env.SALT_ROUNDS || 12,
    saltRounds : 12,
}

module.exports = {
    security : security,
}