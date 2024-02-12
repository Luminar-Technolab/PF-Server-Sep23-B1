const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{
    const {username,email,password} = req.body
    console.log("Inside register request");
    try{
        // check email already exist
     const exisitngUser = await users.findOne({email})
     console.log(exisitngUser);
     if(exisitngUser){
        res.status(406).json("User Already exist!!! Please Login...")
     }else{
        //add user to db
        const newUser = new users({
            username,email,password,profile:"",github:"",linkedin:""
        })
        await newUser.save()
        res.status(200).json(newUser)
     }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.login = async (req,res)=>{
    const {email,password} = req.body
    console.log("Inside login request");
    try{
        // check email,password already exist
     const exisitngUser = await users.findOne({email,password})
     console.log(exisitngUser);
     if(exisitngUser){
        //generate token using jwt - 
        const token = jwt.sign({userId:exisitngUser._id},process.env.jwt_secret)
        res.status(200).json({exisitngUser,token})
     }else{
        res.status(406).json("Invalid Email / Password")
     }
    }catch(err){
        res.status(401).json(err)
    }
}

//updateprofile
exports.editUser = async (req,res) =>{
    const userId = req.payload
    const {username,password,email,github,linkedin,profileImage} = req.body
    const profile = req.file?req.file.filename:profileImage
    try{
        const updateUser = await users.findByIdAndUpdate({_id:userId},{username,email,password,profile,github,linkedin},{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)
    }catch(err){
        res.status(401).json(err)
    }
}