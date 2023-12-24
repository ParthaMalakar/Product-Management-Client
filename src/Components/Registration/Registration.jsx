import { Link } from "react-router-dom";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Registration = () => {
 
    return (
        <div>
            
             <div className="bg-[#283d4426]">
             <h2 className="text-center pt-8  font-bold text-4xl text-blue-700">
                    <span className="text-3xl  font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    Please Registration
                    </span>
                </h2>                <form   className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Register</button>
                    </div>
                </form>
                
                <p className="text-center mt-4 font-bold text-lg pb-6  ">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;