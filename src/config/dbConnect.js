import mongoose from "mongoose";

const MongoDB_URI = process.env.MONGODB_URI;

mongoose.connect(MongoDB_URI);

const db = mongoose.connection;

export default db;
