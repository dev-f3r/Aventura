
{//FUNCIONES

    {//BOTON SELECCIONAR
        seleccionarBtn.addEventListener('click', function () { seleccion() })
        function seleccion() {

            edicion = 0
            editarIco.src = "img/editar.png"

            limpiarCaracteristicas()
            limpiarSentidos()
            limpiarSalvaciones()
            limpiarCombate()
            limpiarSlots()


            guardar()



        }
    }//BOTON SELECCIONAR

    {//BOTON EDITAR
        editarBtn.addEventListener('click', function () { editar() })
        function editar() {

            limpiarCaracteristicas()
            limpiarSentidos()
            limpiarSalvaciones()
            limpiarCombate()
            limpiarSlots()

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

            guardar()

        }
    }//BOTON EDITAR

    {//FUNCIONES MOCHILA

        {//ABRIR MODAL MOCHILA
            mochilaBtn.addEventListener('click', function () {

                modalMochila.style.display = "grid";
                edicion = 0;
                editarIco.src = "img/editar.png"


            })
        }//ABRIR MODAL MOCHILA

        {//CERRAR MODAL MOCHILA
            cerrarModalMochilaBtn.addEventListener('click', function () { modalMochila.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })
        }//CERRAR MODAL MOCHILA

        {//AGREGAR ITEM

            item1MochilaBtn.addEventListener('click', function () { agregarItem(item1MochilaBtn, mochila.item1) })
            item2MochilaBtn.addEventListener('click', function () { agregarItem(item2MochilaBtn, mochila.item2) })
            item3MochilaBtn.addEventListener('click', function () { agregarItem(item3MochilaBtn, mochila.item3) })
            item4MochilaBtn.addEventListener('click', function () { agregarItem(item4MochilaBtn, mochila.item4) })
            item5MochilaBtn.addEventListener('click', function () { agregarItem(item5MochilaBtn, mochila.item5) })
            item6MochilaBtn.addEventListener('click', function () { agregarItem(item6MochilaBtn, mochila.item6) })
            item7MochilaBtn.addEventListener('click', function () { agregarItem(item7MochilaBtn, mochila.item7) })
            item8MochilaBtn.addEventListener('click', function () { agregarItem(item8MochilaBtn, mochila.item8) })
            item9MochilaBtn.addEventListener('click', function () { agregarItem(item9MochilaBtn, mochila.item9) })
            item10MochilaBtn.addEventListener('click', function () { agregarItem(item10MochilaBtn, mochila.item10) })
            item11MochilaBtn.addEventListener('click', function () { agregarItem(item11MochilaBtn, mochila.item11) })



            function agregarItem(boton, item) {

                if (edicion == 1) {

                    var nuevoItem = prompt("ingrese item", "")
                    if (nuevoItem == null || nuevoItem == "") {
                        item = item
                    } else {

                        item = nuevoItem


                    }



                } else if (edicion == 2) {

                    item = ""

                }


                switch (boton) {

                    case item1MochilaBtn: mochila.item1 = item; break
                    case item2MochilaBtn: mochila.item2 = item; break
                    case item3MochilaBtn: mochila.item3 = item; break
                    case item4MochilaBtn: mochila.item4 = item; break
                    case item5MochilaBtn: mochila.item5 = item; break
                    case item6MochilaBtn: mochila.item6 = item; break
                    case item7MochilaBtn: mochila.item7 = item; break
                    case item8MochilaBtn: mochila.item8 = item; break
                    case item9MochilaBtn: mochila.item9 = item; break
                    case item10MochilaBtn: mochila.item10 = item; break
                    case item11MochilaBtn: mochila.item11 = item; break


                }

                edicion = 0
                editarIco.src = "img/editar.png"
                guardar()
            }



        }//AGREGAR ITEM


        {//AGREGAR POCIONES O MONEDAS

            oroIco.addEventListener('click', function () { pocionesYmonedas(oroBtn, mochila.oro) })
            oroBtn.addEventListener('click', function () { pocionesYmonedas(oroBtn, mochila.oro) })
            plataIco.addEventListener('click', function () { pocionesYmonedas(plataBtn, mochila.plata) })
            plataBtn.addEventListener('click', function () { pocionesYmonedas(plataBtn, mochila.plata) })
            cobreIco.addEventListener('click', function () { pocionesYmonedas(cobreBtn, mochila.cobre) })
            cobreBtn.addEventListener('click', function () { pocionesYmonedas(cobreBtn, mochila.cobre) })

            pocionVidaIco.addEventListener('click', function () {
                pocionesYmonedas(pocionVidaBtn, mochila.pocionVida, indicadores.vida,
                    indicadores.modificadorVida, indicadores.vidaMaxima, caracteristicas.constitucion)
            })

            pocionVidaBtn.addEventListener('click', function () {
                pocionesYmonedas(pocionVidaBtn, mochila.pocionVida, indicadores.vida,
                    indicadores.modificadorVida, indicadores.vidaMaxima, caracteristicas.constitucion)
            })

            pocionEnergiaIco.addEventListener('click', function () {
                pocionesYmonedas(pocionEnergiaBtn, mochila.pocionEnergia, indicadores.energia,
                    indicadores.modificadorEnergia, indicadores.energiaMaxima, caracteristicas.reflejos)
            })

            pocionEnergiaBtn.addEventListener('click', function () {
                pocionesYmonedas(pocionEnergiaBtn, mochila.pocionEnergia, indicadores.energia,
                    indicadores.modificadorEnergia, indicadores.energiaMaxima, caracteristicas.reflejos)
            })

            pocionManaIco.addEventListener('click', function () {
                pocionesYmonedas(pocionManaBtn, mochila.pocionMana, indicadores.mana,
                    indicadores.modificadorMana, indicadores.manaMaximo, caracteristicas.sabiduria)
            })

            pocionManaBtn.addEventListener('click', function () {
                pocionesYmonedas(pocionManaBtn, mochila.pocionMana, indicadores.mana,
                    indicadores.modificadorMana, indicadores.manaMaximo, caracteristicas.sabiduria)
            })

            function pocionesYmonedas(boton, item, indicador, modificador, maximo, potenciador) {

                if (edicion == 1 && item < 99) {

                    item = item + 1


                } else if (edicion == 2 && item > 0) {

                    item = item - 1

                } else if (edicion == 0 && item > 0) {


                    var mensaje = confirm("¿Tomar pocion?");

                    if (mensaje) {

                        if (indicador + potenciador > maximo) {

                            modificador = 0
                            indicador = maximo

                            item = item - 1

                        } else {

                            item = item - 1

                            modificador = modificador + potenciador
                            consola.textContent = modificador

                        }
                    }


                }


                switch (boton) {

                    case pocionVidaBtn: mochila.pocionVida = item; indicadores.vida = indicador; indicadores.modificadorVida = modificador;
                        indicadores.vidaMaxima = maximo; caracteristicas.constitucion = potenciador; break

                    case pocionEnergiaBtn: mochila.pocionEnergia = item; indicadores.energia = indicador; indicadores.modificadorEnergia = modificador;
                        indicadores.energiaMaxima = maximo; caracteristicas.constitucion = potenciador; break

                    case pocionManaBtn: mochila.pocionMana = item; indicadores.mana = indicador; indicadores.modificadorMana = modificador;
                        indicadores.manaMaximo = maximo; caracteristicas.sabiduria = potenciador; break

                    case oroBtn: mochila.oro = item; break
                    case plataBtn: mochila.plata = item; break
                    case cobreBtn: mochila.cobre = item; break



                }

                guardar()

            }



        }//AGREGAR POCIONES O MONEDAS

    }//FUNCIONES MOCHILA

    {//FUNCIONES HECHIZOS

        {//ABRIR MODAL HECHIZOS
            hechizosBtn.addEventListener('click', function () {

                if (edicion == 0) {

                    modalHechizos.style.display = "grid";
                    edicion = 0;
                    editarIco.src = "img/editar.png"

                }

            })
        }//ABRIR MODAL HECHIZOS


        {//CERRAR MODAL HECHIZOS
            cerrarModalHechizosBtn.addEventListener('click', function () { modalHechizos.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })
        }//CERRAR MODAL HECHIZOS


        {//AGREGAR HECHIZO

            item1HechizosBtn.addEventListener('click', function () { agregarHechizo(item1HechizosBtn, hechizos.item1) })
            item2HechizosBtn.addEventListener('click', function () { agregarHechizo(item2HechizosBtn, hechizos.item2) })
            item3HechizosBtn.addEventListener('click', function () { agregarHechizo(item3HechizosBtn, hechizos.item3) })
            item4HechizosBtn.addEventListener('click', function () { agregarHechizo(item4HechizosBtn, hechizos.item4) })
            item5HechizosBtn.addEventListener('click', function () { agregarHechizo(item5HechizosBtn, hechizos.item5) })
            item6HechizosBtn.addEventListener('click', function () { agregarHechizo(item6HechizosBtn, hechizos.item6) })
            item7HechizosBtn.addEventListener('click', function () { agregarHechizo(item7HechizosBtn, hechizos.item7) })
            item8HechizosBtn.addEventListener('click', function () { agregarHechizo(item8HechizosBtn, hechizos.item8) })
            item9HechizosBtn.addEventListener('click', function () { agregarHechizo(item9HechizosBtn, hechizos.item9) })
            item10HechizosBtn.addEventListener('click', function () { agregarHechizo(item10HechizosBtn, hechizos.item10) })
            item11HechizosBtn.addEventListener('click', function () { agregarHechizo(item11HechizosBtn, hechizos.item11) })



            function agregarHechizo(boton, item) {

                if (edicion == 1) {

                    var nuevoItem = prompt("ingrese item", "")
                    if (nuevoItem == null || nuevoItem == "") {
                        item = item
                    } else {

                        item = nuevoItem


                    }



                } else if (edicion == 2) {

                    item = ""

                }


                switch (boton) {

                    case item1HechizosBtn: hechizos.item1 = item; break
                    case item2HechizosBtn: hechizos.item2 = item; break
                    case item3HechizosBtn: hechizos.item3 = item; break
                    case item4HechizosBtn: hechizos.item4 = item; break
                    case item5HechizosBtn: hechizos.item5 = item; break
                    case item6HechizosBtn: hechizos.item6 = item; break
                    case item7HechizosBtn: hechizos.item7 = item; break
                    case item8HechizosBtn: hechizos.item8 = item; break
                    case item9HechizosBtn: hechizos.item9 = item; break
                    case item10HechizosBtn: hechizos.item10 = item; break
                    case item11HechizosBtn: hechizos.item11 = item; break


                }

                edicion = 0
                editarIco.src = "img/editar.png"
                guardar()
            }



        }//AGREGAR HECHIZO

    }//FIN FUNCIONES HECHIZOS

    {//FUNCIONES HABILIDADES

        {//ABRIR MODAL HABILIDADES
            habilidadesBtn.addEventListener('click', function () {

                if (edicion == 0) {

                    modalHabilidades.style.display = "grid";
                    edicion = 0;
                    editarIco.src = "img/editar.png"

                }

            })
        }//ABRIR MODAL HABILIDADES


        {//CERRAR MODAL HABILIDADES
            cerrarModalHabilidadesBtn.addEventListener('click', function () { modalHabilidades.style.display = "none"; edicion = 0; editarIco.src = "img/editar.png" })
        }//CERRAR MODAL HABILIDADES


        {//AGREGAR HABILIDADES

            item1HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item1HabilidadesBtn, habilidades.item1) })
            item2HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item2HabilidadesBtn, habilidades.item2) })
            item3HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item3HabilidadesBtn, habilidades.item3) })
            item4HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item4HabilidadesBtn, habilidades.item4) })
            item5HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item5HabilidadesBtn, habilidades.item5) })
            item6HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item6HabilidadesBtn, habilidades.item6) })
            item7HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item7HabilidadesBtn, habilidades.item7) })
            item8HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item8HabilidadesBtn, habilidades.item8) })
            item9HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item9HabilidadesBtn, habilidades.item9) })
            item10HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item10HabilidadesBtn, habilidades.item10) })
            item11HabilidadesBtn.addEventListener('click', function () { agregarHabilidad(item11HabilidadesBtn, habilidades.item11) })



            function agregarHabilidad(boton, item) {

                if (edicion == 1) {

                    var nuevoItem = prompt("ingrese item", "")
                    if (nuevoItem == null || nuevoItem == "") {
                        item = item
                    } else {

                        item = nuevoItem


                    }



                } else if (edicion == 2) {

                    item = ""

                }


                switch (boton) {

                    case item1HabilidadesBtn: habilidades.item1 = item; break
                    case item2HabilidadesBtn: habilidades.item2 = item; break
                    case item3HabilidadesBtn: habilidades.item3 = item; break
                    case item4HabilidadesBtn: habilidades.item4 = item; break
                    case item5HabilidadesBtn: habilidades.item5 = item; break
                    case item6HabilidadesBtn: habilidades.item6 = item; break
                    case item7HabilidadesBtn: habilidades.item7 = item; break
                    case item8HabilidadesBtn: habilidades.item8 = item; break
                    case item9HabilidadesBtn: habilidades.item9 = item; break
                    case item10HabilidadesBtn: habilidades.item10 = item; break
                    case item11HabilidadesBtn: habilidades.item11 = item; break


                }

                edicion = 0
                editarIco.src = "img/editar.png"
                guardar()
            }



        }//AGREGAR HABILIDADES

    }//FIN FUNCIONES HEABILIDADES

    {//SELECCIONAR RAZA

        {//ABRIR MODAL RAZAS
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
        }//ABRIR MODAL RAZAS

        {//CERRAR MODAL RAZAS
            cerrarModalRazaBtn.addEventListener('click', function () { modalRaza.style.display = "none" })
        }//CERRAR MODAL RAZAS

        {//RAZAS

            humano.addEventListener('click', function () {

                raza.icono = "img/humano.png"
                personaje.nombre = "Humano"

                caracteristicas.fuerza = 4
                caracteristicas.destreza = 3
                caracteristicas.inteligencia = 4
                caracteristicas.constitucion = 3
                caracteristicas.reflejos = 3
                caracteristicas.sabiduria = 3

                sentidos.vista = 3
                sentidos.oido = 3
                sentidos.olfato = 3
                sentidos.gusto = 3
                sentidos.tacto = 3
                sentidos.visionNocturna = 0

                raza.fuerza = 4
                raza.destreza = 3
                raza.inteligencia = 4
                raza.constitucion = 3
                raza.reflejos = 3
                raza.sabiduria = 3

                raza.vista = 3
                raza.oido = 3
                raza.olfato = 3
                raza.gusto = 3
                raza.tacto = 3
                raza.visionNocturna = 0

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                SlotInicial()

                limpiarMascota()

                modalRaza.style.display = "none"
                guardar()

            })

            elfo.addEventListener('click', function () {

                raza.icono = "img/elfo.png"
                personaje.nombre = "Elfo"

                caracteristicas.fuerza = 2
                caracteristicas.destreza = 3
                caracteristicas.inteligencia = 5
                caracteristicas.constitucion = 2
                caracteristicas.reflejos = 3
                caracteristicas.sabiduria = 4

                sentidos.vista = 6
                sentidos.oido = 4
                sentidos.olfato = 2
                sentidos.gusto = 2
                sentidos.tacto = 3
                sentidos.visionNocturna = 2


                raza.fuerza = 2
                raza.destreza = 3
                raza.inteligencia = 5
                raza.constitucion = 2
                raza.reflejos = 3
                raza.sabiduria = 4

                raza.vista = 6
                raza.oido = 4
                raza.olfato = 2
                raza.gusto = 2
                raza.tacto = 3
                raza.visionNocturna = 2

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                limpiarMascota()

                SlotInicial()

                modalRaza.style.display = "none"
                guardar()

            })

            enano.addEventListener('click', function () {

                raza.icono = "img/enano.png"
                personaje.nombre = "Enano"


                caracteristicas.fuerza = 4
                caracteristicas.destreza = 1
                caracteristicas.inteligencia = 4
                caracteristicas.constitucion = 4
                caracteristicas.reflejos = 1
                caracteristicas.sabiduria = 4

                sentidos.vista = 3
                sentidos.oido = 4
                sentidos.olfato = 3
                sentidos.gusto = 1
                sentidos.tacto = 3
                sentidos.visionNocturna = 6


                raza.fuerza = 4
                raza.destreza = 1
                raza.inteligencia = 4
                raza.constitucion = 4
                raza.reflejos = 1
                raza.sabiduria = 4

                raza.vista = 3
                raza.oido = 4
                raza.olfato = 3
                raza.gusto = 1
                raza.tacto = 3
                raza.visionNocturna = 6

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                limpiarMascota()

                SlotInicial()

                modalRaza.style.display = "none"
                guardar()

            })

            orco.addEventListener('click', function () {

                raza.icono = "img/orco.png"
                personaje.nombre = "Orco"

                caracteristicas.fuerza = 6
                caracteristicas.destreza = 2
                caracteristicas.inteligencia = 2
                caracteristicas.constitucion = 4
                caracteristicas.reflejos = 2
                caracteristicas.sabiduria = 1

                sentidos.vista = 2
                sentidos.oido = 5
                sentidos.olfato = 4
                sentidos.gusto = 1
                sentidos.tacto = 3
                sentidos.visionNocturna = 5


                raza.fuerza = 6
                raza.destreza = 2
                raza.inteligencia = 2
                raza.constitucion = 4
                raza.reflejos = 2
                raza.sabiduria = 1

                raza.vista = 2
                raza.oido = 5
                raza.olfato = 4
                raza.gusto = 1
                raza.tacto = 3
                raza.visionNocturna = 5

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                limpiarMascota()

                SlotInicial()

                modalRaza.style.display = "none"
                guardar()

            })

            draco.addEventListener('click', function () {

                raza.icono = "img/draco.png"
                personaje.nombre = "Troll"

                caracteristicas.fuerza = 3
                caracteristicas.destreza = 6
                caracteristicas.inteligencia = 1
                caracteristicas.constitucion = 3
                caracteristicas.reflejos = 3
                caracteristicas.sabiduria = 1

                sentidos.vista = 4
                sentidos.oido = 2
                sentidos.olfato = 4
                sentidos.gusto = 4
                sentidos.tacto = 1
                sentidos.visionNocturna = 3


                raza.fuerza = 3
                raza.destreza = 6
                raza.inteligencia = 1
                raza.constitucion = 3
                raza.reflejos = 3
                raza.sabiduria = 1

                raza.vista = 4
                raza.oido = 2
                raza.olfato = 4
                raza.gusto = 4
                raza.tacto = 1
                raza.visionNocturna = 3

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                limpiarMascota()

                SlotInicial()

                modalRaza.style.display = "none"
                guardar()

            })

            growit.addEventListener('click', function () {

                raza.icono = "img/growit.png"
                personaje.nombre = "Goblin"

                caracteristicas.fuerza = 1
                caracteristicas.destreza = 3
                caracteristicas.inteligencia = 6
                caracteristicas.constitucion = 1
                caracteristicas.reflejos = 1
                caracteristicas.sabiduria = 4

                sentidos.vista = 4
                sentidos.oido = 5
                sentidos.olfato = 1
                sentidos.gusto = 1
                sentidos.tacto = 1
                sentidos.visionNocturna = 5


                raza.fuerza = 1
                raza.destreza = 3
                raza.inteligencia = 6
                raza.constitucion = 1
                raza.reflejos = 1
                raza.sabiduria = 4

                raza.vista = 4
                raza.oido = 5
                raza.olfato = 1
                raza.gusto = 1
                raza.tacto = 1
                raza.visionNocturna = 5

                imprimir()
                limpiarModificadores()
                limpiarReinos()
                limpiarMagicos()
                limpiarEstilos()
                limpiarMarciales()
                limpiarArmaduraMagica()

                limpiarArmadura()

                limpiarMascota()

                SlotInicial()

                modalRaza.style.display = "none"
                guardar()

            })
        }//RAZAS

    }//SELECCIONAR RAZA

    {//NOMBRE
        nombreBtn.addEventListener('click', function () {

            if (edicion == 1) {

                var nombre = prompt("Elige un Nombre", "")
                if (nombre == null || nombre == "") {
                    personaje.nombre = raza.nombre
                } else {
                    personaje.nombre = nombre


                }

            }

            guardar()
        })
    }//FIN NOMBRE



    {//EXP
        expBtn.addEventListener('click', function () {

            if (edicion == 1) {
                var experienciaGanada = prompt("EXPERIENCIA GANADA", "")
                if (experienciaGanada == null || experienciaGanada == "" || isNaN(experienciaGanada)) {
                    personaje.experiencia = personaje.experiencia

                } else {
                    personaje.experiencia = personaje.experiencia + parseInt(experienciaGanada)
                    personaje.experienciaTotal = personaje.experienciaTotal + parseInt(experienciaGanada)
                }
            } else if (edicion == 2) {
                var experienciaGanada = prompt("EXPERIENCIA PERDIDA", "")
                if (experienciaGanada == null || experienciaGanada == "" || isNaN(experienciaGanada)) {
                    personaje.experiencia = personaje.experiencia
                } else {
                    personaje.experiencia = personaje.experiencia - parseInt(experienciaGanada)
                    personaje.experienciaTotal = personaje.experienciaTotal - parseInt(experienciaGanada)

                }
            }

            guardar()
        })
    }//FIN EXP

    {//SELECCIONAR CARACTERISTICAS

        fuerzaBtn.addEventListener('click', function () { SeleccionCaracteristicas(fuerzaBtn, caracteristicas.fuerza, raza.fuerza, "fuerza",) })
        destrezaBtn.addEventListener('click', function () { SeleccionCaracteristicas(destrezaBtn, caracteristicas.destreza, raza.destreza, "destreza",) })
        inteligenciaBtn.addEventListener('click', function () { SeleccionCaracteristicas(inteligenciaBtn, caracteristicas.inteligencia, raza.inteligencia, "inteligencia",) })
        constitucionBtn.addEventListener('click', function () { SeleccionCaracteristicas(constitucionBtn, caracteristicas.constitucion, raza.constitucion, "constitucion") })
        reflejosBtn.addEventListener('click', function () { SeleccionCaracteristicas(reflejosBtn, caracteristicas.reflejos, raza.reflejos, "reflejos") })
        sabiduriaBtn.addEventListener('click', function () { SeleccionCaracteristicas(sabiduriaBtn, caracteristicas.sabiduria, raza.sabiduria, "sabiduria") })


        function SeleccionCaracteristicas(boton, bono, racial, textoSeleccion) {

            if (edicion == 1 && personaje.experiencia >= (bono * 5)) {

                personaje.experiencia = personaje.experiencia - (bono * 5)
                bono = bono + 1

                switch (boton) {

                    case fuerzaBtn: caracteristicas.fuerza = bono; break
                    case destrezaBtn: caracteristicas.destreza = bono; break
                    case inteligenciaBtn: caracteristicas.inteligencia = bono; break
                    case constitucionBtn: caracteristicas.constitucion = bono; break
                    case reflejosBtn: caracteristicas.reflejos = bono; break
                    case sabiduriaBtn: caracteristicas.sabiduria = bono; break

                }


            } else if (edicion == 1 && personaje.experiencia < (bono * 5)) {

                consola.textContent = "EXP INSUFICIENTE"

            } else if (edicion == 2 && bono > racial) {

                bono = bono - 1
                personaje.experiencia = personaje.experiencia + (bono * 5)

                switch (boton) {

                    case fuerzaBtn: caracteristicas.fuerza = bono; break
                    case destrezaBtn: caracteristicas.destreza = bono; break
                    case inteligenciaBtn: caracteristicas.inteligencia = bono; break
                    case constitucionBtn: caracteristicas.constitucion = bono; break
                    case reflejosBtn: caracteristicas.reflejos = bono; break
                    case sabiduriaBtn: caracteristicas.sabiduria = bono; break

                }

            } else if (edicion == 0 && boton.style.backgroundColor == "") {

                limpiarSalvaciones()
                limpiarCombate()
                limpiarSentidos()
                limpiarSlots()

                divisor.caracteristicas = divisor.caracteristicas + 1
                modificador.caracteristicas = modificador.caracteristicas + bono
                modificador.final = Math.floor(modificador.caracteristicas / divisor.caracteristicas)

                boton.style.backgroundColor = "rgb(255,255,225)";
                

                consola.innerHTML = textoSeleccion


            } else if (edicion == 0) {

                divisor.caracteristicas = divisor.caracteristicas - 1
                modificador.caracteristicas = modificador.caracteristicas - bono
                modificador.final = Math.floor(modificador.caracteristicas / divisor.caracteristicas)

                boton.style.backgroundColor = ""

            }



            guardar()

        }

    }//FIN SELECCIONAR CARACTERISTICAS

    {//MODIFICAR INDICADORES

        vidaBtn.addEventListener('click', function () { modificarIndicadores(vidaBtn, indicadores.vida, indicadores.modificadorVida, indicadores.vidaMaxima, "vida") })
        energiaBtn.addEventListener('click', function () { modificarIndicadores(energiaBtn, indicadores.energia, indicadores.modificadorEnergia, indicadores.energiaMaxima, "energia") })
        manaBtn.addEventListener('click', function () { modificarIndicadores(manaBtn, indicadores.mana, indicadores.modificadorMana, indicadores.manaMaximo, "maná") })


        function modificarIndicadores(boton, indicador, modificador, maximo, textoSeleccion) {



            if (edicion == 1 && indicador < maximo) {

                var resultado = parseInt(prompt('INGRESE VALOR'))
                modificador = modificador + resultado

                if (modificador + indicador > maximo) {


                    indicador = maximo
                    modificador = 0
                }


            } else if (edicion == 2) {

                var resultado = parseInt(prompt('INGRESE VALOR'))
                modificador = modificador - resultado

            } else if (edicion == 0) {

                consola.innerHTML = textoSeleccion
            }

            switch (boton) {

                case vidaBtn: indicadores.modificadorVida = modificador; break
                case energiaBtn: indicadores.modificadorEnergia = modificador; break
                case manaBtn: indicadores.modificadorMana = modificador; break

            }

            guardar()
        }

    }//MODIFICAR INDICADORES

    {//SELECCIONAR SENTIDOS

        vistaBtn.addEventListener('click', function () { SeleccionSentidos(vistaBtn, sentidos.vista, raza.vista, "vista") })
        oidoBtn.addEventListener('click', function () { SeleccionSentidos(oidoBtn, sentidos.oido, raza.oido, "oido") })
        olfatoBtn.addEventListener('click', function () { SeleccionSentidos(olfatoBtn, sentidos.olfato, raza.olfato, "olfato") })
        gustoBtn.addEventListener('click', function () { SeleccionSentidos(gustoBtn, sentidos.gusto, raza.gusto, "gusto") })
        tactoBtn.addEventListener('click', function () { SeleccionSentidos(tactoBtn, sentidos.tacto, raza.tacto, "tacto") })
        visionNocturnaBtn.addEventListener('click', function () { SeleccionSentidos(visionNocturnaBtn, sentidos.visionNocturna, raza.visionNocturna, "Visión Nocturna") })


        function SeleccionSentidos(boton, bono, racial, textoSeleccion) {

            if (edicion == 1 && personaje.experiencia >= (bono * 3) && bono !== 0) {

                personaje.experiencia = personaje.experiencia - (bono * 3)
                bono = bono + 1


                switch (boton) {

                    case vistaBtn: sentidos.vista = bono; break
                    case oidoBtn: sentidos.oido = bono; break
                    case olfatoBtn: sentidos.olfato = bono; break
                    case gustoBtn: sentidos.gusto = bono; break
                    case tactoBtn: sentidos.tacto = bono; break
                    case visionNocturnaBtn: sentidos.visionNocturna = bono; break

                }


            } else if (edicion == 1 && personaje.experiencia < (bono * 3)) {

                consola.textContent = "EXP INSUFICIENTE"

            } else if (edicion == 2 && bono > racial) {

                bono = bono - 1
                personaje.experiencia = personaje.experiencia + (bono * 3)

                switch (boton) {

                    case vistaBtn: sentidos.vista = bono; break
                    case oidoBtn: sentidos.oido = bono; break
                    case olfatoBtn: sentidos.olfato = bono; break
                    case gustoBtn: sentidos.gusto = bono; break
                    case tactoBtn: sentidos.tacto = bono; break
                    case visionNocturnaBtn: sentidos.visionNocturna = bono; break

                }

            } else if (edicion == 0 && boton.style.backgroundColor == "") {

                limpiarSalvaciones()
                limpiarCombate()
                limpiarCaracteristicas()
                limpiarSlots()

                divisor.sentidos = divisor.sentidos + 1
                modificador.sentidos = modificador.sentidos + bono
                modificador.final = Math.floor(modificador.sentidos / divisor.sentidos)

                boton.style.backgroundColor = "rgb(255,255,225)";
            


                consola.innerHTML = textoSeleccion


            } else if (edicion == 0) {

                divisor.sentidos = divisor.sentidos - 1
                modificador.sentidos = modificador.sentidos - bono
                modificador.final = Math.floor(modificador.sentidos / divisor.sentidos)

                boton.style.backgroundColor = ""

            }

            guardar()

        }

    }//FIN SELECCIONAR SENTIDOS

    {//SELECCIONAR SALVACIONES

        fortalezaBtn.addEventListener('click', function () { seleccionSalvaciones(fortalezaBtn, salvaciones.fortaleza, "fortaleza") })
        agilidadBtn.addEventListener('click', function () { seleccionSalvaciones(agilidadBtn, salvaciones.agilidad, "agilidad") })
        voluntadBtn.addEventListener('click', function () { seleccionSalvaciones(voluntadBtn, salvaciones.voluntad, "voluntad") })

        function seleccionSalvaciones(boton, bono, textoSeleccion) {


            if (edicion == 0 && boton.style.backgroundColor == "") {

                limpiarSentidos()
                limpiarCombate()
                limpiarCaracteristicas()
                limpiarSlots()

                divisor.salvaciones = divisor.salvaciones + 1
                modificador.salvaciones = modificador.salvaciones + bono
                modificador.final = Math.floor(modificador.salvaciones / divisor.salvaciones)

                boton.style.backgroundColor = "rgb(255,255,225)";

                consola.innerHTML = textoSeleccion


            } else if (edicion == 0) {

                divisor.salvaciones = divisor.salvaciones - 1
                modificador.salvaciones = modificador.salvaciones - bono
                modificador.final = Math.floor(modificador.salvaciones / divisor.salvaciones)

                boton.style.backgroundColor = ""

            }

            guardar()
        }

    }//SELECCIONAR SALVACIONES

    {//SELECCIONAR COMBATE

        ataqueBtn.addEventListener('click', function () { seleccionCombate(ataqueBtn, combate.ataque, "ataque") })
        esquivaBtn.addEventListener('click', function () { seleccionCombate(esquivaBtn, combate.esquiva, "esquiva") })
        bloqueoBtn.addEventListener('click', function () { seleccionCombate(bloqueoBtn, combate.bloqueo, "bloqueo") })
        sigiloBtn.addEventListener('click', function () { seleccionCombate(sigiloBtn, combate.sigilo, "sigilo") })
        equilibrioBtn.addEventListener('click', function () { seleccionCombate(equilibrioBtn, combate.equilibrio, "equilibrio") })
        persuasionBtn.addEventListener('click', function () { seleccionCombate(persuasionBtn, combate.persuasion, "persuasion") })

        function seleccionCombate(boton, bono, textoSeleccion) {


            if (edicion == 0 && boton.style.backgroundColor == "") {

                limpiarSentidos()
                limpiarSalvaciones()
                limpiarCaracteristicas()
                limpiarSlots()


                divisor.combate = divisor.combate + 1
                modificador.combate = modificador.combate + bono
                modificador.final = Math.floor(modificador.combate / divisor.combate)

                boton.style.backgroundColor = "rgb(255,255,225)";

                consola.innerHTML = textoSeleccion


            } else if (edicion == 0) {

                divisor.combate = divisor.combate - 1
                modificador.combate = modificador.combate - bono
                modificador.final = Math.floor(modificador.combate / divisor.combate)

                boton.style.backgroundColor = ""

            }

            guardar()


        }

    }//SELECCIONAR COMBATE

    {//SELECCIONAR MOVIMIENTO

        velocidadBtn.addEventListener('click', function () { seleccionCombate(velocidadBtn, combate.velocidad, "velocidad") })
        accionesBtn.addEventListener('click', function () { seleccionCombate(accionesBtn, combate.acciones, "acciones") })
        iniciativaBtn.addEventListener('click', function () { seleccionCombate(iniciativaBtn, combate.iniciativa, "iniciativa") })


        function seleccionCombate(boton, bono, textoSeleccion) {


            if (edicion == 0) {

                consola.innerHTML = textoSeleccion
            }

            guardar()
        }

    }//SELECCIONAR MOVIMIENTO

    {//SELECCION DE SLOTS/////

        var slotSeleccionado = 1

        {//SELECCIONAR PARA TIRADA

            slot1Btn.addEventListener('click', function () { seleccionSlot(slot1Btn, slot2Btn, slot1, slot2, slot1.nombre, slot2.nombre) })
            slot2Btn.addEventListener('click', function () { seleccionSlot(slot2Btn, slot1Btn, slot2, slot1, slot2.nombre, slot1.nombre) })

            function seleccionSlot(boton, boton2, primaria, secuandaria, arma1, arma2) {


                if (edicion == 0 && boton.style.background == "") {

                    limpiarSalvaciones()
                    limpiarCombate()
                    limpiarSentidos()
                    limpiarCaracteristicas()

                    boton.style.background = "rgb(255,255,225)"
                    boton2.style.background = ""

                    modificador.slotsVal1 = primaria.val1
                    modificador.slotsVal2 = primaria.val2


                    modificador.final = modificador.slotsVal1
                    divisor.slot = divisor.slot + 1





                    if ((arma1 == "Arco" && arma2 == "Flechas")) {

                        combate.bonoAtaque = primaria.val1 + secuandaria.val1 + marciales.arco
                        modificador.final = primaria.val1 + secuandaria.val1

                        if (caracteristicas.fuerza > primaria.val2) {

                            combate.bonoDanno = (primaria.val2*1.5) + Math.round(caracteristicas.destreza/3) + secuandaria.val2

                        } else {
 
                            combate.bonoDanno = (caracteristicas.fuerza*1.5) + Math.round(caracteristicas.destreza/3) + secuandaria.val2

                        }


                    }else if(arma1 == "Arco" && arma2 != "Flechas"){

                        consola.textContent = "Necesitas Flechas!"
 
                
                    }else if(arma1 == "Flechas" && arma2 == "Arco"){

                        combate.bonoAtaque = 1
                        modificador.final = 1
 
                
                    }else if(arma1 == "2 Manos"){

                        combate.bonoAtaque = primaria.val1 + marciales.dosManos
                        modificador.final = primaria.val1 + marciales.dosManos
                        combate.bonoDanno = (caracteristicas.fuerza * 1.8) + primaria.val2
                        

                    }else if (arma1 == "Escudo") {


                        combate.bonoBloqueo =  primaria.val1 + marciales.escudo
                        modificador.final = combate.bloqueo + primaria.val1
                        combate.bonoDanno = ((caracteristicas.fuerza + caracteristicas.constitucion ) / 3) + primaria.val2
                        
                        

                    }else if(arma1 == "1 Mano"){

                        combate.bonoAtaque = primaria.val1 + marciales.unaMano
                        modificador.final = primaria.val1 + marciales.unaMano
                        combate.bonoDanno = Math.round(caracteristicas.fuerza/2) + Math.round(caracteristicas.destreza/2) + primaria.val2

                    }
                    else if(arma1 == "Arrojadizas"){

                        combate.bonoAtaque = primaria.val1 + marciales.arrojadiza
                        modificador.final = primaria.val1 + marciales.arrojadiza
                        combate.bonoDanno = Math.round(caracteristicas.fuerza / 3) + Math.round(caracteristicas.destreza/3) + primaria.val2

                    }else if(arma1 == "Varita"){

                        combate.bonoAtaque = primaria.val1 + magicos.varita
                        modificador.final = primaria.val1 + magicos.varita
                        combate.bonoDanno = Math.round(caracteristicas.inteligencia/2) + Math.round(caracteristicas.destreza/2) + primaria.val2



                    }else if(arma1 == "Mano"){

                        combate.bonoAtaque = primaria.val1 + magicos.magia
                        modificador.final = primaria.val1 + magicos.magia
                        combate.bonoDanno = (caracteristicas.inteligencia / 1.25) + primaria.val2



                    }else if(arma1 == "Baculo"){

                        combate.bonoAtaque = primaria.val1 + magicos.baculo
                        modificador.final = primaria.val1 + magicos.baculo
                        combate.bonoDanno = Math.round((caracteristicas.inteligencia / 2) + caracteristicas.sabiduria)  + primaria.val2




                    } else if(arma1 == "Totem"){

                        combate.bonoAtaque = primaria.val1 + magicos.totem
                        modificador.final = primaria.val1 + magicos.totem
                        combate.bonoDanno = Math.round(caracteristicas.inteligencia/1.5) + primaria.val2




                    }else if(arma1 == "Runa"){

                        combate.bonoAtaque = primaria.val1 + magicos.runa
                        modificador.final = primaria.val1 + magicos.runa
                        combate.bonoDanno = Math.round(caracteristicas.sabiduria / 2) + primaria.val2




                    } else if(arma1 == "Puño" || arma1 == "Patada" ){

                        combate.bonoAtaque = primaria.val1 + marciales.natural
                        modificador.final = primaria.val1 + marciales.natural
                        combate.bonoDanno = caracteristicas.fuerza + primaria.val2




                    } else if((arma1 == "Hoja Runa" && magicos.orbe == 3) || (arma1 == "Hoja Runa" && magicos.orbe == 3)){

                        combate.bonoAtaque = primaria.val1 + magicos.orbe
                        modificador.final = primaria.val1 + magicos.orbe
                        combate.bonoDanno = Math.round(((caracteristicas.inteligencia + caracteristicas.fuerza)/1.25)) + primaria.val2




                    } else if((arma1 == "Hoja Runa" && magicos.orbe < 3) || (arma1 == "Hoja Runa" && magicos.orbe < 3)){

                        combate.bonoAtaque = primaria.val1 + magicos.orbe
                        modificador.final = primaria.val1 + magicos.orbe
                        combate.bonoDanno = Math.floor(((caracteristicas.inteligencia + caracteristicas.fuerza)/1.5)) + primaria.val2




                    }else {

                        combate.bonoAtaque = primaria.val1
                        modificador.final = primaria.val1
                        combate.bonoDanno = caracteristicas.fuerza + primaria.val2

                    } 



                } else if (boton.style.backgroundColor = "rgb(255,255,225)") {

                    boton.style.background = ""
                    boton2.style.background = ""
                
                    modificador.final = 0
                    divisor.slot = divisor.slot - 1

                    modificador.slotsVal1 = 0
                    modificador.slotsVal2 = 0

                    combate.bonoAtaque = 0
                    combate.bonoBloqueo = 0
                    combate.bonoDanno = 0

                }


                guardar()

            }

        }//SELECCIONAR PARA TIRADA

        {//ABRIR MODAL ARMAS

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

        }//ABRIR MODAL ARMAS

        {//CERRAR MODAL ARMAS

            cerrarModalArmasBtn.addEventListener('click', function () { modalArmas.style.display = "none" })

        }//CERRAR MODAL ARMAS

        {//ELEGIR TIPO DE ARMA

            unaMano.addEventListener('click', function () {
                sleccionarArma("1 Mano", "img/daga.png", "img/ataque1mano.png", "img/danno.png", "img/rupturadaga.png",
                    "1 Mano", "img/daga.png", "img/ataque1mano.png", "img/danno.png", "img/rupturadaga.png")
            })

            dosManos.addEventListener('click', function () {
                sleccionarArma("2 Manos", "img/espada.png", "img/ataque2manos.png", "img/danno.png", "img/ruptura.png",
                    "2 Manos", "img/espada.png", "img/ataque2manos.png", "img/danno.png", "img/ruptura.png")
            })

            arco.addEventListener('click', function () {
                sleccionarArma("Arco", "img/arco.png", "img/flechasarco.png", "img/fuerzamaxima.png", "img/rupturaarco.png",
                    "Flechas", "img/carcaj.png", "img/ataqueflecha.png", "img/danno.png", "img/rupturaflecha.png")
            })

            arrojadizas.addEventListener('click', function () {
                sleccionarArma("Arrojadizas", "img/arrojadiza.png", "img/ataquearrojadiza.png", "img/danno.png", "img/rupturaarrojadiza.png",
                    "Arrojadizas", "img/arrojadiza.png", "img/ataquearrojadiza.png", "img/danno.png", "img/rupturaarrojadiza.png")
            })

            naturales.addEventListener('click', function () {
                sleccionarArma("Puño", "img/punno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
                    "Patada", "img/patada.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")
            })

            escudo.addEventListener('click', function () {
                sleccionarArma("Escudo", "img/escudo.png", "img/bloqueo.png", "img/mitigacion.png", "img/rupturaescudo.png",
                    "Escudo", "img/escudo.png", "img/bloqueo.png", "img/mitigacion.png", "img/rupturaescudo.png"
                )
            })

            varita.addEventListener('click', function () {
                sleccionarArma("Varita", "img/varita.png", "img/ataquevarita.png", "img/podervarita.png", "img/rupturavarita.png",
                    "Varita", "img/varita.png", "img/ataquevarita.png", "img/podervarita.png", "img/rupturavarita.png"
                )
            })

            orbe.addEventListener('click', function () {
                sleccionarArma("Hoja Runa", "img/hojaruna.png", "img/ataquehojaruna.png", "img/podervarita.png", "img/rupturaorbe.png",
                    "Hoja Runa", "img/hojaruna.png", "img/ataquehojaruna.png", "img/podervarita.png", "img/rupturaorbe.png")
            })

            pergamino.addEventListener('click', function () {
                sleccionarArma("Baculo", "img/baculo.png", "img/ataquebaculo.png", "img/podervarita.png", "img/rupturabaculo.png",
                    "Baculo", "img/baculo.png", "img/ataquebaculo.png", "img/podervarita.png", "img/rupturabaculo.png"
                )
            })

            runa.addEventListener('click', function () {
                sleccionarArma("Runa", "img/runa.png", "img/ataqueruna.png", "img/podervarita.png", "img/rupturaruna.png",
                    "Runa", "img/runa.png", "img/ataqueruna.png", "img/podervarita.png", "img/rupturaruna.png"
                )
            })

            totem.addEventListener('click', function () {
                sleccionarArma("Totem", "img/totem.png", "img/ataquetotem.png", "img/podervarita.png", "img/rupturatotem.png",
                    "Totem", "img/totem.png", "img/ataquetotem.png", "img/podervarita.png", "img/rupturatotem.png"
                )
            })

            magia.addEventListener('click', function () {
                sleccionarArma("Mano", "img/magia.png", "img/ataquemagia.png", "img/podervarita.png", "img/rupturahueso.png",
                    "Mano", "img/magia.png", "img/ataquemagia.png", "img/podervarita.png", "img/rupturahueso.png")
            })


            function sleccionarArma(nombreArma1, iconoArma1, icono1Arma1, icono2Arma1, icono3Arma1, nombreArma2, iconoArma2, icono1Arma2, icono2Arma2, icono3Arma2) {

                limpiarSlots()


                if (slotSeleccionado == 1) {



                    if (nombreArma1 == "Arco") {

                        slot1.nombre = nombreArma1
                        slot1.tipo = iconoArma1

                        slot1.ico1 = icono1Arma1
                        slot1.ico2 = icono2Arma1
                        slot1.ico3 = icono3Arma1
                        slot1.val1 = 1
                        slot1.val2 = 3
                        slot1.val3 = 18



                        slot2.tipo = iconoArma2
                        slot2.nombre = nombreArma2

                        slot2.ico1 = icono1Arma2
                        slot2.ico2 = icono2Arma2
                        slot2.ico3 = icono3Arma2
                        slot2.val1 = 1
                        slot2.val2 = 3
                        slot2.val3 = 18


                    } else if (slot1.nombre == "Puño") {

                        slot1.nombre = nombreArma2
                        slot1.tipo = iconoArma2

                        slot1.ico1 = icono1Arma2
                        slot1.ico2 = icono2Arma2
                        slot1.ico3 = icono3Arma2
                        slot1.val1 = 1
                        slot1.val2 = 3
                        slot1.val3 = 18

                    } else if (slot1.nombre == "Patada") {

                        slot1.nombre = nombreArma1
                        slot1.tipo = iconoArma1

                        slot1.ico1 = icono1Arma1
                        slot1.ico2 = icono2Arma1
                        slot1.ico3 = icono3Arma1
                        slot1.val1 = 1
                        slot1.val2 = 3
                        slot1.val3 = 18


                    } else {

                        slot1.nombre = nombreArma1
                        slot1.tipo = iconoArma1

                        slot1.ico1 = icono1Arma1
                        slot1.ico2 = icono2Arma1
                        slot1.ico3 = icono3Arma1
                        slot1.val1 = 1
                        slot1.val2 = 3
                        slot1.val3 = 18

                    }

                } else if (slotSeleccionado == 2) {



                    if (nombreArma1 == "Arco") {

                        slot1.nombre = nombreArma1
                        slot1.tipo = iconoArma1

                        slot1.ico1 = icono1Arma1
                        slot1.ico2 = icono2Arma1
                        slot1.ico3 = icono3Arma1
                        slot1.val1 = 1
                        slot1.val2 = 3
                        slot1.val3 = 18



                        slot2.tipo = iconoArma2
                        slot2.nombre = nombreArma2

                        slot2.ico1 = icono1Arma2
                        slot2.ico2 = icono2Arma2
                        slot2.ico3 = icono3Arma2
                        slot2.val1 = 1
                        slot2.val2 = 3
                        slot2.val3 = 18


                    } else if (slot2.nombre == "Patada") {


                        slot2.nombre = nombreArma1
                        slot2.tipo = iconoArma1

                        slot2.ico1 = icono1Arma1
                        slot2.ico2 = icono2Arma1
                        slot2.ico3 = icono3Arma1
                        slot2.val1 = 1
                        slot2.val2 = 3
                        slot2.val3 = 18


                    } else if (slot2.nombre == "Puño") {

                        slot2.nombre = nombreArma2
                        slot2.tipo = iconoArma2

                        slot2.ico1 = icono1Arma2
                        slot2.ico2 = icono2Arma2
                        slot2.ico3 = icono3Arma2
                        slot2.val1 = 1
                        slot2.val2 = 3
                        slot2.val3 = 18

                    } else {

                        slot2.nombre = nombreArma1
                        slot2.tipo = iconoArma1

                        slot2.ico1 = icono1Arma1
                        slot2.ico2 = icono2Arma1
                        slot2.ico3 = icono3Arma1
                        slot2.val1 = 1
                        slot2.val2 = 3
                        slot2.val3 = 18

                    }

                }

                modalArmas.style.display = "none"
                guardar()

            }


        }//ELEGIR TIPO DE ARMA

        {//MODIFICACION SLOTS

            txt1Slot1Btn.addEventListener('click', function () { modificarArma(txt1Slot1Btn, slot1.val1) })
            ico1Slot1Btn.addEventListener('click', function () { modificarArma(txt1Slot1Btn, slot1.val1) })

            txt2Slot1Btn.addEventListener('click', function () { modificarArma(txt2Slot1Btn, slot1.val2) })
            ico2Slot1Btn.addEventListener('click', function () { modificarArma(txt2Slot1Btn, slot1.val2) })

            txt3Slot1Btn.addEventListener('click', function () { modificarArma(txt3Slot1Btn, slot1.val3) })
            ico3Slot1Btn.addEventListener('click', function () { modificarArma(txt3Slot1Btn, slot1.val3) })

            txt1Slot2Btn.addEventListener('click', function () { modificarArma(txt1Slot2Btn, slot2.val1) })
            ico1Slot2Btn.addEventListener('click', function () { modificarArma(txt1Slot2Btn, slot2.val1) })

            txt2Slot2Btn.addEventListener('click', function () { modificarArma(txt2Slot2Btn, slot2.val2) })
            ico2Slot2Btn.addEventListener('click', function () { modificarArma(txt2Slot2Btn, slot2.val2) })

            txt3Slot2Btn.addEventListener('click', function () { modificarArma(txt3Slot2Btn, slot2.val3) })
            ico3Slot2Btn.addEventListener('click', function () { modificarArma(txt3Slot2Btn, slot2.val3) })

            function modificarArma(boton, valor) {

                if (edicion == 1) {

                    valor = valor + 1

                    switch (boton) {

                        case txt1Slot1Btn: slot1.val1 = valor; break
                        case txt2Slot1Btn: slot1.val2 = valor; break
                        case txt3Slot1Btn: slot1.val3 = valor; break
                        case txt1Slot2Btn: slot2.val1 = valor; break
                        case txt2Slot2Btn: slot2.val2 = valor; break
                        case txt3Slot2Btn: slot2.val3 = valor; break

                    }

                } else if (edicion == 2) {

                    valor = valor - 1


                    switch (boton) {

                        case txt1Slot1Btn: slot1.val1 = valor; break
                        case txt2Slot1Btn: slot1.val2 = valor; break
                        case txt3Slot1Btn: slot1.val3 = valor; break
                        case txt1Slot2Btn: slot2.val1 = valor; break
                        case txt2Slot2Btn: slot2.val2 = valor; break
                        case txt3Slot2Btn: slot2.val3 = valor; break

                    }

                }

            }


        }//MODIFICACION SLOT

    }//SELECCION DE SLOTS/////

    {//DADO

        dado.addEventListener('click', () => {

            guardar()
            edicion = 0
            editarIco.src = "img/editar.png"


            var numeroDado = Math.ceil((Math.random() * 20) + 0)

            if (isNaN(modificador.final)) {

                modificador.final = 0

            } else if (slot1Btn.style.background !== "" || slot2Btn.style.background !== "") {

                var ataqueArma = Math.floor(modificador.final + caracteristicas.destreza + Math.floor((caracteristicas.fuerza + caracteristicas.inteligencia) / 6))
                var dannoArma = Math.floor(combate.bonoDanno)
                var resultadoTirada = numeroDado + ataqueArma

                if (numeroDado   == 20) { 

                    document.write =  consola.textContent + "<br>" + "CRITICO!" + "</br>" + resultadoTirada + " / " + dannoArma * 2

                } else if(numeroDado == 1){

                    consola.innerHTML = "PIFIA!"
                    
                    
                }
                 else {


                    consola.innerHTML = "Dado " + numeroDado  + "</br>" + "Total " + resultadoTirada + " / " + "D. base " + dannoArma

                }


                ataqueArma = 0


            } else {

                var resultadoTirada = numeroDado + modificador.final

                if (numeroDado == 20) {

                    consola.innerHTML = "CRITICO! " + "</br>" + resultadoTirada

                } else if (numeroDado == 1){

                    consola.innerHTML = "PIFIA!"

                } else {

                    consola.textContent = resultadoTirada

                }




            }


        })

    }//DADO

    {//BOTONERA INFERIOR


        


        personajeBtn.addEventListener('click', function() {

            


            academias.style.display = "none"
            equipo.style.display = "none"
            

            

        })

        academiasBtn.addEventListener('click', function() {

            


            academias.style.display = "grid"
            equipo.style.display = "none"

            

        })


      /  equipoBtn.addEventListener('click', function() {

            


            academias.style.display = "none"
            equipo.style.display = "grid"
           


            

        })

    }//FIN BOTONERA INFERIOR

