const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt') //able to hash strings (password)

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    // validation
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    // date & time created and updated
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);
// password hasnt changed put hashed pass in using bcrypt
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    // The SALT_ROUNDSvariable determines how much processing time it will take to perform the hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });
  

module.exports = mongoose.model("User", userSchema);
