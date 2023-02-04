

// // const express = require('express');
// // const app = express();
// // require('./config');
// // const userscema = require('./userscema')
// // const help = require('./helper')
// // app.use(express.json());

// // // // })
// // // app.post("/", async (req, res) => {
// // //     const { email, name, password, moNumber } = req.body;
// // //     const form = {
// // //         email: help.validators.checkEmail("email", email),
// // //         name: help.validators.checkRequire('name', name),
// // //         password: help.validators.checkPassword("password", password),
// // //         moNumber: help.validators.checkPhoneNumber("moNumber", moNumber),
// // //     }

// // //     if (form.email == null && form.name == null) {
// // //         if (form.password == null && form.moNumber == null) {
// // //             let data = new userscema(req.body)
// // //             const result = await data.save();
// // //             res.send(result);
// // //         }

// // //     } else {
// // //         res.send(form)
// // //     }

// // // })
// // // app.listen(5000)


const express=require('express');
const app=express();
require('./config');
const userscema=require('./userscema');
const help=require('./helper');
app.use(express.json());



app.post('/',async(req,res)=>{
const{email,name,monumber,password}=req.body
    const form={
        email:help.validators.checkEmail("email",email),
        name: help.validators.checkRequire("name",name),
        password:help.validators.checkPassword("password",password),
        monumber:help.validators.checkPhoneNumber("monumber",monumber)
    } 
    if(form.email==null && form.name==null){
        if(form.password==null && form.monumber==null){
            const data=new userscema(req.body);
            const result= await data.save();
            res.send(result)
        }
    } 
    else{
        res.send(form)
    }

}) 
app.listen(5000)