import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  console.log('location in the login', location);
  const handleLogin = (e) => {
    e.preventDefault();

    // Regular expression for a valid email address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Regular expression for a valid password (at least 6 characters, one uppercase letter, one lowercase letter, and one number)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    console.log(e.currentTarget);
    // const form = new FormData(e.currentTarget);
    const email = e.target['email']['value'];
    const password = e.target['password']['value'];
    console.log({ email, password });

    if (!emailRegex.test(email)) {
      alert('invalid email address');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert(
        'at least 6 characters, one uppercase letter, one lowercase letter, and one number'
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'successfully login',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result.user);

        Navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Email & password not match',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
  };
  const Auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    signInWithPopup(Auth, provider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'successfully login',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result.user);

        Navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log('error', error.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-3xl text-center my-10">Please Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignin}
          className="btn btn-primary w-full mt-4"
        >
          Signin With Google
        </button>
        <p className="text-center mt-4">
          Do not have an account{' '}
          <Link className="text-blue-600 font-bold" to="/register">
            {' '}
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
