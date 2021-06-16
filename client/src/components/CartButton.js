import React from 'react';

const CartButton = ({countInStock, addToCartHandler}) => {
    return (
        <p className='cart-btn flex w-full justify-around items-center pt-3'>
            {/* Add to cart btn */}
            <button onClick={countInStock && addToCartHandler} className={`btn ${!countInStock && 'cursor-not-allowed opacity-50'}`}>Add To Cart</button>
        </p>
    );
}

export default CartButton;