{//MODIFICAR EQUIPO

    
    yelmoVal1Btn.addEventListener('click', function () { modificarEquipo(yelmoVal1Btn, yelmo.val1) })
    yelmoVal2Btn.addEventListener('click', function () { modificarEquipo(yelmoVal2Btn, yelmo.val2) })
    yelmoVal3Btn.addEventListener('click', function () { modificarEquipo(yelmoVal3Btn, yelmo.val3) })

    hombrerasVal1Btn.addEventListener('click', function () { modificarEquipo(hombrerasVal1Btn, hombreras.val1) })
    hombrerasVal2Btn.addEventListener('click', function () { modificarEquipo(hombrerasVal2Btn, hombreras.val2) })
    hombrerasVal3Btn.addEventListener('click', function () { modificarEquipo(hombrerasVal3Btn, hombreras.val3) })

    pecheraVal1Btn.addEventListener('click', function () { modificarEquipo(pecheraVal1Btn, pechera.val1) })
    pecheraVal2Btn.addEventListener('click', function () { modificarEquipo(pecheraVal2Btn, pechera.val2) })
    pecheraVal3Btn.addEventListener('click', function () { modificarEquipo(pecheraVal3Btn, pechera.val3) })

    guantesVal1Btn.addEventListener('click', function () { modificarEquipo(guantesVal1Btn, guantes.val1) })
    guantesVal2Btn.addEventListener('click', function () { modificarEquipo(guantesVal2Btn, guantes.val2) })
    guantesVal3Btn.addEventListener('click', function () { modificarEquipo(guantesVal3Btn, guantes.val3) })

    pantalonesVal1Btn.addEventListener('click', function () { modificarEquipo(pantalonesVal1Btn, pantalones.val1) })
    pantalonesVal2Btn.addEventListener('click', function () { modificarEquipo(pantalonesVal2Btn, pantalones.val2) })
    pantalonesVal3Btn.addEventListener('click', function () { modificarEquipo(pantalonesVal3Btn, pantalones.val3) })

    botasVal1Btn.addEventListener('click', function () { modificarEquipo(botasVal1Btn, botas.val1) })
    botasVal2Btn.addEventListener('click', function () { modificarEquipo(botasVal2Btn, botas.val2) })
    botasVal3Btn.addEventListener('click', function () { modificarEquipo(botasVal3Btn, botas.val3) })


    function modificarEquipo(boton, valor) {

        if (edicion == 1) {

            valor = valor + 1

            

        } else if (edicion == 2 && valor > 0) {

            valor = valor - 1



        }

        switch (boton) {

            case yelmoVal1Btn: yelmo.val1 = valor; break
            case yelmoVal2Btn: yelmo.val2 = valor; break
            case yelmoVal3Btn: yelmo.val3 = valor; break

            case hombrerasVal1Btn: hombreras.val1 = valor; break
            case hombrerasVal2Btn: hombreras.val2 = valor; break
            case hombrerasVal3Btn: hombreras.val3 = valor; break

            case pecheraVal1Btn: pechera.val1 = valor; break
            case pecheraVal2Btn: pechera.val2 = valor; break
            case pecheraVal3Btn: pechera.val3 = valor; break

            case guantesVal1Btn: guantes.val1 = valor; break
            case guantesVal2Btn: guantes.val2 = valor; break
            case guantesVal3Btn: guantes.val3 = valor; break
            
            case pantalonesVal1Btn: pantalones.val1 = valor; break
            case pantalonesVal2Btn: pantalones.val2 = valor; break
            case pantalonesVal3Btn: pantalones.val3 = valor; break

            case botasVal1Btn: botas.val1 = valor; break
            case botasVal2Btn: botas.val2 = valor; break
            case botasVal3Btn: botas.val3 = valor; break

        }

        guardar()
    }




}// FIN MODIFICAR EQUIPO




}//FUNCIONES




