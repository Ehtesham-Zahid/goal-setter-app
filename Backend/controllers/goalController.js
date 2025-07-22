const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goal" });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Goal" });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Goal" });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
