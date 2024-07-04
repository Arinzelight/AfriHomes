import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

// Create a new listing
export const createListing = async (req, res, next) => {
  const newListing = new Listing(req.body);
  try {
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    next(error);
  }
};

// Update an existing listing
export const updateListing = async (req, res, next) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.listingId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedListing) {
      return next(errorHandler(404, "Listing not found"));
    }
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

// Delete an existing listing
export const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.listingId);
    if (!listing) {
      return next(errorHandler(404, "Listing not found"));
    }
    // Check if the user is the owner of the listing or an admin
    if (listing.createdBy.toString() !== req.user.id && !req.user.isAdmin) {
      return next(
        errorHandler(403, "You are not authorized to delete this listing")
      );
    }
    await Listing.findByIdAndDelete(req.params.listingId);
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
};

// Get a single listing by ID
export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.listingId);
    if (!listing) {
      return next(errorHandler(404, "Listing not found"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

// Get all listings with pagination
export const getListings = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      lean: true,
    };

    const listings = await Listing.paginate({}, options);

    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

// Search listings with filtering and pagination
export const searchListings = async (req, res, next) => {
  try {
    const {
      name,
      location,
      minPrice,
      maxPrice,
      category,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }
    if (minPrice) {
      query.price = { ...query.price, $gte: Number(minPrice) };
    }
    if (maxPrice) {
      query.price = { ...query.price, $lte: Number(maxPrice) };
    }
    if (category) {
      query.category = { $regex: category, $options: "i" };
    }

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      lean: true,
    };

    const listings = await Listing.paginate(query, options);

    res.status(200).json(listings);
  } catch (error) {
    console.error("Error in searchListings:", error); // Log the error for debugging
    next(error); // Pass the error to the error handling middleware
  }
};
