const userModel= require('../Scemas/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.register = async function(req,res){
try {
    let newUser = new userModel(req.body)
    const hashedPass = await bcrypt.hash(req.body.password,10)
    newUser.password=hashedPass
    let user = await newUser.save()
    res.json({message:"user added successfuly",User:user})
} catch (error) {
    res.status(400).json({message:"this phone has aleady exist"})
}
}
exports.login = async function(req,res){
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(!user){
           return res.status(401).json({message : "invalid email or password"})
        }
        let passwordChecked = await user.comparePassword(req.body.password)
        if(passwordChecked=== false){
            return res.status(401).json({message : "invalid email or password"})
        
        }
        const token = jwt.sign({_id : user._id, name:user.name,role:user.role}, 'shhhhhh')
        return res.status(200).json({message:"user logged in ", user :{name: user.name , email : user.email , token}})
    } catch (error) {
        
    }
}