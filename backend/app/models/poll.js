/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Choice Choice
*/
const ChoiceSchema = new Schema({
    title : { type : String , required :true },
    // choice : { type : Schema.Types.ObjectId , required : true } ,
})

/**
 * Poll schema
 */
const PollSchema = new Schema({
  title: {type: String, required:true ,default: ''},
  description: {type: String, required:true ,default: ''},
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

mongoose.model('Poll', PollSchema);
