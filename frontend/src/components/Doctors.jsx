import React from 'react'
import NavHead from './Navbar'
import Carousel from './Carousel'
import Maps from './Maps'

const Doctors = () => {
  return (
    <>
            <div>
               <NavHead /> 
            </div>
            
            <section>
                <h1 className=' text-gray-100 text-4xl font-normal mt-10 flex justify-center items-center mb-4 '>
                    Doctors available nearby
                </h1>

                <div>
                  <Carousel />
                </div>

                <div className=' ml-10'>
                  <h2 className=' mt-24 text-2xl mb-8 font-medium text-gray-100'>
                    Check your nearest doctors 

                  </h2>

                  <p className=' text-gray-200 text-xl w-[1400px]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque soluta cumque dolorum consequatur nesciunt deserunt alias rem, non iusto necessitatibus amet nemo velit commodi animi at eius illum fuga suscipit corrupti! Assumenda, nostrum numquam. Nemo laborum dicta, quibusdam voluptatibus recusandae architecto, quo dolorem distinctio ducimus eum explicabo corporis fuga aliquid!
                  </p>
                </div>

                <div className=' flex justify-center items-center mt-8'>
                  <Maps />
                </div>
                
            </section>
            
    
        
        
    </>
  )
}

export default Doctors