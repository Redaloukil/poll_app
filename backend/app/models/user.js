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
  },
  {
    timestamps: true,
  });

UserSchema.set('toJSON', {
  virtuals: true,
  transform(doc, obj) {
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
    delete obj.password;
    return obj;
  },
});

// Validate username is not taken
UserSchema
  .path('username')
  .validate((username, respond) => {
    User.findOne({ username })
      .then((user) => {
        respond(user ? false : true);
      })
      .catch(() => {
        respond(false);
      });
  }, 'Username already taken.');

// Validate password field
UserSchema
.path('password')
.validate(function(password) {
  return password.length >= 6 && password.match(/\d+/g);
}, 'Password be at least 6 characters long and contain 1 number.');

/**
 * Add your hooks
 */

UserSchema
  .pre('save', function(done) {
    // Encrypt password before saving the document
    if (this.isModified('password')) {
      const  saltRounds  = Constants.security.saltRounds;
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
  /**
  * Authenticate - check if the passwords are the same
  * @public
  * @param {String} password
  * @return {Boolean} passwords match
  */
 authenticate(password) {
   return bcryptjs.compareSync(password, this.password);
 },

 /**
  * Generates a JSON Web token used for route authentication
  * @public
  * @return {String} signed JSON web token
  */
 generateToken() {
   return jwt.sign({ _id: this._id }, Constants.security.sessionSecret, {
     expiresIn: Constants.security.sessionExpiration,
   });
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
 }
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


