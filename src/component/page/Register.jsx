import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const notify = (message) => toast.error(message);
    const [showpass, setShowpass] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checkbox = event.target.checkbox.checked;

        //password validation
        const passwordLengthRegex = /^.{6,}$/;
        const passwordLowercaseRegex = /[a-z]/;
        const passwordUppercaseRegex = /[A-Z]/;
        const passwordNumberRegex = /\d/;
        const passwordSpecialCharRegex = /[@$!%*?&]/;

        //clear previous error
        setError("");

        //Password Check

        if (!passwordLengthRegex.test(password)) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (!passwordLowercaseRegex.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        if (!passwordUppercaseRegex.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!passwordNumberRegex.test(password)) {
            setError("Password must contain at least one number.");
            return;
        }

        if (!passwordSpecialCharRegex.test(password)) {
            setError("Password must contain at least one special character (@$!%*?&).");
            return;
        }

        if (!checkbox) {
            setError("You must agree to the terms and conditions.");
            return;
        }


        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result);
                // Update profile
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    event.target.reset();
                    toast.success("User Successfully Created");
                    navigate('/')
                }).catch(error => {
                    setError(error.message);
                    notify(error.message);
                });
            })
            .catch(error => {
                setError(error.message);
                notify(error.message);
            });


    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location?.state || "/", { state: location.pathname });
            })
            .catch((error) => {

                setError(error.message);
            });
    };
    return (
        <div className="grid w-11/12  justify-center items-center card bg-base-100  max-w-lg shrink-0 shadow-sm mx-auto  px-0 md:px-3 py-7 my-16 ">

            <h3 className="text-center text-2xl font-semibold">Register your account</h3>
            <form className="card-body" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                        name="name"
                        required
                    />
                </div>

                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter Photo URL"
                        name="photo"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showpass ? "text" : "password"}
                        name="password"
                        placeholder="Enter a secure password"
                        className="input input-bordered"
                        required
                    />
                    <div className="absolute z-30 top-7 right-4 btn btn-xs" onClick={() => setShowpass(!showpass)}>
                        {
                            showpass ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )
                        }
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" name="checkbox" className="checkbox" />
                        <span className="label-text">Accept Terms & Conditions</span>
                    </label>
                </div>

                {/* Display error message */}
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

                {/* Register Button */}
                <div className="form-control mt-3">
                    <button className="btn w-full bg-[#19BC9B] text-white">Register</button>
                </div>
                <div className='divider'>Or</div>
                <div className="px-20 cursor-pointer mb-2">
                    <span
                        className="flex items-center gap-1 border rounded-md p-2 justify-center text-sm hover:bg-base-200"
                        onClick={handleGoogleLogin}
                    >
                        <FcGoogle className="text-2xl" /> Sign in with Google
                    </span>
                </div>
                <div className="flex justify-center">
                    <small className="text-center">Already Have An Account ? <Link to='/auth/login' className="text-[#19BC9B] hover:underline">Login</Link></small>
                </div>
            </form>

        </div>
    );
};

export default Register;