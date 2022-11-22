const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const createPdf = function(body){
    let doc = new jspdf.jsPDF();
    let nombreTxt = "nombre : " + body.name
    let mensajeTxt = "mensaje : " + body.mensaje
    let tokenTxt = "id : " + body.token
    doc.text(15, 15, nombreTxt, { maxWidth: 150 });
    doc.addPage();
    doc.text(15, 15, mensajeTxt, { maxWidth: 150 });
    doc.addPage();
    doc.text(15, 15, tokenTxt, { maxWidth: 150 });
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
    console.log(resp)
    createPdf({name:nombreTxt, mensaje:mensajeTxt, token:resp.data})
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})