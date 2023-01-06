require("dotenv").config(); //llama dependencia dotenv
const port = process.env.port || 3000; //llama a la variable de entorno del PORT
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path"); //llama funcion path
const morgan = require("morgan");
const session = require("express-session");
const sessionConfig = require("./config/sessionConfig");
const cookie = require("cookie-parser");
const database = require("./config/database");
const cors = require("cors");

app.use(cors());
//usar body parser para tener la funcion body
app.use(bodyParser.urlencoded({ extended: true }));
//usa morgan para logear las peticion http
app.use(morgan("dev"));
//maneja las cookies
app.use(cookie());
//importa archvio de configuracion de express-session
app.use(session(sessionConfig)); //da error
//usar json e interactuar
app.use(express.json());
// notor de plantillas ejs

app.set("view engine", "ejs");
//configura litio por defecto de las vista
app.set("views", path.join(__dirname, "/views"));
//archivo estatico
app.use(express.static(path.join(__dirname, "../public/")));

//usando rutas;
app.use(require("./routes/homeRoute"));
app.use(require("./routes/detailProductRoute"));
app.use(require("./routes/cartRoute"));
app.use(require("./routes/logInRoute"));
app.use(require("./routes/signInRoute"));
app.use("/cart", require("./routes/productsAPIRoute"));
//ruta de dashboard angular
app.use("/api", require("./routes/mainRoutes"));
//ruta de logout de las cookies
app.use(require("./routes/logOutRoute"));
//rota error
app.use("/error", require("./routes/404"));

app.use(function (err, req, res, next) {
  // Manejar el error aquí
  if (err == "Error login") {
    res.status(500).json({ error: "Failed to get users" });
  }
});

//escuchar puerto del servidor
app.listen(port, () => {
  console.log(`------SERVER RUNNING OK AT PORT:${port}-------`); //concatena? el string con la variable port
});
