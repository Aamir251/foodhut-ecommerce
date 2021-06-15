import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import productsss from '../Foods.js';
import Categories from './Categories.js';
import Product from './Product.js';
import { getProducts } from "../actions/productActions";
import Loader from './Loader.js';


const Menu = () => {

    const [ currentCategory, setCurrentCategory ] = useState("All");
    const [ allCategories, setAllCategories ] = useState([])
    
    const dispatch = useDispatch()
    
    const productList = useSelector((state) => state.productsList)
    
    const { loading, error, products } = productList;
    const [ items, setItems ] = useState(products);


    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    useEffect(() => {
        const categories = products && ["All", ...new Set( products.map(product => product.category))]
        setAllCategories(categories);
        setItems(products)
    },[products])

    
    return <>
    {loading ? <Loader/> : <section className='products w-screen relative'>
        <img src="/images/formbackground.jpg" className='absolute top-0 w-full h-full' />
        { products && <Categories setCurrentCategory={setCurrentCategory} products={products} setItems={setItems} currentCategory={currentCategory} allCategories={allCategories} />}
        <div className='glass-container relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5'>
        { items && items.map((product) => {
            return <Product key={product.id} product={product} />
        })}
        {/* <img src="/images/icons/cart.png" alt="cart items" className=" cursor-pointer absolute cart-icon"/> */}
        </div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
    </section>}
    </>
}

export default Menu;
