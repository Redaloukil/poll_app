const mongoose = require('mongoose');


const PollChoiceSchema = mongoose.Schema({
    title : { type: String, unique: true },
    counter : {type : Number , default : 0},
})

const PollChoice = mongoose.model('pollChoice', PollChoiceSchema);

module.exports = PollChoice;

const PollSchema = mongoose.Schema({
    id : { type: String, unique: true },
    author : { type: Schema.Types.ObjectId ,ref: 'User' } ,
    title : { type:String },
    description : {type: String} ,
    choices :[
        {type: Schema.Types.ObjectId, ref: 'pollChoice'}
    ]
})


const Poll = mongoose.model('poll', PollSchema);


    

module.exports = Poll;
