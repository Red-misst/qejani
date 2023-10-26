import Nav from "@/components/admin/navbar";
import Overview from "@/components/admin/overview";
import Sidebar from "@/components/admin/sidebar";
import Stats from "@/components/admin/stats";
import { getSession } from "next-auth/react";
import { useState } from "react";

import db from "@/utils/db";
import User from "@/models/User";

const dashboard = ({ allUsers, allArticles }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(allUsers);
  const [articles, setArticles] = useState(allArticles);

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
            <Stats users={users} />
            <Overview users={users} />
          </div>

          <p className="text-center text-sm text-gray-500 my-10">
            &copy; 2023 . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default dashboard;

export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });
  console.log(session.user.role);
  if (!session || session?.user?.role !== "admin") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  db.connectDb();

  const users = await User.find({}).lean();
  db.disconnectDb()
  return {
    props: {
      allUsers: JSON.parse(JSON.stringify(users)),
    },
  };
}
