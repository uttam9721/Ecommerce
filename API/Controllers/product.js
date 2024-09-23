import { Products } from "../Models/Product.js";

// add product

export const addProduct = async (req,res) => {
    const { title, description,price,category,imgSrc,qty,createdAt}= req.body;
    try {
        let product = await Products.create({
            title:title,
            description:description,
            price:price,
            category:category,
            imgSrc:imgSrc,
            qty:qty,
            createdAt:createdAt,
            });
            res.json({message:'Product added successfully...',product})
        
        
    } catch (error) {
        res.json(error.message);
        
    }
}