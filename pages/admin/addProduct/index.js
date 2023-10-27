import Nav from "@/components/admin/navbar";
import NewProduct from "@/components/admin/newProduct";
import Sidebar from "@/components/admin/sidebar";
import { useState } from "react";
import db from "@/utils/db";
import Categories from "@/models/Categories";
import { getSession } from "next-auth/react";
const createProduct = ({ allCategories }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("")
  const [vendor, setVendor] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(allCategories);

  //handle images--------------------------
  const handleImages = (e) => {};
  //handle upload form------------------------
  const formHandler = async (e) => {};
  //handle select category----------------------
  const handleCategory = (e) => {
    setCategory(e.target.value)
    setSubCategory("")
    console.log(categories)
    console.log("category",category)

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
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4"></div>
            {disabled ? (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <span>uploading</span>
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-6 w-6 mr-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 8.002 0 0112 4.08v3.819l-2.474 2.474a1 1 0 11-1.416-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.416 1.414L12 7.898V11.98a1 1 0 11-2 0V4.081a7.962 8.002 0 014 13.21z"
                      ></path>
                    </svg>
                    <p>
                      Creating Product...
                      <br />
                      Larger images take longer to upload
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="heightFixAdmin px-6 lg:py-20 sm:py-16 py-12">
              <div className="mx-auto max-w-screen-sm sm:text-base  text-sm ">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl  font-bold mb-6">
                  Add Product
                </h2>
                <form onSubmit={formHandler} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    value={title}
                    placeholder="Title"
                    className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200"
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={disabled}
                  />
                  <div className="w-100">
                    <h2 className="text-lg">Select category</h2>
                  </div>
                  <select
                    required
                    className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200 capitalize"
                    onChange={(e) => {
                      handleCategory(e);
                    }}
                    disabled={disabled}
                  >
                    {categories?.map((cat) => (
                      <option
                        value={cat?.name}
                        key={`option-${cat?._id}`}
                      >
                        {cat?.name}
                      </option>
                    ))}
                  </select>
                  <div>
                  {category && (
  <div>
    <h2 className="text-lg">Select Subcategory</h2>

    <select
      required
      className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200 capitalize"
      onChange={(e) => setSubcategory(e.target.value)}
      value={subcategory}
    >
      <option value="" disabled>
        Select a subcategory
      </option>
 
      {
       
        categories
        .find((cat) => cat.name == category)
        .subCategories.map((sub, index) => (
          <option value={sub.name} key={`suboption-${index}`}>
            {sub.name}
          </option>
        ))}
    </select>
  </div>
)}
                    <h2 className="text-lg">Select Restaurant</h2>
                  </div>
                  {/* <select
              required
              className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200 capitalize"
              onChange={(e) => setVendor(e.target.value)}
              disabled={disabled}
            >
              <option />
              {vendors?.map((vendor) => (
                <option value={vendor?.name} key={`option-${vendor?._id}`}>
                  {vendor?.name}
                </option>
              ))}
            </select> */}
                  <textarea
                    required
                    placeholder="Description"
                    className="bg-gray-100 border border-gray-200 py-2 px-4 rounded-md resize-none h-24 outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="25"
                    rows="10"
                    disabled={disabled}
                  ></textarea>
                  <input
                    type="number"
                    required
                    placeholder="Price"
                    className="bg-gray-100 border py-2 px-4 rounded-md outline-none border-gray-200"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={disabled}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.length > 0
                      ? images?.map((img, i) => (
                          <div
                            key={`image-${i}`}
                            className="bg-white rounded-lg overflow-hidden shadow-md relative"
                          >
                            <div
                              className="absolute top-1 right-1 -mt-1 -mr-1 bg-white rounded-full p-1 cursor-pointer"
                              onClick={() => handleDelete(i)}
                            >
                              <XIcon className="h-6 w-6" />
                            </div>
                            <img
                              src={img} // Assuming you have an 'url' property in your image objects
                              alt="images"
                              className="w-full h-auto rounded-t-lg"
                            />
                          </div>
                        ))
                      : null}
                  </div>
                  {images.length < 3 ? (
                    <div className="flex items-center justify-center w-full">
                      <label
                        for="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 10MB)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          name="image"
                          onChange={handleImages}
                          multiple
                        />
                      </label>
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    className={`button py-2 px-10 sm:text-base text-sm mt-4 ${
                      disabled ? "opacity-50" : ""
                    }`}
                    disabled={disabled}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default createProduct;

export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });

  if (!session || session?.user?.role == !"admin") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  db.connectDb();
  const categories = await Categories.find({}).lean();

  return {
    props: {
      allCategories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
