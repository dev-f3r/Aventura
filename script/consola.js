consola.addEventListener('click', function () {

    if (edicion == 1) {

        var comando = prompt("ingrese comando");

        if (comando == "/reload") {

            localStorage.clear();
            location.reload(true);




        } else if (comando == "/version") {

            consola.innerHTML = "Versión Alfa 1.0.5" + '<br>' + "Estable"


        }else if (comando == "/megalobo") {

            Lobo()


        } else if (comando == "/full") {

            indicadores.modificadorVida = 0
            indicadores.modificadorEnergia = 0
            indicadores.modificadorMana = 0

        } else if (comando == "/exp") {

            consola.textContent = "EXP TOTAL: " + personaje.experienciaTotal

        } else if (comando == "/dormir") {

            indicadores.modificadorVida += caracteristicas.constitucion * 2
            indicadores.modificadorEnergia += caracteristicas.destreza * 2
            indicadores.modificadorMana += caracteristicas.sabiduria * 2

            if (indicadores.modificadorVida > 0) {

                indicadores.modificadorVida = 0

            } else { }

            if (indicadores.modificadorEnergia > 0) {

                indicadores.modificadorEnergia = 0

            } else { }

            if (indicadores.modificadorMana > 0) {

                indicadores.modificadorMana = 0

            } else { }




        } else if (comando == "/lobo") {

            mascota.nombre = "Lobo"
            mascota.icono = "img/lobo.png"

            mascota.patas = 4

            mascota.fuerzaBase = 4
            mascota.destrezaBase = 4
            mascota.inteligenciaBase = 3
            mascota.constitucionBase = 4
            mascota.reflejosBase = 3
            mascota.sabiduriaBase = 1


            mascota.fuerza = 4
            mascota.destreza = 4
            mascota.inteligencia = 3
            mascota.constitucion = 4
            mascota.reflejos = 3
            mascota.sabiduria = 1

            mascota.vista = 4
            mascota.oido = 6
            mascota.olfato = 5
            mascota.gusto = 2
            mascota.tacto = 1
            mascota.vOscuridad = 2

            mascota.vistaBase = 4
            mascota.oidoBase = 6
            mascota.olfatoBase = 5
            mascota.gustoBase = 2
            mascota.tactoBase = 1
            mascota.vOscuridadBase = 2

            mascota.armaduraFisica = "Piel"
            mascota.armaduraFisicaIcono = "img/naturalligera.png"

            mascota.armaduraMagica = ""
            mascota.armaduraMagicaIcono = "img/nada.png"

            mascota.arma1 = "Dientes"
            mascota.arma1Icono = "img/mordisco.png"
            mascota.arma1Danno = "img/danno.png" 
            mascota.arma2 = "Garras"
            mascota.arma2Icono = "img/rasguno.png"
            mascota.arma2Danno = "img/danno.png"


            mascota.habilidad1 = "Derribo"
            mascota.habilidad2 = "Desgarro"
            mascota.habilidad3 = ""
            mascota.habilidad4 = ""

            guardar()


        } else if (comando == "/diablillo") {

            mascota.nombre = "Diablillo"
            mascota.icono = "img/diablillo.png"

            mascota.patas = 2

            mascota.fuerzaBase = 3
            mascota.destrezaBase = 3
            mascota.inteligenciaBase = 3
            mascota.constitucionBase = 3
            mascota.reflejosBase = 4
            mascota.sabiduriaBase = 6


            mascota.fuerza = 3
            mascota.destreza = 3
            mascota.inteligencia = 3
            mascota.constitucion = 3
            mascota.reflejos = 4
            mascota.sabiduria = 6

            mascota.vista = 3
            mascota.oido = 3
            mascota.olfato = 3
            mascota.gusto = 3
            mascota.tacto = 3
            mascota.vOscuridad = 3

            mascota.vistaBase = 3
            mascota.oidoBase = 3
            mascota.olfatoBase = 3
            mascota.gustoBase = 3
            mascota.tactoBase = 3
            mascota.vOscuridadBase = 3

            mascota.armaduraFisica = "Piel"
            mascota.armaduraFisicaIcono = "img/naturalligera.png"

            mascota.armaduraMagica = "Fuego"
            mascota.armaduraMagicaIcono = "img/reinofuego.png"

            mascota.arma1 = "Dientes"
            mascota.arma1Icono = "img/mordisco.png"
            mascota.arma1Danno = "img/danno.png" 
            mascota.arma2 = "Mano"
            mascota.arma2Icono = "img/magia.png"
            mascota.arma2Danno = "img/podervarita.png"


            mascota.habilidad1 = "Derribo"
            mascota.habilidad2 = "Desgarro"
            mascota.habilidad3 = ""
            mascota.habilidad4 = ""

            guardar()


        } else if (comando == "/hada") {

            mascota.nombre = "Hada"
            mascota.icono = "img/hada.png"

            mascota.patas = 6

            mascota.fuerzaBase = 1
            mascota.destrezaBase = 3
            mascota.inteligenciaBase = 4
            mascota.constitucionBase = 2
            mascota.reflejosBase = 5
            mascota.sabiduriaBase = 4


            mascota.fuerza = 1
            mascota.destreza = 3
            mascota.inteligencia = 4
            mascota.constitucion = 2
            mascota.reflejos = 5
            mascota.sabiduria = 4

            mascota.vista = 4
            mascota.oido = 4
            mascota.olfato = 4
            mascota.gusto = 4
            mascota.tacto = 4
            mascota.vOscuridad = 0

            mascota.vistaBase = 4
            mascota.oidoBase = 4
            mascota.olfatoBase = 4
            mascota.gustoBase = 4
            mascota.tactoBase = 4
            mascota.vOscuridadBase = 0

            mascota.armaduraFisica = ""
            mascota.armaduraFisicaIcono = "img/nada.png"

            mascota.armaduraMagica = "Luz"
            mascota.armaduraMagicaIcono = "img/reinoluz.png"

            mascota.arma1 = "Alas"
            mascota.arma1Icono = "img/alas.png"
            mascota.arma1Danno = "img/podervarita.png" 
            mascota.arma2 = "Mano"
            mascota.arma2Icono = "img/magia.png"
            mascota.arma2Danno = "img/podervarita.png"


            mascota.habilidad1 = "Embelesar"
            mascota.habilidad2 = "Luz"
            mascota.habilidad3 = ""
            mascota.habilidad4 = ""

            guardar()


        } else if (comando == "1.dientes") {

            slotSeleccionado = 1
            sleccionarArma("Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
            "Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")
            
        } else if (comando == "2.dientes") {

            slotSeleccionado = 2
            sleccionarArma("Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
            "Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")
            
        } else if (comando == "1.garras") {

            slotSeleccionado = 1
            sleccionarArma("Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
        "Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")
            
        } else if (comando == "2.garras") {

            slotSeleccionado = 2
            sleccionarArma("Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
        "Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")
            
        }else {

            consola.textContent = comando
        }

    } else if (edicion == 2) {

        consola.innerHTML = ""
    }


})


