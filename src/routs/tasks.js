const express=require('express')
const taskRepo=require('../repos/task-repo')
const router=express.Router()


router.post('/tasks', async (req, res) => {
  
    const{description,status}=req.body;
    const task = await taskRepo.insert(description,status);
      res.send(task);
    });

    module.exports = router;