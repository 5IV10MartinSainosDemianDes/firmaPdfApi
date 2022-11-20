const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const getPdf = async function(){
    const nombreTxt = nombre.value
    const mensajeTxt = mensaje.value

    let url = "https://demma-firmar-pdfs.cyclic.app/pdf"
    url += "/?nombre=" + encodeURI(nombreTxt)
    url += "&?mensaje=" + encodeURI(mensajeTxt)
    const resp = await fetch(url, {method : 'GET',})
    .then(function(response) {
        return response.json(); })
        .then(function(json) {return json})
    console.log("response")
    console.log(resp)
}

enviar.click(await getPdf())