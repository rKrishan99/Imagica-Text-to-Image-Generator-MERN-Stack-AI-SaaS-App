import express from 'express';// Import express
import cors from 'cors';// Import cors
import 'dotenv/config';// Import dotenv
import connectDB from './config/monogodb.js'; // Import connectDB from monogodb.js
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 3000;// Set the port

const app = express();// Create an express app


app.use(express.json());// Use express.json
app.use(cors());// Use cors

await connectDB();// Connect to the database

app.use('/api/user', userRouter);// Use the userRouter
app.get('/', (req, res) => {// Create a get route
    res.send('API Working');// Send a response
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);// Log that the server is running
});

