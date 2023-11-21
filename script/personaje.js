window.onload = imprimir

var editar = 0
var nombre = "Humano"
var experiencia = 0
var experienciaTotal = 0

{//VARIABLES PERSONAJE
var raza = {
    icono: "img/humano.png",
    nombre: "Humano",
    fuerza: 1,
    destreza: 1,
    inteligencia: 1,
    constitucion: 1,
    reflejos: 1,
    sabiduria: 1,

    vista: 1,
    oido: 1,
    olfato: 1,
    gusto: 1,
    tacto: 1,
    visionNocturna: 1
}


var caracteristicas = {
    fuerza: 1,
    destreza: 1,
    inteligencia: 1,
    constitucion: 1,
    reflejos: 1,
    sabiduria: 1
}

{// VARIABLES INDICADORES
var indicadores = {
    vida: 0,
    energia: 0,
    mana: 0,
}

var vidaMaxima = 0
var energiaMaxima = 0
var manaMaxima = 0

var modificadorVida = 0
var modificadorEnergia = 0
var modificadorMana = 0
}//FIN VARIABLES INDICADORES

var sentidos = {
 vista: 4,
 oido: 4,
 olfato: 3,
 gusto: 4,
 tacto: 3,
 visionNocturna: "N",
}

var salvaciones = {
    fortaleza: 0,
    agilidad: 0,
    voluntad: 0
}

var combate = {
    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    sigilo: 0,
    equilibrio: 0,
    persuasion: 0,

}

var slot1 = {

    icono: "img/punno.png",
    nombre: "Puño",

    ico1: "img/ataque.png",
    ico2: "img/danno.png",
    ico3: "img/rupturahueso.png",

    val1: 0,
    val2: 0,
    val3: 0,

}

var slot2 = {

    icono: "img/patada.png",
    nombre: "Pierna",

    ico1: "img/ataque.png",
    ico2: "img/danno.png",
    ico3: "img/rupturahueso.png",

    val1: 0,
    val2: 0,
    val3: 0,

}
}//FIN VARIABLES PERSONAJE


{//VARIABLES PARA TIRADAS
var bonoTotalCaracteristicas = 0
var bonoTotalSentidos = 0
var bonoTotalSalvaciones = 0
var bonoTotalCombate = 0
var divisorCaracteristicas = 0
var divisorSentidos = 0
var divisorSalvaciones = 0
var divisorCombate = 0

var bonoFinal = 0
var texto = ""

var modificadorVida = 0
var modificadorEnergia = 0
var modificadorMana = 0

}//FIN VARIABLES PARA TIRADAS


{//BOTON SELECCIONAR
seleccionarBtn.addEventListener('click', function(){

    editar = 0
    editarIco.src = "img/editar.png"

    bonoTotal = 0
    bonoFinal = 0
    divisor = 0
    
    limpiarCaracteristicas()
    limpiarSentidos()
    limpiarCombate()
    limpiarSlots()
})
}//FIN BOTON SELECCIONAR


{//BOTON EDITAR
editarBtn.addEventListener('click', function(){

    bonoTotal = 0
    bonoFinal = 0
    divisor = 0 
    

    if(editar == 1){
        editar = 2
        editarIco.src = "img/menos.png"
        
        
    }else if(editar == 2){
        editar = 1
        editarIco.src = "img/mas.png" 
        
        
    }else{
        editar = 1
        editarIco.src = "img/mas.png" 
         
        
    }

    limpiarCaracteristicas()
    limpiarSentidos()
    
})
}//FIN BOTON EDITAR


{//SELECCION DE RAZA
razaIco.addEventListener('click', function(){ 
 
    if(editar == 1){

        modalRaza.style.display = "grid";
        editar = 0;
        editarIco.src = "img/editar.png"
        
    }
    
    imprimir()
})
}//FIN SELECCION DE RAZA


{//NOMBRE
nombreTxt.addEventListener('click', function(){

    

    if(editar == 1){

        nombre = prompt("Elige un Nombre", "")
        if (nombre == null || nombre == "") {
        nombre = "Sin Nombre"
        }else{ 
        nombre = nombre
        }
        
    }

    nombreTxt.textContent = nombre

    
})
}//FIN NOMBRE


{//EXP
expBtn.addEventListener('click', function(){

    if(editar == 1){
        var experienciaGanada = prompt("EXPERIENCIA GANADA", "")
        if (experienciaGanada == null || experienciaGanada == "" || isNaN(experienciaGanada)) {
        experiencia = experiencia
        }else{ 
        experiencia = experiencia + parseInt(experienciaGanada)
        expTxt.textContent = experiencia
        }
    }else if(editar == 2){
        var experienciaGanada = prompt("EXPERIENCIA PERDIDA", "")
        if (experienciaGanada == null || experienciaGanada == "" || isNaN(experienciaGanada)) {
        experiencia = experiencia
        }else{ 
        experiencia = experiencia - parseInt(experienciaGanada)
        expTxt.textContent = experiencia
        }
    }
})
}//FIN EXP


