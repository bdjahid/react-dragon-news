import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {
    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('click')
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // sign in
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left my-5">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="text-center mb-5">Do not have an account <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;