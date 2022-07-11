'use strict'
//que al darle al enter me pinte en la pantalla lo que escribo:
let nodoEntrada = document.querySelector ( '#entrada');

nodoEntrada.addEventListener( 'keyup', function(info_evento){
    console.log('Pulso la tecla')
    console.log(info_evento)
    if( info_evento.key === 'Enter' ){ 
        // Desencadena el pintado en la web
        console.log( nodoEntrada.value );
        
        //pinto creando elementos porque quiero luego dar un efecto de subrayado con color por encima de cada nombre cuando haga clic en sortear
        let nodoNombres = document.createElement('div');
        nodoNombres.classList.add('sorteo__nombres');
        
        let nodoNombre = document.createElement('div');
        nodoNombre.classList.add('sorteo__nombre');
        
        nodoNombre.innerHTML += `<div> ${nodoEntrada.value} </div>`

        nodoNombres.appendChild( nodoNombre );
        
        let nodoWrapper = document.querySelector( '.sorteo__wrapper');
        nodoWrapper.appendChild( nodoNombres );


        nodoEntrada.value = "";
    }


});

//que al darle al sortear subraye en color uno de los nombres
// let nodoBoton = document.querySelector('.sorteo__btn');

// nodoBoton.addEventListener( 'click', function(){
// console.log ('Clic en botón')

//     let listaNombres = document.querySelectorAll( '.sorteo__nombre' );

//     console.log( listaNombres ) 

//     for( let i = 0 ; i < listaNombres.length ; i++){
//     listaNombres[i].classList.remove('activo')
//     };//para que cuando le de dos veces a sortear no me aparezcan el nombre ganador anterior y el de ahora subrayados, solo me aparezca el de ahora, estoy limpiando 

//     let aleatorio_nombre = Math.trunc(Math.random () * listaNombres.length);//esto me da un numero aleatorio entre 0 y la longitud de la lista
//     console.log( aleatorio_nombre );

//     listaNombres[aleatorio_nombre].classList.add('activo')

// })

//AVANZADO 
let nodoBoton = document.querySelector('.sorteo__btn');

nodoBoton.addEventListener( 'click', function(){
    console.log ('Clic en botón')
    let n= 0;
    let ref_interval;
   
      
    ref_interval = setInterval( function(){
        if(n < 20){
            n =  n + 1
            numeroAleatorio()
        }else{

             clearInterval (ref_interval)
        }
    },100 );
   
})

function numeroAleatorio(){
    let listaNombres = document.querySelectorAll( '.sorteo__nombre' );

    console.log( listaNombres ) 

    for( let i = 0 ; i < listaNombres.length ; i++){
    listaNombres[i].classList.remove('activo')
    };

    //AVANZADO:
    //----------
    // let n = 0;
    // let ref_interval = setInterval( function(){
        
    //     if(n>=listaNombres.length){
    //         n = 0;
    //     }
    //     console.log( 'Interval ejecutandose');
    //     console.log( '--------------');
    //     for( let i = 0 ; i < listaNombres.length ; i++){
    //         listaNombres[i].classList.remove('activo')
    //         };
    //     listaNombres[n].classList.add('activo')
    //     console.log(n)
    //     n++;
    // }, 1000 );

    // clearInterval ( ref_interval );
    //----------

    let aleatorio_nombre = Math.trunc(Math.random () * listaNombres.length);//esto me da un numero aleatorio entre 0 y la longitud de la lista
    console.log( aleatorio_nombre );

    listaNombres[aleatorio_nombre].classList.add('activo')

};