{//SELECCIONAR CARACTERISTICAS

    fuerzaBtn.addEventListener('click', function(){ SeleccionCaracteristicas(fuerzaBtn, caracteristicas.fuerza, raza.fuerza, "fuerza",)})
    destrezaBtn.addEventListener('click', function(){ SeleccionCaracteristicas(destrezaBtn, caracteristicas.destreza, raza.destreza, "destreza",)})
    inteligenciaBtn.addEventListener('click', function(){ SeleccionCaracteristicas(inteligenciaBtn, caracteristicas.inteligencia, raza.inteligencia, "inteligencia",)})
    constitucionBtn.addEventListener('click', function(){ SeleccionCaracteristicas(constitucionBtn, caracteristicas.constitucion, raza.constitucion, "constitucion")})
    reflejosBtn.addEventListener('click', function(){ SeleccionCaracteristicas(reflejosBtn, caracteristicas.reflejos, raza.reflejos, "reflejos")})
    sabiduriaBtn.addEventListener('click', function(){ SeleccionCaracteristicas(sabiduriaBtn, caracteristicas.sabiduria, raza.sabiduria, "sabiduria")})
    
    
    function SeleccionCaracteristicas(boton, bono, racial, textoSeleccion){
    
        limpiarSentidos()
        limpiarCombate()
        limpiarSalvaciones()
        limpiarSlots()
    
    
        if(editar == 1 && experiencia >= (bono*5)){
            
            experiencia = experiencia - (bono*5)
            bono = bono + 1
            expTxt.textContent = experiencia

            switch(boton){
    
                case fuerzaBtn: caracteristicas.fuerza = bono; break
                case destrezaBtn: caracteristicas.destreza = bono; break
                case inteligenciaBtn: caracteristicas.inteligencia = bono; break
                case constitucionBtn: caracteristicas.constitucion = bono; break
                case reflejosBtn: caracteristicas.reflejos = bono; break
                case sabiduriaBtn: caracteristicas.sabiduria = bono; break
            
            }
           
    
        }else  if(editar == 1 && experiencia < (bono*5) ){
    
            alert("EXP INSUFICIENETE")
    
        }else if(editar == 2 && bono > racial){
            
            bono = bono - 1
            experiencia = experiencia + (bono*5)
            expTxt.textContent = experiencia

            switch(boton){
    
                case fuerzaBtn: caracteristicas.fuerza = bono; break
                case destrezaBtn: caracteristicas.destreza = bono; break
                case inteligenciaBtn: caracteristicas.inteligencia = bono; break
                case constitucionBtn: caracteristicas.constitucion = bono; break
                case reflejosBtn: caracteristicas.reflejos = bono; break
                case sabiduriaBtn: caracteristicas.sabiduria = bono; break
            
            }
               
    
        }else if(editar == 0 && boton.style.backgroundColor == "" ){
        
                    
            divisorCaracteristicas =  divisorCaracteristicas + 1
            bonoTotalCaracteristicas = bonoTotalCaracteristicas + bono
            texto = textoSeleccion
            bonoFinal = Math.floor(bonoTotalCaracteristicas/divisorCaracteristicas)
    
            boton.style.backgroundColor = "#FFF9ED" ;
            
    
    
        }else if(editar == 0){
    
            
            divisorCaracteristicas = divisorCaracteristicas - 1
            bonoTotalCaracteristicas = bonoTotalCaracteristicas - bono
            bonoFinal = Math.floor(bonoTotalCaracteristicas/divisorCaracteristicas)
            texto = ""

    
            boton.style.backgroundColor = ""
            
            
                    
        }

   
    imprimir()
    consola.textContent = " bonificacion de: " + divisorCaracteristicas + " " + bonoFinal + " " + bonoTotalCaracteristicas
    
    
    }
    
}//FIN SELECCIONAR CARACTERISTICAS


{//SELECCIONAR SENTIDOS



    vistaBtn.addEventListener('click', function(){ SeleccionSentidos(vistaBtn, sentidos.vista, raza.vista, "vista")})
    oidoBtn.addEventListener('click', function(){ SeleccionSentidos(oidoBtn, sentidos.oido, raza.oido, "oido")})
    olfatoBtn.addEventListener('click', function(){ SeleccionSentidos(olfatoBtn, sentidos.olfato, raza.olfato, "olfato")})
    gustoBtn.addEventListener('click', function(){ SeleccionSentidos(gustoBtn, sentidos.gusto, raza.gusto, "gusto")})
    tactoBtn.addEventListener('click', function(){ SeleccionSentidos(tactoBtn, sentidos.tacto, raza.tacto, "tacto")})
    visionNocturnaBtn.addEventListener('click', function(){ SeleccionSentidos(visionNocturnaBtn, sentidos.visionNocturna, raza.visionNocturna, "visionNocturna")})

    
    
function SeleccionSentidos(boton, bono, racial, textoSeleccion){
    
        limpiarCombate()
        limpiarSalvaciones()
        limpiarCaracteristicas()
        limpiarSlots()
        
        
    
        if(editar == 1 && experiencia >= (bono*5)){
            
            experiencia = experiencia - (bono*5)
            bono = bono + 1
            expTxt.textContent = experiencia

            switch(boton){
    
                case vistaBtn: sentidos.vista = bono; break
                case oidoBtn: sentidos.oido = bono; break
                case olfatoBtn: sentidos.olfato = bono; break
                case gustoBtn: sentidos.gusto = bono; break
                case tactoBtn: sentidos.tacto = bono; break
                case visionNocturnaBtn: sentidos.visionNocturna = bono; break
            
            }
           
    
        }else  if(editar == 1 && experiencia < (bono*5) ){
    
            alert("EXP INSUFICIENETE")
    
        }else if(editar == 2 && bono > racial){
            
            bono = bono - 1
            experiencia = experiencia + (bono*5)
            expTxt.textContent = experiencia

            switch(boton){
    
                case vistaBtn: sentidos.vista = bono; break
                case oidoBtn: sentidos.oido = bono; break
                case olfatoBtn: sentidos.olfato = bono; break
                case gustoBtn: sentidos.gusto = bono; break
                case tactoBtn: sentidos.tacto = bono; break
                case visionNocturnaBtn: sentidos.visionNocturna = bono; break
            
            }
               
    
        }else if(editar == 0 && boton.style.backgroundColor == "" ){
        
                    
            divisorSentidos =  divisorSentidos + 1
            bonoTotalSentidos = bonoTotalSentidos + bono
            texto = textoSeleccion
            bonoFinal = Math.floor(bonoTotalSentidos/divisorSentidos)
    
            boton.style.backgroundColor = "#FFF9ED" ;
            
    
    
        }else if(editar == 0){
    
            
            divisorSentidos = divisorSentidos - 1
            bonoTotalSentidos = bonoTotalSentidos - bono
            bonoFinal = Math.floor(bonoTotalSentidos/divisorSentidos)
            
            texto = ""
            

            boton.style.backgroundColor = ""
            
            
                    
        }
    
    
    
    imprimir()
    consola.textContent = " bonificacion de: " + divisorSentidos + " " + bonoFinal + " " + bonoTotalSentidos

    
    
}
    
}//FIN SELECCIONAR SENTIDOS


