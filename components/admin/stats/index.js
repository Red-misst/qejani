import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const Stats = ({users}) => {
  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
             10
            </span>
            <h3 className="text-base font-normal text-gray-500">
              New Products this week
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            1.6%
            <AiOutlineArrowUp className="w-5 h-5" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {users?.length}
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Visitors this week
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            32.9%
            <AiOutlineArrowUp className="w-5 h-5" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {users?.length}
            </span>
            <h3 className="text-base font-normal text-gray-500">
              User signups this week
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
            -2.7%
            <AiOutlineArrowDown className="w-5 h-5" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
