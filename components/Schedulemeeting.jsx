import React from 'react';

const Schedulemeeting = () => {
    return (
        <section className='mb-1 xl:mb-10 bg-blue-100 flex  items-center justify-between  p-7 rounded-lg shadow-md   '> 
            <div className='flex items-center justify-center  ml-20  '>
        <div className='flex -space-x-2'>
          <img
            className='w-12 h-12 rounded-full border-2 border-white'
            src='./book/1.jpg' // Replace with actual image source
            alt='Person 1'
          />
          <img
            className='w-12 h-12 rounded-full border-2 border-white'
            src='./book/2.jpg' // Replace with actual image source
            alt='Person 2'
          />
          <img
            className='w-12 h-12 rounded-full border-2 border-white'
            src='./book/3.jpg' // Replace with actual image source
            alt='Person 3'
          />
        </div>
        <div className='ml-4'>
          <p className='text-blue-500 text-sm'>Let's align your CS strategy with Business</p>
          <p className='text-lg font-semibold'>Cybersecurity is a process, not a product or solution and we deliver measurable security outcomes.</p>
        </div>
      </div>
      <button className='bg-blue-500 text-white py-2 px-4 rounded shadow m-2'>
        Schedule a meet
      </button>
        </section>
    )
}

export default Schedulemeeting;
