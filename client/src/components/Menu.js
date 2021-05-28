import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import productsss from '../Foods.js';
import Categories from './Categories.js';
import Product from './Product.js';
import { getProducts } from "../actions/productActions";


const Menu = () => {

    const [ currentCategory, setCurrentCategory ] = useState("Fast Food");
    const [ allCategories, setAllCategories ] = useState([])
    const [ items, setItems ] = useState(productsss);

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)

    console.log(products);

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    useEffect(() => {
        const categories = [...new Set( products.map(product => product.category))]
        setAllCategories(categories);
    },[])

    
    return <section>
        <Categories setCurrentCategory={setCurrentCategory} products={products} setItems={setItems} currentCategory={currentCategory} allCategories={allCategories} />
        <main className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5'>
        {items.map((product) => {
            return <Product key={product.id} product={product} />
        })}
        <img src="/images/icons/cart.png" alt="cart items" className=" cursor-pointer absolute cart-icon"/>
        </main>
    </section>
}

export default Menu;
