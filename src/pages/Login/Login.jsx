import { Link } from 'react-router-dom';
import login from '../../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user) 
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20 items-center">
                <div className='w-1/2'>
                    <img src={login} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-5xl font-semibold text-center my-8'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Your password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <p className="text-center mt-4">Or Sign in with</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mt-2'>New here? <Link className='text-[#FF3811]' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;