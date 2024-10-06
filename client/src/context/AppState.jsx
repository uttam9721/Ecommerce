
import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppState = (props) => {
  const url = "http://localhost:3000/api";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredData, setFilteredData] = useState([])
  const [user,setUser] = useState()
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);
  const [userAddress, setUserAddress] = useState()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/all`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
        setProducts(api.data.products); // Store products in state
        setProducts(api.data.products)
        setFilteredData(api.data.products)
        userProfile();

        toast.success(api.data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err); // Set error state
        toast.error("Failed to fetch products", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } finally {
        setLoading(false); // Update loading state
      }
    };
    fetchProduct();
    userCart();
    getAddress();
  }, [token,reload]);


  useEffect(() => {
    let lstoken = localStorage.getItem('token')
    // console.log("ls token ")
    // setToken(lstoken)
    
  //  setToken(localStorage.getItem('token'))
  if(lstoken){
    setToken(lstoken);
     setIsAuthenticated(true) ;
    
  }
  }, [])
  

  // Register user
  const register = async (name, email, password) => {
    try {
      const api = await axios.post(
        `${url}/user/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        }
      );
      // Handle successful registration if needed
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      console.error("Error registering user:", err);
      setError(err);
      toast.error("Failed to register user", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        }
      );
      // Handle successful registration if needed
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      // console.log("user Login", api.data)
      setToken(api.data.token);
      setIsAuthenticated(true);
    //   localStorage.setItem(api.data.token)
      return api.data;
    } catch (err) {
      console.error("Error registering user:", err);
      setError(err);
      toast.error("Failed to register user", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      // return api.data;
    }
  };

  // logout user
  const logout=()=>{
    setIsAuthenticated(false);
    setToken(" ");
    localStorage.removeItem('token');
    toast.success("Logout successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  }

  // user profile
  const userProfile = async () => {
    // try {
      const api = await axios.get(`${url}/user/profile`, {
        headers: {
          "Content-Type": "Application/json",
          "Auth":token
        },
        withCredentials: true,
      });
      // console.log("user profile",api.data.user)
      setUser(api.data.user)
    
    };

    // Add To Cart
      const addToCart = async (productId, title, price, qty, imgSrc) => {
        const api = await axios.post(`${url}/cart/add`,{productId, title, price, qty, imgSrc}, {
          headers: {
            "Content-Type": "Application/json",
            Auth:token
          },
          withCredentials: true,
        });
        setReload(!reload)
    
    //  console.log("my cart",api)
     toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
      };


  // userCart

  const userCart = async () => {
    const api = await axios.get(`${url}/cart/user`, {
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });

//  console.log("my cart",api)
 setCart(api.data.cart);
  };


  // Dec qty
  const decQty = async (productId,qty) => {
    const api = await axios.post(`${url}/cart/--qty`,{productId,qty}, {
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });

//  console.log("my cart",api)
//  setCart(api.data.cart);
setReload(!reload)
toast.success(api.data.message, {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
});
//  setReload(!reload)
  };

  // remove item from cart

  const removeFromCart = async (productId) => {
    const api = await axios.delete(`${url}/cart/remove/${productId}`,{
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });

//  console.log("remove item from cart",api)
//  setCart(api.data.cart);
setReload(!reload)
toast.success(api.data.message, {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
});
//  setReload(!reload)
  };

  // clear cart
  const clearCart = async () => {
    const api = await axios.delete(`${url}/cart/clear`,{
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });

//  console.log("remove item from cart",api)
//  setCart(api.data.cart);
setReload(!reload)
toast.success(api.data.message, {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
});
//  setReload(!reload)
  };
    
// AddShipping address
const shippingAddress = async ( fullName, address, city, state, country, pincode, phoneNumber) => {
  const api = await axios.post(`${url}/address/add`,{ fullName, address, city, state, country, pincode, phoneNumber},{
    headers: {
      "Content-Type": "Application/json",
      Auth:token
    },
    withCredentials: true,
  });

//  console.log("remove item from cart",api)
//  setCart(api.data.cart);
setReload(!reload)
toast.success(api.data.message, {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
//  setReload(!reload)
return api.data;
};
  
// get user latest address
const getAddress = async () => {
  // try {
    const api = await axios.get(`${url}/address/get`, {
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });
  // console.log("user address",api.data)
  setUserAddress(api.data.userAddress);

  }

  return (
    <AppContext.Provider
      value={{
        products,
        register,
        loading,
        error,
        login,
        url,
        token,
        setIsAuthenticated,
        isAuthenticated,
        filteredData,
        setFilteredData,
        logout,
        user,
        addToCart,
        cart,
        decQty,
        removeFromCart,
        clearCart,
        shippingAddress,
        userAddress,
        
      }}
    >
      {props.children}
      <ToastContainer /> {/* Add ToastContainer here */}
    </AppContext.Provider>
  );
};

export default AppState;
