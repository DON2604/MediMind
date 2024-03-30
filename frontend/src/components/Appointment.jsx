import React, { useState } from "react";
import NavHead from "./Navbar";
import DOCImage from "../assets/DOC.png"; // Import your image

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
      });
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3">
        <div className="bg-lblack h-1/2 w-1/4">jhjh</div>
        <img src={DOCImage} alt="DOC" className="h-2/3" />
      </div>
    </>
  );
}

export default Appointment;
