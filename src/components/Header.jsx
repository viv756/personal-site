import React from "react";
import Logo from "../assets/logo.svg";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavLinks } from "../constants";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="">
      <div className="container py-2 lg:py-0">
        <div className=" flex justify-between h-16 mx-auto ">
          <div href="#" className="flex items-center ">
            <img src={Logo} alt="" />
            <p className="text-2xl font-bold font-sora ">Personal</p>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {NavLinks.map(({ id, title }) => {
              return (
                <li className="flex font-sora " key={id}>
                  <a
                    href="#"
                    className="flex items-center px-4 -mb-1 text-xl font-semibold hover:text-neutral-500 hover:underline">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="items-center hidden lg:block">
            <button
              type="button"
              className="flex font-sora items-center gap-1 mt-2 px-4 py-3 font-semibold rounded text-white bg-black hover:bg-neutral-500">
              Resume <HiMiniArrowDownTray />
            </button>
          </div>
          <div className="pt-4 lg:hidden ">
            {showMenu ? (
              <IoMdClose onClick={toggleMenu} className="cursor-pointer" size={30} />
            ) : (
              <IoMdMenu onClick={toggleMenu} className="cursor-pointer" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </header>
  );
};

export default Header;
