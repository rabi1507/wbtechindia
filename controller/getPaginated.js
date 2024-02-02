const Task = require('../models/taskSchema');
const User = require('../models/userSchema');

exports.getPaginated = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    console.log(page);
    const pageSize = parseInt(req.query.pageSize) || 10;

    const users = await User.find()

      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// // Get paginated and sorted list of tasks

 exports.getPaginatedTask=async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const sortBy = req.query.sortBy || 'createdAt';

    const tasks = await Task.find()
      .sort({ [sortBy]: 1 }) // 1 for ascending, -1 for descending
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

