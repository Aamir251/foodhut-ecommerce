import React, { useEffect, useState } from 'react';
import products from '../Foods.js';
import Categories from './Categories.js';
import Product from './Product.js';


const Menu = () => {

    const [ currentCategory, setCurrentCategory ] = useState("Fast Food");
    const [ allCategories, setAllCategories ] = useState([])
    const [ items, setItems ] = useState(products);


    useEffect(() => {
        const categories = [...new Set( products.map(product => product.category))]
        setAllCategories(categories);
    },[])

    
    return <section>
        <Categories setCurrentCategory={setCurrentCategory} products={products} setItems={setItems} currentCategory={currentCategory} allCategories={allCategories} />
        <main className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5'>
        {items.map((product) => {
            return <Product key={product.id} product={product} />
        })}
        </main>
    </section>
}

export default Menu;
