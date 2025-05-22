import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
      const conn = await mongoose.connect(process.env.MONGODB_URI)
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(error){
    console.log("Error Connection to MongoDB: ",error.message)
    process.exit(1) //failure //1 is failure,0 is success
    }
}
