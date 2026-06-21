const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/database");


const app = express();


// Database connection

connectDB();


// Middleware

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const leadRoutes = require("./routes/leadRoutes");

const authRoutes=require("./routes/authRoutes");


app.use("/api/leads", leadRoutes);

app.use("/api/auth",authRoutes);


// Test Route

app.get("/", (req, res) => {

    res.send("Mini CRM Backend Running");

});


// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});