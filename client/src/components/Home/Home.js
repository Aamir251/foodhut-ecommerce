import React from 'react';
import { Link }from 'react-router-dom';
import Specials from './Specials';
import Features from './Features';
const Home = () => {
  return <>
    <main className='relative home-screen flex justify-center items-center'>
      <img src="/images/background.jpg" className='absolute top-0' />
      
      <div className="circle"></div>
      <div className="circle"></div>
      <section className="glass-container">
        <article className='h-full grid sm:grid-cols-2 items-center xs:grid-cols-1'>
          <div className='flex  flex-col justify-evenly pl-3 xs:row-start-2 sm:row-start-1 '>
            <h1 className='xs:text-5xl lg:text-8xl'>FOOD <span>HUT</span></h1>
            <h3 className='xs:text-xs lg:text-sm lg:mb-10'>
              Delicious Food Delivered at your doorstep in no time.<br/> Choose from a
              variety of range
            </h3>
            <button className="btn"><Link to="/menu">Shop Now</Link></button>
          </div>
          <img className='main-img' src="/images/pizza.png" />
        </article>
      </section>
    </main>
    <Specials/>
    <Features/>
  </>
}

export default Home;
