import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductPage = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='bg-cyan-100'>
            <section className="user-benefits-section max-w-6xl mx-auto pb-4">
                <h2 className="text-center pt-6 font-bold text-4xl text-blue-700">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                       All Products 
                    </span>
                </h2>
                <div className="user-categories grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
                    {categories.map((category, index) => (
                        <Product key={index} category={category}></Product>

                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductPage;