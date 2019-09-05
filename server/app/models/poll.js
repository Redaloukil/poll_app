import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChoiceSchema = new Schema ({
    description : {
        type : String,
        required : true,
    },
    count : {
        type : text , 
        required : true
    },
    _poll: { type: Schema.Types.ObjectId, ref: 'Poll' },
    }
, {
  timestamps: true,
})

const PollSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  Choice : {
  
  },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

const PollModel = mongoose.model('Poll', PollSchema);
const ChoiceModel = mongoose.model('Choice' , ChoiceSchema);


export default {
  Poll : PollModel,
  Choice :ChoiceModel,
};
