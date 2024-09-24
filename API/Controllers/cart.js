import { Cart } from "../Models/Cart.js";

// add To Cart
export const addToCart = async (req, res) => {
  const { productId, title, price, qty, imgSrc } = req.body;

  const userId = "66f1cd0d48f632e86ff7e743";

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [] }); 
  }
   
  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );
 
  if (itemIndex > -1) {
    cart.items[itemIndex].qty += 1;
    cart.items[itemIndex].price += price * qty; 
  } else {
    cart.items.push({ productId, title, price, qty, imgSrc });
  }

  await cart.save();
  res.json({ message: "Items Added To Cart", cart });
};


// getuser cart
// get User Cart
export const userCart = async (req,res) =>{
    const userId = "66f1cd0d48f632e86ff7e743";
    
    let cart = await Cart.findOne({userId});
    if(!cart) return res.json({messge:'Cart not found'})
 
     res.json({message:"user cart",cart})
 }
 