function Lobo() {

    raza.icono = "img/lobo.png"
    personaje.nombre = "Lobo Gigante"


    caracteristicas.fuerza = 6
    caracteristicas.destreza = 4
    caracteristicas.inteligencia = 3
    caracteristicas.constitucion = 7
    caracteristicas.reflejos = 4
    caracteristicas.sabiduria = 4

    sentidos.vista = 4
    sentidos.oido = 4
    sentidos.olfato = 7
    sentidos.gusto = 5
    sentidos.tacto = 4
    sentidos.visionNocturna = 5


    raza.fuerza = 6
    raza.destreza = 4
    raza.inteligencia = 3
    raza.constitucion = 7
    raza.reflejos = 4
    raza.sabiduria = 4

    raza.vista = 4
    raza.oido = 4
    raza.olfato = 3
    raza.gusto = 7
    raza.tacto = 4
    raza.visionNocturna = 4

    imprimir()
    limpiarModificadores()
    limpiarReinos()
    limpiarMagicos()
    limpiarEstilos()
    limpiarMarciales()
    limpiarArmaduraMagica()

    limpiarArmadura()

    limpiarMascota()

    sleccionarArma("Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
        "Dientes", "img/mordisco.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")


    slot1.val1 = Math.round((caracteristicas.destreza / 2) + (marciales.natural / 2));
    slot1.val2 = Math.round((caracteristicas.fuerza / 1.5) + (marciales.natural / 1.5));
    slot1.val3 = Math.round(((caracteristicas.constitucion) * 3) + (marciales.natural * 3));

    slotSeleccionado = 2

    sleccionarArma("Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
        "Garras", "img/rasguno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")

    slot2.val1 = Math.round((caracteristicas.destreza / 2) + (marciales.natural / 2));
    slot2.val2 = Math.round((caracteristicas.fuerza / 2) + (marciales.natural / 1.5));
    slot2.val3 = Math.round(((caracteristicas.constitucion) * 4) + (marciales.natural * 3));


    edicion = 0;
    editarIco.src = "img/editar.png"
    slotSeleccionado = 1

    modalRaza.style.display = "none"
    guardar()



}






