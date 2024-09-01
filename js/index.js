document.addEventListener('DOMContentLoaded', () => {
    const inputDato = document.getElementById('inputText');
    const botonGuardar = document.getElementById('buttonText');

    botonGuardar.addEventListener('click', () => {
        const dato = inputDato.value;
        localStorage.setItem('dato', dato);
    })
});