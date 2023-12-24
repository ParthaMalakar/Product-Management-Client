import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    

    return (
        <div>
             
            <div className="pt-8 bg-[#283d4426]">
                <h2 className="text-3xl my-10 text-center pt-10 font-bold">Please Login</h2>
                <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Enter your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Enter your Password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white">Login</button>
                    </div>
                </form>

                <p className="text-center mt-4 mb-4  text-lg font-bold">Do not have an account <Link to="/register" className="text-blue-600 font-bold" >Register</Link></p>
                <hr className="text-black w-[300px] mx-auto border-t-3 border-orange-500"></hr>
                <p className="text-center font-bold pb-3 ">Or</p>
                <div className="justify-center items-center text-center pb-7 ">
                    <button  className=" text-black btn btn-secondary bg-[#FFF]"> <FcGoogle className="text-2xl"></FcGoogle> Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;