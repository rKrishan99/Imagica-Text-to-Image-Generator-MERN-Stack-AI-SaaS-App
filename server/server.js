import express from 'express';// Import express
import cors from 'cors';// Import cors
import 'dotenv/config';// Import dotenv

const PORT = process.env.PORT || 3000;// Set the port

const app = express();// Create an express app


app.use(express.json());// Use express.json
app.use(cors());// Use cors

app.get('/', (req, res) => {// Create a get route
    res.send('API Working');// Send a response
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);// Log that the server is running
});

