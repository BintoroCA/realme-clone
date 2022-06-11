import React from "react";
import realmeicon from "../assets/realmeicon.svg";

const Navbar2 = () => {
  return (
    <div>
      <div className="align-middle">
        <ul className="flex justify-evenly">
          <img src={realmeicon} />
          <li>realme Smarphones</li>
          <li>narzo Smarphones</li>
          <li>realme TV</li>
          <li>Laptop &amp; Tablet</li>
          <li>Audio</li>
          <li>Smart Life</li>
          <li>Accessories &amp; Lifestyle</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