{//SELECCIONAR SALVACIONES

fortalezaBtn.addEventListener('click', function(){ seleccionSalvaciones(fortalezaBtn, salvaciones.fortaleza, "fortaleza")})
agilidadBtn.addEventListener('click', function(){ seleccionSalvaciones(agilidadBtn, salvaciones.agilidad, "agilidad")})
voluntadBtn.addEventListener('click', function(){ seleccionSalvaciones(voluntadBtn, salvaciones.voluntad, "voluntad")})

function seleccionSalvaciones(boton, bono, textoSeleccion){

    limpiarCaracteristicas()
    limpiarSentidos()
    limpiarCombate()
    


    if(editar == 0 && boton.style.backgroundColor == "" ){
        
                    
    divisorSalvaciones =  divisorSalvaciones + 1
    bonoTotalSalvaciones = bonoTotalSalvaciones + bono
    texto = textoSeleccion
    bonoFinal = Math.floor(bonoTotalSalvaciones/divisorSalvaciones)

    boton.style.backgroundColor = "#FFF9ED" ;
      
    texto = textoSeleccion

    }else if(editar == 0){

    
    divisorSalvaciones = divisorSalvaciones - 1
    bonoTotalSalvaciones = bonoTotalSalvaciones - bono
    bonoFinal = Math.floor(bonoTotalSalvaciones/divisorSalvaciones)
    texto = ""

    boton.style.backgroundColor = ""
    
    
            
    }

    
    imprimir()   

}

}//FIN SELECCIONAR SALVACIONES


{//SELECCIONAR COMBATE

ataqueBtn.addEventListener('click', function(){ seleccionCombate(ataqueBtn, combate.ataque, "ataque")})
esquivaBtn.addEventListener('click', function(){ seleccionCombate(esquivaBtn, combate.esquiva, "esquiva")})
bloqueoBtn.addEventListener('click', function(){ seleccionCombate(bloqueoBtn, combate.bloqueo, "bloqueo")})
sigiloBtn.addEventListener('click', function(){ seleccionCombate(sigiloBtn, combate.sigilo, "sigilo")})
equilibrioBtn.addEventListener('click', function(){ seleccionCombate(equilibrioBtn, combate.equilibrio, "equilibrio")})
persuasionBtn.addEventListener('click', function(){ seleccionCombate(persuasionBtn, combate.persuasion, "persuasion")})


function seleccionCombate(boton, bono, textoSeleccion){

    limpiarCaracteristicas()
    limpiarSentidos()
    limpiarSalvaciones()
    limpiarSlots()


    if(editar == 0 && boton.style.backgroundColor == "" ){
        
                    
    divisorCombate =  divisorCombate + 1
    bonoTotalCombate = bonoTotalCombate + bono
    texto = textoSeleccion
    bonoFinal = Math.floor(bonoTotalCombate / divisorCombate)

    boton.style.backgroundColor = "#FFF9ED" ;
      
    texto = textoSeleccion

    }else if(editar == 0){

     
    divisorCombate = divisorCombate - 1
    bonoTotalCombate = bonoTotalCombate - bono
    bonoFinal = Math.floor(bonoTotalCombate / divisorCombate)
    texto = ""

    boton.style.backgroundColor = ""
    
    
            
    }

    imprimir()   

}

}//FIN SELECCIONAR COMBATE


dado.addEventListener('click', ()=>{

    if(isNaN(bonoFinal)){

    var resultadoDado = Math.ceil((Math.random() * 20) + 1)   

    }else{

    var resultadoDado = Math.ceil((Math.random() * 20) + (bonoFinal))

    }

    if(texto == ""){
    consola.innerHTML =  nombre + " lanza " + "<br>" + resultadoDado + "<br>" + " " + texto   
    }else{
    consola.innerHTML =  nombre + " lanza " + "<br>" + resultadoDado + "<br>" + "con " + texto
    }

})


