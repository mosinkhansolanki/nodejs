

const mongoose=require('mongoose');
const userscema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    moNumber: String
})
module.exports=mongoose.model("detal",userscema)