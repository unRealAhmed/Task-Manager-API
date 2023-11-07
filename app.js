require("dotenv").config({ path: "./config.env" });
const express = require('express')
const taskRouter = require("./routes/taskRoutes");

const app = express()
const port = process.env.PORT || 8000

//routes

app.use('/api/v1/tasks', taskRouter)

//Starting the server
app.listen(port, () => {
  console.log(`Server Listening To Requests On Port ${port}....`);
})