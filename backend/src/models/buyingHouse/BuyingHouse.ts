import mongoose, { Schema, models, model } from "mongoose";

const buyingHouseSchema = new Schema(
  {
    heroTitle: {
      type: String,
      required: true,
      trim: true,
    },
    heroSubtitle: {
      type: String,
      default: "",
      trim: true,
    },
    heroDescription: {
      type: String,
      default: "",
      trim: true,
    },
    sectionTitle: {
      type: String,
      default: "",
      trim: true,
    },
    sectionDescription: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const BuyingHouse =
  models.BuyingHouse || model("BuyingHouse", buyingHouseSchema);

export default BuyingHouse;