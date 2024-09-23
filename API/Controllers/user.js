// import { User } from "../Models/User.js";
import { User } from '../Models/User.js';  // Make sure the path is correct and includes the .js extension
import bcrypt from 'bcryptjs'

// user register
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email: email })
        if (user) return res.json({ message: "user already exist", success: false })
        const hashPass = await bcrypt.hash(password, 10)
        user = await User.create({ name, email, password: hashPass });
        res.status(201).json({ message: "User created successfully",user, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//user login
export const login = async (req, res) => {
    const {email,password}= req.body;
    try {
        let user = await User.findOne({email})
        if(!user)return res.json({message: "User not found",success:false});
            const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword) return res.json({message:'invalid credential',success:false});
            res.json({message:`welcome ${user.name}`,success:true,user})
        
    } catch (error) {
        res.json({message:error.message})
        
    }
};

// get all users

export const users =async (req, res) => {

    try {
        let users = await User.find().sort({createAt:-1});
        res.json(users)
        
    } catch (error) {
        
    }
}