{//INDICADORES

vidaBtn.addEventListener('click', function(){

    if(editar == 1 && indicadores.vida < vidaMaxima){

        var vidaGanada = prompt("SANAR +++", "")
        

        
        if (vidaGanada == null || vidaGanada == "" || isNaN(vidaGanada)) {

            indicadores.vida = indicadores.vida 
            vidaTxt.textContent = indicadores.vida

        }else{ 
               
            
            if((indicadores.vida + vidaGanada) >= vidaMaxima){
            indicadores.vida =  vidaMaxima
            modificadorVida = 0
            vidaTxt.textContent = indicadores.vida
            
            }else{

            modificadorVida = vidaGanada

            }
        }
    
    }else if(editar == 2){

        var vidaGanada = prompt("VIDA PERDIDA", "")
        if (vidaGanada == null || vidaGanada == "" || isNaN(vidaGanada)) {
        indicadores.vida = indicadores.vida
        vidaTxt.textContent = indicadores.vida
        }else{ 
        modificadorVida = parseInt(-vidaGanada) 
        vidaTxt.textContent = indicadores.vida
        
        }
    }
    
    imprimir()

})



energiaBtn.addEventListener('click', function(){

    if(editar == 1 && indicadores.energia < energiaMaxima){

        var energiaGanada = prompt("RECUPERAR +++", "")

        
        if (energiaGanada == null || energiaGanada == "" || isNaN(energiaGanada)) {

            indicadores.energia = indicadores.energia 
            energiaTxt.textContent = indicadores.energia

        }else{ 
               
            indicadores.energia =  parseInt(indicadores.energia) + parseInt(energiaGanada)
            
            if((indicadores.energia + energiaGanada) >= energiaMaxima){
            indicadores.energia =  energiaMaxima
            energiaTxt.textContent = indicadores.energia
            modificadorEnergia = parseInt(-energiaGanada)
            }else{}
        }
    
    }else if(editar == 2){

        var energiaGanada = prompt("GASTAR", "")
        if (energiaGanada == null || energiaGanada == "" || isNaN(energiaGanada)) {
        indicadores.energia = indicadores.energia
        energiaTxt.textContent = indicadores.energia
        }else{ 
        indicadores.energia = indicadores.energia  - energiaGanada
        energiaTxt.textContent = indicadores.energia
        modificadorEnergia = parseInt(-energiaGanada)
        }
    }


})


manaBtn.addEventListener('click', function(){

    if(editar == 1 && indicadores.mana < manaMaxima){

        var manaGanada = prompt("RECUPERAR +++", "")

        
        if (manaGanada == null || manaGanada == "" || isNaN(manaGanada)) {

            indicadores.mana = indicadores.mana 
            manaTxt.textContent = indicadores.mana

        }else{ 
               
            indicadores.mana =  parseInt(indicadores.mana) + parseInt(manaGanada)
            
            if((indicadores.mana + manaGanada) >= manaMaxima){
            indicadores.mana =  manaMaxima
            manaTxt.textContent = indicadores.mana
            }else{}
        }
    
    }else if(editar == 2){

        var manaGanada = prompt("GASTAR", "")
        if (manaGanada == null || manaGanada == "" || isNaN(manaGanada)) {
        indicadores.mana = indicadores.mana
        manaTxt.textContent = indicadores.mana
        }else{ 
        indicadores.mana = indicadores.mana  - manaGanada
        manaTxt.textContent = indicadores.mana
        }
    }
consola.textContent = manaMaxima + " " + indicadores.mana


})

}//INDICADORES


{//SELECCION DE ARMAS
    slot1Ico.addEventListener('click', function(){ 
 
        if(editar == 1){
    
        modalArmas.style.display = "grid";
        editar = 0;
        editarIco.src = "img/editar.png"
        slotSeleccionado = 1

        }
        
        imprimir()
        
    })

    slot2Ico.addEventListener('click', function(){ 
 
        if(editar == 1){
    
        modalArmas.style.display = "grid";
        editar = 0;
        editarIco.src = "img/editar.png";
        slotSeleccionado = 2
            
        }

        imprimir()
        
    })


}//FIN SELECCION DE ARMAS

{//MODIFICACION SLOTS

txt1Slot1Btn.addEventListener('click', function(){ modificarArma(txt1Slot1Btn, slot1.val1)})
ico1Slot1Btn.addEventListener('click', function(){ modificarArma(txt1Slot1Btn, slot1.val1)})

txt2Slot1Btn.addEventListener('click', function(){ modificarArma(txt2Slot1Btn, slot1.val2)})
ico2Slot1Btn.addEventListener('click', function(){ modificarArma(txt2Slot1Btn, slot1.val2)})

txt3Slot1Btn.addEventListener('click', function(){ modificarArma(txt3Slot1Btn, slot1.val3)})
ico3Slot1Btn.addEventListener('click', function(){ modificarArma(txt3Slot1Btn, slot1.val3)})

txt1Slot2Btn.addEventListener('click', function(){ modificarArma(txt1Slot2Btn, slot2.val1)})
ico1Slot2Btn.addEventListener('click', function(){ modificarArma(txt1Slot2Btn, slot2.val1)})

txt2Slot2Btn.addEventListener('click', function(){ modificarArma(txt2Slot2Btn, slot2.val2)})
ico2Slot2Btn.addEventListener('click', function(){ modificarArma(txt2Slot2Btn, slot2.val2)})

txt3Slot2Btn.addEventListener('click', function(){ modificarArma(txt3Slot2Btn, slot2.val3)})
ico3Slot2Btn.addEventListener('click', function(){ modificarArma(txt3Slot2Btn, slot2.val3)})

function modificarArma(boton, valor){

    if(editar == 1){

        valor = valor + 1
        

        switch(boton){
    
            case txt1Slot1Btn: slot1.val1 = valor; break
            case txt2Slot1Btn: slot1.val2 = valor; break
            case txt3Slot1Btn: slot1.val3 = valor; break
            case txt1Slot2Btn: slot2.val1 = valor; break
            case txt2Slot2Btn: slot2.val2 = valor; break
            case txt3Slot2Btn: slot2.val3 = valor; break
        
        }

    }else if (editar ==2){
        
        valor = valor - 1
        

        switch(boton){
    
            case txt1Slot1Btn: slot1.val1 = valor; break
            case txt2Slot1Btn: slot1.val2 = valor; break
            case txt3Slot1Btn: slot1.val3 = valor; break
            case txt1Slot2Btn: slot2.val1 = valor; break
            case txt2Slot2Btn: slot2.val2 = valor; break
            case txt3Slot2Btn: slot2.val3 = valor; break
        
        }



    }

    imprimir()
    limpiarSlots()
}


}//FIN MODIFICACION SLOT

{//SELECCIONAR SLOT
slot1Btn.addEventListener('click', function(){

    if(editar == 0 && slot1Btn.style.backgroundColor == ""){

    slot1Btn.style.backgroundColor = "#FFF9ED" ;

    }else if(editar == 0 && slot1Btn.style.backgroundColor !==""){

    slot1Btn.style.backgroundColor = ""

    }

})


slot2Btn.addEventListener('click', function(){

    if(editar == 0 && slot2Btn.style.backgroundColor == ""){

    slot2Btn.style.backgroundColor = "#FFF9ED" ;

    }else if(editar == 0 && slot2Btn.style.backgroundColor !==""){

    slot2Btn.style.backgroundColor = ""

    }

})
}//FIN SELECCION SLOT


