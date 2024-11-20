// controllers/authController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { firstName,lastName,userName, email, password,phone } = req.body;

  if(!firstName || !lastName || !userName || !email || !password || !phone) return res.status(400).json({message: 'Please fill all the details'})
  // Check if user already exists
  const existingUser  = await User.findOne({ email });
  if (existingUser ) {
    return res.status(400).json({ message: 'User  already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser  = new User({
    firstName,
    lastName,
    userName,
    email,
    phone,
    password: hashedPassword,
  });

  try {
    await newUser .save();
    res.status(201).json({ message: 'User  registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User  not found' });
  }

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ token });
};