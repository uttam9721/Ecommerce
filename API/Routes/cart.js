import express from 'express'
import { addToCart, userCart } from '../Controllers/cart.js';

const router = express.Router();
// add To Cart;
router.post('/add',addToCart)

// get user cart

router.get('/user',userCart)









export default router;