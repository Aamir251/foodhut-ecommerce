import React from 'react';

const Product = ({product}) => {
    return (
        <article className='product-bg p-3 flex flex-col justify-around items-center'>
            <h3 className='text-primary font-bold text-xl'>{product.name}</h3>
            <desc><p className='text-gray-100 text-center text-xs pt-2'> {product.shortDesc} </p></desc>
            <img className='product-img w-4/5' src={product.image} alt={product.name} />

            <footer>
                <ul>
                    <li className='text-secondary font-bold'>Rs.{product.price}</li>
                </ul>
            </footer>
        </article>
    );
}

export default Product;
