const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const createPdf = function(body){
    let doc = new jsPDF();
    let nombreTxt = "nombre : " + body.name
    nombre += "<br> mensaje : " + body.mensaje
    nombre += "<br> id : " + body.token
    doc.text(10,10,nombreTxt);
    doc.save("req.pdf")
}

const getPdf = async function(){
    const nombreTxt = nombre.val()
    const mensajeTxt = mensaje.val()

    let url = "https://demma-firmar-pdfs.cyclic.app/pdf"
    console.log(url)
    const data = {
        name:nombreTxt,
        msg:mensaje
    }
    const resp = await $.post(url, data);

    createPdf({name:nombreTxt, mensaje:mensajeTxt, token:resp})
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})