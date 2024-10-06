
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, decQty, addToCart,removeFromCart,clearCart } = useContext(AppContext); // Pull `addToCart` from context
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

const navigate = useNavigate();

  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;

    if (cart?.items) {
      cart.items.forEach((item) => {
        totalQty += item.qty;
        totalPrice += item.price;
      });

      setPrice(totalPrice);
      setQty(totalQty);
    }
  }, [cart]);

  return (
    <>
    {cart?.items?.length==0?(
      <>
      <div className="text-center my-5">
       <button
       onClick={()=>navigate('/')}
       className="btn btn-warning mx-3" ><b>Continue Shopping....</b></button>
       </div>
      </>
    ):(
      <>
      <div className="my-5 text-center">
        <button className="btn btn-info mx-3">Total Qty: {qty}</button>
        <button className="btn btn-warning mx-3">Total Price: {price}</button>
      </div>
      </>
    )}

      {cart?.items?.map((product) => (
        <div key={product._id} className="container p-3 bg-dark my-5 text-center">
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <div className="cart_img">
              <img
                src={product.imgSrc}
                alt={product.title}
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
              <h5>Qty: {product.qty}</h5>
            </div>
            <div className="cart_action">
              <button
                className="btn btn-secondary mx-3"
                style={{ fontWeight: "bold" }}
                onClick={() => decQty(product.productId, 1)}
              >
                --
              </button>
              <button
                className="btn btn-info mx-3"
                style={{ fontWeight: "bold" }}
                onClick={() =>
                  addToCart(
                    product.productId,
                    product.title,
                    product.price / product.qty, // Corrected price per item
                    1,
                    product.imgSrc
                  )
                }
              >
                ++
              </button>
              <button className="btn btn-danger mx-3" style={{ fontWeight: "bold" }} onClick={()=>
                {
                  if(confirm("Are you sure !"))
                  removeFromCart(product?.productId)}}>
                Remove item
              </button>
              
            </div>
          </div>
        </div>
      ))}
      {cart?.items?.length >0 && (

      
      <div className="container text-center my-3">
        <button className="btn btn-warning mx-3 text-center" style={{fontWeight:'bold'}} onClick={()=>navigate('/shipping')}>Checkout</button>
        <button className="btn btn-danger mx-3 text-center"  style={{fontWeight:'bold'}}
        onClick={()=>{
          if(confirm("Are you sure !")){
            clearCart()
          }
          }}
        >ClearCart</button>
      </div>
      )}
    </>
  );
};

export default Cart;
