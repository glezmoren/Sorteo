'use strict'

let nodoEntrada = document.querySelector ( '#entrada');

nodoEntrada.addEventListener( 'keyup', function(info_evento){
    console.log('Pulso la tecla')
    console.log(info_evento)
    if( info_evento.key === 'Enter' ){ 
        // Desencadena el pintado en la web
        console.log( nodoEntrada.value );
        
        let nodoNombre = document.querySelector('.sorteo__nombre')
        nodoNombre.innerHTML += `<div> ${nodoEntrada.value} </div>`

        nodoEntrada.value = "";
    }   
});