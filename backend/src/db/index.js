
import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/medimind` )
       console.log("Connected to the database",connectionInstance.connection.host);
    } catch (error) {
        console.log("Db connection error", error);
        process.exit(1);
    }
} 

export default connectDB;