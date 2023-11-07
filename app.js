require("dotenv").config({ path: "./config.env" });
const express = require('express')
const taskRouter = require("./routes/taskRoutes");

//DataBase Connection
const connectDatabase = require("./utilities/dataBase");

connectDatabase()

//Middleware
const app = express()
const port = process.env.PORT || 8000

//Routes
app.use('/api/v1/tasks', taskRouter)

//Starting the server
app.listen(port, () => {
  console.log(`Server Listening To Requests On Port ${port}....`);
})