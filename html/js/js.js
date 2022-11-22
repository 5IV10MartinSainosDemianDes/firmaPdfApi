const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const createPdf = function(body){
    let doc = new jspdf.jsPDF();
    let nombreTxt = "nombre : " + body.name
    nombreTxt += "<br> mensaje : " + body.mensaje
    nombreTxt += "<br> id : " + body.token
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
        msg:mensajeTxt
    }
    const resp = await axios.post(url,
        data,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );

    createPdf({name:nombreTxt, mensaje:mensajeTxt, token:resp})
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})