{//MODAL RAZA


cerrarModalRazaBtn.addEventListener('click', function() { modalRaza.style.display = "none"})

humano.addEventListener('click', function(){

            raza.icono = "img/humano.png"
            nombre = "Humano"

            caracteristicas.fuerza = 3
            caracteristicas.destreza = 3
            caracteristicas.inteligencia = 3
            caracteristicas.constitucion = 3
            caracteristicas.reflejos = 3
            caracteristicas.sabiduria= 3

            sentidos.vista = 4
            sentidos.oido = 4
            sentidos.olfato = 3
            sentidos.gusto = 4
            sentidos.tacto = 3
            sentidos.visionNocturna = 0

            raza.fuerza = 3
            raza.destreza = 3
            raza.inteligencia = 3
            raza.constitucion = 3
            raza.reflejos = 3
            raza.sabiduria= 3

            raza.vista = 4
            raza.oido = 4
            raza.olfato = 3
            raza.gusto = 4
            raza.tacto = 3
            raza.visionNocturna = 0

            imprimir()


            modalRaza.style.display = "none"
           
})

elfo.addEventListener('click', function(){

    raza.icono = "img/elfo.png"
    nombre = "Elfo"



                caracteristicas.fuerza = 2
                caracteristicas.destreza = 4
                caracteristicas.inteligencia = 4
                caracteristicas.constitucion = 2
                caracteristicas.reflejos = 3
                caracteristicas.sabiduria= 3

                sentidos.vista = 6
                sentidos.oido = 4
                sentidos.olfato = 2
                sentidos.gusto = 2
                sentidos.tacto = 3
                sentidos.visionNocturna = 2


                raza.fuerza = 2
                raza.destreza = 4
                raza.inteligencia = 4
                raza.constitucion = 2
                raza.reflejos = 3
                raza.sabiduria= 3

                raza.vista = 6
                raza.oido = 4
                raza.olfato = 2
                raza.gusto = 2
                raza.tacto = 3
                raza.visionNocturna = 2

                imprimir()

                modalRaza.style.display = "none"

})

enano.addEventListener('click', function(){

    raza.icono = "img/enano.png"
    nombre = "Enano"


    caracteristicas.fuerza = 4
    caracteristicas.destreza = 2
    caracteristicas.inteligencia = 4
    caracteristicas.constitucion = 5
    caracteristicas.reflejos = 3
    caracteristicas.sabiduria= 4

    sentidos.vista = 2
    sentidos.oido = 4
    sentidos.olfato = 4
    sentidos.gusto = 2
    sentidos.tacto = 4
    sentidos.visionNocturna = 5


    raza.fuerza = 4
    raza.destreza = 2
    raza.inteligencia = 4
    raza.constitucion = 5
    raza.reflejos = 3
    raza.sabiduria= 4

    raza.vista = 2
    raza.oido = 4
    raza.olfato = 4
    raza.gusto = 2
    raza.tacto = 4
    raza.visionNocturna = 5

    imprimir()

    modalRaza.style.display = "none"

})

orco.addEventListener('click', function(){

    raza.icono = "img/orco.png"
    nombre = "Orco"

    caracteristicas.fuerza = 5
    caracteristicas.destreza = 2
    caracteristicas.inteligencia = 2
    caracteristicas.constitucion = 6
    caracteristicas.reflejos = 1
    caracteristicas.sabiduria= 2

    sentidos.vista = 2
    sentidos.oido = 4
    sentidos.olfato = 5
    sentidos.gusto = 1
    sentidos.tacto = 2
    sentidos.visionNocturna = 5


    raza.fuerza = 5
    raza.destreza = 2
    raza.inteligencia = 2
    raza.constitucion = 6
    raza.reflejos = 1
    raza.sabiduria= 2

    raza.vista = 2
    raza.oido = 4
    raza.olfato = 5
    raza.gusto = 1
    raza.tacto = 1
    raza.visionNocturna = 5

    imprimir()

    modalRaza.style.display = "none"

})

draco.addEventListener('click', function(){

    raza.icono = "img/draco.png"
    nombre = "Draco"

    caracteristicas.fuerza = 3
    caracteristicas.destreza = 2
    caracteristicas.inteligencia = 4
    caracteristicas.constitucion = 4
    caracteristicas.reflejos = 3
    caracteristicas.sabiduria= 2

    sentidos.vista = 4
    sentidos.oido = 2
    sentidos.olfato = 4
    sentidos.gusto = 4
    sentidos.tacto = 1
    sentidos.visionNocturna = 3


    raza.fuerza = 3
    raza.destreza = 2
    raza.inteligencia = 4
    raza.constitucion = 4
    raza.reflejos = 3
    raza.sabiduria= 2

    raza.vista = 4
    raza.oido = 2
    raza.olfato = 4
    raza.gusto = 4
    raza.tacto = 1
    raza.visionNocturna = 3

    imprimir()

    modalRaza.style.display = "none"

})

growit.addEventListener('click', function(){

    raza.icono = "img/growit.png"
    nombre = "Growit"

    caracteristicas.fuerza = 1
    caracteristicas.destreza = 3
    caracteristicas.inteligencia = 7
    caracteristicas.constitucion = 2
    caracteristicas.reflejos = 3
    caracteristicas.sabiduria= 3

    sentidos.vista = 6
    sentidos.oido = 6
    sentidos.olfato = 1
    sentidos.gusto = 1
    sentidos.tacto = 1
    sentidos.visionNocturna = 3


    raza.fuerza = 1
    raza.destreza = 3
    raza.inteligencia = 7
    raza.constitucion = 2
    raza.reflejos = 3
    raza.sabiduria= 3

    raza.vista = 6
    raza.oido = 6
    raza.olfato = 1
    raza.gusto = 1
    raza.tacto = 1
    raza.visionNocturna = 3

    imprimir()

    modalRaza.style.display = "none"

})

}//FIN MODAL RAZA


