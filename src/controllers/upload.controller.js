let uploadFile   = require("../services/storage.service");
let imageModel = require("../models/images.model");

function getForm(req,res){
    res.render("upload");
}

async function ImageUploader(req,res){
    // console.log(req.file);
    let {title} = req.body;

    let ans = await uploadFile(req.file.buffer.toString("base64"));
    // console.log("result is ",ans);

    let resp = await imageModel.create({title:title,image:ans.url})

    // return res.status(200).json({
    //     ans:ans,
    //     resp:resp
    // })

    res.redirect("/api/allimage")

}   


async function getimage(req,res){
    const images = await imageModel.find({})
    // console.log(images);
    res.render("mainPage",{images})
}


module.exports = {ImageUploader,getimage,getForm};