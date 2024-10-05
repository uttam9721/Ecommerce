import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
const Cart = () => {
  const { cart,decQty } = useContext(AppContext);
const [qty, setQty] = useState(0)
const [price, setPrice] = useState(0)

  useEffect(() => {
   let qty = 0;
   let price = 0;
   if(cart?.items){
    for(let i = 0; i < cart.items?.length; i++){
      qty+=cart.items[i].qty;
      price+=cart.items[i].price;
    }
    setPrice(price)
    setQty(qty)
   }
    
  }, [cart])
  
  return (
    <>
    <div className="my-5 text-center">
      <button className="btn btn-info mx-3">Total Qty:{qty}</button>
      <button className="btn btn-warning mx-3">Total Peice:{price}</button>
    </div>
      {cart?.items?.map((product) => (
        <div key={product._id} className="container p-3 bg-dark my-5 text-center">
          <div style={{display:'flex',justifyContent: 'space-around', alignItems:'center'}}>
            <div className="cart_img">
              <img
                src={product.imgSrc}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="cart_des">
              <h5>{product.title}</h5>
              <p>Rs {product.price}</p>
              <h5>Qty:{product.qty}</h5>
            </div>
            <div className="cart_action">
              <button className="btn btn-secondary mx-3" style={{fontWeight:'bold'}} onClick={()=>decQty(product.productId,1)}>--</button>
              <button className="btn btn-info mx-3"      style={{fontWeight:'bold'}}>++</button>
              <button className="btn btn-danger mx-3"    style={{fontWeight:'bold'}}>Remove item</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
