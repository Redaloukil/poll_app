/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 * Post schema
 */
const PostSchema = new Schema({
    title: { 
      type: String, 
      required:true 
    },
    description: { 
      type: String, 
      required:true 
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

PostSchema.method({});

/**
 * Statics
 */

PostSchema.static({});

/**
 * Register
 */

const Post = mongoose.model('Post',PostSchema)


module.exports = {
    Post,
};