require("dotenv").config();
let app = require("./src/app");
let connectDB= require("./src/db/db");

connectDB()
    .then(()=>{
        console.log("connect to db successfully");

        app.listen(process.env.PORT,()=>{
            console.log(`server running on port ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err);
    })


