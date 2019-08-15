/*!
 * Module dependencies
 */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

/**
 * User schema
 */
const UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' }
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

UserSchema.method({
  getPosts() {
      return Post.find({ _user: this._id });
  },
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
  },
  

});

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


