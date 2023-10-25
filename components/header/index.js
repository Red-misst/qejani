import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (<>
    <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
      <Link legacyBehavior href="/">
        <a className="cursor-pointer sm:h-auto sm:w-auto text-2xl text-indigo-300 font-bold">
          Qejani
        </a>
      </Link>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <AiOutlineMenu
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          />
        </button>
      </div>

      <form className="hidden h-9 w-2/5 items-center border md:flex">
        <AiOutlineSearch
          strokeWidth="1.5"
          stroke="currentColor"
          className="mx-3 h-4 w-4"
        />
        <input
          className="hidden w-11/12 outline-none md:block"
          type="search"
          placeholder="Search"
        />

        <button className="ml-auto h-full text-white  bg-indigo-500 px-4 hover:bg-indigo-400">
          Search
        </button>
      </form>

      <div className="hidden gap-3 md:flex">
        <Link legacyBehavior href="/wishlist">
          <a className="flex cursor-pointer flex-col items-center justify-center">
            <AiOutlineHeart
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            />

            <p className="">Wishlist</p>
          </a>
        </Link>

        <Link legacyBehavior href="/cart">
          <a className="flex cursor-pointer flex-col items-center justify-center">
            <FaOpencart fill="currentColor" className="h-6 w-6" />

            <p className="">Cart</p>
          </a>
        </Link>

        <Link legacyBehavior href="/account-page">
          <a className="relative flex cursor-pointer flex-col items-center justify-center">
            <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>

            <AiOutlineUser
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            />

            <p className="">Account</p>
          </a>
        </Link>
      </div>

     
    </header>
    <MobileMenu isOpen={mobileMenuOpen} />
    </>
  );
}

export default Header;
