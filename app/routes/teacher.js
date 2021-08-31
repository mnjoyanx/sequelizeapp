const { Router } = require("express");
const router = Router();
const teacherController = require("../controllers/teacher.controller");

router.get("/", teacherController.getAll);
router.post("/", teacherController.create);

module.exports = router;
