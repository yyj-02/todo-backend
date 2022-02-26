// src/config/db.ts
import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const db: string | undefined = process.env.MONGO_URI;
    if (db == undefined) {
      throw new Error("Database URI does not exist");
    }
    await mongoose.connect(db);
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
