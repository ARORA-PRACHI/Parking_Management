const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./config/dbConnection');
const Parking = require('./models/parkingSpaceModel');

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database and Initialize Parking Lot
connectDb().then(async () => {
    try {
        // Initialize Parking Lot if not exists
        const existingParking = await Parking.findOne();
        if (!existingParking) {
            const slots = Array.from({ length: 10 }, (_, i) => ({
                number: i + 1,
                status: 'empty',
            }));

            const newParkingLot = new Parking({
                totalSpots: 10,
                slots: slots,
                vehicles: [],
            });

            await newParkingLot.save();
            console.log('Parking lot initialized with 10 slots.');
        } else {
            console.log('Parking lot already exists.');
        }
    } catch (err) {
        console.error('Error initializing parking lot:', err.message);
    }
});

// Import Routes
const authRoutes = require('./routes/userRouter');
const parkingRouter = require('./routes/parkingSpaceRoutes');
const walletRouter = require('./routes/walletRouter');
// Routes
app.use('/api/user', authRoutes);
app.use('/api/parking', parkingRouter);
app.use('/api/wallet', walletRouter);



// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});