{//MODAL ARMAS

cerrarModalArmasBtn.addEventListener('click', function() {modalArmas.style.display = "none"})

var slotSeleccionado = 1

unaMano.addEventListener('click', function(){sleccionarArma("1 Mano", "img/daga.png", "img/ataque.png", "img/danno.png", "img/rupturadaga.png", "img/rupturadaga.png")})

dosManos.addEventListener('click', function(){sleccionarArma("2 Manos", "img/espada.png", "img/ataque.png", "img/danno.png", "img/ruptura.png", 
"2 Manos", "img/espada.png", "img/ataque.png", "img/danno.png", "img/ruptura.png",)})

arco.addEventListener('click', function(){sleccionarArma("Arco", "img/arco.png", "img/flechasarco.png", "img/fuerzamaxima.png", "img/rupturaarco.png", 
"Flechas", "img/carcaj.png", "img/ataqueflecha.png", "img/danno.png", "img/rupturaflecha.png")})

arrojadizas.addEventListener('click', function(){sleccionarArma("Arrojadizas", "img/arrojadiza.png", "img/ataquearrojadiza.png", "img/danno.png","img/ruptura.png")})

naturales.addEventListener('click', function(){sleccionarArma("Puño", "img/punno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png", 
"Pierna", "img/patada.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")})

escudo.addEventListener('click', function(){sleccionarArma("Escudo", "img/escudo.png", "img/bloqueo.png", "img/mitigacion.png", "img/rupturaescudo.png")})

varita.addEventListener('click', function(){sleccionarArma("Varita", "img/varita.png", "img/ataquevarita.png", "img/podervarita.png", "img/rupturavarita.png")})

orbe.addEventListener('click', function(){sleccionarArma("Hoja Runa", "img/hojaruna.png", "img/fortaleza.png", "img/podervarita.png", "img/rupturaorbe.png")})

pergamino.addEventListener('click', function(){sleccionarArma("Pergamino", "img/pergamino.png", "img/ataque.png", "img/danno.png","img/ruptura.png")})

runa.addEventListener('click', function(){sleccionarArma("Runa", "img/runa.png", "img/ataque.png", "img/danno.png","img/ruptura.png")})

totem.addEventListener('click', function(){sleccionarArma("Totem", "img/totem.png", "img/ataque.png", "img/danno.png","img/ruptura.png")})

magia.addEventListener('click', function(){sleccionarArma("Mano", "img/magia.png", "img/ataque.png", "img/danno.png","img/ruptura.png")})







function sleccionarArma(nombreArma1, iconoArma1, icono1Arma1,icono2Arma1, icono3Arma1, nombreArma2, iconoArma2, icono1Arma2, icono2Arma2, icono3Arma2){

    limpiarSlots()

    if(slotSeleccionado == 1){

        if(nombreArma1 == "2 Manos" || nombreArma1 == "Arco"){

        slot1.nombre = nombreArma1    
        slot1.icono = iconoArma1
        
    
        slot1.ico1 = icono1Arma1
        slot1.ico2 = icono2Arma1
        slot1.ico3 = icono3Arma1
        slot1.val1 = 3
        slot1.val2 = 3
        slot1.val3 = 3

        slot2.icono = iconoArma2
        slot2.nombre = nombreArma2
    
        slot2.ico1 = icono1Arma2
        slot2.ico2 = icono2Arma2
        slot2.ico3 = icono3Arma2
        slot2.val1 = 3
        slot2.val2 = 3
        slot2.val3 = 3

        }else if(nombreArma1 == "Puño"){

        slot1.nombre = nombreArma1
        slot1.icono = iconoArma1
        
    
        slot1.ico1 = icono1Arma1
        slot1.ico2 = icono2Arma1
        slot1.ico3 = icono3Arma1
        slot1.val1 = 3
        slot1.val2 = 3
        slot1.val3 = 3
        

        }else{

        slot1.nombre = nombreArma1
        slot1.icono = iconoArma1
        
    
        slot1.ico1 = icono1Arma1
        slot1.ico2 = icono2Arma1
        slot1.ico3 = icono3Arma1
        slot1.val1 = 3
        slot1.val2 = 3
        slot1.val3 = 3

        }

    }else if(slotSeleccionado == 2){


        if(nombreArma1 == "2 Manos" || nombreArma1 == "Arco"){

        slot1.nombre = nombreArma2    
        slot1.icono = iconoArma2
        
    
        slot1.ico1 = icono1Arma2
        slot1.ico2 = icono2Arma2
        slot1.ico3 = icono3Arma2
        slot1.val1 = 3
        slot1.val2 = 3
        slot1.val3 = 3

        slot2.icono = iconoArma1
        slot2.nombre = nombreArma1
    
        slot2.ico1 = icono1Arma1
        slot2.ico2 = icono2Arma1
        slot2.ico3 = icono3Arma1
        slot2.val1 = 3
        slot2.val2 = 3
        slot2.val3 = 3

    }else if(nombreArma1 == "Puño"){

        slot2.nombre = nombreArma2
        slot2.icono = iconoArma2
        
    
        slot2.ico1 = icono1Arma2
        slot2.ico2 = icono2Arma2
        slot2.ico3 = icono3Arma2
        slot2.val1 = 3
        slot2.val2 = 3
        slot2.val3 = 3

        }else{

        slot2.nombre = nombreArma1
        slot2.icono = iconoArma1
        
    
        slot2.ico1 = icono1Arma1
        slot2.ico2 = icono2Arma1
        slot2.ico3 = icono3Arma1
        slot2.val1 = 3
        slot2.val2 = 3
        slot2.val3 = 3

        }
        
          
        

    }

modalArmas.style.display = "none"
imprimir()

}



}//FIN MODAL ARMAS



