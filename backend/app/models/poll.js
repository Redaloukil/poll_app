/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Choice Choice
*/
const ChoiceSchema = new Schema({
    title : { 
        type : String , 
        required :true 
    },
    description : { 
        type : String , 
        required : true , 
    },
    _poll:{ 
        type : Schema.Types.ObjectId , 
        ref : 'User' 
    },
})

/**
 * Poll schema
 */
const PollSchema = new Schema({
  title: {type: String, required:true },
  description: {type: String, required:true },
  _user : {type : Schema.Types.ObjectId , ref:'User'},
});

PollSchema.set('toJSON', {
    virtuals: true,
    transform(doc, obj) {
      obj.id = obj._id;
      delete obj._id;
      delete obj.__v;
      return obj;
    },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PollSchema.method({});

/**
 * Statics
 */

PollSchema.static({});

/**
 * Register
 */

const Poll = mongoose.model('Poll', PollSchema);
const Choice = mongoose.model('Choice', ChoiceSchema);


module.exports = {
    Poll , 
    Choice ,
}