import React, { useEffect, useState } from 'react';
import products from '../Foods.js';
import Categories from './Categories.js';
import Product from './Product.js';


const Menu = () => {

    const [ currentCategory, setCurrentCategory ] = useState("Fast Food");
    const [ allCategories, setAllCategories ] = useState([])

    useEffect(() => {
        const categories = [...new Set( products.map(product => product.category))]
        setAllCategories(categories);
    },[])

    return <section>
        <Categories setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} allCategories={allCategories} />
        <main className='grid grid-cols-2 gap-5 pt-5'>
        {products.map((product) => {
            return <Product product={product} />
        })}
        </main>
    </section>
}

export default Menu;
