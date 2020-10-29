const cotizador = new API('ae304228eb8435487ec4817c7bd7ad02585e2b412c2ea60c66d65f1e205a9766');
const ui = new Interfaz();


// Leer formulario

const formulario = document.querySelector('#formulario');

//EvenListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //leer moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada =monedaSelect.options[monedaSelect.selectedIndex].value;
    
    //leer criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada =criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //comprobar que ambos campos estan seleccionados
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        //arrojar alerta de error
        ui.mostrarMensaje('Ambos campos son Obligatorios','alert bg-danger text-center');
    }else{
        // todo bien, consultar la api
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
        .then(data => {
            ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
        })
    }
})