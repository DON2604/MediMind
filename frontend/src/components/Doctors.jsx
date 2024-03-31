import React from "react";
import NavHead from "./Navbar";
import Maps from "./Maps";
import { useNavigate } from "react-router-dom";


const Doctors = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavHead />
        <div className=" font-medium text-2xl text-center ">Nearby Doctors</div>
        <Maps />
      </div>
      <button
              onClick={() => navigate("/appointment")}
              className="bg-lblack hover:bg-slate-400 border-2 hover:border-2 text-white text font-bold py-2 px-6 rounded-full ml-[600px] -mt-25"
            >
              Book an Appointment
            </button>
    </>
  );
};

export default Doctors;
