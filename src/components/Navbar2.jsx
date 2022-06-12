import React from "react";
import realmeicon from "../assets/realmeicon.svg";
import { useState } from "react";
import NavRCard from "./NavRCard";

const Navbar2 = () => {
  const [rShow, setRShow] = useState("hidden");
  return (
    <div>
      <div className="align-middle py-4 bg-white">
        <div className="align-middle justify-center place-items-center">
          <ul className="flex justify-evenly">
            <img className="" src={realmeicon} />
            <li
              onMouseEnter={() => setRShow("")}
              // onMouseLeave={() => setRShow("hidden")}
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
      </div>
    </div>
  );
};

export default Navbar2;
