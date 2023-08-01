import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sticky">
      <div className="flex-1 items-center justify-center p-4 hidden md:flex md:cursor-pointer md:pt-4 md:px-4 md:py-0">
        <Image src="/menu.png" alt="menu" width={25} height={25} />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:flex-2">
        <Image src="/logo.png" alt="Beautya" width={120} height={120} />
      </div>

      <div className="w-3/4 flex items-center justify-evenly flex-3 md:absolute md:flex md:items-center md:flex-col md:w-full md:bg-[#faf9f5] md:h-screen md:p-0 md:top-full md:left-0 md:overflow-hidden  md:transition-all md:duration-0.5 md:ease-linear md:z-20">
        <div className="hidden md:w-full md:flex md:h-16 md:border-menu-b md:items-center md:justify-between md:relative md:z-20 md:top-0 md:bg-[#faf9f5]">
          <div className="md:flex md:items-center md:justify-center md:gap-4">
            <Image
              src="/arrow_back_ios.png"
              alt="Beautya"
              width={20}
              height={20}
            />
            <h4 className="md:text-2xl md:bold"></h4>
          </div>
        </div>

        <ul className="flex items-center justify-evenly w-[95%] md:w-full md:h-full md:flex-col md:gap-0 md:p-8 md:items-center md:justify-start md:overflow-x-hidden md:overflow-y-auto md:border md:border-black">
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0">
            <a
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Women Make uP
            </a>
          </li>
          {/* class menu item has children is supposed to be hovered and show the submenu */}
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0 menu-item-has-children">
            <a
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Women Skincare <i className="fa-solid fa-arrow-right"></i>
            </a>
            {/* sub menu - display is hidden now */}
            <div className="border invisible opacity-0 shadow-submenu border-t-[#dfdfdf] absolute z-10 bg-white py-8 px-0 transition-all duration-0.5 mt-10 w-full min-h-[30rem] top-full left-1/2 -translate-x-1/2 flex justify-evenly gap-48 lg:justify-center lg:gap-20 md:visible md:opacity-100 md:absolute md:shadow-none md:py-12 md:px-4 md:top-0 md:left-0 md:w-full md:h-screen md:overflow-y-auto md:translate-x-0 md:hidden mega-menu mega-menu-column-4">
              <ul className="sub__menu--column first-column">
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <a className="md:block" href="">
                    new
                  </a>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <a className="md:block" href="">
                    best seller
                  </a>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <a className="md:block" href="">
                    Travel size
                  </a>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <a className="md:block" href="">
                    professional treatments
                  </a>
                </li>
                <li className="text-2xl font-bold leading-10 capitalize mb-4 lg:text-xl">
                  <a className="md:block" href="">
                    daily defense
                  </a>
                </li>
              </ul>
              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  By Category
                </h4>
                <ul className="md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      cleansers
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      exfoliators
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      toners
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      retinols
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      peels and masques
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      moisturizer
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href=""></a>
                    night cream
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      facial oil
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      sunscreen
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      eye care
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  By skin condition
                </h4>
                <ul className="leading-8 md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      brightening
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      hydration
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      acne
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      anti-ageing
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      dredness
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      sensitive skin
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      sun protection
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:flex-0 md:p-0">
                <h4 className="text-2xl capitalize mb-4 font-bold lg:text-xl">
                  Collection
                </h4>
                <ul className="leading-8 md:mb-4 sub__menu--column">
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      Beautya cleansing
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      Beautya Prestige
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      Beautya light -in -white
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      capture totale
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      capture youth
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      capture dreamskin
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      one essential
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      professional solution
                    </a>
                  </li>
                  <li className="text-xl capitalize mb-4 cursor-pointer leading-10 lg:text-lg">
                    <a className="md:block" href="">
                      beautya hydra life
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:mt-0">
            <a
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Gifts & Sets
            </a>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:mt-0">
            <a
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Branches
            </a>
          </li>
          <li className="mt-8 md:border md:border-b-[#dfdfdf] md:p-4 md:bg-[#fff] md:cursor-pointer md:w-full md:m-0">
            <a
              className="text-2xl font-bold cursor-pointer capitalize transition-all duration-0.2 ease-linear text-[#202020] hover:text-[#79043c] active:text-[#a10550] lg:text-lg"
              href="#"
            >
              Our Brand
            </a>
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
