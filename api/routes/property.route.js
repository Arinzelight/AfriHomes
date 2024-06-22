import express from "express";
import {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getProperties,
  searchProperties,
} from "../controllers/property.controller.js";

const router = express.Router();

router.post("/", createProperty);
router.put("/:propertyId", updateProperty);
router.delete("/:propertyId", deleteProperty);
router.get("/search", searchProperties);
router.get("/:propertyId", getProperty);
router.get("/", getProperties);

export default router;
