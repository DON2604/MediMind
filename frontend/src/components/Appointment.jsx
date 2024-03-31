import React, { useState } from "react";
import DOCImage from "../assets/DOC.png";
import logo from "../assets/logo.jpeg";
import { Link  } from "react-router-dom";
import axios from 'axios';

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform form validation here
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.date === '' || formData.time === '' || formData.phoneNumber === '') {
      // Display error message for required fields
      console.error('Please fill in all required fields.');
      return;
    }
  
    try {
      await axios.post('/api/send-email', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        phoneNumber: '',
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3">
        <img
          src={DOCImage}
          alt="DOC"
          className="h-screen rounded-xl shadow-green-500 shadow-md"
          style={{
            filter: "blur(5px) brightness(0.4)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            width: "1000px",
            height: "580px",
          }}
        />

        <div className="bg-lblack h-2/3 w-1/4 rounded-xl shadow-green-500 shadow-md	">
          <div className="flex items-center ml-2 mt-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold">
              MediMind-AI
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="px-4 py-2">
            <div className="mt-4">
              <label htmlFor="name" className="block text-green-300">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800" // Modified text color here
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-green-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800" // Modified text color here
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <label htmlFor="date" className="block text-green-300">
                  Date of Appointment:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 text-green-800" // Modified text color here
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-green-300">
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 text-green-800" // Modified text color here
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="phoneNumber" className="block text-green-300">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800" // Modified text color here
              />
            </div>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <img
          src={DOCImage}
          alt="DOC"
          className="h-2/3 rounded-xl shadow-green-500 shadow-md"
        />
      </div>
    </>
  );
}

export default Appointment;
