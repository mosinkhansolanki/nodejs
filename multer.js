const express = require('express');
const app = express();
const multer = require('multer');

const fileupload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "curd")
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" + ".jpg")
        }
    })

}).single("data")

app.post('/', fileupload, (req, res) => {
    res.send("singup")
})
app.listen(8000)

















// const express = require('express');
// const app = express();
// const multer = require('multer');

// const fileupload = multer({
//    storage: multer.diskStorage({
//        destination: function (req, file, callback) {
//            callback(null, "Images")
//        },
//        filename: function (req, file, callback) {
//            callback(null, file.fieldname + "-" + Date.now() + ".jpg");
//        }
//    })
// }).single("data");


// app.post("/", fileupload, (req, res) => {
//    res.send("file uploaded");
// })
// app.listen(8000);






























































// // const express = require('express');
// // const app = express();
// // const multer = require('multer');
// //
// // const fileupload = multer({
//     // storage: multer.diskStorage({
//         // destination: function (req, file, callback) {
//             // callback(null, "Images")
//         // },
//         // filename: function (req, file, callback) {
//             // callback(null, file.fieldname + "-" + Date.now() + ".jpg");
//         // }
//     // })
// // }).single("data");
// //
// //
// // app.post("/", fileupload, (req, res) => {
//     // res.send("file uploaded");
// // })
// // app.listen(8000);
// //
// //
// // 








































