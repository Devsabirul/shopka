import React, { useContext, useState } from 'react';
import { productContest } from '../../App'
import ProductDetails from './ProductDetails'
const Products = () => {
    const [products, setProducts] = useContext(productContest)
    return (
        <>
            {
                products.map(product => <ProductDetails key={product.id} data={product} />
                )
            }
        </>
    );
};

export default Products;