const express= require("express")
const mongoose= require("mongoose")
const dotenv=require("dotenv")
const jwt = require("jsonwebtoken")
const cookie_parser= require("cookie-parser")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const userModel = require("./model/user")


const bcryptSalt=bcrypt.genSaltSync(10)
dotenv.config({path:__dirname+"/.env"})
const app=express()
app.use(cookie_parser())
app.use(cors(
    {credentials:true,origin:process.env.CLIENT_URL}
))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
mongoose.connect(process.env.MONGO_DB_LINK).then(()=>{console.log("Success");}).catch((err)=>{console.log(err);})

app.post("/register_patient",async (req,res)=>{
    const {email,password}=req.body
    const hashedPassword=bcrypt.hashSync(password,bcryptSalt)
    try{
        
        const result = await userModel.create({"email":email,"password":hashedPassword,"type":"Patient"})
        jwt.sign({"UserId":result._id,"email":email},process.env.JWT_SECRET,{},(err,token)=>{
            if(err){
                console.log(err);
                res.status(500).send({"ERROR":"Token Error"})
                return
            }
                res.cookie("USER_TOKEN",token,{maxAge: 43200000})
                res.status(201)
                .send({"ERROR":null,"MESSAGE":"Login successful","id":result._id})
        })
    }
    catch(err){
        console.error(err);
        res.status(500).send({"ERROR":"Database error"+err})
    }
})
app.get("/verify_token",(req,res)=>{
    const {USER_TOKEN}= req.cookies
    if(USER_TOKEN){
        console.log("Token-----"+USER_TOKEN)
        jwt.verify(USER_TOKEN,process.env.JWT_SECRET,{},(err,userData)=>{
            if (err){
                console.log(err)
                return
            }
            res.json(userData)
    
        })
    }
    else{
        res.status(401).json({"ERROR":"Token not found"})
    }
})
app.post("/process_login", async(req,res)=>{
    const {email,password}=req.body
    const foundUser= await userModel.find({"email":email})
    console.log(foundUser)
    if(foundUser.length==1){
        const passOk=bcrypt.compareSync(password,foundUser[0].password)
        if(passOk){
            console.log("logged")
            jwt.sign({"UserId":foundUser[0]._id,"email":email},process.env.JWT_SECRET,{},(err,token)=>{
                if(err){
                    console.log(err);
                    res.status(500).send({"ERROR":"Token Error"})
                    return
                }
                console.log(token);
                res.status(201).cookie("USER_TOKEN",token,{maxAge: 43200000})
                    .send({"ERROR":null,"MESSAGE":"Login successful","id":foundUser[0]._id})
            })
        }
        else{
            res.send({"ERROR":null,"MESSAGE":"Password not correct"})
        }
    }
    else{
        res.send({"ERROR":null,"MESSAGE":"User not found"})
    }
})
app.post("/logout",(req,res)=>{
    res.clearCookie("USER_TOKEN",{path:"/"}).send({"ERROR":null,"MESSAGE":"Logout"})
})
app.listen(8000)