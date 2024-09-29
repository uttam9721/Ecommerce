import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RelatedProduct from './RelatedProduct';

const ProductDetails = () => {
  const [product, setProduct] = useState(null); // Initialize as null to differentiate between loading and undefined state
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const { id } = useParams();
  const url = "http://localhost:3000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        setProduct(api.data.product);
      } catch (err) {
        setError('Failed to load product'); // Set error if API call fails
      } finally {
        setLoading(false); // Set loading to false once API call is done
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container text-center">Loading...</div>; // Show loading while fetching product
  }

  if (error) {
    return <div className="container text-center">{error}</div>; // Show error message if there's an error
  }

  if (!product) {
    return <div className="container text-center">Product not found</div>; // Handle case when product is null or undefined
  }

  return (
    <>
      <div
        className="container text-center"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div className="left">
          <img
            src={product.imgSrc}
            alt="product image"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '2px',
              border: '2px solid blue',
            }}
          />
        </div>
        <div className="right">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h1 className="">{`₹ ${product.price} `}</h1>
          <div className="my-3">
        <button className="btn btn-danger mx-3" style={{fontWeight:'bold'}}>Buy Now</button>
            <button className="btn btn-warning" style={{fontWeight:'bold'}}>Add To Cart</button>
          </div>
        </div>
      </div>
      <RelatedProduct  category={product?.category}/>
    </>
  );
};

export default ProductDetails;
