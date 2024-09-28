import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
const ShowProduct = () => {
  const {products}= useContext(AppContext);
  return (
    <div>
      <>{products?.map(product =><div key={product._id}>
        <h1>{product.title}</h1>
      </div>)}</>
    </div>
  )
}

export default ShowProduct
