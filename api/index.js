//Import express into app
import express from "express";
//Import dotenv into app
import dotenv from "dotenv";
//Import mongoose into app
import mongoose from "mongoose";
//Import Auth Endpoint into index.js
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
// import cors from "cors";

//Create app
const app = express();
const PORT = process.env.PORT || 6003;
const HOST = process.env.HOST;
//Add dotenv config into app
dotenv.config();

//middlewares
// app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

//MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDB);
    console.log("3. Backend Server is connected to MongoDB successfully!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Backend Server is disconnected from MongoDB !");
});

mongoose.connection.on("connected", () => {
  console.log(
    "2. Backend Server has successfuly initiated connection to MongoDB!"
  );
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Backend Server Connection Here
app.listen(PORT, () => {
  connect();
  console.log("1. App is successfully Connected to backend server!");
});
