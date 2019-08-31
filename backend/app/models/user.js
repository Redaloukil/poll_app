/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Constants = require('../../utils/constants');
const Schema = mongoose.Schema;
const { Post } = require('../models/post');

/**
 * User schema
 */
const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'name is required.'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Email is required'],
    validate: {
      validator(email) {
        // eslint-disable-next-line max-len
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} is not a valid email.',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  salt: { type: String, default: '' }
  }, {
  timestamps: true,
});

/**
 * Add your
 */

UserSchema
  .pre('save', function(done) {
    // Encrypt password before saving the document
    if (this.isModified('password')) {
      const { saltRounds } = Constants.security;
      this._hashPassword(this.password, saltRounds, (err, hash) => {
        this.password = hash;
        done();
      });
    } else {
      done();
    }
    // eslint-enable no-invalid-this
  });


/**
 * Methods
 */

UserSchema.methods = {
  getPosts() {
      return Post.find({ _user: this._id });
  },  
  
  authenticate(password) {
      return bcryptjs.compareSync(password, this.password);
  },

  
  generateToken() {
      return jwt.sign({ _id: this._id }, Constants.security.sessionSecret, {
        expiresIn: Constants.security.sessionExpiration,
      });
  },

  storePassword(password){
    this.password = bcryptjs.hashSync(password); 
  },

  /**
   * Create password hash
   * @private
   * @param {String} password
   * @param {Number} saltRounds
   * @param {Function} callback
   * @return {Boolean} passwords match
   */
  _hashPassword(password, saltRounds = Constants.security.saltRounds, callback) {
      return bcryptjs.hash(password, saltRounds, callback);
  },
  

};

/**
 * Statics
 */

UserSchema.static({});

/**
 * Register
 */

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};


