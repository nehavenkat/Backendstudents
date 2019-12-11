const express = require("express") //Step 1) We are using express
const server = express(); // 2) creating new server
const studentService = require("./src/services/student.js") // 12) we import our students router

server.use(express.json()) //20)we specify that we are gonna handle the BODY of the requests as JSON for POST 
server.listen(3200, () => { // 3)Running the server on the selected "port" and using Callback function
    console.log("Server is running on 3200")
});// 4) now run interminal nodemon server.js 5) check in "POSTMAN" on GET http://localhost:3100
//6) now we need to creat first route for the server
//---> Folder src -->Folder services --->file student.js and student.json

server.use("/students", studentService) // 13)we assign the studentRouter on /students // 14) check it on POSTMAN GET http://localhost:3100/students
