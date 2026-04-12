import mongoose, { Schema } from "mongoose";

//Hero Section
const ctaSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const heroSectionSchema = new Schema(
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

    image: {
      type: String,
      required: true,
    },

    cta: {
      type: ctaSchema,
    },
  }
);

export const HeroSection = mongoose.models.HeroSection || mongoose.model("HeroSection", heroSectionSchema);

