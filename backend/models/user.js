const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
    maxlength: [15, "Your username cannot exceed 15 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter you email id"],
    unique: true,
    maxlength: [30, "Your email cannot exceed 30 characters"],
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minlength: [8, "Your password must be 8 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypting password before saving user
userSchema.pre(`save`, async function (next) {
  if (!this.isModified(`password`)) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Return Jwt Token
userSchema.methods.getJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    "JHABFQWUFEBFEB34798430HSDG",
    {
      expiresIn: "7d",
    }
  );
};

module.exports = mongoose.model(`User`, userSchema);
