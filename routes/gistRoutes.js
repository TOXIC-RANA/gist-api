const express = require("express");
const router = express.Router();
const gistController = require("../controllers/gistController");

router.post("/gists", gistController.createGist);
router.get("/gists", gistController.listGists);
router.get("/gists/:id", gistController.getGist);
router.put("/gists/:id", gistController.updateGist);
router.delete("/gists/:id", gistController.deleteGist);

module.exports = router;
