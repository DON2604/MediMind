
import NavHead from "../components/Navbar"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Signup = () =>
{
  const [username,setUsername] = useState('');
  const [age,setAge] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [gender, setGender] = useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('/api/users/register', {username,age,email,password,gender})
      .then(result => {console.log(result)
          navigate('/login')
      })
  .catch(err => console.log(err))
  }

    return (
      <>
      <NavHead/>
      <div className='absolute flex flex-col md:flex-row w-full md:w-[800px] h-auto md:h-[500px] ml-auto md:ml-[400px] mt-10 md:mt-0 gap-6'>
      <div className='hidden md:block md:w-[600px] h-[510px]'>
        <img src='../hehe.jpeg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <form action='POST' onSubmit={handleSubmit} className='w-full md:w-11/12 max-w-[600px] px-8 py-1 rounded-3xl border-2 bg-wh border-gray-100'>
        <h1 className='text-4xl font-semibold text-gray-100 text-center'>Sign Up</h1>
        <div className='mt-4'>
            <div className='flex flex-col'>
                <label className='text-lg font-medium text-gray-100'>Name</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent text-lg'
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
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
            <div className='flex flex-col'>
                <label className='text-lg font-medium text-gray-100'>Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent text-lg'
                    placeholder="Enter your Age"
                />
            </div>
            <div className='flex flex-col'>
                <label className='text-lg font-medium text-gray-100'>Gender</label>
                <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    required
                    className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent text-gray-50 text-lg'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Enter your Age">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
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
                <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign Up</button>
            </div>
        </div>
    </form>
</div>
 
       
        </> 
    )
}

export default Signup