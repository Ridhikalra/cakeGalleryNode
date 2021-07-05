const router = require("express").Router();
const contact = require("./contact");
const category = require('./category');
const user = require('./user');
// const protect = require('../middleware/authMiddleware');

// router.route('/authMiddleware').post(login);

module.exports = router;

router.use('/contact', contact);
router.use('/category', category);
router.use('/user', user);
