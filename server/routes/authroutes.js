const express=require('express')
const router=express.Router()
const cors=require('cors')
const { test, registeruser, loginuser, getprofile } = require('../controllers/controllers')


router.use(
  cors({
    credentials:true,
    origin:'http://localhost:3000'
  })
)

router.get('/', test)
router.post('/register', registeruser)
router.post('/login', loginuser)
router.get('/profile', getprofile)

module.exports=router