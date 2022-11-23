import express from "express";
import { jsPDF } from "jspdf";
import bodyParser from "body-parser";
import cors from 'cors';
import path from "path";
import CryptoJS from "crypto-js";

var app = express();
 //get PORT from the server
 //obtener el PUERTO del server donde hosteamos
const PORT = process.env.PORT;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//global
//que si no da error
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
//end of global

const signPdf = async function(body){
    console.log("start of body")
    console.log(body)
    console.log("end of body")
    const data = "name : "+body.name+"msg : "+body.msg
    const resp = CryptoJS.SHA256(data)
    return resp
}

//pdf
app.post("/pdf", async (req, res, next) => {
    const resp = await signPdf(req.body)
    res.end(resp)
});    

//dens js
app.get("/js", async (req, res, next) => {
    res.sendFile(path.resolve("html/js/js.js"))
});
//dens css
app.get("/css", async (req, res, next) => {
    res.sendFile(path.resolve("html/css/style.css"))
});
    
//send index
app.get("/", async (req, res, next) => {
    res.sendFile(path.resolve("html/index.html"))
});
    
  //run this sheet
  //que se ejecute la cosa esta
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });  