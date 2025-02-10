import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB is connected/..`);

  } catch (error) {}
};

export default connectDB;