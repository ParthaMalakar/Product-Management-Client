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
        <div>
            <section className="user-benefits-section max-w-6xl mx-auto mb-4">
                <h2 className='text-center mt-9 font-bold text-3xl'>Product Page</h2>
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