/*!
 * Module dependencies.
 */

const home = async (req , res , err) => {
  return res.status(200).json({"not found" : "Radoi weli"});
}

module.exports = {
  home
}