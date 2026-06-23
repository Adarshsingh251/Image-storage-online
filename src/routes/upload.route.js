let express = require("express");
let {ImageUploader,getimage,getForm,rootRoute} = require("../controllers/upload.controller")
const multer = require("multer");

const upload = multer({storage:multer.memoryStorage()});
const router = express.Router();

router.post("/upload",upload.single("image"),ImageUploader);

router.get("/allimage",getimage);

router.get("/getForm",getForm);

module.exports = router;