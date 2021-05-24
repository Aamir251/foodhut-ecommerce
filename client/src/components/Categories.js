import React from 'react';

const Categories = ({setCurrentCategory, allCategories, currentCategory}) => {
    
    return (
        <nav className='container w-1/2 mx-auto pt-5'>
            <ul className='flex justify-around'>
                {allCategories.map(category => (
                    <li key={category} onClick={() => setCurrentCategory(category)} className='text-xl text-primary font-bold cursor-pointer'>
                        {category}
                        <div className={`${category === currentCategory && 'underline bg-secondary'  }`} ></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Categories;
