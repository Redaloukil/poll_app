/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const User = require('../models/user');
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
})

/**
 * Poll schema
 */
const PollSchema = new Schema({
  title: {type: String, required:true ,default: ''},
  description: {type: String, required:true ,default: ''},
  user : {type : Schema.Types.ObjectId }
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