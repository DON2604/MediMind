import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import videoSource from "../assets/heheee.mp4";

function Response() {
  const location = useLocation();
  const { responseData } = location.state || {};

  useEffect(() => {
    // Example usage of useEffect, you can add your logic here if needed
  }, []); // Add dependencies if needed

  return (
    <div className="bg-black flex justify-center  items-center relative ml-20 mt-2">
      {responseData ? (
        <>
        <div className="absolute top-2 w-[1200px] ml-28 text-4xl text-black text-center">{JSON.stringify(responseData.detection, null, 2)}</div>
        <div className="absolute top-80 w-[600px] mr-[1240px] text-4xl mt-4 text-black font-medium">{JSON.stringify(responseData.treatment, null, 2)}</div>
        <div className="absolute bottom-[800px] w-[600px] ml-[1180px] text-4xl mt-4 text-black font-medium">{JSON.stringify(responseData.lifestyleChanges, null, 2)}</div>
        <div className="absolute bottom-[500px] w-[600px] mr-[920px] text-4xl mt-4 text-black font-medium">{JSON.stringify(responseData.oralMedication, null, 2)}</div>
        <div className="absolute bottom-[180px] w-[600px] ml-[1580px] text-4xl mt-4 text-black font-medium">{JSON.stringify(responseData.followUpCare, null, 2)}</div>

        <video autoPlay muted className="h-screen ml-[335px] ">
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </>
      ) : (
        <div>Invalid Report Data</div>
      )}
    </div>
  );
}

export default Response;
