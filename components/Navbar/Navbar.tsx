"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileShowMenu, setMobileShowMenu] = useState<boolean>(false);
  const [mobileHeadMenu, setMobileHeadMenu] = useState<boolean>(false);
  const [mobileShowSubmenu, setMobileShowSubmenu] = useState<boolean>(false);
  const [mobileHeadMenuTitle, setMobileHeadMenuTitle] = useState<string>("");

  const toggleMenuHandler = () => {
    setMobileShowMenu(!mobileShowMenu);
    // close the submenu if it is open
    setMobileShowSubmenu(false);
    setMobileHeadMenuTitle("");
  };

  const showSubmenuHandler = (title: string) => {
    setMobileHeadMenuTitle(title);
    setMobileShowSubmenu(!mobileShowSubmenu);
    setMobileHeadMenu(true);
  };

  const moveSubmenuBackHandler = () => {
    setMobileHeadMenuTitle("");
    setMobileShowSubmenu(false);
    setMobileHeadMenu(false);
  };

  return (
    <nav className="flex items-center justify-between sticky">
      <div
        className="flex-1 items-center justify-start p-4 hidden md:flex md:cursor-pointer md:pt-4 md:px-4 md:pb-0"
        onClick={toggleMenuHandler}
      >
        <Image
          src={`${!mobileShowMenu ? "/menu.png" : "/clear.png"}`}
          alt="menu"
          width={25}
          height={25}
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:flex-2">
        <Image src="/logo.png" alt="Beautya" width={120} height={120} />
      </div>

      <div
        className={`w-3/4 flex items-center justify-evenly flex-3 md:absolute md:flex md:items-center md:flex-col md:w-full md:bg-[#faf9f5] md:h-screen md:p-0 md:top-full md:left-0 md:overflow-hidden ${
          mobileShowMenu ? "md:translate-x-0" : "md:-translate-x-full"
        } md:transition-all md:duration-0.5 md:ease-linear md:z-20`}
      >
        {mobileHeadMenu && (
          <div className="hidden md:w-full md:flex md:h-16 md:border-menu-b md:items-center md:justify-between md:relative md:z-20 md:top-0 md:bg-[#faf9f5]">
            <div className="md:flex md:items-center md:justify-center md:gap-4">
              <Image
                src="/arrow_back_ios.png"
                alt="Beautya"
                width={20}
                height={20}
                onClick={moveSubmenuBackHandler}
              />
              {mobileHeadMenuTitle && mobileHeadMenuTitle !== "" && (
                <h4 className="md:text-2xl md:bold">{mobileHeadMenuTitle}</h4>
              )}
            </div>
          </div>
        )}

        <ul className="flex items-center justify-evenly w-[95%] md:w-full md:h-full md:flex-col md:gap-0 md:p-8 md:items-center md:justify-start md:overflow-x-hidden md:overflow-y-auto md:border md:border-black">
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0 group">
            <Link
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Women Make uP
            </Link>
          </li>
          {/* class menu item has children is supposed to be hovered and show the submenu */}
          <li
            className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0 menu-item-has-children group"
            onClick={() => showSubmenuHandler("Women Skincare")}
          >
            <Link
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Women Skincare <i className="fa-solid fa-arrow-right"></i>
            </Link>
            {/* sub menu - display is hidden now */}
            <div
              className={`${
                mobileShowSubmenu
                  ? "md:block md:animate-slide-left md:mt-10"
                  : "md:animate-slide-right"
              } border group-hover:visible group-hover:opacity-100 group-hover:mt-0 invisible opacity-0 shadow-submenu border-t-[#dfdfdf] absolute z-10 bg-white py-8 px-0 transition-all duration-0.5 mt-10 w-full min-h-[30rem] top-full left-1/2 -translate-x-1/2 flex justify-evenly gap-48 lg:justify-center lg:gap-20 md:visible md:opacity-100 md:absolute md:shadow-none md:py-12 md:px-4 md:top-0 md:left-0 md:w-full md:h-screen md:overflow-y-auto md:translate-x-0 mega-menu mega-menu-column-4`}
            >
              <ul className="sub__menu--column first-column">
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <Link className="md:block" href="#">
                    new
                  </Link>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <Link className="md:block" href="#">
                    best seller
                  </Link>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <Link className="md:block" href="#">
                    Travel size
                  </Link>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <Link className="md:block" href="#">
                    professional treatments
                  </Link>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <Link className="md:block" href="#">
                    daily defense
                  </Link>
                </li>
              </ul>
              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  By Category
                </h4>
                <ul className="md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      cleansers
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      exfoliators
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      toners
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      retinols
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      peels and masques
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      moisturizer
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      night cream
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      facial oil
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      sunscreen
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      eye care
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  By skin condition
                </h4>
                <ul className="leading-8 md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      brightening
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      hydration
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      acne
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      anti-ageing
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      dredness
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      sensitive skin
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      sun protection
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  Collection
                </h4>
                <ul className="leading-8 md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      Beautya cleansing
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      Beautya Prestige
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      Beautya light -in -white
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      capture totale
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      capture youth
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      capture dreamskin
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      one essential
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      professional solution
                    </Link>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <Link className="md:block" href="#">
                      beautya hydra life
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:mt-0">
            <Link
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Gifts & Sets
            </Link>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:mt-0">
            <Link
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Branches Gifts & Sets
            </Link>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0">
            <Link
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Our Brand
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-start flex-1 pt-8 gap-4 md:justify-end md:px-4 md:pb-0">
        <div className="cursor-pointer">
          <Image src="/search icon.png" alt="search" width={20} height={20} />
        </div>

        <div className="block h-8 w-0.2 bg-[#868686]"></div>

        <div className="flex items-center cursor-pointer gap-4">
          <div>
            <Image src="/lang icon.png" alt="lng" width={20} height={20} />
          </div>
          <span className="text-xl lg:text-base md:text-sm">US (EN)</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
