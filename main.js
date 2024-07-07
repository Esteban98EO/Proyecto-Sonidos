/**
 * Define una función llamada playSonido que reproduce un sonido.
 * 
 * @param {string} idElementoAudio - El selector CSS del elemento de audio que queremos reproducir.
 */
function playSonido (idElementoAudio){
    // Selecciona el elemento de audio usando el selector proporcionado y reproduce el sonido
    document.querySelector(idElementoAudio).play();
}
// Obtiene una lista de todos los elementos con la clase 'tecla'
const listaDeTeclas = document.querySelectorAll ('.tecla');
// Repite sobre cada elemento en la lista de teclas
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    // Selecciona la tecla actual en la iteración
    const tecla = listaDeTeclas[contador];
    // Obtiene el segundo nombre de clase del elemento, que representa el instrumento
    const instrumento = tecla.classList[1];
    console.log(contador);
    
    // Construye el ID del elemento de audio correspondiente al instrumento
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    // Asigna una función al evento 'onclick' de la tecla para reproducir el sonido
    tecla.onclick = function(){
        playSonido(idAudio);
    };
     // Asigna una función al evento 'onkeydown' de la tecla para añadir la clase 'activa'
    tecla.onkeydown = function( evento){
        // Si la tecla presionada es 'Space' o 'Enter', añade la clase 'activa' a la tecla
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }      
        console.log(evento.code === 'Space' || evento.code === 'Enter');
    }
    // Asigna una función al evento 'onkeyup' de la tecla para remover la clase 'activa'
    tecla.onkeyup = function(){
        // Remueve la clase 'activa' de la tecla
        tecla.classList.remove('activa');
}
}







//document.querySelector('.tecla_pom').onclick = playSonidoPom;
/* function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick = playSonidoClap; */


