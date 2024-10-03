
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
  }, [token]);

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
      }}
    >
      {props.children}
      <ToastContainer /> {/* Add ToastContainer here */}
    </AppContext.Provider>
  );
};

export default AppState;
