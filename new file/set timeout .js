let a=5;
let b=10;
console.log(a)
console.log(b) 
const data=new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(200);
     },2000)
}) 
data.then((b)=>{
  console.log(a+b);
});

