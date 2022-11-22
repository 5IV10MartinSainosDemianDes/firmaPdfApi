const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const getPdf = async function(){
    const nombreTxt = $("#nombre").text()
    const mensajeTxt = $("#mensaje").text()

    let url = "https://demma-firmar-pdfs.cyclic.app/pdf"
    url += "/?nombre=" + encodeURI(nombreTxt)
    url += "&?mensaje=" + encodeURI(mensajeTxt)
    console.log(url)
    const resp = await $.ajax(url, {method : 'GET'})
    console.log("respuesta")
    console.log(resp)
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})