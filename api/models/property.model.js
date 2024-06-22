import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["rent", "sale"],
    },
    price: {
      type: Number,
      required: true,
    },

    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },

    // picture: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
