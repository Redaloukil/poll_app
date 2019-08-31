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
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required.'],
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
 * Add your hooks
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




UserSchema.methods.getPosts = () => {
      return Post.find({ _user: this._id });
}    
  
UserSchema.methods.authenticate = (password) =>  {
      return bcryptjs.compareSync(password, this.password);
}

UserSchema.methods.generateToken = () => {
    return jwt.sign({ _id: this._id }, Constants.security.sessionSecret, {
        expiresIn: Constants.security.sessionExpiration,
    });
}

UserSchema.methods.storePassword = (password) => {
    this.password = bcryptjs.hashSync(password); 
}

UserSchema.methods._hashPassword = (password, saltRounds = Constants.security.saltRounds, callback) => {
      return bcryptjs.hash(password, saltRounds, callback);
}
  



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


