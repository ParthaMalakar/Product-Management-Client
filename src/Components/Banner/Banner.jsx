import banner2 from '../../assets/banner.jpg'

import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>

            <div id="item1" className="carousel-item w-full">
                <div className="hero max-w-full  mx-auto" style={{

                    background: 'rgba(255, 255, 255, 0.7)',

                    backgroundImage: `url(${banner2})`,

                    backgroundSize: 'cover',

                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',

                    backgroundRepeat: 'no-repeat',

                    width: '100%',

                    height: '610px',

                }}>

                    <div className='md:flex gap-10'>
                        <div className="max-w-[500px] mt-6 space-y-3">
                            <h3 className="text-2xl md:text-4xl  font-bold">Streamline Your Success with ProManage</h3>
                            <p className='p-1'>Welcome to TaskFlow Pro, where seamless task management meets collaborative efficiency. Empower your team, streamline your workflow, and achieve more together. Let's explore the future of productivity!</p>

                        </div>
                        <div>
                            <img className='h-[250px] ml-14 md:ml-0 mt-10 md:mt-0 md:h-[300px]  md:rounded-b-lg rounded-2xl ' src="https://i.ibb.co/9nC4rjS/1165206-128645-ORKO36-68.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;