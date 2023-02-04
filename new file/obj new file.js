let input=process.argv; 
let obj={

  name: input[2],
  class: input[3],
   age: input[4], 
   }

const { fstat } = require('fs');
 const http=require('http');
 http.createServer((req,res)=>{
  res.writeHead(200,{'contant-type':'application\json'});
  res.write(JSON.stringify(obj));
  res.end();
 }).listen(5000);
 
