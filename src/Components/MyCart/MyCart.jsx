import React, { useEffect, useState } from 'react';

const MyCart = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mycart`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <section className="user-benefits-section max-w-6xl mx-auto mb-4">
            <h2 className='text-center mt-9 font-bold text-3xl'>My added Products</h2>
            <div className="user-categories grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
                {categories.map((category, index) => (
   
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={category.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center">{category.title}</h2>
                            <div className='flex justify-between'>
                            <p ><span className='text-lg font-bold'> Color:</span> {category.variations[0].color}</p>
                            <p><span className='text-lg font-bold'> Size:</span> {category.variations[0].size}</p>
                            </div>
                            

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default MyCart;