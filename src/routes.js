const router = require("express").Router();

const FilterPauseController = require("./controllers/FilterPauseController");
const PauseController = require("./controllers/PauseController");

router.get("/", (req, res) => {
  res.json({ message: "ta up" });
});

router.get("/pauses", PauseController.getPauses);
router.post("/pausesFilter", FilterPauseController.filterPauses);
router.post("/pause", PauseController.saveInterval);
router.patch("/pause/:id", PauseController.editInterval);
router.delete("/deleteEverything", PauseController.deleteAll);

module.exports = router;
