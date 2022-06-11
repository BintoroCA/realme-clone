import React from "react";
import paket from "../assets/pengiriman.svg";
import aman from "../assets/aman.svg";
import cod from "../assets/cod.svg";
import online from "../assets/online.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-evenly w-screen">
        <div className="flex flex-col justify-items-center items-center p-4">
          <img className="h-10 w-10" src={paket} />
          <span>Pengiriman Gratis</span>
        </div>
        <div className="flex flex-col justify-items-center items-center p-4">
          <img className="h-10 w-10" src={aman} />
          <span>Pengiriman Gratis</span>
        </div>
        <div className="flex flex-col justify-items-center items-center p-4">
          <img className="h-10 w-10" src={cod} />
          <span>Pengiriman Gratis</span>
        </div>
        <div className="flex flex-col justify-items-center items-center p-4">
          <img className="h-10 w-10" src={online} />
          <span>Pengiriman Gratis</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
