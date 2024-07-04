import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const listingSchema = new mongoose.Schema(
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
      required: false,
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
      required: false,
    },
    bathrooms: {
      type: Number,
      required: false,
    },
    parking: {
      type: Number,
      required: false,
    },

    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: false,
    },
    squareFootage: {
      type: Number,
      required: false,
    },
    property: {
      type: String,
      required: true,
      enum: [
        "Apartment",
        "House",
        "Condo",
        "Townhouse",
        "Villa",
        "Duplex",
        "Studio",
        "Office",
        "Retail",
        "Warehouse",
        "Industrial",
        "Mixed-use",
        "Hotel",
        "Shopping Center",
        "Plot",
        "Agricultural",
        "Development Site",
        "Industrial Land",
        "Vacation Home",
        "Farm",
        "Ranch",
        "Mobile Home",
        "Co-op",
        "Parking Space",
        "Storage Unit",
      ],
    },
    petFriendly: {
      type: Boolean,
      required: false,
    },
    furnished: {
      type: Boolean,
      required: false,
    },
    contactName: {
      type: String,
      required: false,
    },
    contactPhone: {
      type: String,
      required: false,
    },
    contactEmail: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      enum: ["Available", "Sold", "Rented"],
      default: "Available",
    },
    availableFrom: {
      type: Date,
      required: false,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    imageUrls: {
      type: [String],
      required: false,
    },
    videos: {
      type: [String],
      required: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

listingSchema.plugin(mongoosePaginate);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
