const fs=require('fs')
const path=require('path');
const pathone=path.join(__dirname ,"curd");
const apple=pathone + "/abc.js" 
console.log("===>",pathone);
fs.writeFileSync(apple,"ths is a new file"); 


fs.unlinkSync(`${pathone}/abc.js`)

fs.readFile(pathname,(err,item)=>{
console.log(item,"mosin");
}) 


fs.appendFile(filepath,"this is a new file mosinnnnnnnnnnnn",(err)=>{
console.log("helllllooooo");
}) 











