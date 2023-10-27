import Nav from "@/components/admin/navbar";
import NewProduct from "@/components/admin/newProduct";
import Sidebar from "@/components/admin/sidebar";
import { useState } from "react";
import db from "@/utils/db";
import Categories from "@/models/Categories";
import { getSession } from "next-auth/react";
const writeArticle = ({allCategories}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(allCategories)
  return (
    <>
      {" "}
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
            <NewProduct categories={categories}/>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default writeArticle;

export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });

  if (!session || session?.user?.role ==! "admin") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  db.connectDb();
 const categories = await Categories.find({}).lean()

  return {
    props: {
      allCategories: JSON.parse(JSON.stringify(categories)),
   
    },
  };
}
