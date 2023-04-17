const express = require("express");
const router = express();
const { Login, Register } = require("../controllers/userController");

router.post("/login", Login).post("/register", Register);

module.exports = router;
