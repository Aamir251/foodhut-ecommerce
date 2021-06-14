import React from 'react';

const Features = () => {
    return (
        <section className='features-section relative pt-10'>
            <div className='glass-container mt-5'>
            <h1 className='text-center font-bold text-3xl pt-4'>Our Features</h1>
                <div>
                <article className='grid grid-cols-2 items-center py-3 my-5'>
                    <img src='/images/safedelivery.jpg' alt="Safe Delivery"/>
                    <div>
                        <h2 className='xs:text-2xl font-bold'>Safe Delivery</h2>
                        <p className='xs:text-sm opacity-50'>We follow Covid protocols so you enjoy your food without worries</p>
                    </div>
                </article>
                <article className='grid grid-cols-2 items-center py-3 pl-3'>
                    <div>
                        <h2 className='text-2xl font-bold'>Easy Tracking System</h2>
                        <p className='xs:text-sm opacity-50'>Track yiour food easyily with our robust delivery tracking system</p>
                    </div>
                    <img src='/images/easytracking.jpg' alt="Safe Delivery"/>
                </article>
                </div>
            </div>
            <div className='circle'></div>
            <div className='circle'></div>
        </section>
    );
}

export default Features;
