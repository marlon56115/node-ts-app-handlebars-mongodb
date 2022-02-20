import { Request, Response, Router } from "express";

class IndexController {

  public index(req: Request, res: Response) {
    res.render('index',{title:'Welcome to book app'})
  }
   
}

export const indexController = new IndexController();
