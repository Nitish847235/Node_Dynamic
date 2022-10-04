const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NitishDynamic"
).then( ()=>{
    console.log("connection sucessfully");
}).catch((e) =>{
    console.log(e);
})