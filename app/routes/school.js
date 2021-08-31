const { Router } = require("express");
const router = Router();
const schoolController = require("../controllers/school.controller.js");

router.get("/", schoolController.getAll);
router.post("/", schoolController.create);

module.exports = router;
