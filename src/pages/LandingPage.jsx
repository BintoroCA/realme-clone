import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import CrazySale from "../components/CrazySale";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import SmartPhone from "../components/SmartPhone";

const LandingPage = () => {
  //   const [muncul, setMuncul] = useState(false);
  //   const onMuncul = (e) => {
  //     setMuncul(e);
  //   };

  //   const offMuncul = () => {
  //     setMuncul(false);
  //   };
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Navbar2 />
      <Carousel />
      <CrazySale />
      <SmartPhone />
      <Footer />
    </div>
  );
};

export default LandingPage;
