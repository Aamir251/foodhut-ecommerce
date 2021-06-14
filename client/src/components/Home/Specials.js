import React from 'react';

const Specials = () => {
    return (
        <section className='specials relative'>
            <img src='/images/formbackground.jpg' className='absolute h-screen top-0'/>
            <h3 className='text-center text-2xl font-bold py-3'>Special Delights</h3>
            <div className='glass-container relative grid md:grid-cols-2 pb-4'>
                <article className='flex flex-col justify-center items-center'>
                    <img src='/images/sundae-chocolate-icecream.png' alt="Sundae Choco Icecream"/>
                    <h4 className='text-2xl py-2'><strong>Sundae <span>Delight</span></strong></h4>
                    <p className='xs:text-xs text-center opacity-60'>For those intense sweet cravings. This chocolaty icecream is what you’ll love to munch on.</p>
                </article>
                <article className='flex flex-col justify-center items-center pt-10'>
                    <img src='/images/burger.png' alt="Sundae Choco Icecream"/>
                    <h4 className='text-2xl py-2'><strong><span>Fam</span> Burger</strong></h4>
                    <p className='xs:text-xs text-center opacity-60'>For those intense sweet cravings. This chocolaty icecream is what you’ll love to munch on.</p>
                </article>
            </div>
            <div className='circle absolute'></div>
            <div className='circle absolute'></div>
        </section>
    );
}

export default Specials;
