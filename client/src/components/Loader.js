import React from 'react';

const Loader = () => {
    return (
        <section className='loader h-screen w-screen flex justify-center items-center'>

            <div className='relative w-40 h-40'>
                <img src='/images/icons/cart.png' alt='loader' className='carticon absolute bottom-0 left-10'/>
            </div>
            
        </section>
    );
}

export default Loader;
