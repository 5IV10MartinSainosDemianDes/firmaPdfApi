import express from "express";
import { jsPDF } from "jspdf";
import path from "path";

var app = express();
 //get PORT from the server
 //obtener el PUERTO del server donde hosteamos
const PORT = process.env.PORT;

//global
//que si no da error
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//end of global

const createPdf = async function(nombre){
    let doc = new jsPDF();
    const nombreTxt = "nombre : " + nombre
    doc.text(10,10,nombreTxt);
    console.log(doc)
    return Buffer.from(doc)
}

//pdf
app.get("/pdf", async (req, res, next) => {
    let resp = ""
    if(req.query.nombre!=undefined){
        resp = createPdf(req.query.nombre)
        res.json({
            data : resp,
            msg : "give pdf"
        })
    }else{
        resp = {
            data : "error",
            msg : "pls nombre"
        }
        res.json(resp)
    }
});    

//test
app.get("/", async (req, res, next) => {
    res.sendFile(path.resolve("html/index.html"))
});
    
  //run this sheet
  //que se ejecute la cosa esta
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });  