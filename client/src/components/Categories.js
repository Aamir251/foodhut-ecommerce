import React, { useEffect } from 'react';

const Categories = ({setCurrentCategory, products, allCategories, currentCategory, setItems}) => {


    const filterItems = (category) => {

        if (category === "All") {
            
            setItems(products)
            return;
        }
        setCurrentCategory(category)
        const newItems = products.filter(p => p.category === category);
        setItems(newItems)
    }
    
    return (
        <nav className='container w-1/2 mx-auto pt-5'>
            <ul className='flex justify-around'>
                { allCategories && allCategories.map(category => (
                    <li key={category} onClick={() => filterItems(category)} className='text-xl text-primary font-bold cursor-pointer'>
                        {category}
                        <div className={`${category === currentCategory && 'underline bg-secondary'  }`} ></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Categories;
