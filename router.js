const express = require('express');
const controller=require('./controller')
const router = express.Router();

router.get("/getDetails",controller.getUser)
router.get("/getTheDetails",controller.getUserDetails)

module.exports = router;