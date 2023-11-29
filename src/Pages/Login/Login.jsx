import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const {logIn, googleSignin} = useAuth()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate()

    const handleLoginWithGoogle = e => {
        e.preventDefault();

        googleSignin()
            .then(resuslt => {
                console.log(resuslt.user);
                setSuccess('Successfully Logged In');
                navigate(location?.state ? location.state : "/")
            })
            .catch(error=>{
                console.error(error);
            })

    }
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setError('');
        logIn(email, password)
            .then(result => {
                console.log(result.user);

                setSuccess('Successfully Logged In');
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError("Invalid email or password");
            })

    }
    
    return (
        <div className="my-12">
            <h2 className="text-3xl text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">

                        <p>
                            {
                                error && <span className="text-red-600">{error}</span>
                            }
                        </p>

                        <p className="text-green-500">
                            {
                                success && swal("Successfully Logged In", "", "success")
                            }
                        </p>
                    </label>
                </div>
                <div  className="form-control mt-6 ">
                    <button className="btn text-white bg-[#403F3F]">Login</button>
                </div>
                <div className="form-control mt-6 ">
                    <button onClick={handleLoginWithGoogle} className="btn btn-primary"><FaGoogle></FaGoogle>Login With Google</button>
                </div>
            </form>
            <p className="text-center mb-8">Don't have an account? <Link className="text-red-500" to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;