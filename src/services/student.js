// 7) // The student.json file--> first should be an empty array []
const express = require("express")// 8) we need an express
const router = express.Router() // 9) we need a router "It will be the middleware that will take care for this route"
//15) to get reference to '{}student.json' we use 1)file sytem and 2)path
const fs = require("fs")
const path = require("path")

const studentsFilePath = path.join(__dirname, "student.json");// 16)define Directory

const readFile = () => { //17) create readfile function
    const buffer = fs.readFileSync(studentsFilePath)// read the students file path
    const content = buffer.toString();// convert to string
    return JSON.parse(content)// return json
}

//router.get('/',(req,res)=>{ //11) creating this to test weather router works, we need to specify "route '/'" so mount it on "server.js" Step 12
//    res.send("hello")
//})
router.get('/',(req,res)=>{ //18) Now writing the 'Get' method and calling the readFile() and check in POSTMAN http://localhost:3100/students we get "[]"
const studentsArray = readFile()
    res.send(studentsArray)
})

//19) now writing POST method to allow creating new students
router.post('/',(req,res)=>{ 

    var previousStudents = readFile(); //reads the students from the disk
    const student = {
        ...req.body,
        _id: previousStudents.length + 1,
    }// create object first and then pysh it to previous array of students 

    previousStudents.push(student) //push the item into the students array
    fs.writeFileSync(studentsFilePath, JSON.stringify(previousStudents)); //override the previous array on the harddrive
    res.send({ _id: student._id }) //return the newly generated ID as object{}
})

module.exports = router;// 10) Now we need to export the router
