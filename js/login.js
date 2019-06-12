function muestra_oculta(id,id2){
    if (document.getElementById){ //se obtiene el id
        var el = document.getElementById(id);
        var el2 = document.getElementById(id2); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        el2.style.display = (el.style.display == 'block') ? 'none' : 'block';

    //damos un atributo display:none que oculta el div
    }
}

window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('','');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */

}