import React from 'react';

const Features = () => {
  return  <>
  <section className='features relative mt-12 items-center' >
    <div className='absolute triangle-bg'></div>
    <h3 className='text-3xl text-center font-bold pb-2'>D<span className='text-secondary'>elights</span> </h3>
    <div className='underline bg-primary m-auto w-1/5'></div>
    <h5 className='text-center text-xl mt-5'>For Every Cravings</h5>

    <article className='flex w-full justify-center mt-10 pr-1' >
      <img src='images/spicy-craving.png' className='w-2/3' alt='spicy craving'/>
      <div>
        <h5 className='font-bold text-primary text-3xl w-full my-auto text-right' > Burger <br/> <span className='text-secondary'>Fries</span> <div className='underline ml-auto bg-primary mt-1 w-1/2'></div></h5>
        <desc><p className='text-right text-sm text-primary pt-4' >Satisfy the spicy desire with this large size  plate of burger and french fries.</p></desc>
      </div>
    </article>
    <article className='flex w-full mt-10 justify-center items-center pl-2' >
      <div>
        <h5 className='font-bold text-primary text-3xl w-full my-auto text-left' > <span className='text-secondary'>Sweet</span> <br/> Cravings <div className='underline mr-auto bg-secondary w-1/2'></div></h5>
        <desc><p className=' text-left text-sm text-primary pt-4' >Try these sweet declicious desserts for those sugary cravings</p></desc>
      </div>
      <img src='images/sweet-craving.png' className='w-2/3' alt='spicy craving'/>
    </article>
  </section>
  <div className='text-center my-10'><button className='border-4 w-40 text-center border-secondary rounded-lg p-1.5'>See Complete Menu</button></div>
  </>
}

export default Features;
