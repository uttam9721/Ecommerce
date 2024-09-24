import { Products } from "../Models/Product.js";
// import { Products } from './../Models/Product';
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


// get products
export const getProducts = async (req,res) =>{
    let products= await Products.find().sort({createdAt:-1})  //.sort({createdAt:-1}); this is use to if you add new product then product is sorted 
    res.json({message:'All products',products})
    // try {
        
    // } catch (error) {
        
    // }
}

// find product by id 
export const getProductById = async (req,res) =>{
    const id = req.params.id;
    let product= await Products.findById(id)
    if(!product) return res.json({message:'invalid id '})
    res.json({message:'specific product',product})
    // try {
        
    // } catch (error) {
        
    // }
}


// update product ById;
export const updateProductById = async (req,res) =>{
    const id = req.params.id;
    let product= await Products.findByIdAndUpdate(id,req.body,{new:true})
    if(!product) return res.json({message:'invalid id '})
    res.json({message:' Product has been updated',product})
    // try {
        
    // } catch (error) {
        
    // }
}

// delete productById
export const deleteProductById = async (req,res) =>{
    const id = req.params.id;
    let product= await Products.findByIdAndDelete(id)
    if(!product) return res.json({message:'invalid id '})
    res.json({message:' Product has been deleted',product})
    // try {
        
    // } catch (error) {
        
    // }
}