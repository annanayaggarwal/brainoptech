const express = require("express");
const router = express.Router();

const {
  registerUser,
  logout,
  getUserProfile,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require(`../middleware/auth`);

router.route(`/register`).post(registerUser);
router.route(`/logout`).get(logout);
router.route(`/me`).get(isAuthenticatedUser, getUserProfile);

module.exports = router;
