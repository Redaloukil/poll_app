const User = require('../models/user');

const login = (req , res , err) => {
    const { email , password } = req.body;
    return res.status(200).json({email , password});
}
const signup = (req , res , err) => {
    return res.status(200).json({"hello world" : "hello world this is me"})
}
const confirmationToken = () => {

}

module.exports = {
    login , 
    signup ,
    confirmationToken
}
