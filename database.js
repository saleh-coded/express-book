const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to Database")
    } catch (error) {
        console.log("Error connecting with database", error)
    }
};

module.exports = connectDB;