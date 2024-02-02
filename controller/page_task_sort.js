const task=require('../models/taskSchema');
const User=require('../models/userSchema');
exports.pageSort= async (req, res) => {
    try {
        const dueDate=req.body.dueDate;
        const completed=req.body.completed;
       if(dueDate){
        var taskData =await task.find({dueDate: { $gte: dueDate } });
       }
       if(completed){
        var taskData =await task.find({completed:completed});
       }
       if(dueDate && completed){
        var taskData =await task.find({completed:completed,dueDate: { $gte: dueDate  }});
       }
      res.json(taskData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  exports.pageMiddleware= (req,res, next)=>{
    const dueDate=req.body.dueDate;
    if(typeof(dueDate)!==String)
    return res.send("invalid date") ;
    const completed=req.body.completed;
    if(typeof(completed) !==Boolean)
    return res.send("invalid input");
    next();
  }

  