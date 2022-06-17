import React from "react";
import realmeicon from "../assets/realmeicon.svg";
import { useState } from "react";
import NavRCard from "./NavRCard";
import { HiMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
const Navbar2 = () => {
  const [navShow, setNavShow] = useState(false);
  const openNav = () => {
    setNavShow(!navShow);
  };

  return (
    <div>
      <div className="bg-white ">
        <div className="flex container mx-auto px-5">
          <div className="flex justify-between items-center">
            <div>
              <img src={realmeicon} />
            </div>
            <div>
              <button className="lg:hidden">
                <AiOutlineUser />
              </button>
              <button className="lg:hidden">
                <HiMenu />
              </button>
            </div>
          </div>
          <div className="w-full">
            <div>
              <ul className="flex flex-col md:flex-row justify-evenly py-5">
                <li
                  className="hover:text-yellow-400"
                  onMouseEnter={() => openNav()}
                >
                  realme Smarphones
                </li>
                <li className="hover:text-yellow-400">narzo Smarphones</li>
                <li className="hover:text-yellow-400">realme TV</li>
                <li className="hover:text-yellow-400">Laptop &amp; Tablet</li>
                <li className="hover:text-yellow-400">Audio</li>
                <li className="hover:text-yellow-400">Smart Life</li>
                <li className="hover:text-yellow-400">
                  Accessories &amp; Lifestyle
                </li>
                <button className="">
                  <FiSearch />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="align-middle py-4 bg-white">
        <div className="align-middle justify-center place-items-center">
          <ul className="flex justify-evenly">
            <img className="" src={realmeicon} />
            <li
              onMouseEnter={() => openNav()}
            >
              realme Smarphones
            </li>
            <li>narzo Smarphones</li>
            <li>realme TV</li>
            <li>Laptop &amp; Tablet</li>
            <li>Audio</li>
            <li>Smart Life</li>
            <li>Accessories &amp; Lifestyle</li>
          </ul>
        </div>
        <div className={`flex w-full bg-red-400 h-80 ${rShow}`}>
          <div className="flex flex-col">
            <ul>
              <li>GT Series</li>
              <li>9 Series</li>
              <li>C Series</li>
            </ul>
          </div>
          <div className="flex flex-wrap p-10">
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
            <NavRCard />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar2;
