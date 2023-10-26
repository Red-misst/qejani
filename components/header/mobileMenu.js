import Link from "next/link";
import {
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
  } from "react-icons/ai";
  import { FaOpencart } from "react-icons/fa";

function MobileMenu({isOpen, session, signIn}) {
  return (
    <section className={`absolute left-0 right-0 z-10 md:hidden h-screen w-full bg-white ${isOpen? "" : "hidden"}`}>
      <div className="mx-auto">
        <div className="mx-auto flex w-full justify-center gap-3 py-4">
          <Link href="/wishlist" legacyBehavior>
            <a className="flex cursor-pointer flex-col items-center justify-center">
            <AiOutlineHeart
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            />
              <p className="text-xs">Wishlist</p>
            </a>
          </Link>

          <Link href="/cart" legacyBehavior>
            <a className="flex cursor-pointer flex-col items-center justify-center">
            <FaOpencart fill="currentColor" className="h-6 w-6" />
              <p className="text-xs">Cart</p>
            </a>
          </Link>

          <div>
            <a className="relative flex cursor-pointer flex-col items-center justify-center">
              <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              {session ? (
                <Link href="/user/account">
                  <img src={session?.user?.image} className="h-6 w-6 rounded-full" />
                </Link>
              ) : (
                <AiOutlineUser
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  onClick={signIn}
                />
              )}

              <p className="">{session?.user?.name}</p>
            </a>
          </div>
        </div>

        <form className="my-4 mx-5 flex h-9 items-center border">
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

          <button
            type="submit"
            className="ml-auto h-full text-white bg-indigo-500 px-4 hover:bg-indigo-400"
          >
            Search
          </button>
        </form>

        <ul className="text-center font-medium">
          <li className="py-2">
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/catalog" legacyBehavior>
              <a>Catalog</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about-us" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact-us" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MobileMenu;
