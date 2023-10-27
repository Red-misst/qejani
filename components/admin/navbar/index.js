import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { useSession } from "next-auth/react";
const Nav = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSideBar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };
  const { data: session } = useSession();
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              {sidebarOpen ? (
                <CgMenuRightAlt
                  className="w-6 h-6"
                  fill="currentColor"
                  onClick={toggleSideBar}
                />
              ) : (
                <CgMenuLeftAlt
                  className="w-6 h-6"
                  fill="currentColor"
                  onClick={toggleSideBar}
                />
              )}
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <span className="self-center whitespace-nowrap">
               Qejani Dashboard
              </span>
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <label for="topbar-search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative lg:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BiSearchAlt
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden lg:flex items-center">
              <span className="text-base font-normal text-gray-500 mr-5">
                <span className="font-bold"> {session?.user?.name}</span>
               
              </span>
            </div>
            <img
              className="h-8 w-8 rounded-full"
              src={session?.user?.image}
              alt="Neil image"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
