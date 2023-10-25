import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please enter your full name.",
    },
    email: {
      type: String,
      required: "Please enter your email address.",
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: '"Please enter a password.',
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    bookmarks: [
      {
        title: String,
        image: String,
      },
    ],
    likedArticles: [
      {
        title: {
          type: String,
        },
        category: {
          type: ObjectId,
          ref: "Categories",
        },
        image: {
          type: String,
        },
        id: {
          type: ObjectId,
        },
      },
    ],
    dislikedArticles: [
      {
        title: {
          type: String,
        },
        category: {
          type: ObjectId,
          ref: "Categories",
        },
        image: {
          type: String,
        },
        id: {
          type: ObjectId,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
