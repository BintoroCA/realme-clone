import React from "react";
import paket from "../assets/pengiriman.svg";
import aman from "../assets/aman.svg";
import cod from "../assets/cod.svg";
import online from "../assets/online.svg";
import headset from "../assets/headset.svg";

const Footer = () => {
  return (
    <div className="bg-white">
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
      <div className="flex py-5">
        <div className="flex flex-1 justify-around">
          <div className="flex flex-col">
            <p>Rekomendasi</p>
            <ul>
              <li>realme GT NEO 3T</li>
              <li>realme GT NEO 3</li>
              <li>realme narzo 50 5G</li>
              <li>realme 9i</li>
              <li>realme GT 2 Pro</li>
              <li>realme GT Neo2</li>
              <li>realme GT NEO 3T</li>
              <li>More phones</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p>Dukungan</p>
            <ul>
              <li>FAQ</li>
              <li>Penyelesaian Masalah</li>
              <li>Tempat Pusat Perbaikan</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p>Tentang</p>
            <ul>
              <li>Brand Kami</li>
              <li>Ruang Redaksi</li>
              <li>Toko</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p>Hubungi Kami</p>
            <ul>
              <li>service.id@realme.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  flex-initial w-72 justify-center items-center">
          <p>&#40;021&#41;2235 6666</p>
          <p>Senin - Minggu, 09:00 - 18:00 WIB</p>
          <div className="flex ">
            <img className="h-5 w-5" src={headset} />
            <span>Chat di sini</span>
          </div>
          <p>Jam Operasional:</p>
          <p>Senin-Minggu 09.00-18.00</p>
          <p>&#40;termasuk hari libur&#41;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
