import React from "react";
import Navbar from "./Navbar";
import { Review } from "./Review";
import { useNavigate } from "react-router-dom";
// import "./Hero.css"; // Import a CSS file for additional styling if needed

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-image h-screen m-2"
        style={{ backgroundImage: `url('../hehe.jpeg')` }}
      >
        <Navbar />

        <section className="flex flex-col ">
          <h1 className="text-gray-50 mt-28 ml-[70px] mb-6 text-4xl md:text-5xl font-bold leading-tight">
            GlowGenius: Skin AI Rx
          </h1>

          <p className="text-gray-100 text-xl md:text-xl lg:w-[800px] lg:pt-4 lg:text-xl font-normal leading-tight lg:p-20  md:px-0 mb-8 ">
          Welcome to MediMind-AI, where technology meets compassion to empower
            you on your health journey. Say goodbye to uncertainty and hello to
            confidence as our AI analyzes your skin conditions and provides
            tailored solutions and medication recommendations. With the ability
            to upload images for quick diagnosis, connecting you with the right
            healthcare professional has never been easier. Take charge of your
            skin health today and embrace a brighter tomorrow with MediMind-AI.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center lg:flex md:ml-[50px] lg:ml-[100px]">
            <button
              onClick={() => navigate("/register")}
              className="bg-green-900 hover:bg-slate-400 hover:border-2 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4  mr-4"
            >
              Try for free
            </button>
            <button
              onClick={() => navigate("/appointment")}
              className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Book your Appointment
            </button>
          </div>
        </section>
      </div>

      <Review />
    </div>
  );
};

export default Hero;
