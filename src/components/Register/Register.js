import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input className="px-5" type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input className="mt-2 px-5" type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input className="mt-2 px-5" type="password" name="" id="" placeholder="Confirm Your Password" />
                    <br />
                    <input className="mt-2" type="submit" value="Submit" />
                </form>
                <p>Already have an account <Link to="/login">Login</Link></p>
                <div>..........or............</div>
                <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;