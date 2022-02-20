import { Request, Response, Router } from "express";
import BookModel, { Book } from "../models/Book";
import mongoose from 'mongoose';

class BooksController {
  public async index(request: Request, response: Response): Promise<void> {
    const books: Book[] = await BookModel.find().lean();
    response.render("books/index", {
      title: "Books",
      books: books,
    });
  }
  public renderFormBook(request: Request, response: Response): void {
    response.render("books/add", {
      title: "Add a book",
    });
  }

  public async saveBook(request: Request, response: Response): Promise<void> {
    const { title, author, isbn } = request.body;
    const book: Book = new BookModel({ title, author, isbn });
    try {
      await book.save();
      response.redirect("/books");
    } catch (error) {
      console.error(error);
    }
  }

  public async deleteBook(request: Request, response: Response): Promise<void> {
     try {
        BookModel.deleteOne({ _id: request.params.id });
        response.redirect("/books");
     } catch (error) {
        console.log(error);
    }
  }
}

export const booksController = new BooksController();
