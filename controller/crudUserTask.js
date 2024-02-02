const User=require('../models/userSchema');
const Task=require('../models/taskSchema');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.json());
exports.creatUserTask=async (req, res) => {
    try {
      const { title, description, dueDate, completed, userId } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const task = new Task({ title, description, dueDate, completed, userId });
      await task.save();
  
      // Emit a Socket.IO event to notify clients about the new task
      io.emit('newTask', task);
  
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  // Socket.IO connection handling
  io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Handle disconnect event if needed
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  
   exports.updateTask= async (req, res) => {
      try{
          const {id}=req.params;
          const{tile, description} =req.body;
  
            const updatedData = await Task.findByIdAndUpdate(
            {_id:id},
            {tile, description, createdAt: Date.now()},
          )
          res.status(200)
          .json({
          success:true,
          data:updatedData,
          message:"update successfully",
          })
      }
      catch(err){
          console.log(err);
          res.status(500)
          .json({
              success:false,
              error:err.message,
              message:"server error",
          })
      }
  }
    exports.deleteUser = async(req, res) =>{
      try{
          const {id} =req.params;
          await User.findByIdAndDelete({_id:id});
          res.json({
              success:true,
              message:"data Deleted",
  
          })
      }
      catch(err){
          console.error(err);
          res.status(500)
          .json({
              success:false,
              error:err.message,
              message:'Srver Error',
          })
      }
  }