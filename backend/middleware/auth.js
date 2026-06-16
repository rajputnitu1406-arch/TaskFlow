const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  console.log("heellooocsxczxc")
  let token;
  // console.log(token,"token")
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    console.log(token,"token")
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }

  try {
    console.log("dgfsjhfs")
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.email,"decode")
    req.user = await User.findOne({email :decoded.email})

    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token invalid' });
  }
};

module.exports = {protect} ;
