import React from 'react';
import { Link } from 'react-router-dom';
import products from "../../Foods.js"
import Review from "../Rating.js";
import CartButton from "../CartButton.js"


const ProductScreen = ({match}) => {

    const product = products.find(p => p.id === parseInt(match.params.id) )
    console.log(product);
    return (
        <article className="relative product-screen mx-auto mt-10  p-5 flex flex-col justify-around items-center">
            <span className='absolute left-1 top-1 font-bold text-primary border-2 border-secondary py-1 px-2'><Link to="/menu">Go Back</Link></span>

            <h2 className='text-5xl text-primary font-bold'>{product.name}<div className='underline bg-secondary'></div></h2>
            
            <h4 className='text-xl text-gray'>{product.shortDesc}</h4>
            <div className='flex xs:flex-col xs:items-center lg:items-start lg:flex-row'>
            <img src={product.image} alt={product.name} className="xs:w-2/3 lg:w-1/2"  />
            <footer className='px-3 lg:pt-5'>
            <p className='text-gray leading-relaxed text-sm lg:w-full lg:leading-loose opacity-85 '>{product.description}</p>
            <p className='text-secondary text-xl lg:text-2xl  font-bold pt-3'>Rs.{product.price}</p><Review value={product.rating}/>
            </footer>
            </div>
            <CartButton/>
            <img src="/images/icons/cart.png" alt="cart items" className="absolute cart-icon"/>

        </article>
    );
}

export default ProductScreen;
