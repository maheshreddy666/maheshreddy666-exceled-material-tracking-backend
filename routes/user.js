const express = require("express");

const router = express.Router();

const { userCreation } = require("../controllers/userAuth");

router.post("/superAdmin/signUp", userCreation);




module.exports = router