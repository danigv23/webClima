function showLocationsHTML(dataLocations) {
    const principal = document.querySelector("#principal");
    const formulario = document.getElementById("formulario");

    const divOpciones = document.createElement("div");
    // divOpciones.id = "divOpciones";
    const tabla = document.createElement("table");
    tabla.id = "opCiudades";

    const elementImgClose = document.createElement("img");
    elementImgClose.alt = "Ilustracion cerrar";
    elementImgClose.src = "../SVGs/cruz.svg";
    elementImgClose.className = "close";

    principal.append(elementImgClose, tabla)

    const atributos = document.createElement("thead");
    const elemento1 = document.createElement("td");
    const elemento2 = document.createElement("td");
    const elemento3 = document.createElement("td");
    const elemento4 = document.createElement("td");
    const elemento5 = document.createElement("td");
    const elemento6 = document.createElement("td");

    elemento1.textContent = "Bandera";
    elemento2.textContent = "Pais";
    elemento3.textContent = "Nombre";
    elemento4.textContent = "Longitud";
    elemento5.textContent = "Latitud";
    elemento6.textContent = "Zona horaria";

    atributos.append(elemento1, elemento2, elemento3, elemento4, elemento5, elemento6);
    tabla.appendChild(atributos);

    for (const location of dataLocations) {
        const filaNueva = document.createElement("tr");
        filaNueva.className = "op";

        const bandera = document.createElement("th");
        const pais = document.createElement("td");
        const nombre = document.createElement("td");
        const longitud = document.createElement("td");
        const latitude = document.createElement("td");
        const timezone = document.createElement("td");

        longitud.id = "lon";
        latitude.id = "lat";

        pais.innerText = location.country;
        nombre.textContent = location.name;
        longitud.textContent = location.longitude;
        latitude.textContent = location.latitude;
        timezone.textContent = location.timezone;

        filaNueva.append(bandera, pais, nombre, longitud, latitude, timezone);
        tabla.appendChild(filaNueva);
    };

    formulario.classList.add("oculto");
    principal.className = "opTabla"
    principal.append(tabla);
};

const formulario = document.getElementById("formulario");
const divPricipal = document.getElementById("principal")

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const params = {
        ciudad: formulario.ciudad.value,
        pais: formulario.pais.value,
    };

    const filteredParams = Object.fromEntries((Object.entries(params))
        .filter(([key, value]) => value !== ""));

    const response = await fetch(`/location?${new URLSearchParams(filteredParams)}`);
    const data = await response.json();

    showLocationsHTML(data.results);
});



divPricipal.addEventListener("click", (event) => {
    const opSelec = event.target.closest(".op");

    const lon = opSelec.querySelector("#lon").innerHTML;
    const lat = opSelec.querySelector("#lat").innerHTML;

    console.log(lon, lat);

});