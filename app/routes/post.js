const { Router } = require("express");
const router = Router();
const postController = require("../controllers/post.controller");

router.get("/", postController.getAll);
router.post("/", postController.create);

module.exports = router;
