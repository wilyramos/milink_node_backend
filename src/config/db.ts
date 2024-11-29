import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {

    try {        
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        console.log(colors.bgGreen(`MongoDB Connected: ${connection.host}`))
    } catch (error) {
        console.error(colors.bgRed(`Error: ${error.message}`))
        process.exit(1)
    }

};