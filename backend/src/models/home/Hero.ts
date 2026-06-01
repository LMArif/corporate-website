import mongoose, { Schema, models, model } from "mongoose";

const heroSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    buttonText: {
      type: String,
      default: "",
      trim: true,
    },
    buttonLink: {
      type: String,
      default: "",
      trim: true,
    },
    image: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Hero = models.Hero || model("Hero", heroSchema);

export default Hero;