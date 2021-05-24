import React from 'react';

const Home = () => {
  return (
    <section className=' w-full relative grid grid-cols-3 lg:grid-cols-4 justify-center items-center' >
      <div className='circle-background'></div>
      <img src='images/background.png ' className=' shadow mx-auto z-50 col-span-2 lg:col-span-3 lg:w-1/2' />
      <div>
        <h1 className='text-6xl  text-primary font-bold text-center mt-5' >Food Hut</h1>
      </div>
    </section>
  )
}

export default Home;
