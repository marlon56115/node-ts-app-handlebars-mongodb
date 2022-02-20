import mongoose, { Schema, model } from "mongoose";

//heredamos de la clase modelo este lo exporta entre llaves {}
export interface Book extends mongoose.Document {
  title: String;
  author: String;
  isbn: String;
}

const BookSchema: Schema = new Schema({
  title: String,
  author: String,
  isbn: String,
});

//usamos la interfaz para tener un modelo de tipo <Book> este lo exporta sin llaves 
export default model<Book>("Book", BookSchema);
