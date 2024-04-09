const { hassPassword, comparePassword } = require("../helpers/auth")
const userSchema = require("../models/models")
const jwt=require('jsonwebtoken')


const test=(req, res)=>{
  res.json(`test is working.`)
}

const registeruser= async(req,res)=>{

  try {
    const {name, email, password}=req.body
    if(!name) return res.json({error:`name is required.`})
    if(!password || password.lenght <6) return res.json({error:`password is required and must be at least 6 characters.`})

    const exist= await userSchema.findOne({email})
    if(exist) return res.json({error:`email is taken already.`})

    const hashpassword=await hassPassword(password)

    const user=await userSchema.create({name, email, password:hashpassword})
    return res.json(user)

  } catch (error) {
    console.log(error)
  }
}

const loginuser=async(req,res)=>{
  try {
    const {email,password}=req.body

    const user=await userSchema.findOne({email})

    if(!user)return res.json({error:`no user found.`})

    const match =await comparePassword(password, user.password)
    if(match){
      jwt.sign({email:user.email, id:user._id, name:user.name}, process.env.JWTSECRET, {}, (err, token)=>{
        if(err)throw err;
        res.cookie('token', token).json(user)
      } )
    }
    if(!match)res.json({error:`password do not match.`})
    
  } catch (error) {
    console.log(error)
  }
}

const getprofile=(req,res)=>{
  const {token}=req.cookies
  if(token){
    jwt.verify(token, process.env.JWTSECRET, {}, (err, user)=>{
      if(err)throw err;
      res.json(user)
    })
  }
  else{
    res.json(null)
  }
}

module.exports={
  test,
  registeruser,
  loginuser,
  getprofile
}