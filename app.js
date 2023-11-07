require("dotenv").config({ path: "./config.env" });
const express = require('express')
const taskRouter = require("./routes/taskRoutes");


//Middleware
const app = express()
app.use(express.json())
//Routes
app.use('/api/v1/tasks', taskRouter)

//DataBase Connection
const connectDatabase = require("./utilities/dataBase");

connectDatabase()

//Starting the server
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server Listening To Requests On Port ${port}....`);
})