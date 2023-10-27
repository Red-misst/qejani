import  { useState } from 'react';
import {ImRadioUnchecked} from "react-icons/im"
const Dropdown = ({activeCategory, setActiveCategory, categories}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
const changeActiveCategory= (category) =>{
    setActiveCategory(category)
    setIsOpen(!isOpen)
}
  return (
    <div className="flex items-center justify-center  ">
      <div className="w-full max-w-lg px-10 py-8 mx-auto">
        <div className="max-w-md mx-auto ">
          <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <div
              className="bg-white rounded-lg shadow-xl flex items-center px-4 py-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <input
                type="text"
                placeholder={activeCategory? activeCategory.name : "SelectCategory"}
                readOnly
                className="pointer-events-none text-base placeholder-gray-400 outline-none w-full h-full flex-1"
              />
              <svg
                width="20"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
                <line x1="20" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
              </svg>
            </div>

            <div className={`bg-white rounded-lg shadow-xl px-4 mt-2 relative  ${isOpen ? '' : 'hidden'}`}>
          {
            categories?.map((category, i)=>(
                <div className="py-2 flex items-center  w-full border-b-black hover:bg-gray-50" key={i}   onClick={() => changeActiveCategory(category)}>
                <div className="flex-1">
                  <div className="text-gray-400 text-base">{category.name}</div>
                </div>
            
              
                  <ImRadioUnchecked className={`h-4 w-4 ${category===activeCategory ? "bg-blue-500 rounded-full" : ""}`}/>
             
              </div>
            ))
          }
              
              
              {/* Rest of the code... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
