const formulario = document.getElementById("formulario");

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

    console.log(data);
});