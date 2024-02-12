//Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

const pfServer = express()

pfServer.use(cors())
// application specific middleware
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 

pfServer.listen(PORT,()=>{
    console.log(`Project fair server started at port: ${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red;>Project fair server started!!! Waiting for Client Request....</h1>")
})