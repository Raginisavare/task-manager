const express=require('express')
const UserRepo = require('../repos/user-repo');

const router=express.Router()
//add user
router.post('/users', async (req, res) => {
  
    const{name,age}=req.body;
    const user = await userRepo.insert(name,age);
      res.send(user);
    });

//fetch user
    router.get('/users', async (req, res) => {
        // Run a query to get all users
        const users= await UserRepo.find();
      
        // Send the result back to the person
        // who made this request
        res.send(users);
      });


      //update user
      router.put('/users/:id', async (req, res) => {
        const{id}=req.params;
        const{  name,age }=req.body;
        const user = await UserRepo.update(id,name,age);
        if(user)
        {
          res.send(user);
        }
        else{
          res.sendStatus(404);
        }
        
      });
      //delete user
      router.delete('/users/:id', async (req, res) => {
        const{ id }=req.params;
        const user= await UserRepo.delete(id);
        if(user)
        {
          res.send(user);
        }
        else
        {
          res.sendStatus(404);
        }
      });
module.exports = router;