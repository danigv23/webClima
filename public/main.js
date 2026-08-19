const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const ciudad = formulario.ciudad.value;
    const pais = formulario.pais.value;

    const response = await fetch(`/location?ciudad=${ciudad}&pais=${pais}`);
    const data = await response.json();

    console.log(data);
});