function limpiarSentidos(){

    bonoTotalSentidos = 0
    divisorSentidos = 0

    vistaBtn.style.backgroundColor = ""
    vistaBtn.classList.remove('gridItemSuma')
    vistaBtn.classList.remove('gridItemResta')

    oidoBtn.style.backgroundColor = ""
    oidoBtn.classList.remove('gridItemSuma')
    oidoBtn.classList.remove('gridItemResta')

    olfatoBtn.style.backgroundColor = ""
    olfatoBtn.classList.remove('gridItemSuma')
    olfatoBtn.classList.remove('gridItemResta')

    gustoBtn.style.backgroundColor = ""
    gustoBtn.classList.remove('gridItemSuma')
    gustoBtn.classList.remove('gridItemResta')

    tactoBtn.style.backgroundColor = ""
    tactoBtn.classList.remove('gridItemSuma')
    tactoBtn.classList.remove('gridItemResta')

    visionNocturnaBtn.style.backgroundColor = ""
    visionNocturnaBtn.classList.remove('gridItemSuma')
    visionNocturnaBtn.classList.remove('gridItemResta')


    editarBtn.classList.remove('gridItemSuma')
    editarBtn.classList.remove('gridItemResta')

    
   
}

function limpiarSalvaciones(){

    bonoTotalSalvaciones = 0
    divisorSalvaciones = 0

    fortalezaBtn.style.backgroundColor = ""
    fortalezaBtn.classList.remove('gridItemSuma')
    fortalezaBtn.classList.remove('gridItemResta')

    agilidadBtn.style.backgroundColor = ""
    agilidadBtn.classList.remove('gridItemSuma')
    agilidadBtn.classList.remove('gridItemResta')

    voluntadBtn.style.backgroundColor = ""
    voluntadBtn.classList.remove('gridItemSuma')
    voluntadBtn.classList.remove('gridItemResta')

}

function limpiarCaracteristicas(){

    bonoTotalCaracteristicas = 0
    divisorCaracteristicas = 0

    fuerzaBtn.style.backgroundColor = ""
    fuerzaBtn.classList.remove('gridItemSuma')
    fuerzaBtn.classList.remove('gridItemResta')

    destrezaBtn.style.backgroundColor = ""
    destrezaBtn.classList.remove('gridItemSuma')
    destrezaBtn.classList.remove('gridItemResta')

    inteligenciaBtn.style.backgroundColor = ""
    inteligenciaBtn.classList.remove('gridItemSuma')
    inteligenciaBtn.classList.remove('gridItemResta')

    constitucionBtn.style.backgroundColor = ""
    constitucionBtn.classList.remove('gridItemSuma')
    constitucionBtn.classList.remove('gridItemResta')

    reflejosBtn.style.backgroundColor = ""
    reflejosBtn.classList.remove('gridItemSuma')
    reflejosBtn.classList.remove('gridItemResta')

    sabiduriaBtn.style.backgroundColor = ""
    sabiduriaBtn.classList.remove('gridItemSuma')
    sabiduriaBtn.classList.remove('gridItemResta')   
    
    
    
}

function limpiarCombate(){

    bonoTotalCombate = 0 
    divisorCombate = 0
    
    ataqueBtn.style.backgroundColor = ""
    ataqueBtn.classList.remove('gridItemSuma')
    ataqueBtn.classList.remove('gridItemResta')

    esquivaBtn.style.backgroundColor = ""
    esquivaBtn.classList.remove('gridItemSuma')
    esquivaBtn.classList.remove('gridItemResta')

    bloqueoBtn.style.backgroundColor = ""
    bloqueoBtn.classList.remove('gridItemSuma')
    bloqueoBtn.classList.remove('gridItemResta')

    sigiloBtn.style.backgroundColor = ""
    sigiloBtn.classList.remove('gridItemSuma')
    sigiloBtn.classList.remove('gridItemResta')

    equilibrioBtn.style.backgroundColor = ""
    equilibrioBtn.classList.remove('gridItemSuma')
    equilibrioBtn.classList.remove('gridItemResta')

    persuasionBtn.style.backgroundColor = ""
    persuasionBtn.classList.remove('gridItemSuma')
    persuasionBtn.classList.remove('gridItemResta')   

    
    
}

function limpiarSlots(){
    slot1Btn.style.backgroundColor = ""
    slot2Btn.style.backgroundColor = ""
}

