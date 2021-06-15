const router = require("express").Router();
const category = require('./category');
const protect = require('../middleware/authMiddleware');

router.route('/authMiddleware').post(login);

module.exports = router;

router.use('/category', category);
