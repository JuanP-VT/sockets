import mongoose from "mongoose";
/**
 * Database Schema for user
 */

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});

export default mongoose.model("Users", UserSchema);
