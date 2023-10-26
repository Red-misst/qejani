import Nav from "@/components/admin/navbar";
import axios from "axios";
import Sidebar from "@/components/admin/sidebar";
import { useState } from "react";
import Categories from "@/models/Categories";
import db from "@/utils/db";
import { getSession } from "next-auth/react";
const WriteArticle = ({ allCategories }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryInput, setCategoryInput] = useState(""); // State for the category input
  const [categories, setCategories] = useState(allCategories); // State to store the list of categories

  // Function to handle adding a category
  const addCategory = async () => {
    if (categoryInput) {
      const res = await axios.post("/api/admin/category", {
        category: categoryInput,
      });
      setCategories([...categories, categoryInput]);
      setCategoryInput(""); // Clear the category input field
    }
  };

  // Function to handle updating a category (you can implement this as needed)
  const updateCategory = (index) => {
    // Implement your update logic here
  };

  // Function to handle deleting a category
  const deleteCategory = async (index, id) => {
    const res = await axios.delete("/api/admin/category", { id: id });
    console.log(res);
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full  relative overflow-y-auto lg:ml-64"
        >
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full border-lg p-2 flex flex-row justify-center">
                <input
                  type="text"
                  placeholder="Add Category"
                  className="w-[450px] border-md mt-2 p-2 bg-gray-100 rounded-tl-md rounded-bl-md"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                />
                <button
                  onClick={addCategory}
                  className="bg-indigo-500  w-[250px]   text-white px-4 py-2 mt-2 rounded-tr-md rounded-br-md "
                >
                  Add Category
                </button>
              </div>

              {categories?.map((category, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded">
                  {category?.name}
                  <button
                    onClick={() => updateCategory(index)}
                    className="ml-2 text-blue-500"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteCategory(index, category?._id)}
                    className="ml-2 text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 my-10">
            &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default WriteArticle;
export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });

  if (!session || session?.user?.role !== "admin") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  db.connectDb();
  const categories = await Categories.find({}).lean();
  db.disconnectDb();
  return {
    props: {
      allCategories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
