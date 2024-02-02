const mongoose = require('mongoose');
const User = require('../models/userSchema');
const Task = require('../models/taskSchema');

exports.transHandle = async (req, res) => {
  const { userId, newUserData, newTaskData } = req.body;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userData = await User.findById(userId);

    if (!userData) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Update user information
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      newUserData,
      { new: true, session }
    );

    // Update associated tasks
    const updatedTasks = await Task.updateMany(
      { userId },
      newTaskData,
      { session }
    );

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    res.send({ updatedUser, updatedTasks });
  } catch (error) {
    // If any operation fails, roll back the entire transaction
    await session.abortTransaction();
    session.endSession();

    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
