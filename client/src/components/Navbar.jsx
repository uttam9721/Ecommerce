import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchProduct from "./product/SearchProduct";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilteredData, products, logout, isAuthenticated,cart } =
    useContext(AppContext);
  // console.log("user",cart)
  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`); // Concatenate properly for the URL
    } else {
      navigate("/"); // Default redirect if no search term
    }
    setSearchTerm(" "); // Reset the search term
  };
  console.log(products);

  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
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
            {isAuthenticated &&(
              <>
             
            
            {/* <button className="btn btn-warning mx-3">Cart</button> */}
            <Link to={'/cart'} type="button" className="btn btn-primary position-relative mx-3">
            <span className="material-symbols-outlined">
shopping_cart
</span>
{cart?.items?.length>0 &&(
                
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {cart?.items?.length}
    <span className="visually-hidden">unread messages</span>
  </span>
              )}
</Link>
            <Link to={'/profile'} className="btn btn-info mx-3">Profile</Link>
            <button

              className="btn btn-danger mx-3"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
            </>
            )}
            {!isAuthenticated && (
              <>
            <Link to={"/login"} className="btn btn-secondary mx-3">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-info mx-3">
              Register
            </Link>
            </>
            )}
          </div>
        </div>
        {location.pathname == "/" && (
          <div className="sub_bar">
            <div className="items" onClick={() => setFilteredData(products)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterbyCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterbyCategory("laptop")}>
              Laptop
            </div>
            <div className="items" onClick={() => filterbyCategory("cameras")}>
              Camera's
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("headphones")}
            >
              Headphones
            </div>
            {/* <div className="items">15999</div>
          <div className="items">49999</div>
          <div className="items">65000</div>
          <div className="items">35000</div>
          <div className="items">25803</div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
