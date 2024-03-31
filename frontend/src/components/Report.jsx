import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import DOCImage from "../assets/TESTING.webp";

const Report = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    duration: "",
    symptoms: "",
    medicalHistory: "",
    medications: "",
    imageData: null,
    imagePreview: null, // Added state for image preview
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageData: imageFile,
        imagePreview: reader.result, // Set base64 image data
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    // For example, you can navigate to another page after successful submission
    navigate("/dashboard"); // Replace "/dashboard" with the desired URL
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen gap-3"
        style={{ position: "relative" }}
      >
        <img
          src={DOCImage}
          alt="DOC"
          className="h-screen rounded-xl shadow-green-500 shadow-md"
          style={{
            filter: "blur(5px) brightness(0.4)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />

        <div className="bg-lblack h-5/6 w-1/2 rounded-xl shadow-green-500 shadow-md">
          <div className="flex items-center ml-2 mt-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold">
              MediMind-AI 
              <strong className="ml-96">Report Portal</strong>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-4 py-2 flex flex-wrap justify-between"
          >
            <div className="mt-4 flex items-center">
              <div className="mr-4">
                <label htmlFor="imageData" className="block text-green-300">
                  Upload Image:
                </label>
                <input
                  type="file"
                  id="imageData"
                  name="imageData"
                  accept="image/*"
                  onChange={handleImage}
                  className="mt-1"
                />
              </div>
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded-md -ml-20"
                />
              )}
            </div>
            <div className="mt-4 w-1/3">
              <label htmlFor="age" className="block text-green-300">
                Age:
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 w-1/3">
              <label htmlFor="gender" className="block text-green-300">
                Gender:
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 w-1/3">
              <label htmlFor="duration" className="block text-green-300">
                Duration:
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 w-full">
              <label htmlFor="symptoms" className="block text-green-300">
                Symptoms:
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full h-20 resize-none text-green-800"
              ></textarea>
            </div>
            <div className="mt-4 w-full flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="medicalHistory"
                  className="block text-green-300"
                >
                  Medical History:
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none text-green-800"
                ></textarea>
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="medications" className="block text-green-300">
                  Medications:
                </label>
                <textarea
                  id="medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none text-green-800"
                ></textarea>
              </div>
            </div>

            <div className="mt-4 w-full text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <img
          src={DOCImage}
          alt="DOC"
          className="h-5/6 rounded-xl shadow-green-500 shadow-md"
        />
      </div>
    </>
  );
};

export default Report;
