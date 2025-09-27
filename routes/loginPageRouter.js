const express = require("express");
const router = express.Router();

const { loginPageController } = require("../controllers/loginPageController");
router.get("/", loginPageController);
module.exports = router;
