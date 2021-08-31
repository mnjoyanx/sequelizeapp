const { Router } = require("express");
const router = Router();
const priorityController = require("../controllers/priority.controller");

router.get("/", priorityController.getAll);
router.post("/", priorityController.create);

module.exports = router;
