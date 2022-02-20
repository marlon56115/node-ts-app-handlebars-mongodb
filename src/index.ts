import express from "express";
import path from "path";
import { engine } from "express-handlebars";

//importing routes
import IndexRoutes from "./routes";
import BooksRoutes from "./routes/books";


//----Initializations----
const app = express();
import './database'

//----Settings----
app.set("port", process.env.PORT || 3000);
//para decirle que las vistas estan dentro de la carpeta src
app.set("views", path.join(__dirname, "views"));
app.engine(
   ".hbs",
   engine({
      extname: ".hbs",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      helpers: require("./lib/helpers"),
      defaultLayout:'main'
   })
);
app.set('view engine', '.hbs');

//----Middlewares----


//para poder recibir json
app.use(express.json());
//cuando un formulario de html envie informacion la pueda interpretar
app.use(express.urlencoded({ extended: false }));


//----Routes----
app.use("/", IndexRoutes);
app.use('/books', BooksRoutes);


//----Static files----
//definimos donde estara la capeta publica de la app donde estara el css y js
app.use(express.static(path.join(__dirname, 'public')));

//----Starting the server----
app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});
