import { AiOutlineComment, AiFillPieChart, AiOutlineUser } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlinePublish } from "react-icons/md";
import { BiCategory, BiLibrary, BiLogOut, BiSearchAlt } from "react-icons/bi";
const Sidebar = ({sidebarOpen}) => {
  return (
    <aside
      id="sidebar"
      className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
        sidebarOpen ? "" : "hidden"
      }`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label for="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      
                      <BiSearchAlt   className="w-5 h-5 text-gray-500"
                        fill="currentColor"/>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </li>
              <li>
                <a
                  href="/admin/dashboard"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                
                  <AiFillPieChart  className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor" />
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/CreateProduct"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <TfiWrite
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    New Product
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/allProducts"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <BiLibrary
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    All Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/publishProduct"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <MdOutlinePublish
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Add Product
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/productCategories"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <BiCategory
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Product Categories
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/comments"
                  
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <AiOutlineComment
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Reviews
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/admin/users"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                 
                  <AiOutlineUser   className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"/>
                  <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                </a>
              </li>
            </ul>
            <div className="space-y-2 pt-2">
              <a
                href="#"
                target="_blank"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
              >
                <BiLogOut
                  className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                  fill="currentColor"
                />
                <span className="ml-3">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
