// curl "https://jsonapi.org/" -H "accept: text/html"   CMD

url = "https://jsonapi.org/"

// fetch(url, { method: "GET", headers: { accept: "text/html" }, body: null })

// Consola
var respuesta = await fetch(url, { "method": "GET", "headers": { "accept": "text/html" } })
var texto = await respuesta.text()
console.log(texto)
