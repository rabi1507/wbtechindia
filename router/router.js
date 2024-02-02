const express=require('express');
const router=express.Router();
const {login,signup}=require('../controller/auth');
const{creatUserTask,updateTask,deleteUser}=require('../controller/crudUserTask');
const{pageSort}=require('../controller/page_task_sort');
const{pageMiddleware}=require('../controller/page_task_sort');
const {getPaginated, getPaginatedTask}=require('../controller/getPaginated');
const{transHandle}=require('../controller/transHandle');
// mapping
router.post('/signup', signup);
router.post('/login', login); 
router.post('/creatUserTask', creatUserTask);
router.patch('/updateTask/:id', updateTask); 
router.delete('/deleteUser/:id',deleteUser);
router.get('/pageSort',pageMiddleware, pageSort); 
router.get('/getPaginatedUser', getPaginated); 
router.get('/getPaginatedTask', getPaginatedTask); 
router.patch('/transHandle', transHandle); 

module.exports=router;

