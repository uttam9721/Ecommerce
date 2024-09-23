import express from 'express'
import mongoose from 'mongoose';
// import userRouter from './Routes/user.js'
import userRouter from './Routes/user.js'
import bodyParser from 'express';

const app = express();

app.use(bodyParser.json());


// home testing route

app.get('/', (req, res) => {
    res.send('Hello World')
})

// user Router
app.use('/api/user',userRouter)

mongoose.connect('mongodb+srv://um8794907:uttam262903@ecommerce.8l5wf.mongodb.net/Ecommerce')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})