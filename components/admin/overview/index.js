import { RiAdminLine, RiUserLine, RiUserAddLine } from "react-icons/ri";
const Overview = ({ users }) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            New Users
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {users?.map((user, i) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.image}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user?.name}
                    </p>

                    {/* User Role */}
                    <div className="flex items-center space-x-1">
                      {user?.role === "admin" ? (
                        <RiAdminLine
                          className="w-5 h-5 text-gray-400"
                          stroke="currentColor"
                        />
                      ) : user?.role === "writer" ? (
                        <RiUserAddLine
                          className="w-5 h-5 text-gray-400"
                          stroke="currentColor"
                        />
                      ) : (
                        <RiUserLine
                          className="w-5 h-5 text-gray-400"
                          stroke="currentColor"
                        />
                      )}

                      <p className="text-sm text-gray-500">{user?.role}</p>
                    </div>
                    {/* User Status */}
                    <div className="flex items-center space-x-1">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          user?.status === "blocked"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                      <p
                        className={`text-sm ${
                          user?.status === "blocked"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {user.status || "Active"}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
          Article Stats
        </h3>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Top Articles
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Impressions
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Organic Search
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  5,649
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">30%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-cyan-600 h-2 rounded-sm w-[30%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Referral
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  4,025
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">24%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-orange-300 h-2 rounded-sm w-[24%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Direct
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  3,105
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">18%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-teal-400 h-2 rounded-sm w-[18%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Social
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  1251
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">12%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-pink-600 h-2 rounded-sm w-[12%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Other
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  734
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">9%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-indigo-600 h-2 rounded-sm w-[9%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                  Email
                </th>
                <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                  456
                </td>
                <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">7%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-purple-500 h-2 rounded-sm w-[7%]"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
