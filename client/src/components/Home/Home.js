import React from 'react';
import { Link }from 'react-router-dom';
const Home = () => {
  return (
    <main className='relative flex justify-center items-center'>
      <img src="/images/background.jpg" className='absolute top-0' />
      
      <div className="circle"></div>
      <div className="circle"></div>
      <section className="glass-container ">
        <article className='h-full grid grid-cols-2 items-center'>
          <div className='flex  flex-col justify-evenly pl-3 '>
            <h1 className='xs:text-4xl lg:text-8xl'>FOOD <span>HUT</span></h1>
            <h3 className='xs:text-xs lg:text-sm lg:mb-10'>
              Delicious Food Delivered at your doorstep in no time.<br/> Choose from a
              variety of range
            </h3>
            <button className="btn">Shop Now</button>
          </div>
          <img className='main-img' src="/images/pizza.png" />
        </article>
        {/* <img className="dish" src="/src/images/dish.png" /> */}
      </section>
    </main>
  )
}

export default Home;
