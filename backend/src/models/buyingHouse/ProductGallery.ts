import mongoose, { Schema, models, model } from "mongoose";

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const sectionSchema = new Schema(
  {
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [itemSchema],
      default: [],
    },
  },
  { _id: false }
);

const productGallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    sections: {
      type: [sectionSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const ProductGallery =
  models.ProductGallery || model("ProductGallery", productGallerySchema);

export default ProductGallery;