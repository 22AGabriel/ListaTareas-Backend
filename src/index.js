import express from "express"
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import "./database"
import tareaRouter from "./routes/tareas.routes"

// Intancia de express
const app = express();
// Puerto
app.set("port", process.env.PORT || 4001)

app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

// Midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));

// Rutas
app.use("/apilistatareas", tareaRouter)