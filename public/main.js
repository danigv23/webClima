const formulario = document.getElementById("formulario");

function showLocationsHTML(dataLocations) {
    const main = document.querySelector("main");
    const tabla = document.createElement("table");

    const atributos = document.createElement("thead");
    const fila1 = document.createElement("tr");
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

    fila1.append(elemento1, elemento2, elemento3, elemento4, elemento5, elemento6);
    atributos.appendChild(fila1);
    tabla.appendChild(atributos);

    for (const location of dataLocations) {
        console.log(location.country);
        const filaNueva = document.createElement("tr");

        const bandera = document.createElement("th");
        const pais = document.createElement("td");
        const nombre = document.createElement("td");
        const longitud = document.createElement("td");
        const latitude = document.createElement("td");
        const timezone = document.createElement("td");

        pais.innerText = location.country;
        nombre.textContent = location.name;
        longitud.textContent = location.longitude;
        latitude.textContent = location.latitude;
        timezone.textContent = location.timezone;

        filaNueva.append(bandera, pais, nombre, longitud, latitude, timezone);
        tabla.appendChild(filaNueva);
    };

    main.append(tabla);
};



formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const params = {
        ciudad: formulario.ciudad.value,
        pais: formulario.pais.value,
    };

    // console.log(params);

    const filteredParams = Object.fromEntries((Object.entries(params))
        .filter(([key, value]) => value !== ""));

    // console.log(filteredParams);

    const response = await fetch(`/location?${new URLSearchParams(filteredParams)}`);
    const data = await response.json();

    console.log(data.results)
    showLocationsHTML(data.results);
});


