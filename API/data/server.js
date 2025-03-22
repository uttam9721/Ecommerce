import express from 'express'
import mongoose from 'mongoose';
// import userRouter from './Routes/user.js'
import userRouter from './Routes/user.js'
import bodyParser from 'express';
import productRouter from './Routes/product.js'
// import { Cart } from './Models/Card.js';
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))





// home testing route

app.get('/', (req, res) => {
    res.send('Hello World')
})

// user Router
app.use('/api/user',userRouter)

// product router

app.use('/api/product',productRouter)

// cart router

app.use('/api/cart',cartRouter)


// address router

app.use('/api/address',addressRouter)









mongoose.connect('mongodb+srv://um8794907:uttam262903@ecommerce.8l5wf.mongodb.net/Ecommerce')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})