import express from "express"

// Intancia de express
const app = express();
// Puerto
app.set("port", process.env.PORT || 4001)

app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

console.log("Lista tareas")