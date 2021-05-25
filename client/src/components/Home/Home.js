import React from 'react';
import { Link }from 'react-router-dom';
const Home = () => {
  return (
    <section className='main-section relative w-full h-full' >
      <img className='z-0 main-bg w-full' src="images/background.jpg" />
      <div className='absolute p-5'>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center text-primary font-bold text-center' >Food <br></br> Hut</h1>
        <div className='text-center my-5'><Link to="/menu"><button className='border-4 w-32 text-center border-secondary rounded-lg p-1.5'>See Menu<i className='fas fa-arrow-right pl-2'></i></button></Link></div>
      </div>
    </section>
  )
}

export default Home;
