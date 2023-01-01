const express = require("express");
const router = express.Router();




const controller = require("../controllers/users.controller");



router.route('/register').post( controller.register)


module.exports = router;