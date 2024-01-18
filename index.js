const express = require("express");
const app = express();
app.use(express.json());
const cookies = require("cookie-parser");
app.use(cookies());
require("dotenv").config();
const  connectDatabase  = require("./connection/db");
const generatetoken = require("./tokens/generate");
const verifytoken = require("./tokens/verify");
const USER_MODEL = require("./model/user")

app.post("/signup" , async(req, res)=>{
    try {
        console.log(req.body);
        const checkuser  = await USER_MODEL.findOne({ email: req.body.userEMAIL})
        if (checkuser){
            return res.status(400).json({ success: false , error: "User already Exist"})
        }
        const newuser = {
            userEMAIL: req.body.userEMAIL ,
            userNAME: req.body.userNAME,
            userPASSWORD: req.body.userPASSWORD,
            userDOB: req.body.userDOB,
            userPHONENUMBER: req.body.userPHONENUMBER,
            userOCCUPATION: req.body.userOCCUPATION,
        }
        await newuser.save();
        return res.json ({ success: true , message: "Signed up success"})
        
    } catch (error) {
        return res.json({ success: false , error : error.message})
    }
})

connectDatabase();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });