import React from "react";
import r9pro from "../assets/r9pro5g.png";

const CrazySaleCard = () => {
  return (
    <div>
      <div className="bg-white flex flex-col h-96 w-72 justify-items-center items-center p-2 text-center mx-px">
        <div className="h-1/6 ">
          <p className="justify-center align-middle">2 Hari</p>
        </div>
        <div className="h-3/6">
          <img className="h-full" src={r9pro} />
        </div>
        <div className="h-2/6">
          <h3>realme 9 Pro 5G</h3>
          <p>Aurora Green 6GB+128GB</p>
          <span>Rp.3.699.000</span>
          <p className="text-decoration-line: line-through;">Rp.3.799.000</p>
        </div>
      </div>
    </div>
  );
};

export default CrazySaleCard;
