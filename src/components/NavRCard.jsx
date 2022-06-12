import React from "react";
import phone from "../assets/r9pro5g.png";

const NavRCard = () => {
  return (
    <div>
      <div className="flex bg-slate-50 h-20 m-7">
        <img className="h-full" src={phone} />
        <div className="flex flex-col">
          <p className="text-blue-500">TERBARU</p>
          <p>REALME GT NEO 3T</p>
          <p className="text-red-600">Rp. 5.299.000</p>
        </div>
      </div>
    </div>
  );
};

export default NavRCard;
