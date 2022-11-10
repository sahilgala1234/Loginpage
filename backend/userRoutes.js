const express=require("express");
const { registerUser, authuser } = require("./controller");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authuser);
module.exports=router;
