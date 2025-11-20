import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;  

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const conn = await mongoose.connect(MONGO_URI);
  isConnected = conn.connections[0].readyState;

  console.log("✅ MongoDB Connected");
}




// export const connectDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) return;
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.log("error", error);
//   }
// };



