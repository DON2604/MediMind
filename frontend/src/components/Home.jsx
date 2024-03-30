import React from 'react'
import { useNavigation, useNavigate, useLocation } from 'react-router'

const Home = () => {
    const location = useLocation()


  return (
    <div>
        <h1>
            Hello {location.state.id} and welcome to home 

        </h1>
    </div>
  )
}

export default Home