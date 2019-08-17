const version = require('../../package.json').version
const name = require('../../package.json').name;
/*!
 * Module dependencies.
 */

const home = (req , res , err) => {
    return res.status(200).json({"Api name": name ,"Version" : version });
}

module.exports = {
  home
}