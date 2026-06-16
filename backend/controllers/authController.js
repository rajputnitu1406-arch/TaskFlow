const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require("bcryptjs")


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword,"haspsswoerd")
    const user = await User.create({ 
      name:name,
       email:email, 
       password :hashedPassword });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email});
    console.log(user,"user")
    if(!user){
      return res.status(404).json({message :"User Not Found"})
    }
  
    const match = await bcrypt.compare(password,user.password)
  
    if (!match)
    return res.status(400).json({
      message: "Invalid Credentials"
    });
    const payload = {
      email :req.body.email,
      password:req.body.password
    }
    const token = await jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '30d'});

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { register, login };
