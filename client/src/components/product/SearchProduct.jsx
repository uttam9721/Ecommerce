import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Link, useParams } from 'react-router-dom';

const SearchProduct = ({ category }) => {
  const { products } = useContext(AppContext); // Access products from context
  const [searchProduct, setSearchProduct] = useState([]);
  
  const { term } = useParams(); // Get the search term from the URL

  // console.log(useParams);

  useEffect(() => {
    if (products) {
      let filteredProducts = products;

      // Apply category filter if a category is provided
      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) => product?.category?.toLowerCase() === category.toLowerCase()
        );
      }

      // Apply search term filter if a search term is provided
      if (term) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(term.toLowerCase()) ||
            product.description.toLowerCase().includes(term.toLowerCase())
        );
      }

      setSearchProduct(filteredProducts);
    }
  }, [category, term, products]);

  return (
    <>
      <div className="container text-center">
        {/* <h1>Related Products</h1> */}
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {searchProduct.length > 0 ? (
              searchProduct.map((product) => (
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
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
