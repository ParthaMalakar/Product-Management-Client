import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ category }) => {
    const style = {
        backgroundColor: `${category.card_bg_color}`
    }
    const textColour = {
        color: `${category.text_button_bg_color}`,
        border: '1px solid red',
        padding: '4px',
        backgroundColor: `${category.category_bg_color}`

    }
    const text = {
        color: `${category.text_button_bg_color}`
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl" style={style}>
                <figure><img className="w-[312px] h-[194px]" src={category.image} alt="Image" /></figure>
                <div className="mx-auto py-5">
                    <div className='flex gap-5 mx-auto'>
                        <h2 style={textColour} className=" text-center w-32 font-medium text-base  rounded-lg ">
                            Colour:  {category.variations[0].color}
                        </h2>
                        <h2 style={textColour} className=" text-center w-32 font-medium text-base  rounded-lg ">
                            Size:  {category.variations[0].size}
                        </h2>
                    </div>
                    <p style={text} className="font-semibold pt-5 pb-2 text-center text-lg">{category.title}</p>
                </div>
                <div className=''><Link className='btn btn-block text-center'>Details</Link></div>

            </div>
        </div>
    );
};

export default Product;
