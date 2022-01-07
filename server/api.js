const express = require("express");
const router = express.Router();

// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

module.exports = router;
