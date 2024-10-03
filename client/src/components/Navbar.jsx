import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchProduct from './product/SearchProduct';
import AppContext from '../context/AppContext';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const {setFilteredData,products} = useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter((data) => data.category.toLowerCase() === cat.toLowerCase())
    );
  };
  


  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`); // Concatenate properly for the URL
    } else {
      navigate('/'); // Default redirect if no search term
    }
    setSearchTerm(" "); // Reset the search term
  };
  console.log(products);


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
            <Link to={'/login'} className="btn btn-secondary mx-3">Login</Link>
            <Link to={'/register'} className="btn btn-info mx-3">Register</Link>
            <button className="btn btn-warning mx-3">Logout</button>
          </div>
        </div>
        <div className="sub_bar">
          <div className="items" onClick={()=>filterbyCategory(products)}>No Filter</div>
          <div className="items" onClick={()=>filterbyCategory('mobiles')}>Mobiles</div>
          <div className="items" onClick={()=>filterbyCategory('laptop')}>Laptop</div>
          <div className="items" onClick={()=>filterbyCategory('cameras')}>Camera's</div>
          <div className="items" onClick={()=>filterbyCategory('headphones')}>Headphones</div>
          <div className="items">15999</div>
          <div className="items">49999</div>
          <div className="items">65000</div>
          <div className="items">35000</div>
          <div className="items">25803</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
