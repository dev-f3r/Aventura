mascotaBtn.addEventListener('click', function () { 
    
    if(edicion == 0){

        modalMascota.style.display = "grid" 

    }else if(edicion == 1){

        modalMascota.style.display = "grid" 

        edicion = 0
        editarIco.src = "img/editar.png"

    }else if(edicion == 2){

        limpiarMascota()

    }
    
    
    
    




})




cerrarMascotaBtn.addEventListener('click', function () { modalMascota.style.display = "none" })
cerrarMascota2Btn.addEventListener('click', function () { modalMascota2.style.display = "none" })

siguiente.addEventListener('click', function () { modalMascota2.style.display = "grid"; modalMascota.style.display = "none" })
anterior.addEventListener('click', function () { modalMascota.style.display = "grid"; modalMascota2.style.display = "none" })








vistaMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(vistaMascotaBtn, mascota.vista, mascota.vistaBase, "vista") })
oidoMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(oidoMascotaBtn, mascota.oido, mascota.oidoBase, "oido") })
olfatoMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(olfatoMascotaBtn, mascota.olfato, mascota.olfatoBase, "olfato") })
gustoMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(gustoMascotaBtn, mascota.gusto, mascota.gustoBase, "gusto") })
tactoMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(tactoMascotaBtn, mascota.tacto, mascota.tactoBase, "tacto") })
vOscuridadMascotaBtn.addEventListener('click', function () { SeleccionSentidosMascota(vOscuridadMascotaBtn, mascota.vOscuridad, mascota.vOscuridadBase, "vOscuridad") })


function SeleccionSentidosMascota(boton, bono, racial, textoSeleccion) {

    if (edicion == 1 && personaje.experiencia >= (bono * 3) && bono !== 0) {

        personaje.experiencia = personaje.experiencia - (bono * 3)
        bono = bono + 1


        switch (boton) {

            case vistaMascotaBtn: mascota.vista = bono; break
            case oidoMascotaBtn: mascota.oido = bono; break
            case olfatoMascotaBtn: mascota.olfato = bono; break
            case gustoMascotaBtn: mascota.gusto = bono; break
            case tactoMascotaBtn: mascota.tacto = bono; break
            case vOscuridadMascotaBtn: mascota.vOscuridad = bono; break

        }


    } else if (edicion == 1 && personaje.experiencia < (bono * 3)) {

        consola.textContent = "EXP INSUFICIENTE"

    } else if (edicion == 2 && bono > racial) {

        bono = bono - 1
        personaje.experiencia = personaje.experiencia + (bono * 3)

        switch (boton) {

            case vistaMascotaBtn: mascota.vista = bono; break
            case oidoMascotaBtn: mascota.oido = bono; break
            case olfatoMascotaBtn: mascota.olfato = bono; break
            case gustoMascotaBtn: mascota.gusto = bono; break
            case tactoMascotaBtn: mascota.tacto = bono; break
            case vOscuridadMascotaBtn: mascota.vOscuridad = bono; break

        }

    } else if (edicion == 0 && boton.style.backgroundColor == "") {

        


        boton.style.backgroundColor = "";
    


        


    } else if (edicion == 0) {

       

        boton.style.backgroundColor = ""

    }

    guardar()

}







fuerzaMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(fuerzaMascotaBtn, mascota.fuerza, mascota.fuerzaBase, "fuerza") })

destrezaMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(destrezaMascotaBtn, mascota.destreza, mascota.destrezaBase, "destreza") })

inteligenciaMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(inteligenciaMascotaBtn, mascota.inteligencia, mascota.inteligenciaBase, "fuerza") })

constitucionMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(constitucionMascotaBtn, mascota.constitucion, mascota.constitucionBase, "constitucion") })

reflejosMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(reflejosMascotaBtn, mascota.reflejos, mascota.reflejosBase, "reflejos") })
sabiduriaMascotaBtn.addEventListener('click', function () { SeleccionAtributosMascota(sabiduriaMascotaBtn, mascota.sabiduria, mascota.sabiduriaBase, "sabiduria") })



