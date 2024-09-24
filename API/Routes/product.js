import express from 'express';
import { addProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../Controllers/product.js';

const router = express.Router();


// add product

router.post('/add',addProduct)

// get product

router.get('/all',getProducts)


// get product bt id 
router.get('/:id',getProductById)

// update productById;

router.put('/:id',updateProductById)

// delete productById

router.delete('/:id',deleteProductById)
















export default router;