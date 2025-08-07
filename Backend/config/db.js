import mongoose from "mongoose";

const connectDB =async()=>{
   try {
    mongoose.connection.on('connection',()=>console.log(
       " database connected"
    )
    )
    await mongoose.connect(`${process.env.MONGO_URI}/MyBlog`)
    console.log("database connected");
    
   } catch (error) {
    console.log(error.message);
    
   }
}

export default connectDB;