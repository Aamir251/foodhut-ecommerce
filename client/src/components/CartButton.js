import React from 'react';

const CartButton = ({countInStock, addToCartHandler}) => {
    return (
        <p className='flex w-full lg:w-1/2 justify-around items-center pt-3'>
            {/* Add to cart btn */}
            <button onClick={addToCartHandler} title="Add To Cart" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/shopping-cart.png " alt="Add To Cart" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Cart</span>
            </button>

            <button title="Add To Wishlist" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/wishlist.png" alt="Add To Wishlist" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Wishlist</span>
            </button>

            <button title="Remove From Cart" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/remove-from-cart.png" alt="Remove From Cart" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Remove From Cart</span>
            </button>
        
        </p>
    );
}

export default CartButton;
