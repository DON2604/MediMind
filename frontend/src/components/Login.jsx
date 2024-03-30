
import NavHead from "../components/Navbar"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Signup = () =>
{
 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
 

  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('/api/users/login', {email,password})
      .then(result => {console.log(result)
          navigate('/profile')
      })
  .catch(err => console.log(err))
  }

    return (
      <>
      <NavHead/>
      <div className='absolute flex flex-col md:flex-row w-full md:w-[800px] h-auto md:h-[500px] ml-auto md:ml-[400px] mt-30 md:mt-20 gap-6'>
      <div className='hidden md:block md:w-[600px] h-[510px]'>
        <img src='../hehe.jpeg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <form action='POST' onSubmit={handleSubmit} className='w-full md:w-11/12 max-w-[600px] px-8 py-1 rounded-3xl border-2 bg-wh border-gray-100'>
        <h1 className='text-5xl font-semibold mt-10 text-center md:text-left'>Welcome Back</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center md:text-left'>Welcome back! Please enter your details.</p>
        <div className='mt-4'>
            <div className='flex flex-col'>
                <label className='text-lg font-medium text-gray-100'>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 text-lg bg-transparent'
                    placeholder="Enter your email"
                />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-lg font-medium text-gray-100'>Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent text-lg'
                    placeholder="Enter your password"
                />
            </div>
            <div className='mt-4 flex flex-col gap-y-4'>
                <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg'>Log In</button>
            </div>
        </div>
    </form>
</div>

       
        </> 
    )
}

export default Signup