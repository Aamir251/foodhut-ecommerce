import React from 'react';

const CartButton = () => {
    return (
        <p className='flex w-full lg:w-1/2 justify-around pt-3'>
            {/* Add to cart btn */}
            <span><img src="/images/icons/shopping-cart.png" alt='Add to Cart' className='cursor-pointer w-10 inline'/></span>   
            {/* Add to Wishlist btn */}
            <span><img src="/images/icons/wishlist.png" alt="Add to Wishlist" className='cursor-pointer w-10 inline'/></span>
            {/* Remove from Cart button */}
            <span><img src="/images/icons/remove-from-cart.png" alt="Remove From Cart" className='cursor-pointer w-10 inline'/></span>
        </p>
    );
}

export default CartButton;
