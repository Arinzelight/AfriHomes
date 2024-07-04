import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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

    street: {
      type: String,
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

    propertyType: {
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
    floorNumber: {
      type: Number,
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
    images: {
      type: [String],
      required: false,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    videos: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

propertySchema.plugin(mongoosePaginate);

const Property = mongoose.model("Property", propertySchema);
export default Property;
