import React, { useContext } from 'react';
import logo from '../../assets/logo.jpg';
import picture from '../../assets/user.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = (e) => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-[#eee8e8]  ">
        <div className="navbar-start">
          <div className="dropdown  ">
            <img className="mx-auto w-32" src={logo} alt="" />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center  flex ">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <img className="w-12 rounded-3xl" src={picture} alt="" />
          </div>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <Link>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
