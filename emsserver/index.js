const express = require('express')

const server=express()

const cors = require('cors')

const logic = require('./service/logic')

//Frontend-server integration
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

//port setting server
server.listen(8000,()=>{
    console.log("server started at port 8000");
})

server.get('/getAllEmployees',(req,res)=>{
    logic.allEmployee().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/removeEmployee/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getAnEmployee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/editEmployee',(req,res)=>{
    logic.editEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})