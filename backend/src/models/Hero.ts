import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    buttonText: {
      type: String,
      default: "Contact Us",
    },
    buttonLink: {
      type: String,
      default: "/contact",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Hero ||
  mongoose.model("Hero", heroSchema);