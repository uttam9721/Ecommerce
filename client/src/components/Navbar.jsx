import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchProduct from './product/SearchProduct';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`); // Concatenate properly for the URL
    } else {
      navigate('/'); // Default redirect if no search term
    }
    setSearchTerm(" "); // Reset the search term
  };

  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link to={'/'} style={{ textDecoration: 'none', color: '#fff' }}>
            <div className="left">
              <h2>Shopkart</h2>
            </div>
          </Link>
          <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search products..."
            />
          </form>
          <div className="right">
            <button className="btn btn-warning mx-3">Cart</button>
            <button className="btn btn-warning mx-3">Profile</button>
            <button className="btn btn-warning mx-3">Login</button>
            <button className="btn btn-warning mx-3">Register</button>
            <button className="btn btn-warning mx-3">Logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
