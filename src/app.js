let express = require("express");
const router = require("./routes/upload.route");
let path = require("path");

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/", (req, res) => {
    res.redirect("/api/allimage");
});

app.use("/api",router);
module.exports = app;