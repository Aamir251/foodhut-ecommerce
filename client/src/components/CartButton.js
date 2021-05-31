import React from 'react';

const CartButton = ({countInStock, addToCartHandler}) => {
    return (
        <p className='flex w-full lg:w-1/2 justify-around items-center pt-3'>
            {/* Add to cart btn */}
            <button onClick={addToCartHandler} title="Add To Cart" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/shopping-cart.png " className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Cart</span>
            </button>

            <button title="Add To Wishlist" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/wishlist.png" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Wishlist</span>
            </button>

            <button title="Remove From Cart" className= {` flex flex-col justify-center items-center ${!countInStock} && disabled`}>
                <img  src="/images/icons/remove-from-cart.png" className="w-10 inline"/>
                <span className="lg:hidden text-xs text-primary opacity-85  pt-1">Remove From Cart</span>
            </button>
            {/* <figure className='flex flex-col justify-center items-center'>
                <img src="/images/icons/shopping-cart.png" title="Add to Cart"  alt='Add to Cart' className='cursor-pointer w-10 inline'/>
                <figcaption className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Cart</figcaption>
            </figure></button>    */}
            {/* Add to Wishlist btn */}
            {/* <figure className='flex flex-col justify-center items-center' >
                <img src="/images/icons/wishlist.png" title="Add to Wishlist" alt="Add to Wishlist" className='cursor-pointer w-10 inline'/>
                <figcaption className="lg:hidden text-xs text-primary opacity-85  pt-1">Add To Wishlist</figcaption>
            </figure> */}
            {/* Remove from Cart button */}
            {/* <figure className='flex flex-col justify-center items-center'>
                <img src="/images/icons/remove-from-cart.png" title="Remove From Cart" alt="Remove From Cart" className='cursor-pointer w-10 inline'/>
                <figcaption className="lg:hidden text-xs text-primary opacity-85  pt-1">Remove from Cart</figcaption>
            </figure> */}
        </p>
    );
}

export default CartButton;
