const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const getPdf = async function(){
    const nombreTxt = nombre.val()
    const mensajeTxt = mensaje.val()

    let url = "https://demma-firmar-pdfs.cyclic.app/pdf"
    url += "/?nombre=" + encodeURI(nombreTxt)
    url += "&?mensaje=" + encodeURI(mensajeTxt)
    console.log(url)
    const resp = await $.ajax(url, {method : 'GET'})
    console.log("respuesta")
    console.log(resp)
    console.log(resp.data)
    let doc = new resp.data.constructor;
    resp.data.save("res.pdf")
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})