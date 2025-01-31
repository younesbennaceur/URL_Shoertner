import mongoose from "mongoose";

export  const connectDb =  async (uri) => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));
};
