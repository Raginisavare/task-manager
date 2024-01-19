const express = require('express');
const usersRouter = require('./routs/users');
const taskRouter=require('./routs/tasks');
module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(usersRouter);
  app.use(taskRouter);

  return app;
};
