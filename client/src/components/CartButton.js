import React from 'react';

const CartButton = ({countInStock, addToCartHandler}) => {
    return (
        <p className=' flex w-full justify-around items-center pt-3'>
            {/* Add to cart btn */}
            <button onClick={addToCartHandler} title="Add To Cart" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/shopping-cart.png " alt="Add To Cart" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Cart</span>
            </button>
        </p>
    );
}

export default CartButton;
