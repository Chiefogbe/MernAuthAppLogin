const mongoose=require('mongoose')

const userModelSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  }
})

const userSchema=mongoose.model('User', userModelSchema)
module.exports=userSchema