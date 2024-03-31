import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.jpeg'; // Assuming you have a logo image
import DOCImage from '../assets/login.jpg'; // Assuming you have a DOCImage

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      console.log(response.data);
      navigate('/report');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3" style={{ position: 'relative' }}>
        <img
          src={DOCImage}
          alt="DOC"
          className="h-screen rounded-xl shadow-green-500 shadow-md"
          style={{
            filter: 'blur(5px) brightness(0.4)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            width: '1000px',
            height: '580px',
          }}
        />
        <img src={DOCImage} alt="DOC" className="h-2/3 rounded-xl shadow-green-500 shadow-md" />

        <div className="bg-lblack h-2/3 w-1/4 rounded-xl shadow-green-500 shadow-md">
          <div className="flex items-center ml-2 mt-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold">
              MediMind-AI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; <strong>Login</strong>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="px-4 py-2 mt-10">
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
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 mt-8"
              >
                Login
              </button>
            </div>
            <p className=" text-gray-400  flex justify-center items-center text-xl font-medium lg:mt-4 ">OR</p>
            <div className=" text-gray-400  flex justify-center items-center  lg:mt-2 font-medium ">
           
              
            
            <Link to={"/register"}
             >
                 Create new account  
              </Link>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
