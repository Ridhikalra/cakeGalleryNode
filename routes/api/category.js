const router = require("express").Router();
const CategoryController = require("../../controllers/category.controller");

router.post("/create", CategoryController.create);
router.put("/update/:categoryId", CategoryController.update);
router.get("/", CategoryController.viewAll);
router.get("/view/:categoryId", CategoryController.view);
router.delete("/delete/:categoryId", CategoryController.delete)

module.exports = router;