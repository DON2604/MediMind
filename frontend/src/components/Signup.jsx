import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.jpeg";
import DOCImage from "../assets/login.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", formData)
      .then((result) => {
        console.log(result);
        navigate("/report");
      })
      .catch((err) => console.log(err));
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            width:'1000px',
            height:'580px',
          }}
        />
        <img
          src={DOCImage}
          alt="DOC"
          className="h-2/3 rounded-xl shadow-green-500 shadow-md"
        />

        <div className="bg-lblack h-2/3 w-1/4 rounded-xl shadow-green-500 shadow-md ">
          <div className="flex items-center ml-2 mt-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold">
              MediMind-AI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; <strong>SignUp</strong>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="px-4 py-2">
            <div className="mt-4">
              <label htmlFor="username" className="block text-green-300">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="w-1/2 pr-2">
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
              <div className="w-1/2 pl-2">
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
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-green-300">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 mt-3"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
