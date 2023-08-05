import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen md:h-screen text-gray-300 bg-[#091A52]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#405DE6]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div 
             className='flex flex-col justify-center items-center h-full'>
                
                   <div className='Projects'>
                        <button className='btn'>More Projects</button>
                    </div>
                   <div className='mt-16'>
                        <h1 className='text-2xl font-bold  text-gray-300 border-[#405DE6]'> Are coming...</h1>
                   </div>
            
            </div>
        </div>

    </div>
  )
}

export default Work