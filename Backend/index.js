import express from 'express';
import dotenv from 'dotenv'
import connectDB from './DB/dbConnect.js';
import TrainRoutes from './Routes/TrainRoutes.js'
import cors from 'cors'


dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5100;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());


app.use("/api/trains", TrainRoutes);


app.listen(PORT , () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
})
