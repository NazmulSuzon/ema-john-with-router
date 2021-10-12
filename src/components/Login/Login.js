import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h2>Login</h2>
                <form>
                    <input className="px-5" type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input className="mt-2 px-5" type="password" name="" id="" placeholder="Enter Your Password"/>
                    <br />
                    <input className="mt-2" type="submit" value="Submit" />
                </form>
                <br />
                <p>New To Ema-John? <Link to="/register">Create Account</Link></p>
                <div>..........or............</div>
                <br />
                <button 
                className="btn-regular"
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;