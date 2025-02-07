import express from 'express';// Import express
import userController from '../controllers/userController.js';// Import the registerUser and loginUser functions from userController.js
import userAuth from '../middleware/auth.js';

const { registerUser, loginUser, userCredits } = userController;// Destructure the registerUser and loginUser functions
const userRouter = express.Router();// Create a router

userRouter.post('/register', registerUser);// Create a post route for register
userRouter.post('/login', loginUser);// Create a post route for login
userRouter.post('/credits', userAuth, userCredits);// Create a post route for credits

export default userRouter;// Export the router