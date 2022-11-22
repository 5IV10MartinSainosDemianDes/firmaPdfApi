const nombre = $("#nombre")
const mensaje = $("#mensaje")
const enviar = $("#enviar")

const getPdf = async function(){
    const nombreTxt = nombre.value
    const mensajeTxt = mensaje.value

    let url = "https://demma-firmar-pdfs.cyclic.app/pdf"
    url += "/?nombre=" + encodeURI(nombreTxt)
    url += "&?mensaje=" + encodeURI(mensajeTxt)
    console.log(url)
    const resp = await $.ajax(url, {method : 'GET'})
    .then(function(response) {
        return response})
}

enviar.click( async function(){
    console.log("enciar")
    await getPdf()
})