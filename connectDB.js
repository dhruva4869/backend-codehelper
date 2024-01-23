const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env."mongodb+srv://noobmaster69cr7:g9iIxLzZpg4H52za@cluster0.hfc269j.mongodb.net/Books");
        console.log(`Database Connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
