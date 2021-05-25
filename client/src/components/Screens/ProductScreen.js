import React from 'react';
import products from "../../Foods.js"

const ProductScreen = ({match}) => {

    const product = products.find(p => p.id === parseInt(match.params.id) )
    console.log(product);
    return (
        <div>
            
        </div>
    );
}

export default ProductScreen;
