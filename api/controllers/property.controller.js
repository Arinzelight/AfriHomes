import Property from "../models/property.model.js";
import { errorHandler } from "../utils/error.js";

export const createProperty = async (req, res, next) => {
  const newProperty = new Property(req.body);
  try {
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.propertyId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedProperty) {
      return next(errorHandler(404, "Property not found"));
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(
      req.params.propertyId
    );
    if (!deletedProperty) {
      return next(errorHandler(404, "Property not found"));
    }
    res.status(200).json("Property has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.propertyId);
    if (!property) {
      return next(errorHandler(404, "Property not found"));
    }
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

export const getProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};
