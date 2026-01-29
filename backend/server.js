const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();


// const authRoutes = require("./routes/auth.routes");



dotenv.config();
connectDB();


const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
app.use(express.json());


// app.use("/api/auth", authRoutes);



app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`),
);
