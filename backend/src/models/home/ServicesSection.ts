import mongoose, { Schema, models, model } from "mongoose";

const serviceItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const servicesSectionSchema = new Schema(
  {
    heading: {
      type: String,
      default: "Our Services",
      trim: true,
    },
    subheading: {
      type: String,
      default: "",
      trim: true,
    },
    services: {
      type: [serviceItemSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const ServicesSection =
  models.ServicesSection || model("ServicesSection", servicesSectionSchema);

export default ServicesSection;