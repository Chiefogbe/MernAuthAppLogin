const express=require('express')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')
const router=require('./routes/authroutes')
const cookieParser=require('cookie-parser')


const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use('/', router)

const PORT=5000

mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT} && connected to DB`)
  })
}).catch((error)=>{
  console.log(error)
})

