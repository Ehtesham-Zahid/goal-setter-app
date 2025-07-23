const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
} = require("../controllers/userControllers");

router.post("/", registerUser);
router.post("/", loginUser);
router.get("/me", getUserData);

module.exports = router;
