import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const reviewSchema = new mongoose.Schema({
  reviewBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  style: {
    color: String,
    image: String,
  },
  fit: {
    type: String,
  },
  images: [],
  likes: [],
});
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    store: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
      default: "generic",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    categories: [
      {
        type: ObjectId,

        ref: "Category",
      },
    ],
    subCategories: [
      {
        type: String,
      },
    ],
    questions: [
      {
        question: String,
        answer: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    reviews: [reviewSchema],
    refundPolicy: {
      type: String,
      default: "30 days",
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    subProducts: [
      {
        sku: String,
        images: [],
        color: String,
        material: String,

        sizes: [
          {
            size: String,
            qty: Number,
            price: Number,
          },
        ],
        discount: {
          type: Number,
          default: 0,
        },
        sold: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
