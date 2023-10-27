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
      let { category, subCategory } = req.body;
      console.log(subCategory);
      db.connectDb();

      const test = await Categories.findById(category);

      if (test) {
        await Categories.findByIdAndUpdate(
          category,
          {
            $push: {
              subCategories: { name: subCategory },
            },
          },
          { new: true }
        );
      }
      let categories = await Categories.find({});
      console.log(categories);
      return res.status(200).json({
        message: "Category added successfully",
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
