const version = require('../../package.json').version
const name = require('../../package.json').name;

/*!
 * Module dependencies.
 */

const home = (req , res ) => {
    // res.json({"Api name": name ,"Version" : version });
    res.json({
        version: version,
    }).status(200);
    
}

module.exports = {
  home
}