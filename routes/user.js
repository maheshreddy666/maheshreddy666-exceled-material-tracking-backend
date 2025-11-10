const express = require("express");

const router = express.Router();

const { userCreation } = require("../controllers/auth/userAuth");

router.post("/superAdmin/signUp", userCreation);




module.exports = router