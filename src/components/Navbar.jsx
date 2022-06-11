import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full border-red-500">
        <ul className="flex justify-between items-center">
          <li className="p-4">Brand</li>
          <span>|</span>
          <li className="p-4">Support</li>
          <span>|</span>
          <li className="p-4">Community</li>
          <span>|</span>
          <li className="p-4">App</li>
        </ul>
        <ul className="flex justify-between items-center">
          <li className="p-4">Login</li>
          <span>|</span>
          <li className="p-4">Pesanan Saya</li>
          <span>|</span>
          <li className="p-4">Keranjang</li>
        </ul>
      </div>
      {/* LandingPage
      <p
        className="bg-red-400 text-white font-bold"
        onMouseOver={() => onMuncul(true)}
        //    onMouseOut={() => offMuncul()}
      >
        Smartphone
      </p>
      {muncul && (
        <div className="text-white font-bold h-96 w-full bg-sky-600 absolute"></div>
      )}
      <div className="text-white font-bold h-96 w-full bg-orange-600"></div>
      <div
        onMouseOver={() => onMuncul(false)}
        className="text-white font-bold h-96 w-full bg-teal-600"
      ></div>
      */}
    </div>
  );
};

export default Navbar;
