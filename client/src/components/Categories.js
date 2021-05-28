import React, { useEffect } from 'react';

const Categories = ({setCurrentCategory, products, allCategories, currentCategory, setItems}) => {


    useEffect(() => {
        filterItems(currentCategory)
    },[])
    const filterItems = (category) => {
        setCurrentCategory(category)
        const newItems = products.filter(p => p.category === category);
        setItems(newItems)
    }
    return (
        <nav className='container w-1/2 mx-auto pt-5'>
            <ul className='flex justify-around'>
                {allCategories.map(category => (
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
