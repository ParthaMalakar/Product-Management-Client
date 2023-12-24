import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, image, title, variations, category_bg_color, card_bg_color, text_button_bg_color } = product;
    const style = {
        backgroundColor: `${card_bg_color}`
    }
    const textColour = {
        color: `${text_button_bg_color}`,
        border: '1px solid red',
        padding: '4px',
        backgroundColor: `${category_bg_color}`

    }
    const text = {
        color: `${text_button_bg_color}`
    }
    const handleAdd =()=>{

        if(user){
            const productInfo = {

                image: image,
                email: user.email,
                title: title,
                variations: variations
                

            }
            console.log(productInfo)

            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log('Product added to the database')
                        Swal.fire(
                            'Product Add your cart',
                            'You clicked the button!',
                            'success'
                        )
                    }
                })

            
        }
        else{
navigate('/login')
        }
    }
    return (
        <div>
            <div className='max-w-7xl mx-auto  bg-base-100 shadow-2xl'>
                <div className="card md:w-[600px] bg-base-100 mx-auto pt-4 shadow-xl">
                    <figure><img src={image} alt="Shoes" className="rounded-xl h-[450px] w-[620px]" /></figure>

                    <div className="mx-auto py-5">
                        <div className='flex gap-5 mx-auto'>
                            <h2 style={textColour} className=" text-center w-32 font-medium text-base  rounded-lg ">
                                Colour:  {variations[0].color}
                            </h2>
                            <h2 style={textColour} className=" text-center w-32 font-medium text-base  rounded-lg ">
                                Size:  {variations[0].size}
                            </h2>
                        </div>
                        <p style={text} className="font-semibold pt-5  text-center text-lg">{title}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link onClick={handleAdd} className="btn btn-primary flex-grow">Add to Cart</Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;