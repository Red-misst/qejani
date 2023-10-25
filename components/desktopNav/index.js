import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import DesktopMenu from "./desktopMenu";
import { useState } from "react";
function DesktopNav() {
  const [desktopmenuopen, setDesktopMenuOpen] = useState(false);
  return (
    <>
      <nav className="relative bg-indigo-700">
        <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
          <button
            onClick={() => setDesktopMenuOpen(!desktopmenuopen)}
            className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-teal-400"
          >
            <div className="flex justify-around">
              <AiOutlineMenu stroke="currentColor" className="mx-1 h-6 w-6" />
              All categories
            </div>
          </button>

          <div className="mx-7 flex gap-8">
            <Link legacyBehavior href="/">
              <a className="font-light text-white duration-100 hover:text-teal-200 hover:underline">
                Home
              </a>
            </Link>

            <Link legacyBehavior href="/catalog">
              <a className="font-light text-white duration-100 hover:text-teal-200 hover:underline">
                Catalog
              </a>
            </Link>

            <Link legacyBehavior href="/about-us">
              <a className="font-light text-white duration-100 hover:text-teal-200 hover:underline">
                About Us
              </a>
            </Link>

            <Link legacyBehavior href="/contact-us">
              <a className="font-light text-white duration-100 hover:text-teal-200 hover:underline">
                Contact Us
              </a>
            </Link>
          </div>

          <div className="ml-auto flex gap-4 px-5">
            <Link legacyBehavior href="/login">
              <a className="font-light text-white duration-100 hover:text-teal-200 hover:underline">
                Login
              </a>
            </Link>
          </div>
        </div>
       
      </nav>
      <DesktopMenu desktopmenuopen={desktopmenuopen} />
    </>
  );
}

export default DesktopNav;
