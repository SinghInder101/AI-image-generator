import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); //This function helps with search functionality
  mongoose
    .connect(url)
    .then()
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;