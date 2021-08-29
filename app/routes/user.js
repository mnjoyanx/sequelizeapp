const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getAll);
router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.edit);
router.delete("/:id", userController.remove);

module.exports = router;
