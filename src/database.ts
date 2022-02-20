import mongoose from "mongoose";
import { mongodb } from "./keys";

mongoose
  .connect(mongodb.URI)
  .then((db) => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
