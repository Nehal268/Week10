// router.js
const express = require("express");
const router = express.Router();
// controller functions
const locationController = require("../controllers/locationController");

router.get("/", locationController.getLocations);
router.post("/", locationController.addLocation);
router.get("/:id", locationController.getLocation);
router.delete("/:id", locationController.deleteLocation);  // Updated to removelocation
router.put("/:id", locationController.updateLocation);         // Updated to putlocation

module.exports = router;