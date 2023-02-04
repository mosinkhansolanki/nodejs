// // const express = require('express');
// // const app = express();
// // const EventEmitter = require('events')
// // const event = new EventEmitter();
// // let cnt = 0;
// // event.on("ApiCallCount", () => {
// //     cnt++;
// //     console.log("event  called ====>", cnt)
// // })
// // app.get("/", (req, res) => {
// //     res.send("first api callled")
// //     event.emit("ApiCallCount");
// // })

// // app.get("/product", (req, res) => {
// //     res.send("second search api callled")
// //     event.emit("ApiCallCount");
// // })
// // app.get("/categrise", (req, res) => {
// //     res.send("third update api callled")
// //     event.emit("ApiCallCount");
// // })

// // app.listen(8000);




// const express=require('express');
// const app=express();

// const EventEmitter=require('events');
// const event=new EventEmitter();
// let cnt=0;

// event.on('hiiiii',()=>{
//     cnt++;
//     console.log("funcation called",cnt);  
// })

// app.get('/',(req,res)=>{
//     res.send("hellooooooo")
//     event.emit("hiiiii")
// })

// app.get('/get',(req,res)=>{
//     res.send("hellooooooo")
//     event.emit("hiiiii")
// })

// app.get('/id',(req,res)=>{
//     res.send("hellooooooo")
//     event.emit("hiiiii")
// })
// app.listen(5000)


const express=require('express');
const app=express();
const EventEmitter=require('events');
const event=new EventEmitter();
let cnt=0;


event.on('hiiiiii',()=>{
    cnt++;
    console.log("hellooo",cnt);
}) 

app.get('/',async(req,res)=>{
    res.send("hiiiiiiiii")
    event.emit("hiiiiii")

}) 
app.listen(5000)