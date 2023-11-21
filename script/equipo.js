armaduraBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalArmadura.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2) {

    yelmo.tipo = "NATURAL"
    yelmo.val1 = Math.round(caracteristicas.constitucion / 4);
    yelmo.val2 = Math.round(caracteristicas.fuerza / 2);
    yelmo.val3 = Math.round(caracteristicas.fuerza * 2);


    hombreras.tipo = "NATURAL"
    hombreras.val1 = Math.round(caracteristicas.constitucion / 4);;
    hombreras.val2 = Math.round(caracteristicas.fuerza / 2);
    hombreras.val3 = Math.round(caracteristicas.fuerza * 2);


    pechera.tipo = "NATURAL"
    pechera.val1 = Math.round(caracteristicas.constitucion / 4);;
    pechera.val2 = Math.round(caracteristicas.fuerza / 2);
    pechera.val3 = Math.round(caracteristicas.fuerza * 2);


    guantes.tipo = "NATURAL"
    guantes.val1 = Math.round(caracteristicas.constitucion / 4);;
    guantes.val2 = Math.round(caracteristicas.fuerza / 2);
    guantes.val3 = Math.round(caracteristicas.fuerza * 2);


    pantalones.tipo = "NATURAL"
    pantalones.val1 = Math.round(caracteristicas.constitucion / 4);;
    pantalones.val2 = Math.round(caracteristicas.fuerza / 2);
    pantalones.val3 = Math.round(caracteristicas.fuerza * 2);


    botas.tipo = "NATURAL"
    botas.val1 = Math.round(caracteristicas.constitucion / 4);;
    botas.val2 = Math.round(caracteristicas.fuerza / 2);
    botas.val3 = Math.round(caracteristicas.fuerza * 2);

    
  
    guardar()
    imprimir()

    }
})


cerrarModalArmaduraBtn.addEventListener('click', function () { modalArmadura.style.display = "none" })


ligeraBtn.addEventListener('click', function () {

    yelmo.tipo = "LIGERA"
    yelmo.val1 = 1;
    yelmo.val2 = 3;
    yelmo.val3 = 12;


    hombreras.tipo = "LIGERA"
    hombreras.val1 = 1;
    hombreras.val2 = 3;
    hombreras.val3 = 12;


    pechera.tipo = "LIGERA"
    pechera.val1 = 1;
    pechera.val2 = 3;
    pechera.val3 = 12;


    guantes.tipo = "LIGERA"
    guantes.val1 = 1;
    guantes.val2 = 3;
    guantes.val3 = 12;


    pantalones.tipo = "LIGERA"
    pantalones.val1 = 1;
    pantalones.val2 = 3;
    pantalones.val3 = 12;


    botas.tipo = "LIGERA"
    botas.val1 = 1;
    botas.val2 = 3;
    botas.val3 = 12;

  
    modalArmadura.style.display = "none";
    guardar()

})

mediaBtn.addEventListener('click', function () {

    yelmo.tipo = "MEDIA"
    yelmo.val1 = 1;
    yelmo.val2 = 6;
    yelmo.val3 = 18;


    hombreras.tipo = "MEDIA"
    hombreras.val1 = 1;
    hombreras.val2 = 6;
    hombreras.val3 = 18;


    pechera.tipo = "MEDIA"
    pechera.val1 = 1;
    pechera.val2 = 6;
    pechera.val3 = 18;


    guantes.tipo = "MEDIA"
    guantes.val1 = 1;
    guantes.val2 = 6;
    guantes.val3 = 18;


    pantalones.tipo = "MEDIA"
    pantalones.val1 = 1;
    pantalones.val2 = 6;
    pantalones.val3 = 18;


    botas.tipo = "MEDIA"
    botas.val1 = 1;
    botas.val2 = 6;
    botas.val3 = 18;

  
    modalArmadura.style.display = "none";
    guardar()

})

pesadaBtn.addEventListener('click', function () {

    yelmo.tipo = "PESADA"
    yelmo.val1 = 3;
    yelmo.val2 = 9;
    yelmo.val3 = 24;


    hombreras.tipo = "PESADA"
    hombreras.val1 = 1;
    hombreras.val2 = 9;
    hombreras.val3 = 24;


    pechera.tipo = "PESADA"
    pechera.val1 = 3;
    pechera.val2 = 9;
    pechera.val3 = 24;


    guantes.tipo = "PESADA"
    guantes.val1 = 3;
    guantes.val2 = 9;
    guantes.val3 = 24;


    pantalones.tipo = "PESADA"
    pantalones.val1 = 3;
    pantalones.val2 = 9;
    pantalones.val3 = 24;


    botas.tipo = "PESADA"
    botas.val1 = 3;
    botas.val2 = 9;
    botas.val3 = 24;

    penalizadores.val6 = 0
  
    modalArmadura.style.display = "none";
    guardar()

})


var objetoMagicoSeleccionado = "ninguno"

brazalBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalReinos.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2) {

    brazal.texto = "NATURAL"
    brazal.val1 = 0;
    brazal.val2 = 0;
    brazal.val3 = 0;

    penalizadores.val4 = 0
    penalizadores.val6 = 0

  
    guardar()
    imprimir()
    }

    objetoMagicoSeleccionado = "brazal"
})


collarBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalReinos.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2) {

    collar.texto = "NATURAL"
    collar.val1 = 0;
    collar.val2 = 0;
    collar.val3 = 0;

    penalizadores.val4 = 0
    penalizadores.val6 = 0
  
    guardar()
    imprimir()

    }

    objetoMagicoSeleccionado = "collar"

    
})



anilloBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalReinos.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2) {

    anillo.texto = "NATURAL"
    anillo.val1 = 0;
    anillo.val2 = 0;
    anillo.val3 = 0;

    penalizadores.val4 = 0
    penalizadores.val6 = 0

  
    guardar()
    imprimir()

    }

    objetoMagicoSeleccionado = "anillo"
})





















cerrarModalReinosBtn.addEventListener('click', function () { modalReinos.style.display = "none" })

objetoFuego.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "FUEGO"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "FUEGO"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "FUEGO"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }

})

objetoAgua.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "AGUA"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "AGUA"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "AGUA"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })

 objetoAire.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

    brazal.texto = "AIRE"
    brazal.val1 = 1
    brazal.val2 = 3
    brazal.val3 = 9
 
   
     modalReinos.style.display = "none";
     guardar()

    }else if(objetoMagicoSeleccionado == "anillo"){

    anillo.texto = "AIRE"
    anillo.val1 = 1
    anillo.val2 = 3
    anillo.val3 = 9
 
   
     modalReinos.style.display = "none";
     guardar()

    }else if(objetoMagicoSeleccionado == "collar"){

    collar.texto = "AIRE"
    collar.val1 = 1
    collar.val2 = 3
    collar.val3 = 9
 
   
     modalReinos.style.display = "none";
     guardar()

    }
 
 })

 objetoTierra.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "TIERRA"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "TIERRA"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "TIERRA"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })


 objetoRayo.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "RAYO"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "RAYO"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "RAYO"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })

 objetoVida.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "VIDA"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "VIDA"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "VIDA"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })

 objetoEter.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "ETER"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "ETER"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "ETER"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })

 objetoPsique.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "PSIQUE"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "PSIQUE"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "PSIQUE"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })

 objetoLuz.addEventListener('click', function () {

    if (objetoMagicoSeleccionado == "brazal"){

        brazal.texto = "LUZ"
        brazal.val1 = 1
        brazal.val2 = 3
        brazal.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "anillo"){
    
        anillo.texto = "LUZ"
        anillo.val1 = 1
        anillo.val2 = 3
        anillo.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }else if(objetoMagicoSeleccionado == "collar"){
    
        collar.texto = "LUZ"
        collar.val1 = 1
        collar.val2 = 3
        collar.val3 = 9
     
       
         modalReinos.style.display = "none";
         guardar()
    
        }
 
 })












 {//MODIFICAR EQUIPO

    
    brazalVal1Btn.addEventListener('click', function () { modificarEquipoMagico(brazalVal1Btn, brazal.val1) })
    brazalVal2Btn.addEventListener('click', function () { modificarEquipoMagico(brazalVal2Btn, brazal.val2) })
    brazalVal3Btn.addEventListener('click', function () { modificarEquipoMagico(brazalVal3Btn, brazal.val3) })

    anilloVal1Btn.addEventListener('click', function () { modificarEquipoMagico(anilloVal1Btn, anillo.val1) })
    anilloVal2Btn.addEventListener('click', function () { modificarEquipoMagico(anilloVal2Btn, anillo.val2) })
    anilloVal3Btn.addEventListener('click', function () { modificarEquipoMagico(anilloVal3Btn, anillo.val3) })

    collarVal1Btn.addEventListener('click', function () { modificarEquipoMagico(collarVal1Btn, collar.val1) })
    collarVal2Btn.addEventListener('click', function () { modificarEquipoMagico(collarVal2Btn, collar.val2) })
    collarVal3Btn.addEventListener('click', function () { modificarEquipoMagico(collarVal3Btn, collar.val3) })




    function modificarEquipoMagico(boton, valor) {

        if (edicion == 1) {

            valor = valor + 1

            

        } else if (edicion == 2 && valor > 0) {

            valor = valor - 1



        }

        switch (boton) {

            case brazalVal1Btn: brazal.val1 = valor; break
            case brazalVal2Btn: brazal.val2 = valor; break
            case brazalVal3Btn: brazal.val3 = valor; break

            case anilloVal1Btn: anillo.val1 = valor; break
            case anilloVal2Btn: anillo.val2 = valor; break
            case anilloVal3Btn: anillo.val3 = valor; break

            case collarVal1Btn: collar.val1 = valor; break
            case collarVal2Btn: collar.val2 = valor; break
            case collarVal3Btn: collar.val3 = valor; break

    

        }

        

        guardar()
        imprimir()
    }




}// FIN MODIFICAR EQUIPO