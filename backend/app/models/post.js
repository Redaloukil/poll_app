/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 * Post schema
 */
const PostSchema = new Schema({
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

PostSchema.method({});

/**
 * Statics
 */

PostSchema.static({});

/**
 * Register
 */

mongoose.model('Post', PostSchema);
