const version = require('../../package.json').version
/*!
 * Module dependencies.
 */

const home = async (req , res , err) => {
  return res.status(200).json({"not found" : version });
}

module.exports = {
  home
}