{//ACTUALIZAR DATOS

    setInterval(() => {
        refrescar()
        imprimir()
    }, 100);



    function guardar() {

        localStorage.setItem('personaje', JSON.stringify(personaje))
        localStorage.setItem('raza', JSON.stringify(raza))
        localStorage.setItem('caracteristicas', JSON.stringify(caracteristicas))
        localStorage.setItem('sentidos', JSON.stringify(sentidos))
        localStorage.setItem('indicadores', JSON.stringify(indicadores))
        localStorage.setItem('slot1', JSON.stringify(slot1))
        localStorage.setItem('slot2', JSON.stringify(slot2))
        localStorage.setItem('mochila', JSON.stringify(mochila))
        localStorage.setItem('hechizos', JSON.stringify(hechizos))
        localStorage.setItem('habilidades', JSON.stringify(habilidades))
        localStorage.setItem('reinos', JSON.stringify(reinos))
        localStorage.setItem('magicos', JSON.stringify(magicos))
        localStorage.setItem('estilos', JSON.stringify(estilos))
        localStorage.setItem('marciales', JSON.stringify(marciales))
        localStorage.setItem('yelmo', JSON.stringify(yelmo))
        localStorage.setItem('hombreras', JSON.stringify(hombreras))
        localStorage.setItem('pechera', JSON.stringify(pechera))
        localStorage.setItem('guantes', JSON.stringify(guantes))
        localStorage.setItem('pantalones', JSON.stringify(pantalones))
        localStorage.setItem('botas', JSON.stringify(botas))
        localStorage.setItem('brazal', JSON.stringify(brazal))
        localStorage.setItem('anillo', JSON.stringify(anillo))
        localStorage.setItem('collar', JSON.stringify(collar))
        localStorage.setItem('totales', JSON.stringify(totales))
        localStorage.setItem('penalizadores', JSON.stringify(penalizadores))
        localStorage.setItem('mascota', JSON.stringify(mascota))




    }

    function refrescar() {




        {//INDICADORES
            indicadores.vida = (caracteristicas.fuerza * caracteristicas.constitucion) + indicadores.modificadorVida
            indicadores.vidaMaxima = (caracteristicas.fuerza * caracteristicas.constitucion)
            indicadores.energia = (caracteristicas.destreza * caracteristicas.reflejos) +  indicadores.modificadorEnergia
            indicadores.energiaMaxima = (caracteristicas.destreza * caracteristicas.reflejos)
            indicadores.mana = (caracteristicas.inteligencia * caracteristicas.sabiduria) + indicadores.modificadorMana
            indicadores.manaMaximo = (caracteristicas.inteligencia * caracteristicas.sabiduria)
        }//INDICADORES

        {//SALVACIONES
            salvaciones.fortaleza = caracteristicas.constitucion + Math.floor((caracteristicas.fuerza) / 2)
            salvaciones.agilidad = caracteristicas.reflejos + Math.floor(((caracteristicas.destreza) / 1.5) - (caracteristicas.constitucion) / 2)
            salvaciones.voluntad = caracteristicas.sabiduria + Math.floor((caracteristicas.inteligencia) / 2)
        }//SALVACIONES

        {//COMBATE
            combate.ataque = caracteristicas.destreza + bonoCombate.ataque - penalizadores.val1 + Math.floor((caracteristicas.fuerza + caracteristicas.inteligencia) / 6)
            combate.esquiva = Math.floor((caracteristicas.destreza + caracteristicas.sabiduria) / 3) + caracteristicas.reflejos + bonoCombate.esquiva -penalizadores.val2
            combate.bloqueo = Math.floor((caracteristicas.constitucion / 3) + caracteristicas.destreza) + bonoCombate.bloqueo
            combate.sigilo = caracteristicas.destreza + Math.ceil(((caracteristicas.reflejos + caracteristicas.sabiduria) / 2) - (caracteristicas.constitucion) / 2) + bonoCombate.sigilo
            combate.equilibrio = caracteristicas.reflejos + Math.floor((caracteristicas.destreza) / 1.5) + bonoCombate.equilibrio
            combate.persuasion = caracteristicas.sabiduria + Math.floor((caracteristicas.inteligencia) / 2) + bonoCombate.persuasion
        }//COMBATE

        {//MOVIMIENTO
            movimiento.velocidad = 3 + Math.floor((caracteristicas.destreza + caracteristicas.fuerza) / 2) - Math.floor(caracteristicas.constitucion / 2) - penalizadores.val3
            movimiento.acciones = 2 + (Math.floor((caracteristicas.constitucion) / 3) /2) + ((Math.floor((caracteristicas.reflejos) / 3)) /2) - penalizadores.val6
            movimiento.iniciativa = Math.floor(((caracteristicas.inteligencia + caracteristicas.reflejos + caracteristicas.destreza) / 1.3) - ((caracteristicas.fuerza + caracteristicas.constitucion) / 3))
        }//MOVIMIENTO

        {//ARMAS NATURALES

            if (slot1.nombre == "Puño") {

                slot1.val1 = Math.round((caracteristicas.destreza / 2) + (marciales.natural / 2));
                slot1.val2 = Math.round((caracteristicas.fuerza / 3) + (marciales.natural / 1.5));
                slot1.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);

            } else if (slot1.nombre == "Patada") {

                slot1.val1 = Math.round((caracteristicas.destreza / 3) + (marciales.natural / 1.5));
                slot1.val2 = Math.round((caracteristicas.fuerza / 2) + (marciales.natural / 1.5));
                slot1.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);

            } else if (slot1.nombre == "Mano") {

                slot1.val1 = Math.round(caracteristicas.destreza / 1.5);
                slot1.val2 = Math.round((caracteristicas.inteligencia) / 1.5 );
                slot1.val3 = Math.round((caracteristicas.constitucion) * 3 + (caracteristicas.sabiduria * 1.5))

            }else if (slot1.nombre == "Garras") {

                slot1.val1 = Math.round(caracteristicas.destreza / 1.5);
                slot1.val2 = Math.round((caracteristicas.fuerza / 3) + (caracteristicas.destreza / 2));
                slot1.val3 = Math.round(caracteristicas.constitucion * 3)

            }else if (slot1.nombre == "Dientes") {

                slot1.val1 = Math.round(caracteristicas.destreza / 1.5);
                slot1.val2 = Math.round((caracteristicas.fuerza / 2));
                slot1.val3 = Math.round(caracteristicas.constitucion * 3);

            }

            //--------------------------------

            if (slot2.nombre == "Puño") {

                slot2.val1 = Math.round((caracteristicas.destreza / 2) + (marciales.natural / 2));
                slot2.val2 = Math.round((caracteristicas.fuerza / 3) + (marciales.natural / 1.5));
                slot2.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);

            } else if (slot2.nombre == "Patada") {

                slot2.val1 = Math.round((caracteristicas.destreza / 3) + (marciales.natural / 1.5));
                slot2.val2 = Math.round((caracteristicas.fuerza / 2) + (marciales.natural / 1.5));
                slot2.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);

            }else if (slot2.nombre == "Mano") {

                slot2.val1 = Math.round(caracteristicas.destreza / 1.5);
                slot2.val2 = Math.round((caracteristicas.inteligencia) / 1.5 );
                slot2.val3 = Math.round((caracteristicas.constitucion) * 3 + (caracteristicas.sabiduria * 1.5))

            }else if (slot2.nombre == "Garras") {

                slot2.val1 = Math.round(caracteristicas.destreza / 3);
                slot2.val2 = Math.round(caracteristicas.fuerza * 0.5);
                slot2.val3 = Math.round(caracteristicas.constitucion * 3);

            }else if (slot2.nombre == "Dientes") {

                slot2.val1 = Math.round(caracteristicas.destreza / 3);
                slot2.val2 = Math.round((caracteristicas.fuerza /2) + (caracteristicas.destreza /3));
                slot2.val3 = Math.round(caracteristicas.constitucion * 3);

            }

        }//ARMAS NATURALES



        //ËNALIZADORES EQUIPO

    if (yelmo.tipo == "LIGERA"){

        penalizadores.val1 = 3 - marciales.ligera 
        penalizadores.val2 = 3 - marciales.ligera 
        penalizadores.val3 = 3 - marciales.ligera 
        penalizadores.val5 = 3 - marciales.ligera 
        penalizadores.val4 = 3 - marciales.ligera
        penalizadores.val6 = 4.5 - (marciales.ligera * 1.5)

        

    } else if (yelmo.tipo == "MEDIA"){

        penalizadores.val1 = 4 - marciales.media
        penalizadores.val2 = 4 - marciales.media                                     
        penalizadores.val3 = 4 - marciales.media
        penalizadores.val5 = 4 - marciales.media
        penalizadores.val4 = 4 - marciales.media
        penalizadores.val6 = 5 - (marciales.media * 1.5)


    } else if (yelmo.tipo == "PESADA"){

        penalizadores.val1 = 5 - marciales.pesada
        penalizadores.val2 = 5 - marciales.pesada                                      
        penalizadores.val3 = 5 - marciales.pesada
        penalizadores.val5 = 5 - marciales.pesada
        penalizadores.val6 = 5.5 - (marciales.pesada * 1.5)
        penalizadores.val4 = 5 - marciales.pesada

       



    } else if (yelmo.tipo == "NATURAL"){

        penalizadores.val1 = 0
        penalizadores.val2 = 0                                      
        penalizadores.val3 = 0
        penalizadores.val5 = 0


    }


    if (collar.texto !== "NATURAL"){

        penalizadores.val4 = 3 - magicos.collar
        penalizadores.val6 = 2 - (magicos.collar * 0.5)

    } else {}


    if (brazal.texto !== "NATURAL"){

        penalizadores.val4 = 3 - magicos.brazal
        penalizadores.val6 = 2 - (magicos.brazal * 0.5)

    } else {}


    if (anillo.texto !== "NATURAL"){

        penalizadores.val4 = 3 - magicos.anillo
        penalizadores.val6 = 2 - (magicos.anillo * 0.5)

    } else {}
    
    
    if (brazal.texto !== "NATURAL" && collar.texto !== "NATURAL"){

        penalizadores.val4 = 6 - (magicos.collar + magicos.brazal)
        penalizadores.val6 = 4 - ((magicos.collar + magicos.brazal) * 0.5)

    }else{}

    

    if (brazal.texto !== "NATURAL" && anillo.texto !== "NATURAL"){

        penalizadores.val4 = 6 - (magicos.anillo + magicos.brazal)
        penalizadores.val6 = 4 - ((magicos.anillo + magicos.brazal) *0.5)

    }else{}

    if (anillo.texto !== "NATURAL" && collar.texto !== "NATURAL"){

        penalizadores.val4 = 6 - (magicos.collar + magicos.anillo)
        penalizadores.val6 = 4 - ((magicos.collar + magicos.anillo) * 0.5)

    }else{

    }



    if (brazal.texto !== "NATURAL" && collar.texto !== "NATURAL" && anillo.texto !== "NATURAL"){

        penalizadores.val4 = 9 - (magicos.collar + magicos.brazal + magicos.anillo )
        penalizadores.val6 = 6 - ((magicos.collar + magicos.brazal + magicos.anillo ) * 0.5)

    }else{}




    if (brazal.texto == "NATURAL" && collar.texto == "NATURAL" && anillo.texto == "NATURAL"){

        penalizadores.val4 = penalizadores.val4
        penalizadores.val6 =  penalizadores.val6

    }else{}



    //-----------FIN PENALIZADORES
       

    }

    function imprimir() {




        {//PERSONAJE

            razaIco.src = raza.icono
            nombreTxt.textContent = personaje.nombre
            expTxt.textContent = personaje.experiencia

        }//PERSONAJE

        {//CARACTERISTICAS

            fuerzaTxt.textContent = caracteristicas.fuerza
            destrezaTxt.textContent = caracteristicas.destreza
            inteligenciaTxt.textContent = caracteristicas.inteligencia
            constitucionTxt.textContent = caracteristicas.constitucion
            reflejosTxt.textContent = caracteristicas.reflejos
            sabiduriaTxt.textContent = caracteristicas.sabiduria

        }//CARACTERISTICAS

        {//INDICADORES

            vidaTxt.textContent = indicadores.vida
            energiaTxt.textContent = indicadores.energia
            manaTxt.textContent = indicadores.mana

        }//INDICADORES

        {//SENTIDOS

            vistaTxt.textContent = sentidos.vista
            oidoTxt.textContent = sentidos.oido
            olfatoTxt.textContent = sentidos.olfato
            gustoTxt.textContent = sentidos.gusto
            tactoTxt.textContent = sentidos.tacto
            visionNocturnaTxt.textContent = sentidos.visionNocturna

        }//SENTIDOS

        {//SALVACIONES

            fortalezaTxt.textContent = salvaciones.fortaleza
            agilidadTxt.textContent = salvaciones.agilidad
            voluntadTxt.textContent = salvaciones.voluntad

        }//SALVACIONES

        {//COMBATE

            ataqueTxt.textContent = combate.ataque + combate.bonoAtaque
            esquivaTxt.textContent = combate.esquiva
            bloqueoTxt.textContent = combate.bloqueo + combate.bonoBloqueo
            sigiloTxt.textContent = combate.sigilo - penalizadores.val4
            equilibrioTxt.textContent = combate.equilibrio
            persuasionTxt.textContent = combate.persuasion

        }//COMBATE

        {//MOVIMIENTO

            velocidadTxt.textContent = movimiento.velocidad
            accionesTxt.textContent = movimiento.acciones
            iniciativaTxt.textContent = movimiento.iniciativa

        }//MOVIMIENTO

        {//SLOTS
            slot1Ico.src = slot1.tipo
            slot1Txt.textContent = slot1.nombre

            ico1Slot1.src = slot1.ico1
            ico2Slot1.src = slot1.ico2
            ico3Slot1.src = slot1.ico3

            txt1Slot1.textContent = slot1.val1
            txt2Slot1.textContent = slot1.val2
            txt3Slot1.textContent = slot1.val3



            slot2Ico.src = slot2.tipo
            slot2Txt.textContent = slot2.nombre

            ico1Slot2.src = slot2.ico1
            ico2Slot2.src = slot2.ico2
            ico3Slot2.src = slot2.ico3

            txt1Slot2.textContent = slot2.val1
            txt2Slot2.textContent = slot2.val2
            txt3Slot2.textContent = slot2.val3
        }//SLOTS

        {//ITEM MOCHILA

            item1MochilaTxt.textContent = mochila.item1
            item2MochilaTxt.textContent = mochila.item2
            item3MochilaTxt.textContent = mochila.item3
            item4MochilaTxt.textContent = mochila.item4
            item5MochilaTxt.textContent = mochila.item5
            item6MochilaTxt.textContent = mochila.item6
            item7MochilaTxt.textContent = mochila.item7
            item8MochilaTxt.textContent = mochila.item8
            item9MochilaTxt.textContent = mochila.item9
            item10MochilaTxt.textContent = mochila.item10
            item11MochilaTxt.textContent = mochila.item11


            pocionVidaTxt.textContent = mochila.pocionVida
            pocionEnergiaTxt.textContent = mochila.pocionEnergia
            pocionManaTxt.textContent = mochila.pocionMana

            oroTxt.textContent = mochila.oro
            plataTxt.textContent = mochila.plata
            cobreTxt.textContent = mochila.cobre


        }//ITEM MOCHILA




        {//ITEM HECHIZOS

            item1HechizosTxt.textContent = hechizos.item1
            item2HechizosTxt.textContent = hechizos.item2
            item3HechizosTxt.textContent = hechizos.item3
            item4HechizosTxt.textContent = hechizos.item4
            item5HechizosTxt.textContent = hechizos.item5
            item6HechizosTxt.textContent = hechizos.item6
            item7HechizosTxt.textContent = hechizos.item7
            item8HechizosTxt.textContent = hechizos.item8
            item9HechizosTxt.textContent = hechizos.item9
            item10HechizosTxt.textContent = hechizos.item10
            item11HechizosTxt.textContent = hechizos.item11




        }//ITEM HECHIZOS




        {//ITEM HABILIDADES

            item1HabilidadesTxt.textContent = habilidades.item1
            item2HabilidadesTxt.textContent = habilidades.item2
            item3HabilidadesTxt.textContent = habilidades.item3
            item4HabilidadesTxt.textContent = habilidades.item4
            item5HabilidadesTxt.textContent = habilidades.item5
            item6HabilidadesTxt.textContent = habilidades.item6
            item7HabilidadesTxt.textContent = habilidades.item7
            item8HabilidadesTxt.textContent = habilidades.item8
            item9HabilidadesTxt.textContent = habilidades.item9
            item10HabilidadesTxt.textContent = habilidades.item10
            item11HabilidadesTxt.textContent = habilidades.item11



        }//ITEM HABILIDADES


        {//REINOS DE MAGIA
        nivelFuegoTxt.textContent = reinos.fuego
        nivelAguaTxt.textContent = reinos.agua
        nivelAireTxt.textContent = reinos.aire
        nivelTierraTxt.textContent = reinos.tierra
        nivelRayoTxt.textContent = reinos.rayo
        nivelLuzTxt.textContent = reinos.luz
        nivelEterTxt.textContent = reinos.eter
        nivelVidaTxt.textContent = reinos.vida
        nivelPsiqueTxt.textContent = reinos.psique

        }//FIN REINOS DE MAGIA

        {//OBJETOS MAGICOS

        nivelVaritaTxt.textContent = magicos.varita
        nivelOrbeTxt.textContent = magicos.orbe
        nivelBaculoTxt.textContent = magicos.baculo
        nivelRunaTxt.textContent = magicos.runa
        nivelTotemTxt.textContent = magicos.totem
        nivelMagiaTxt.textContent = magicos.magia
        nivelBrazalTxt.textContent = magicos.brazal
        nivelCollarTxt.textContent = magicos.collar
        nivelAnilloTxt.textContent = magicos.anillo

        }//FIN OBJETOS MAGICOS


        {//ESTILOS DE COMBATE

            nivelOfensivoTxt.textContent = estilos.ofensivo
            nivelDefensivoTxt.textContent = estilos.defensivo
            nivelBerserkerTxt.textContent = estilos.berserker
            nivelSigiloTxt.textContent = estilos.sigilo
            nivelCazadorTxt.textContent = estilos.cazador
            nivelExploradorTxt.textContent = estilos.explorador
            nivelLiderTxt.textContent = estilos.lider
            nivelLegionTxt.textContent = estilos.legion
            nivelCaballeriaTxt.textContent = estilos.caballeria
            
    
            }//FIN ESTILOS DE COMBATE


            {//MARCIALES

                nivel1manoTxt.textContent = marciales.unaMano
                nivel2manosTxt.textContent = marciales.dosManos
                nivelArcoTxt.textContent = marciales.arco
                nivelArrojadizaTxt.textContent = marciales.arrojadiza
                nivelEscudoTxt.textContent = marciales.escudo
                nivelNaturalTxt.textContent = marciales.natural
                nivelLigeraTxt.textContent = marciales.ligera
                nivelMediaTxt.textContent = marciales.media
                nivelPesadaTxt.textContent = marciales.pesada
                
        
                }//FIN MARCIALES




                {//EQUIPO

yelmoTxt.textContent = yelmo.tipo

yelmoVal1.textContent = yelmo.val1
yelmoVal2.textContent = yelmo.val2
yelmoVal3.textContent = yelmo.val3

hombrerasTxt.textContent = hombreras.tipo

hombrerasVal1.textContent = hombreras.val1
hombrerasVal2.textContent = hombreras.val2
hombrerasVal3.textContent = hombreras.val3

pecheraTxt.textContent = pechera.tipo

pecheraVal1.textContent = pechera.val1
pecheraVal2.textContent = pechera.val2
pecheraVal3.textContent = pechera.val3

guantesTxt.textContent = guantes.tipo

guantesVal1.textContent = guantes.val1
guantesVal2.textContent = guantes.val2
guantesVal3.textContent = guantes.val3

pantalonesTxt.textContent = pantalones.tipo

pantalonesVal1.textContent = pantalones.val1
pantalonesVal2.textContent = pantalones.val2
pantalonesVal3.textContent = pantalones.val3

botasTxt.textContent = botas.tipo

botasVal1.textContent = botas.val1
botasVal2.textContent = botas.val2
botasVal3.textContent = botas.val3

pVelocidadTxt.textContent = penalizadores.val1
pAtaqueTxt.textContent = penalizadores.val2
pEsquivaTxt.textContent = penalizadores.val3
pSigiloTxt.textContent = penalizadores.val4
pEquilibrioTxt.textContent = penalizadores.val5
pAccionesTxt.textContent = penalizadores.val6


totales.val1 = yelmo.val1 + Math.round((collar.val1 + anillo.val1 + brazal.val1) / 3)
totales.val2 = yelmo.val2 + Math.round((collar.val2 + anillo.val2 + brazal.val2) / 3)
totales.val3 = yelmo.val3 + Math.round((collar.val3 + anillo.val3 + brazal.val3) / 3)

tBloqueoTxt.textContent = totales.val1
tMitigacionTxt.textContent = totales.val2
tRupturaTxt.textContent = totales.val3


if (yelmo.tipo == "NATURAL"){

    yelmo.tipo = "NATURAL"
    yelmo.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    yelmo.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    yelmo.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);


    hombreras.tipo = "NATURAL"
    hombreras.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    hombreras.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    hombreras.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);


    pechera.tipo = "NATURAL"
    pechera.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    pechera.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    pechera.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);


    guantes.tipo = "NATURAL"
    guantes.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    guantes.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    guantes.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);


    pantalones.tipo = "NATURAL"
    pantalones.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    pantalones.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    pantalones.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);


    botas.tipo = "NATURAL"
    botas.val1 = Math.round(((caracteristicas.constitucion / 2) + (caracteristicas.destreza / 3))/2);
    botas.val2 = Math.round(((caracteristicas.constitucion + caracteristicas.fuerza) / 1.5 + (caracteristicas.destreza / 3))/2);
    botas.val3 = Math.round((caracteristicas.fuerza + caracteristicas.constitucion) * 2);

}