function imprimir(){
  
{//personaje

    indicadores.vida =  (caracteristicas.fuerza *  caracteristicas.constitucion) + modificadorVida
    indicadores.energia = (caracteristicas.destreza * caracteristicas.reflejos) + modificadorEnergia
    indicadores.mana = (caracteristicas.inteligencia * caracteristicas.sabiduria) + modificadorMana

    vidaMaxima = caracteristicas.fuerza * caracteristicas.constitucion
    maestriaMaxima = caracteristicas.destreza * caracteristicas.reflejos
    manaMaxima = caracteristicas.inteligencia * caracteristicas.sabiduria

    consola.textContent = indicadores.vida

    combate.ataque = caracteristicas.destreza
    combate.esquiva = caracteristicas.reflejos
    combate.bloqueo = caracteristicas.destreza + Math.floor(( caracteristicas.constitucion)/1.5)
    combate.sigilo = caracteristicas.destreza + Math.ceil((( caracteristicas.reflejos + caracteristicas.sabiduria)/2) - (caracteristicas.constitucion)/2)
    combate.equilibrio = caracteristicas.reflejos + Math.floor((caracteristicas.destreza)/1.5)
    combate.persuasion = caracteristicas.sabiduria + Math.floor(( caracteristicas.inteligencia)/2)

    salvaciones.fortaleza = caracteristicas.constitucion + Math.floor(( caracteristicas.fuerza)/2)
    salvaciones.agilidad = caracteristicas.reflejos + Math.floor((( caracteristicas.destreza)/1.5) - (caracteristicas.constitucion)/2)
    salvaciones.voluntad = caracteristicas.sabiduria + Math.floor(( caracteristicas.inteligencia)/2)

    
    razaIco.src = raza.icono
    nombreTxt.textContent = nombre
    expTxt.textContent = experiencia
    
    fuerzaTxt.textContent = caracteristicas.fuerza
    destrezaTxt.textContent = caracteristicas.destreza
    inteligenciaTxt.textContent = caracteristicas.inteligencia
    
    constitucionTxt.textContent = caracteristicas.constitucion
    reflejosTxt.textContent = caracteristicas.reflejos
    sabiduriaTxt.textContent = caracteristicas.sabiduria
    
    vidaTxt.textContent = indicadores.vida
    energiaTxt.textContent = indicadores.energia
    manaTxt.textContent = indicadores.mana
    
    vidaMaxima = caracteristicas.fuerza * caracteristicas.constitucion
    energiaMaxima = caracteristicas.destreza * caracteristicas.reflejos
    manaMaxima = caracteristicas.inteligencia * caracteristicas.sabiduria

    vistaTxt.textContent = sentidos.vista
    oidoTxt.textContent = sentidos.oido
    olfatoTxt.textContent = sentidos.olfato
    gustoTxt.textContent = sentidos.gusto
    tactoTxt.textContent = sentidos.tacto
    visionNocturnaTxt.textContent = sentidos.visionNocturna
    
    fortalezaTxt.textContent = salvaciones.fortaleza
    agilidadTxt.textContent = salvaciones.agilidad
    voluntadTxt.textContent = salvaciones.voluntad
    
    ataqueTxt.textContent = combate.ataque
    esquivaTxt.textContent = combate.esquiva
    bloqueoTxt.textContent = combate.bloqueo
    sigiloTxt.textContent =  combate.sigilo
    equilibrioTxt.textContent = combate.equilibrio
    persuasionTxt.textContent = combate.persuasion

    
    
    velocidadTxt.textContent = 3 + Math.floor((caracteristicas.destreza + caracteristicas.fuerza)/2) - Math.floor(caracteristicas.constitucion/2)
    accionesTxt.textContent =  Math.floor((caracteristicas.constitucion)/3) + ((caracteristicas.reflejos)/2)
    iniciativaTxt.textContent = Math.floor((caracteristicas.inteligencia + caracteristicas.reflejos)/2)
    
}

{//slots Personaje

if(slot1.nombre == "Puño"){
    

    slot1Ico.src = "img/punno.png";
    slot1Txt.textContent = slot1.nombre;
    
    ico1Slot1.src = slot1.ico1;
    ico2Slot1.src = slot1.ico2;
    ico3Slot1.src = slot1.ico3;

    txt1Slot1.textContent = caracteristicas.destreza;
    txt2Slot1.textContent = caracteristicas.fuerza;
    txt3Slot1.textContent = Math.round((caracteristicas.constitucion)*3);
    

}else if(slot1.nombre == "Pierna"){


    slot1Ico.src = slot1.icono
    slot1Txt.textContent = slot1.nombre
    
    ico1Slot1.src = slot1.ico1
    ico2Slot1.src = slot1.ico2
    ico3Slot1.src = slot1.ico3
    
    
    txt1Slot1.textContent = caracteristicas.destreza;
    txt2Slot1.textContent = caracteristicas.fuerza * 2;
    txt3Slot1.textContent = Math.round((caracteristicas.constitucion)*3);
    

}else{


    slot1Ico.src = slot1.icono
    slot1Txt.textContent = slot1.nombre
    
    ico1Slot1.src = slot1.ico1
    ico2Slot1.src = slot1.ico2
    ico3Slot1.src = slot1.ico3
    
    
    txt1Slot1.textContent = slot1.val1
    txt2Slot1.textContent = slot1.val2
    txt3Slot1.textContent = slot1.val3
}



if(slot2.nombre == "Puño"){
    

    slot2Ico.src = slot2.icono;
    slot2Txt.textContent = slot2.nombre;
    
    ico1Slot2.src = slot2.ico1;
    ico2Slot2.src = slot2.ico2;
    ico3Slot2.src = slot2.ico3;

    txt1Slot2.textContent = caracteristicas.destreza;
    txt2Slot2.textContent = caracteristicas.fuerza;
    txt3Slot2.textContent = Math.round((caracteristicas.constitucion)*3);
    

}else if(slot2.nombre == "Pierna"){


    slot2Ico.src = slot2.icono
    slot2Txt.textContent = slot2.nombre
    
    ico1Slot2.src = slot2.ico1
    ico2Slot2.src = slot2.ico2
    ico3Slot2.src = slot2.ico3
    
    
    txt1Slot2.textContent = caracteristicas.destreza;
    txt2Slot2.textContent = caracteristicas.fuerza * 2;
    txt3Slot2.textContent = Math.round((caracteristicas.constitucion)*3);
    

}else{


    slot2Ico.src = slot2.icono
    slot2Txt.textContent = slot2.nombre
    
    ico1Slot2.src = slot2.ico1
    ico2Slot2.src = slot2.ico2
    ico3Slot2.src = slot2.ico3
    
    var valor1Slot2 = slot2.val1


    txt1Slot2.textContent = valor1Slot2
    txt2Slot2.textContent = slot2.val2
    txt3Slot2.textContent = slot2.val3
}

}     

}