function SeleccionAtributosMascota(boton, bono, racial, textoSeleccion) {

    if (edicion == 1 && personaje.experiencia >= (bono * 3) && bono !== 0) {

        personaje.experiencia = personaje.experiencia - (bono * 3)
        bono = bono + 1


        switch (boton) {

            case fuerzaMascotaBtn: mascota.fuerza = bono; break
            case destrezaMascotaBtn: mascota.destreza = bono; break
            case inteligenciaMascotaBtn: mascota.inteligencia = bono; break
            case constitucionMascotaBtn: mascota.constitucion = bono; break
            case reflejosMascotaBtn: mascota.reflejos = bono; break
            case sabiduriaMascotaBtn: mascota.sabiduria = bono; break

        }


    } else if (edicion == 1 && personaje.experiencia < (bono * 3)) {

        consola.textContent = "EXP INSUFICIENTE"

    } else if (edicion == 2 && bono > racial) {

        bono = bono - 1
        personaje.experiencia = personaje.experiencia + (bono * 3)

        switch (boton) {

            case fuerzaMascotaBtn: mascota.fuerza = bono; break
            case destrezaMascotaBtn: mascota.destreza = bono; break
            case inteligenciaMascotaBtn: mascota.inteligencia = bono; break
            case constitucionMascotaBtn: mascota.constitucion = bono; break
            case reflejosMascotaBtn: mascota.reflejos = bono; break
            case sabiduriaMascotaBtn: mascota.sabiduria = bono; break

        }

    } else if (edicion == 0 && boton.style.backgroundColor == "") {

        


        boton.style.backgroundColor = ""
    
        consola.textContent = hechizos.reinos.fuego

        


    } else if (edicion == 0) {

       

        boton.style.backgroundColor = ""

    }

    guardar()

}



































setInterval(() => {
    refrescarMascota()
}, 100);



