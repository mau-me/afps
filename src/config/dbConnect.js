import mongoose from "mongoose";
import functions from "firebase-functions";

const MongoDB_URI = functions.config().afps.mongodb_uri;

mongoose.connect(MongoDB_URI);

const db = mongoose.connection;

export default db;

