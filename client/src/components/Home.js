import React from 'react';
import { Link }from 'react-router-dom';
const Home = () => {
  return (
    <section className=' w-full relative grid grid-cols-3 lg:grid-cols-4 justify-center items-center' >
      <div className='circle-background'></div>
      <img src='images/background.png ' alt='Burger' className=' shadow mx-auto z-50 col-span-2 lg:col-span-3 lg:w-1/2' />
      <div>
        <h1 className='text-6xl  text-primary font-bold text-center mt-5' >Food Hut</h1>
        <div className='text-center my-5'><Link to="/menu"><button className='border-4 w-32 text-center border-secondary rounded-lg p-1.5'>See Menu<i className='fas fa-arrow-right pl-2'></i></button></Link></div>
      </div>
    </section>
  )
}

export default Home;