brazalTxt.textContent = brazal.texto
brazalVal1.textContent = brazal.val1
brazalVal2.textContent = brazal.val2
brazalVal3.textContent = brazal.val3


collarTxt.textContent = collar.texto
collarVal1.textContent = collar.val1
collarVal2.textContent = collar.val2
collarVal3.textContent = collar.val3


anilloTxt.textContent = anillo.texto
anilloVal1.textContent = anillo.val1
anilloVal2.textContent = anillo.val2
anilloVal3.textContent = anillo.val3



}//FIN EQUIPO
}



}//ACTUALIZAR DATOS

{//LIMPIAR DATOS

    function limpiarCaracteristicas() {

        fuerzaBtn.style.background = ""
        destrezaBtn.style.background = ""
        inteligenciaBtn.style.background = ""
        constitucionBtn.style.background = ""
        reflejosBtn.style.background = ""
        sabiduriaBtn.style.background = ""

        modificador.caracteristicas = 0
        divisor.caracteristicas = 0
        modificador.final = 0

    }

    function limpiarSentidos() {

        vistaBtn.style.background = ""
        oidoBtn.style.background = ""
        olfatoBtn.style.background = ""
        gustoBtn.style.background = ""
        tactoBtn.style.background = ""
        visionNocturnaBtn.style.background = ""

        modificador.sentidos = 0
        divisor.sentidos = 0
        modificador.final = 0

    }

    function limpiarSalvaciones() {

        fortalezaBtn.style.background = ""
        agilidadBtn.style.background = ""
        voluntadBtn.style.background = ""

        modificador.salvaciones = 0
        divisor.salvaciones = 0
        modificador.final = 0

    }

    function limpiarCombate() {


        ataqueBtn.style.backgroundColor = ""
        esquivaBtn.style.backgroundColor = ""
        bloqueoBtn.style.backgroundColor = ""
        sigiloBtn.style.backgroundColor = ""
        equilibrioBtn.style.backgroundColor = ""
        persuasionBtn.style.backgroundColor = ""

        modificador.combate = 0
        divisor.combate = 0
        modificador.final = 0

        combate.bonoAtaque = 0
        combate.bonoDanno = 0
        combate.bonoBloqueo = 0


    }

    function limpiarSlots() {

        slot1Btn.style.backgroundColor = ""
        slot2Btn.style.backgroundColor = ""
        divisor.slot = 0
        modificador.final = 0



    }

    function SlotInicial(){

        slotSeleccionado = 1

        sleccionarArma("Puño", "img/punno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
                    "Puño", "img/punno.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")

        slotSeleccionado = 2
        
        sleccionarArma("Patada", "img/patada.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png",
                                "Patada", "img/patada.png", "img/ataque.png", "img/danno.png", "img/rupturahueso.png")

    }

    function limpiarModificadores() {

        indicadores.modificadorVida = 0
        indicadores.modificadorEnergia = 0
        indicadores.modificadorMana = 0

        personaje.experiencia = personaje.experienciaTotal


    }

    function limpiarReinos() {

        reinos.fuego=0
        reinos.agua=0
        reinos.aire=0
        reinos.tierra=0
        reinos.rayo=0
        reinos.luz=0
        reinos.eter=0
        reinos.vida=0
        reinos.psique=0

    }

    function limpiarMagicos(){

        magicos.varita=0
        magicos.orbe=0
        magicos.baculo=0
        magicos.runa=0
        magicos.totem=0
        magicos.magia=0
        magicos.brazal=0
        magicos.collar=0
        magicos.anillo=0
    }


    function limpiarEstilos(){

        estilos.ofensivo=0
        estilos.defensivo=0
        estilos.berserker=0
        estilos.sigilo=0
        estilos.cazador=0
        estilos.lider=0
        estilos.legion=0
        estilos.caballeria=0
      
    }

    function limpiarMarciales(){

        marciales.unaMano = 0
        marciales.dosManos = 0
        marciales.arco = 0
        marciales.arrojadiza = 0
        marciales.escudo = 0
        marciales.natural = 0
        marciales.ligera = 0
        marciales.media = 0
        marciales.pesada = 0



    }

    function limpiarArmadura(){

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
    pantalones.val1 = Math.round(caracteristicas.constitucion / 4);
    pantalones.val2 = Math.round(caracteristicas.fuerza / 2);
    pantalones.val3 = Math.round(caracteristicas.fuerza * 2);


    botas.tipo = "NATURAL"
    botas.val1 = Math.round(caracteristicas.constitucion / 4);
    botas.val2 = Math.round(caracteristicas.fuerza / 2);
    botas.val3 = Math.round(caracteristicas.fuerza * 2);


    penalizadores.val6 = 0;
    penalizadores.val4 = 0;

    }




    function limpiarArmaduraMagica(){

        anillo.texto = "NATURAL";
        anillo.val1 = 0;
        anillo.val2 = 0;
        anillo.val3 = 0;
    
    
        brazal.texto = "NATURAL";
        brazal.val1 = 0;
        brazal.val2 = 0;
        brazal.val3 = 0;
    
    
        collar.texto = "NATURAL";
        collar.val1 = 0;
        collar.val2 = 0;
        collar.val3 = 0;
    
    
    
        }


    function limpiarMascota(){

        mascota.nombre= "Mascota"
            mascota.icono= "img/mascota.png"
        
            mascota.patas= 0
        
            mascota.fuerzaBase= 0
            mascota.destrezaBase=0
            mascota.inteligenciaBase=0
            mascota.constitucionBase=0
            mascota.reflejosBase=0
            mascota.sabiduriaBase=0
        
        
            mascota.fuerza= 0
            mascota.destreza=0
            mascota.inteligencia=0
            mascota.constitucion=0
            mascota.reflejos=0
            mascota.sabiduria=0
        
            mascota.vista= 0
            mascota.oido=0
            mascota.olfato=0
            mascota.gusto=0
            mascota.tacto=0
            mascota.vOscuridad=0

            mascota.vistaBase= 0
            mascota.oidoBase=0
            mascota.olfatoBase=0
            mascota.gustoBase=0
            mascota.tactoBase=0
            mascota.vOscuridadBase=0
        
            mascota.armaduraFisica = ""
            mascota.armaduraFisicaIcono = "img/nada"

            mascota.armaduraMagica = ""
            mascota.armaduraMagicaIcono = "img/nada.png"

            mascota.arma1 = ""
            mascota.arma1Icono = "img/nada.png"
            mascota.arma1Danno = "img/danno.png" 
            mascota.arma2 = ""
            mascota.arma2Icono = "img/nada.png"
            mascota.arma2Danno = "img/danno.png"


            mascota.habilidad1 = ""
            mascota.habilidad2 = ""
            mascota.habilidad3 = ""
            mascota.habilidad4 = ""

            edicion = 0
            editarIco.src = "img/editar.png"

    }



}//LIMPIAR DATOS










