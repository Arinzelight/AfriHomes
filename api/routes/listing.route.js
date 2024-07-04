import express from "express";
import {
  createListing,
  updateListing,
  deleteListing,
  getListing,
  getListings,
  searchListings,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Define routes
router.post("/create", verifyToken, createListing);
router.put("/:listingId", verifyToken, updateListing);
router.delete("/:listingId", verifyToken, deleteListing);
router.get("/", searchListings); // Place search route before /:listingId route
router.get("/:listingId", getListing);
router.get("/", getListings);

export default router;