function refrescarMascota(){

nombreMascota.textContent = mascota.nombre;
nombreMascota2.textContent = mascota.nombre;

iconoMascota.src = mascota.icono
iconoMascota2.src = mascota.icono
mascotaImg.src = mascota.icono


fuerzaMascotaTxt.textContent = mascota.fuerza;
destrezaMascotaTxt.textContent = mascota.destreza;
inteligenciaMascotaTxt.textContent = mascota.inteligencia;
constitucionMascotaTxt.textContent = mascota.constitucion;
reflejosMascotaTxt.textContent = mascota.reflejos;
sabiduriaMascotaTxt.textContent = mascota.sabiduria;


vistaMascotaTxt.textContent = mascota.vista;
oidoMascotaTxt.textContent = mascota.oido;
olfatoMascotaTxt.textContent = mascota.olfato;
gustoMascotaTxt.textContent = mascota.gusto;
tactoMascotaTxt.textContent = mascota.tacto;
vOscuridadMascotaTxt.textContent = mascota.vOscuridad;


ataqueMascotaTxt.textContent = mascota.destreza + Math.round(mascota.fuerza/3);
esquivaMascotaTxt.textContent = mascota.reflejos + Math.round(mascota.fuerza/3);
bloqueoMascotaTxt.textContent = mascota.destreza + Math.round(mascota.constitucion/3);
sigiloMascotaTxt.textContent = mascota.destreza - Math.round(mascota.constitucion/3);
equilibrioMascotaTxt.textContent = mascota.destreza + Math.round((mascota.reflejos + mascota.fuerza)/3);
persuasionMascotaTxt.textContent = mascota.inteligencia + Math.round((mascota.sabiduria + mascota.constitucion)/3);


velocidadMascotaTxt.textContent = (3 + Math.floor((mascota.destreza + mascota.fuerza) / 2) - Math.floor(mascota.constitucion / 2)) * Math.round(mascota.patas/2);
accionesMascotaTxt.textContent = Math.floor((mascota.constitucion) / 2) + ((mascota.reflejos) / 2);
iniciativaMascotaTxt.textContent = Math.round((mascota.inteligencia + mascota.reflejos + mascota.fuerza) / 2);

fortalezaMascotaTxt.textContent = mascota.constitucion + Math.floor((mascota.fuerza) / 2);
agilidadMascotaTxt.textContent = mascota.reflejos + Math.floor(((mascota.destreza) / 1.5) - (mascota.constitucion) / 2);
voluntadMascotaTxt.textContent = mascota.sabiduria + Math.floor((mascota.inteligencia) / 2);

bloqueoArmaduraMascotaTxt.textContent = parseInt(bloqueoArmaduraFisicaMascota.textContent) + parseInt(bloqueoArmaduraMagicaMascota.textContent);
mitigacionMascotaTxt.textContent = parseInt(mitigacionArmaduraFisicaMascota.textContent) + parseInt(mitigacionArmaduraMagicaMascota.textContent);
rupturaMascotaTxt.textContent = parseInt(rupturaArmaduraFisicaMascota.textContent) + parseInt(rupturaArmaduraMagicaMascota.textContent);

vidaMascotaTxt.textContent = mascota.fuerza * mascota.constitucion;
energiaMascotaTxt.textContent = (mascota.destreza * mascota.reflejos) + mascota.fuerza;
manaMascotaTxt.textContent = (mascota.inteligencia * mascota.sabiduria) + mascota.constitucion;



var bloqueoLigera = Math.round(((mascota.constitucion + mascota.fuerza) / 2 + (mascota.destreza / 3))/3);
var mitigacionLigera = Math.round(((mascota.constitucion + mascota.fuerza) / 2 + (mascota.destreza / 3))/2);
var rupturaLigera = Math.round((mascota.fuerza + mascota.constitucion) * 1.25);

var bloqueoMedia = Math.round(((mascota.constitucion + mascota.fuerza) / 1.25 + (mascota.destreza / 2.5))/3);
var mitigacionMedia = Math.round(((mascota.constitucion + mascota.fuerza) / 1.5 + (mascota.destreza / 2.5))/2);
var rupturaMedia = Math.round((mascota.fuerza + mascota.constitucion) * 2.5);

var bloqueoPesada = Math.round(((mascota.constitucion + mascota.fuerza) / 1 + (mascota.destreza / 3))/3);
var mitigacionPesada = Math.round(((mascota.constitucion + mascota.fuerza) / 1.1+ (mascota.destreza / 2))/2);
var rupturaPesada = Math.round((mascota.fuerza + mascota.constitucion) * 3);

if (mascota.armaduraFisica == "Piel"){

    armaduraFisicaMascota.textContent = mascota.armaduraFisica
    armaduraFisicaImg.src = mascota.armaduraFisicaIcono

    bloqueoArmaduraFisicaMascota.textContent = bloqueoLigera
    mitigacionArmaduraFisicaMascota.textContent = mitigacionLigera
    rupturaArmaduraFisicaMascota.textContent = rupturaLigera

}else if (mascota.armaduraFisica == "Escamas"){
    
    armaduraFisicaMascota.textContent = mascota.armaduraFisica
    armaduraFisicaImg.src = mascota.armaduraFisicaIcono

    bloqueoArmaduraFisicaMascota.textContent = bloqueoMedia
    mitigacionArmaduraFisicaMascota.textContent = mitigacionMedia
    rupturaArmaduraFisicaMascota.textContent = rupturaMedia

}else if(mascota.armaduraFisica == "Coraza"){
    
    armaduraFisicaMascota.textContent = mascota.armaduraFisica
    armaduraFisicaImg.src = mascota.armaduraFisicaIcono

    bloqueoArmaduraFisicaMascota.textContent = bloqueoPesada
    mitigacionArmaduraFisicaMascota.textContent = mitigacionPesada
    rupturaArmaduraFisicaMascota.textContent = rupturaPesada


} else {


    armaduraFisicaMascota.textContent = mascota.armaduraFisica
    armaduraFisicaImg.src = "img/nada.png"

    bloqueoArmaduraFisicaMascota.textContent = 0
    mitigacionArmaduraFisicaMascota.textContent = 0
    rupturaArmaduraFisicaMascota.textContent = 0


}

if (mascota.armaduraMagica != ""){

    armaduraMagicaMascota.textContent = mascota.armaduraMagica
    armaduraMagicaImg.src = mascota.armaduraMagicaIcono

    bloqueoArmaduraMagicaMascota.textContent = Math.round(((mascota.constitucion + mascota.inteligencia) / 1.5 + (mascota.sabiduria / 3))/2);
    mitigacionArmaduraMagicaMascota.textContent = Math.round(((mascota.constitucion + mascota.inteligencia) / 1.5 + (mascota.destreza / 3))/2);
    rupturaArmaduraMagicaMascota.textContent = Math.round((mascota.sabiduria + mascota.constitucion) * 2);

}else{

    armaduraMagicaMascota.textContent = mascota.armaduraMagica
    armaduraMagicaImg.src = mascota.armaduraMagicaIcono

    bloqueoArmaduraMagicaMascota.textContent = 0;
    mitigacionArmaduraMagicaMascota.textContent =0;
    rupturaArmaduraMagicaMascota.textContent = 0;

}




nombreArma1.textContent = mascota.arma1
arma1Img.src = mascota.arma1Icono
dannoMascota1Img.src = mascota.arma1Danno

nombreArma2.textContent = mascota.arma2
arma2Img.src = mascota.arma2Icono
dannoMascota2Img.src = mascota.arma2Danno





if (mascota.arma1 == "Dientes"){

    ataqueMascota1Txt.textContent = Math.round(mascota.destreza / 2)
    dannoMascota1Txt.textContent =  Math.round(mascota.fuerza * 2)
    rupturaMascota1Txt.textContent = Math.round(mascota.constitucion * 3)

} else if (mascota.arma1 == "Garras"){

    ataqueMascota1Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota1Txt.textContent =  Math.round(mascota.fuerza * 1.5)
    rupturaMascota1Txt.textContent = Math.round(mascota.constitucion * 3)


} else if (mascota.arma1 == "Mente"){

    ataqueMascota1Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota1Txt.textContent =  Math.round(mascota.inteligencia * 1.5)
    rupturaMascota1Txt.textContent = Math.round(mascota.constitucion * 3)


}else if (mascota.arma1 == "Mano"){

    ataqueMascota1Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota1Txt.textContent =  Math.round((mascota.inteligencia * 1.5) + (mascota.sabiduria / 2))
    rupturaMascota1Txt.textContent = Math.round((mascota.constitucion * 3) + (mascota.sabiduria / 3))



} else if (mascota.arma1 == "Alas"){

    ataqueMascota1Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota1Txt.textContent =  Math.round( ((mascota.inteligencia * 1.5) + (mascota.sabiduria * 1.5))/2 )
    rupturaMascota1Txt.textContent = Math.round((mascota.constitucion * 2.5) + (mascota.sabiduria / 3))


} else {

    ataqueMascota1Txt.textContent = 0
    dannoMascota1Txt.textContent =  0
    rupturaMascota1Txt.textContent = 0

}






if (mascota.arma2 == "Dientes"){

    ataqueMascota2Txt.textContent = Math.round(mascota.destreza / 2)
    dannoMascota12xt.textContent =  Math.round(mascota.fuerza * 1.5)
    rupturaMascota2Txt.textContent = Math.round(mascota.constitucion * 3)

} else if (mascota.arma2 == "Garras"){

    ataqueMascota2Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota2Txt.textContent =  Math.round(mascota.fuerza * 1.5)
    rupturaMascota2Txt.textContent = Math.round(mascota.constitucion * 3)


} else if (mascota.arma2 == "Mente"){

    ataqueMascota2Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota2Txt.textContent =  Math.round(mascota.inteligencia * 1.5)
    rupturaMascota2Txt.textContent = Math.round(mascota.constitucion * 3)


} else if (mascota.arma2 == "Mano"){

    ataqueMascota2Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota2Txt.textContent =  Math.round((mascota.inteligencia * 1.5) + (mascota.sabiduria / 2))
    rupturaMascota2Txt.textContent = Math.round((mascota.constitucion * 3) + (mascota.sabiduria / 3))


} else if (mascota.arma2 == "Alas"){

    ataqueMascota2Txt.textContent = Math.round(mascota.destreza / 1.5)
    dannoMascota2Txt.textContent =  Math.round( ((mascota.inteligencia * 1.5) + (mascota.sabiduria * 1.5))/2 )
    rupturaMascota2Txt.textContent = Math.round((mascota.constitucion * 2.5) + (mascota.sabiduria / 3))


} else {

    ataqueMascota2Txt.textContent = 0
    dannoMascota2Txt.textContent =  0
    rupturaMascota2Txt.textContent = 0

}


habilidadMascota1.textContent = mascota.habilidad1
habilidadMascota2.textContent = mascota.habilidad2
habilidadMascota3.textContent = mascota.habilidad3
habilidadMascota4.textContent = mascota.habilidad4




};


