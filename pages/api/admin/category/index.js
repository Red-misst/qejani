// pages/api/user/[id].js
const { createRouter } = require("next-connect");
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import Categories from "@/models/Categories";
import db from "@/utils/db";
const router = createRouter();

router
  // Use middleqare
  .use(auth)
  .use(admin)
  .delete(async (req, res) => {
    try {
      let { id } = req.body;

      db.connectDb();

      const test = await Categories.findOneAndDelete({
        id: id,
      });

      const categories = await Categories.find({})
        .sort({ updatedAt: -1 })
        .lean();
      console.log(categories);
      db.disconnectDb();
      return res.json({
        message: "Category added successfully",
        categories: categories, // Assuming categories is an array of category data
      });
    } catch (e) {
      console.log(e);
      db.disconnectDb();
      return res.status(400).json({ message: "Something went wrong" });
    }
  })
  .put(async (req, res) => {})
  .post(async (req, res) => {
    try {
      let { category } = req.body;

      db.connectDb();

      const test = await Categories.findOne({ name: category.toLowerCase() });
      if (test) {
        return res
          .status(400)
          .json({ message: "Category already exists, Try another One" });
      }
      await new Categories({ name: category.toLowerCase() }).save();
      const categories = await Categories.find({})
        .sort({ updatedAt: -1 })
        .lean();
      console.log(categories);
      db.disconnectDb();
      return res.status(200).json({
        message: "Category added successfully",
        categories: categories, // Assuming categories is an array of category data
      });
    } catch (e) {
      db.disconnectDb();
      console.log(e);
      res.status(500).json({ message: e.message });
    }
  });

module.exports = {
  config: {
    runtime: "edge",
  },
  default: router.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
  }),
};
