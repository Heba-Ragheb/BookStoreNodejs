const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String ,
    role: String,
    email : {type : String , unique: true},
    age : Number ,
    phone :{type : String , unique: true},
    password: String
})
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password)
}
module.exports = mongoose.model('Users',userSchema)