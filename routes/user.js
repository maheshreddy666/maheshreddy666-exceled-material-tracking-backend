const express = require("express");

const router = express.Router();

const { superAdminSignup, userLogin, userUpdate, superAdminCreateUsers, superAdminVerifyAccount } = require("../controllers/auth/superAdminAuth");

//Supper Admin Auth
router.post("/superAdmin/signUp", superAdminSignup);
router.post("/superAdmin/verify/:superAdminId", superAdminVerifyAccount);
router.post("/superAdmin/login", userLogin);
router.put("/superAdmin/update/:superadminId/:userId", userUpdate);
router.post("/superAdmin/createUsers/:superadminId/", superAdminCreateUsers);




module.exports = router