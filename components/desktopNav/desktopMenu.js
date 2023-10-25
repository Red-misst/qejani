import Link from "next/link";
import { BiBed } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsTree } from "react-icons/bs";
import { LuSofa } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { GiPillow } from "react-icons/gi";

const DesktopMenu = ({ desktopmenuopen }) => {
  return (
    <section
      className={`absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white ${
        desktopmenuopen ? "" : "hidden"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] py-10">
        <div className="w-[300px] border-r">
          <ul className="px-5">
            <li className="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400">
              <BiBed stroke="currentColor" className="h-5 w-5" />
              Bedroom
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>

            <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400">
              <GiPillow stroke="currentColor" className="h-4 w-4" />
              Matress
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>

            <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400">
              <BsTree stroke="currentColor" className="h-4 w-4" />
              Outdoor
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>

            <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover-bg-neutral-100 active:bg-amber-400">
              <LuSofa stroke="currentColor" className="h-4 w-4" />
              Sofa
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>

            <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400">
              <TbToolsKitchen2 stroke="currentColor" className="h-4 w-4" />
              Kitchen
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>

            <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400">
              <CgScreen stroke="currentColor" className="h-4 w-4" />
              Living room
              <span className="ml-auto">
                <MdKeyboardArrowRight
                  stroke="currentColor"
                  className="h-4 w-4"
                />
              </span>
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-6">
            <div className="mx-5">
              <p className="font-medium text-gray-500">BEDS</p>
              <ul className="text-sm leading-8">
                <li>
                  <Link href="/product-overview">Italian bed</Link>
                </li>
                <li>
                  <Link href="/product-overview">Queen-size bed</Link>
                </li>
                <li>
                  <Link href="/product-overview">Wooden craft bed</Link>
                </li>
                <li>
                  <Link href="/product-overview">King-size bed</Link>
                </li>
              </ul>
            </div>

            <div className="mx-5">
              <p className="font-medium text-gray-500">LAMPS</p>
              <ul className="text-sm leading-8">
                <li>
                  <Link href="/product-overview">Italian Purple Lamp</Link>
                </li>
                <li>
                  <Link href="/product-overview">APEX Lamp</Link>
                </li>
                <li>
                  <Link href="/product-overview">PIXAR lamp</Link>
                </li>
                <li>
                  <Link href="/product-overview">Ambient Nightlamp</Link>
                </li>
              </ul>
            </div>

            <div className="mx-5">
              <p className="font-medium text-gray-500">BEDSIDE TABLES</p>
              <ul className="text-sm leading-8">
                <li>
                  <Link href="/product-overview">Purple Table</Link>
                </li>
                <li>
                  <Link href="/product-overview">Easy Bedside</Link>
                </li>
                <li>
                  <Link href="/product-overview">Soft Table</Link>
                </li>
                <li>
                  <Link href="/product-overview">Craft Table</Link>
                </li>
              </ul>
            </div>

            <div className="mx-5">
              <p className="font-medium text-gray-500">SPECIAL</p>
              <ul className="text-sm leading-8">
                <li>
                  <Link href="/product-overview">Humidifier</Link>
                </li>
                <li>
                  <Link href="/product-overview">Bed Cleaner</Link>
                </li>
                <li>
                  <Link href="/product-overview">Vacuum Cleaner</Link>
                </li>
                <li>
                  <Link href="/product-overview">Pillow</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopMenu;
