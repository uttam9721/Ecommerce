import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category }) => {
  const { products } = useContext(AppContext); // Access products from context
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (products && category) { 
      // Ensure products and category are available before filtering
      const filteredProducts = products.filter(
        (data) => data?.category?.toLowerCase() === category?.toLowerCase()
      );
      setRelatedProduct(filteredProducts);
    }
  }, [category, products]);

  return (
    <>
      <div className="container text-center">
        <h1>Related Products</h1>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {relatedProduct?.map((product) => (
              <div key={product._id} className="my-5 col-md-4 d-flex">
                <div className="card bg-dark text-light text-center" style={{ width: '18rem' }}>
                  <Link to={`/product/${product._id}`} className="d-flex justify-content-center align-items-center p-3">
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt={product.title}
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '10px',
                        border: '2px solid yellow',
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="my-3">
                      <button className="btn btn-primary">{`Price: ₹${product.price}`}</button>
                      <button className="btn btn-warning">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
