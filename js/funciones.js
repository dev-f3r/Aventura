var edicion = 0;


personajeBtn.addEventListener('click', function () {




    evolucion.style.display = "none"
    proteccion.style.display = "none"
    aura.style.display = "grid"

    edicion = 0;
    editarIco.src = "img/editar.png"




})

evolucionBtn.addEventListener('click', function () {




    evolucion.style.display = "grid"
    proteccion.style.display = "none"
    aura.style.display = "none"


})


proteccionBtn.addEventListener('click', function () {




    evolucion.style.display = "none"
    proteccion.style.display = "grid"
    aura.style.display = "none"




})



mochilaBtn.addEventListener('click', function () {

    modalMochila.style.display = "grid";
    edicion = 0;
    editarIco.src = "img/editar.png"


})

cerrarModalMochilaBtn.addEventListener('click', function () { modalMochila.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })



hechizosBtn.addEventListener('click', function () {

    if (edicion == 0) {

        modalHechizos.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    }

})

cerrarModalHechizosBtn.addEventListener('click', function () { modalHechizos.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })



habilidadesBtn.addEventListener('click', function () {

    if (edicion == 0) {

        modalHabilidades.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    }

})

cerrarModalHabilidadesBtn.addEventListener('click', function () { modalHabilidades.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })



razaIco.addEventListener('click', function () {

    if (edicion == 1) {

        modalRaza.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2) {

        localStorage.clear();
        location.reload();

    }
})

cerrarModalRazaBtn.addEventListener('click', function () { modalRaza.style.display = "none" })



{//BOTON SELECCIONAR
    seleccionarBtn.addEventListener('click', function () { seleccion() })
    function seleccion() {

        edicion = 0
        editarIco.src = "img/editar.png"

    }
}//BOTON SELECCIONAR

{//BOTON EDITAR
    editarBtn.addEventListener('click', function () { editar() })
    function editar() {


        if (edicion == 0) {

            edicion = 1
            editarIco.src = "img/mas.png"


        } else if (edicion == 1) {

            edicion = 2
            editarIco.src = "img/menos.png"

        } else {

            edicion = 1
            editarIco.src = "img/mas.png"

        }

       

    }
}//BOTON EDITAR



    slot1Ico.addEventListener('click', function () {

        if (edicion == 1) {

            modalArmas.style.display = "grid";
            edicion = 0;
            editarIco.src = "img/editar.png"
            slotSeleccionado = 1

        }

    })

    slot2Ico.addEventListener('click', function () {

        if (edicion == 1) {

            modalArmas.style.display = "grid";
            edicion = 0;
            editarIco.src = "img/editar.png";
            slotSeleccionado = 2

        }

        guardar()
    })

    cerrarModalArmasBtn.addEventListener('click', function () { modalArmas.style.display = "none" })




armaduraBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalArmadura.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    } else if (edicion == 2){}

})

cerrarModalArmaduraBtn.addEventListener('click', function () { modalArmadura.style.display = "none" })





cerrarModalReinosBtn.addEventListener('click', function () { modalReinos.style.display = "none" })



slotYelmoIco.addEventListener('click', function () { 
    
    if(edicion == 1){ modalArmadura.style.display = "grid"; piezaSeleccionada = "yelmo"; }

})


slotMagico1Ico.addEventListener('click', function () { 
    
    if(edicion == 1){ modalReinos.style.display = "grid" }

})


slotMagico2Ico.addEventListener('click', function () { 
    
    if(edicion == 1){ modalReinos.style.display = "grid" }

})

slotMagico3Ico.addEventListener('click', function () { 
    
    if(edicion == 1){ modalReinos.style.display = "grid" }

})








mascotaBtn.addEventListener('click', function () {

    if (edicion == 0) {

        modalMascota.style.display = "grid";
        edicion = 0;
        editarIco.src = "img/editar.png"

    }

})



cerrarModalMascotaBtn.addEventListener('click', function () { modalMascota.style.display = "none" })



cerrarModalMascota1Btn.addEventListener('click', function () { modalMascota1.style.display = "none" })

cerrarModalMascota2Btn.addEventListener('click', function () { modalMascota2.style.display = "none" })





derechaMascotaBtn.addEventListener('click', function () { modalMascota.style.display = "none"; modalMascota1.style.display = "grid" })

derechaMascota1Btn.addEventListener('click', function () { modalMascota1.style.display = "none"; modalMascota2.style.display = "grid" })

izquierdaMascota1Btn.addEventListener('click', function () { modalMascota1.style.display = "none"; modalMascota.style.display = "grid" })

izquierdaMascota2Btn.addEventListener('click', function () { modalMascota2.style.display = "none"; modalMascota1.style.display = "grid" })


