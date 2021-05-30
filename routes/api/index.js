const router = require("express").Router();
const category = require('./category');

module.exports = router;

router.use('/category', category);