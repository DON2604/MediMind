import React from "react";
import NavHead from "./Navbar";
import Carousel from "./Carousel";
import Maps from "./Maps";

const Doctors = () => {
  return (
    <>
      <div>
        <NavHead />
        <div className=" font-medium text-2xl text-center ">Nearby Doctors</div>
        <Maps />
      </div>
    </>
  );
};

export default Doctors;
