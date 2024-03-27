import dns from "dns"
import ntpClient from 'ntp-client'

// curl "https://jsonapi.org/" -H "accept: text/html"   CMD

const url = "https://jsonapi.org/"

// fetch(url, { method: "GET", headers: { accept: "text/html" }, body: null })

// Consola
var respuesta = await fetch(url, { "method": "GET", "headers": { "accept": "text/html" } })
var texto = await respuesta.text()
console.log(texto)


dns.resolve4('www.jsonapi.org', (err, addresses) => {
    console.log(`Direcciones IP de 'www.jsonapi.org' es: \n\t${JSON.stringify(addresses)}`);
});



ntpClient.getNetworkTime("pool.ntp.org", 123, function (err, date) {
    console.log(`La hora actual del servidor NTP es: \n\t${date}`);
});
