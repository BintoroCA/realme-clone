import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-red-500 h-9">
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
    </div>
  );
};

export default Navbar;
