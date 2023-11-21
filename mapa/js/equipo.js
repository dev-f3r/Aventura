{//EQUIPAR

    var piezaSeleccionada = ""


    cerrarModalArmaduraBtn.addEventListener('click', function () { modalArmadura.style.display = "none" })

    cerrarModalReinosBtn.addEventListener('click', function () { modalReinos.style.display = "none" })

    cerrarModalArmaduraMagicaBtn.addEventListener('click', function () { modalArmaduraMagica.style.display = "none" })


    armaduraBtn.addEventListener('click', function () { tipoPieza("Todas", "Fisica") })


    slotYelmoIco.addEventListener('click', function () { tipoPieza("Yelmo", "Fisica") })
    slotHombrerasIco.addEventListener('click', function () { tipoPieza("Hombreras", "Fisica") })
    slotPecheraIco.addEventListener('click', function () { tipoPieza("Pechera", "Fisica") })
    slotGuantesIco.addEventListener('click', function () { tipoPieza("Guantes", "Fisica") })
    slotPantalonIco.addEventListener('click', function () { tipoPieza("Pantalon", "Fisica") })
    slotBotasIco.addEventListener('click', function () { tipoPieza("Botas", "Fisica") })

    slotMagico1Ico.addEventListener('click', function () { tipoPieza("magica1", "Magica") })
    slotMagico2Ico.addEventListener('click', function () { tipoPieza("magica2", "Magica") })
    slotMagico3Ico.addEventListener('click', function () { tipoPieza("magica3", "Magica") })


    function tipoPieza(pieza, tipoDeArmadura) {

        if (edicion == 1 && tipoDeArmadura == "Fisica") {

            modalArmadura.style.display = "grid";
            piezaSeleccionada = pieza

        } else if (edicion == 1 && tipoDeArmadura == "Magica") {

            modalArmaduraMagica.style.display = "grid";
            piezaSeleccionada = pieza

        } else if (edicion == 2) {

            piezaSeleccionada = pieza
            seleccionarPieza("Natural", pieza)


        }

    }

    anilloMagicoBtn.addEventListener('click', function () { seleccionarPieza("Anillo", piezaSeleccionada) })
    collarMagicoBtn.addEventListener('click', function () { seleccionarPieza("Collar", piezaSeleccionada) })
    brazalMagicoBtn.addEventListener('click', function () { seleccionarPieza("Brazal", piezaSeleccionada) })

    ligeraBtn.addEventListener('click', function () { seleccionarPieza("Ligera", piezaSeleccionada) })
    mediaBtn.addEventListener('click', function () { seleccionarPieza("Media", piezaSeleccionada) })
    pesadaBtn.addEventListener('click', function () { seleccionarPieza("Pesada", piezaSeleccionada) })


    function seleccionarPieza(elemento, pieza) {




        switch (pieza) {


            case "Yelmo":

                if (elemento == "Ligera") {

                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmoligero.png";

                    personaje.yelmoIcono1 = "img/yelmoligerob.png";
                    personaje.yelmoIcono2 = "img/yelmoligerom.png";
                    personaje.yelmoIcono3 = "img/yelmoligeror.png";

                    personaje.yelmoVal1 = 1;
                    personaje.yelmoVal2 = 3;
                    personaje.yelmoVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmomedio.png";

                    personaje.yelmoIcono1 = "img/yelmomediob.png";
                    personaje.yelmoIcono2 = "img/yelmomediom.png";
                    personaje.yelmoIcono3 = "img/yelmomedior.png";

                    personaje.yelmoVal1 = 1;
                    personaje.yelmoVal2 = 6;
                    personaje.yelmoVal3 = 21;

                } else if (elemento == "Pesada") {

                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmopesado.png";

                    personaje.yelmoIcono1 = "img/yelmopesadob.png";
                    personaje.yelmoIcono2 = "img/yelmopesadom.png";
                    personaje.yelmoIcono3 = "img/yelmopesador.png";

                    personaje.yelmoVal1 = 3;
                    personaje.yelmoVal2 = 9;
                    personaje.yelmoVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.yelmoTipo = "Cabeza";
                    personaje.yelmoIcono = "img/nada.png";

                    personaje.yelmoIcono1 = "img/nada.png";
                    personaje.yelmoIcono2 = "img/nada.png";
                    personaje.yelmoIcono3 = "img/nada.png";
                    personaje.yelmoVal1 = 0;
                    personaje.yelmoVal2 = 0;
                    personaje.yelmoVal3 = 0;

                }
                break

            case "Hombreras":

                if (elemento == "Ligera") {

                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombrerasligeras.png";

                    personaje.hombrerasIcono1 = "img/hombrerasligerasb.png";
                    personaje.hombrerasIcono2 = "img/hombrerasligerasm.png";
                    personaje.hombrerasIcono3 = "img/hombrerasligerasr.png";

                    personaje.hombrerasVal1 = 1;
                    personaje.hombrerasVal2 = 3;
                    personaje.hombrerasVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombrerasmedias.png";

                    personaje.hombrerasIcono1 = "img/hombrerasmediasb.png";
                    personaje.hombrerasIcono2 = "img/hombrerasmediasm.png";
                    personaje.hombrerasIcono3 = "img/hombrerasmediasr.png";

                    personaje.hombrerasVal1 = 1;
                    personaje.hombrerasVal2 = 6;
                    personaje.hombrerasVal3 = 24;

                } else if (elemento == "Pesada") {

                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombreraspesadas.png";

                    personaje.hombrerasIcono1 = "img/hombreraspesadasb.png";
                    personaje.hombrerasIcono2 = "img/hombreraspesadasm.png";
                    personaje.hombrerasIcono3 = "img/hombreraspesadasr.png";

                    personaje.hombrerasVal1 = 3;
                    personaje.hombrerasVal2 = 9;
                    personaje.hombrerasVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.hombrerasTipo = "Hombros";
                    personaje.hombrerasIcono = "img/nada.png";

                    personaje.hombrerasIcono1 = "img/nada.png";
                    personaje.hombrerasIcono2 = "img/nada.png";
                    personaje.hombrerasIcono3 = "img/nada.png";
                    personaje.hombrerasVal1 = 0;
                    personaje.hombrerasVal2 = 0;
                    personaje.hombrerasVal3 = 0;

                }
                break

            case "Pechera":

                if (elemento == "Ligera") {

                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecheraligera.png";

                    personaje.pecheraIcono1 = "img/pecheraligerab.png";
                    personaje.pecheraIcono2 = "img/pecheraligeram.png";
                    personaje.pecheraIcono3 = "img/pecheraligerar.png";

                    personaje.pecheraVal1 = 1;
                    personaje.pecheraVal2 = 3;
                    personaje.pecheraVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecheramedia.png";

                    personaje.pecheraIcono1 = "img/pecheramediab.png";
                    personaje.pecheraIcono2 = "img/pecheramediam.png";
                    personaje.pecheraIcono3 = "img/pecheramediar.png";

                    personaje.pecheraVal1 = 1;
                    personaje.pecheraVal2 = 6;
                    personaje.pecheraVal3 = 21;

                } else if (elemento == "Pesada") {

                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecherapesada.png";

                    personaje.pecheraIcono1 = "img/pecherapesadab.png";
                    personaje.pecheraIcono2 = "img/pecherapesadam.png";
                    personaje.pecheraIcono3 = "img/pecherapesadar.png";

                    personaje.pecheraVal1 = 3;
                    personaje.pecheraVal2 = 9;
                    personaje.pecheraVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.pecheraTipo = "Pecho";
                    personaje.pecheraIcono = "img/nada.png";

                    personaje.pecheraIcono1 = "img/nada.png";
                    personaje.pecheraIcono2 = "img/nada.png";
                    personaje.pecheraIcono3 = "img/nada.png";
                    personaje.pecheraVal1 = 0;
                    personaje.pecheraVal2 = 0;
                    personaje.pecheraVal3 = 0;

                }
                break

            case "Guantes":

                if (elemento == "Ligera") {

                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantesligeros.png";

                    personaje.guantesIcono1 = "img/guantesligerosb.png";
                    personaje.guantesIcono2 = "img/guantesligerosm.png";
                    personaje.guantesIcono3 = "img/guantesligerosr.png";

                    personaje.guantesVal1 = 1;
                    personaje.guantesVal2 = 3;
                    personaje.guantesVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantesmedios.png";

                    personaje.guantesIcono1 = "img/guantesmediosb.png";
                    personaje.guantesIcono2 = "img/guantesmediosm.png";
                    personaje.guantesIcono3 = "img/guantesmediosr.png";

                    personaje.guantesVal1 = 1;
                    personaje.guantesVal2 = 6;
                    personaje.guantesVal3 = 21;

                } else if (elemento == "Pesada") {

                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantespesados.png";

                    personaje.guantesIcono1 = "img/guantespesadosb.png";
                    personaje.guantesIcono2 = "img/guantespesadosm.png";
                    personaje.guantesIcono3 = "img/guantespesadosr.png";

                    personaje.guantesVal1 = 3;
                    personaje.guantesVal2 = 9;
                    personaje.guantesVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.guantesTipo = "Brazos";
                    personaje.guantesIcono = "img/nada.png";

                    personaje.guantesIcono1 = "img/nada.png";
                    personaje.guantesIcono2 = "img/nada.png";
                    personaje.guantesIcono3 = "img/nada.png";
                    personaje.guantesVal1 = 0;
                    personaje.guantesVal2 = 0;
                    personaje.guantesVal3 = 0;

                }
                break

            case "Pantalon":

                if (elemento == "Ligera") {

                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonligero.png";

                    personaje.pantalonIcono1 = "img/pantalonligerob.png";
                    personaje.pantalonIcono2 = "img/pantalonligerom.png";
                    personaje.pantalonIcono3 = "img/pantalonligeror.png";

                    personaje.pantalonVal1 = 1;
                    personaje.pantalonVal2 = 3;
                    personaje.pantalonVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonmedio.png";

                    personaje.pantalonIcono1 = "img/pantalonmediob.png";
                    personaje.pantalonIcono2 = "img/pantalonmediom.png";
                    personaje.pantalonIcono3 = "img/pantalonmedior.png";

                    personaje.pantalonVal1 = 1;
                    personaje.pantalonVal2 = 6;
                    personaje.pantalonVal3 = 21;

                } else if (elemento == "Pesada") {

                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonpesado.png";

                    personaje.pantalonIcono1 = "img/pantalonpesadob.png";
                    personaje.pantalonIcono2 = "img/pantalonpesadom.png";
                    personaje.pantalonIcono3 = "img/pantalonpesador.png";

                    personaje.pantalonVal1 = 3;
                    personaje.pantalonVal2 = 9;
                    personaje.pantalonVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.pantalonTipo = "Piernas";
                    personaje.pantalonIcono = "img/nada.png";

                    personaje.pantalonIcono1 = "img/nada.png";
                    personaje.pantalonIcono2 = "img/nada.png";
                    personaje.pantalonIcono3 = "img/nada.png";
                    personaje.pantalonVal1 = 0;
                    personaje.pantalonVal2 = 0;
                    personaje.pantalonVal3 = 0;

                }
                break

            case "Botas":

                if (elemento == "Ligera") {

                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botasligeras.png";

                    personaje.botasIcono1 = "img/botasligerasb.png";
                    personaje.botasIcono2 = "img/botasligerasm.png";
                    personaje.botasIcono3 = "img/botasligerasr.png";

                    personaje.botasVal1 = 1;
                    personaje.botasVal2 = 3;
                    personaje.botasVal3 = 18;

                } else if (elemento == "Media") {

                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botasmedias.png";

                    personaje.botasIcono1 = "img/botasmediasb.png";
                    personaje.botasIcono2 = "img/botasmediasm.png";
                    personaje.botasIcono3 = "img/botasmediasr.png";

                    personaje.botasVal1 = 1;
                    personaje.botasVal2 = 6;
                    personaje.botasVal3 = 21;

                } else if (elemento == "Pesada") {

                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botaspesadas.png";

                    personaje.botasIcono1 = "img/botaspesadasb.png";
                    personaje.botasIcono2 = "img/botaspesadasm.png";
                    personaje.botasIcono3 = "img/botaspesadasr.png";

                    personaje.botasVal1 = 3;
                    personaje.botasVal2 = 9;
                    personaje.botasVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.botasTipo = "Pies";
                    personaje.botasIcono = "img/nada.png";

                    personaje.botasIcono1 = "img/nada.png";
                    personaje.botasIcono2 = "img/nada.png";
                    personaje.botasIcono3 = "img/nada.png";
                    personaje.botasVal1 = 0;
                    personaje.botasVal2 = 0;
                    personaje.botasVal3 = 0;

                }
                break

            case "Todas":

                if (elemento == "Ligera") {


                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmoligero.png";

                    personaje.yelmoIcono1 = "img/yelmoligerob.png";
                    personaje.yelmoIcono2 = "img/yelmoligerom.png";
                    personaje.yelmoIcono3 = "img/yelmoligeror.png";

                    personaje.yelmoVal1 = 1;
                    personaje.yelmoVal2 = 3;
                    personaje.yelmoVal3 = 18;



                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombrerasligeras.png";

                    personaje.hombrerasIcono1 = "img/hombrerasligerasb.png";
                    personaje.hombrerasIcono2 = "img/hombrerasligerasm.png";
                    personaje.hombrerasIcono3 = "img/hombrerasligerasr.png";

                    personaje.hombrerasVal1 = 1;
                    personaje.hombrerasVal2 = 3;
                    personaje.hombrerasVal3 = 18;



                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecheraligera.png";

                    personaje.pecheraIcono1 = "img/pecheraligerab.png";
                    personaje.pecheraIcono2 = "img/pecheraligeram.png";
                    personaje.pecheraIcono3 = "img/pecheraligerar.png";

                    personaje.pecheraVal1 = 1;
                    personaje.pecheraVal2 = 3;
                    personaje.pecheraVal3 = 18;



                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantesligeros.png";

                    personaje.guantesIcono1 = "img/guantesligerosb.png";
                    personaje.guantesIcono2 = "img/guantesligerosm.png";
                    personaje.guantesIcono3 = "img/guantesligerosr.png";

                    personaje.guantesVal1 = 1;
                    personaje.guantesVal2 = 3;
                    personaje.guantesVal3 = 18;



                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonligero.png";

                    personaje.pantalonIcono1 = "img/pantalonligerob.png";
                    personaje.pantalonIcono2 = "img/pantalonligerom.png";
                    personaje.pantalonIcono3 = "img/pantalonligeror.png";

                    personaje.pantalonVal1 = 1;
                    personaje.pantalonVal2 = 3;
                    personaje.pantalonVal3 = 18;



                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botasligeras.png";

                    personaje.botasIcono1 = "img/botasligerasb.png";
                    personaje.botasIcono2 = "img/botasligerasm.png";
                    personaje.botasIcono3 = "img/botasligerasr.png";

                    personaje.botasVal1 = 1;
                    personaje.botasVal2 = 3;
                    personaje.botasVal3 = 18;


                } else if (elemento == "Media") {

                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmomedio.png";

                    personaje.yelmoIcono1 = "img/yelmomediob.png";
                    personaje.yelmoIcono2 = "img/yelmomediom.png";
                    personaje.yelmoIcono3 = "img/yelmomedior.png";

                    personaje.yelmoVal1 = 1;
                    personaje.yelmoVal2 = 6;
                    personaje.yelmoVal3 = 24;



                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombrerasmedias.png";

                    personaje.hombrerasIcono1 = "img/hombrerasmediasb.png";
                    personaje.hombrerasIcono2 = "img/hombrerasmediasm.png";
                    personaje.hombrerasIcono3 = "img/hombrerasmediasr.png";

                    personaje.hombrerasVal1 = 1;
                    personaje.hombrerasVal2 = 6;
                    personaje.hombrerasVal3 = 24;



                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecheramedia.png";

                    personaje.pecheraIcono1 = "img/pecheramediab.png";
                    personaje.pecheraIcono2 = "img/pecheramediam.png";
                    personaje.pecheraIcono3 = "img/pecheramediar.png";

                    personaje.pecheraVal1 = 1;
                    personaje.pecheraVal2 = 6;
                    personaje.pecheraVal3 = 24;



                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantesmedios.png";

                    personaje.guantesIcono1 = "img/guantesmediosb.png";
                    personaje.guantesIcono2 = "img/guantesmediosm.png";
                    personaje.guantesIcono3 = "img/guantesmediosr.png";

                    personaje.guantesVal1 = 1;
                    personaje.guantesVal2 = 6;
                    personaje.guantesVal3 = 24;



                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonmedio.png";

                    personaje.pantalonIcono1 = "img/pantalonmediob.png";
                    personaje.pantalonIcono2 = "img/pantalonmediom.png";
                    personaje.pantalonIcono3 = "img/pantalonmedior.png";

                    personaje.pantalonVal1 = 1;
                    personaje.pantalonVal2 = 6;
                    personaje.pantalonVal3 = 24;



                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botasmedias.png";

                    personaje.botasIcono1 = "img/botasmediasb.png";
                    personaje.botasIcono2 = "img/botasmediasm.png";
                    personaje.botasIcono3 = "img/botasmediasr.png";

                    personaje.botasVal1 = 1;
                    personaje.botasVal2 = 6;
                    personaje.botasVal3 = 24;

                } else if (elemento == "Pesada") {

                    personaje.yelmoTipo = elemento;
                    personaje.yelmoIcono = "img/yelmopesado.png";

                    personaje.yelmoIcono1 = "img/yelmopesadob.png";
                    personaje.yelmoIcono2 = "img/yelmopesadom.png";
                    personaje.yelmoIcono3 = "img/yelmopesador.png";

                    personaje.yelmoVal1 = 3;
                    personaje.yelmoVal2 = 9;
                    personaje.yelmoVal3 = 27;



                    personaje.hombrerasTipo = elemento;
                    personaje.hombrerasIcono = "img/hombreraspesadas.png";

                    personaje.hombrerasIcono1 = "img/hombreraspesadasb.png";
                    personaje.hombrerasIcono2 = "img/hombreraspesadasm.png";
                    personaje.hombrerasIcono3 = "img/hombreraspesadasr.png";

                    personaje.hombrerasVal1 = 3;
                    personaje.hombrerasVal2 = 9;
                    personaje.hombrerasVal3 = 27;



                    personaje.pecheraTipo = elemento;
                    personaje.pecheraIcono = "img/pecherapesada.png";

                    personaje.pecheraIcono1 = "img/pecherapesadab.png";
                    personaje.pecheraIcono2 = "img/pecherapesadam.png";
                    personaje.pecheraIcono3 = "img/pecherapesadar.png";

                    personaje.pecheraVal1 = 3;
                    personaje.pecheraVal2 = 9;
                    personaje.pecheraVal3 = 27;



                    personaje.guantesTipo = elemento;
                    personaje.guantesIcono = "img/guantespesados.png";

                    personaje.guantesIcono1 = "img/guantespesadosb.png";
                    personaje.guantesIcono2 = "img/guantespesadosm.png";
                    personaje.guantesIcono3 = "img/guantespesadosr.png";

                    personaje.guantesVal1 = 3;
                    personaje.guantesVal2 = 9;
                    personaje.guantesVal3 = 27;



                    personaje.pantalonTipo = elemento;
                    personaje.pantalonIcono = "img/pantalonpesado.png";

                    personaje.pantalonIcono1 = "img/pantalonpesadob.png";
                    personaje.pantalonIcono2 = "img/pantalonpesadom.png";
                    personaje.pantalonIcono3 = "img/pantalonpesador.png";

                    personaje.pantalonVal1 = 3;
                    personaje.pantalonVal2 = 9;
                    personaje.pantalonVal3 = 27;



                    personaje.botasTipo = elemento;
                    personaje.botasIcono = "img/botaspesadas.png";

                    personaje.botasIcono1 = "img/botaspesadasb.png";
                    personaje.botasIcono2 = "img/botaspesadasm.png";
                    personaje.botasIcono3 = "img/botaspesadasr.png";

                    personaje.botasVal1 = 0;
                    personaje.botasVal2 = 0;
                    personaje.botasVal3 = 27;

                } else if (elemento == "Natural") {

                    personaje.yelmoTipo = "Cabeza";
                    personaje.yelmoIcono = "img/nada.png";

                    personaje.yelmoIcono1 = "img/nada.png";
                    personaje.yelmoIcono2 = "img/nada.png";
                    personaje.yelmoIcono3 = "img/nada.png";

                    personaje.yelmoVal1 = 0;
                    personaje.yelmoVal2 = 0;
                    personaje.yelmoVal3 = 0;

                    



                    personaje.hombrerasTipo = "Hombros"
                    personaje.hombrerasIcono = "img/nada.png";

                    personaje.hombrerasIcono1 = "img/nada.png";
                    personaje.hombrerasIcono2 = "img/nada.png";
                    personaje.hombrerasIcono3 = "img/nada.png";

                    personaje.hombrerasVal1 = 0;
                    personaje.hombrerasVal2 = 0;
                    personaje.hombrerasVal3 = 0;

                    


                    personaje.pecheraTipo = "Pecho";
                    personaje.pecheraIcono = "img/nada.png";

                    personaje.pecheraIcono1 = "img/nada.png";
                    personaje.pecheraIcono2 = "img/nada.png";
                    personaje.pecheraIcono3 = "img/nada.png";

                    personaje.pecheraVal1 = 0;
                    personaje.pecheraVal2 = 0;
                    personaje.pecheraVal3 = 0;

                    


                    personaje.guantesTipo = "Brazos";
                    personaje.guantesIcono = "img/nada.png";

                    personaje.guantesIcono1 = "img/nada.png";
                    personaje.guantesIcono2 = "img/nada.png";
                    personaje.guantesIcono3 = "img/nada.png";

                    personaje.guantesVal1 = 0;
                    personaje.guantesVal2 = 0;
                    personaje.guantesVal3 = 0;

                    


                    personaje.pantalonTipo = "Piernas";
                    personaje.pantalonIcono = "img/nada.png";

                    personaje.pantalonIcono1 = "img/nada.png";
                    personaje.pantalonIcono2 = "img/nada.png";
                    personaje.pantalonIcono3 = "img/nada.png";

                    personaje.pantalonVal1 = 0;
                    personaje.pantalonVal2 = 0;
                    personaje.pantalonVal3 = 0;

                    


                    personaje.botasTipo = "Pies";
                    personaje.botasIcono = "img/nada.png";

                    personaje.botasIcono1 = "img/nada.png";
                    personaje.botasIcono2 = "img/nada.png";
                    personaje.botasIcono3 = "img/nada.png";

                    personaje.botasVal1 = 0;
                    personaje.botasVal2 = 0;
                    personaje.botasVal3 = 0;

                    

                }
                break

            case "magica1":

                if (elemento == "Anillo") {

                    personaje.magica1Tipo = elemento;
                    personaje.magica1Icono = "img/anillo.png";

                    personaje.magica1Icono1 = "img/anillob.png";
                    personaje.magica1Icono2 = "img/anillom.png";
                    personaje.magica1Icono3 = "img/anillor.png";

                    personaje.magica1Val1 = 1;
                    personaje.magica1Val2 = 3;
                    personaje.magica1Val3 = 18;

                } else if (elemento == "Collar") {

                    personaje.magica1Tipo = elemento;
                    personaje.magica1Icono = "img/collar.png";

                    personaje.magica1Icono1 = "img/collarb.png";
                    personaje.magica1Icono2 = "img/collarm.png";
                    personaje.magica1Icono3 = "img/collarr.png";

                    personaje.magica1Val1 = 1;
                    personaje.magica1Val2 = 6;
                    personaje.magica1Val3 = 21;

                } else if (elemento == "Brazal") {

                    personaje.magica1Tipo = elemento;
                    personaje.magica1Icono = "img/brazal.png";

                    personaje.magica1Icono1 = "img/brazalb.png";
                    personaje.magica1Icono2 = "img/brazalm.png";
                    personaje.magica1Icono3 = "img/brazalr.png";

                    personaje.magica1Val1 = 3;
                    personaje.magica1Val2 = 9;
                    personaje.magica1Val3 = 27;

                } else if (elemento == "Natural") {

                    personaje.magica1Tipo = "Nada";
                    personaje.magica1Icono = "img/nada.png";

                    personaje.magica1Icono1 = "img/nada.png";
                    personaje.magica1Icono2 = "img/nada.png";
                    personaje.magica1Icono3 = "img/nada.png";
                    personaje.magica1Val1 = 0;
                    personaje.magica1Val2 = 0;
                    personaje.magica1Val3 = 0;

                }
                break

            case "magica2":

                if (elemento == "Anillo") {

                    personaje.magica2Tipo = elemento;
                    personaje.magica2Icono = "img/anillo.png";

                    personaje.magica2Icono1 = "img/anillob.png";
                    personaje.magica2Icono2 = "img/anillom.png";
                    personaje.magica2Icono3 = "img/anillor.png";

                    personaje.magica2Val1 = 1;
                    personaje.magica2Val2 = 3;
                    personaje.magica2Val3 = 18;

                } else if (elemento == "Collar") {

                    personaje.magica2Tipo = elemento;
                    personaje.magica2Icono = "img/collar.png";

                    personaje.magica2Icono1 = "img/collarb.png";
                    personaje.magica2Icono2 = "img/collarm.png";
                    personaje.magica2Icono3 = "img/collarr.png";

                    personaje.magica2Val1 = 1;
                    personaje.magica2Val2 = 3;
                    personaje.magica2Val3 = 18;

                } else if (elemento == "Brazal") {

                    personaje.magica2Tipo = elemento;
                    personaje.magica2Icono = "img/brazal.png";

                    personaje.magica2Icono1 = "img/brazalb.png";
                    personaje.magica2Icono2 = "img/brazalm.png";
                    personaje.magica2Icono3 = "img/brazalr.png";

                    personaje.magica2Val1 = 1;
                    personaje.magica2Val2 = 3;
                    personaje.magica2Val3 = 18;

                } else if (elemento == "Natural") {

                    personaje.magica2Tipo = "Nada";
                    personaje.magica2Icono = "img/nada.png";

                    personaje.magica2Icono1 = "img/nada.png";
                    personaje.magica2Icono2 = "img/nada.png";
                    personaje.magica2Icono3 = "img/nada.png";
                    personaje.magica2Val1 = 0;
                    personaje.magica2Val2 = 0;
                    personaje.magica2Val3 = 0;

                }
                break

            case "magica3":

                if (elemento == "Anillo") {

                    personaje.magica3Tipo = elemento;
                    personaje.magica3Icono = "img/anillo.png";

                    personaje.magica3Icono1 = "img/anillob.png";
                    personaje.magica3Icono2 = "img/anillom.png";
                    personaje.magica3Icono3 = "img/anillor.png";

                    personaje.magica3Val1 = 1;
                    personaje.magica3Val2 = 3;
                    personaje.magica3Val3 = 18;

                } else if (elemento == "Collar") {

                    personaje.magica3Tipo = elemento;
                    personaje.magica3Icono = "img/collar.png";

                    personaje.magica3Icono1 = "img/collarb.png";
                    personaje.magica3Icono2 = "img/collarm.png";
                    personaje.magica3Icono3 = "img/collarr.png";

                    personaje.magica3Val1 = 1;
                    personaje.magica3Val2 = 6;
                    personaje.magica3Val3 = 21;

                } else if (elemento == "Brazal") {

                    personaje.magica3Tipo = elemento;
                    personaje.magica3Icono = "img/brazal.png";

                    personaje.magica3Icono1 = "img/brazalb.png";
                    personaje.magica3Icono2 = "img/brazalm.png";
                    personaje.magica3Icono3 = "img/brazalr.png";

                    personaje.magica3Val1 = 3;
                    personaje.magica3Val2 = 9;
                    personaje.magica3Val3 = 27;

                } else if (elemento == "Natural") {

                    personaje.magica3Tipo = "Nada";
                    personaje.magica3Icono = "img/nada.png";

                    personaje.magica3Icono1 = "img/nada.png";
                    personaje.magica3Icono2 = "img/nada.png";
                    personaje.magica3Icono3 = "img/nada.png";
                    personaje.magica3Val1 = 0;
                    personaje.magica3Val2 = 0;
                    personaje.magica3Val3 = 0;

                }
                break

        }

        modalReinos.style.display = "none";
        modalArmadura.style.display = "none";
        modalArmaduraMagica.style.display = "none";
        edicion = 0;
        editarIco.src = "img/editar.png"

    }




    slotMagico1TxtBtn.addEventListener('click', function () { seleccionarElementoMagico("magica1", personaje.magica1Tipo) })
    slotMagico2TxtBtn.addEventListener('click', function () { seleccionarElementoMagico("magica2", personaje.magica2Tipo) })
    slotMagico3TxtBtn.addEventListener('click', function () { seleccionarElementoMagico("magica3", personaje.magica3Tipo) })










    function seleccionarElementoMagico(pieza, actual) {

        if (edicion == 1 && actual != "Nada") {

            piezaSeleccionada = pieza
            modalReinos.style.display = "grid"

        } else if (edicion == 2) {

        }

        edicion = 0
        editarIco.src = "img/editar.png"
    }


    objetoFuego.addEventListener('click', function () { elementoPieza("Fuego", piezaSeleccionada) })
    objetoAgua.addEventListener('click', function () { elementoPieza("Agua", piezaSeleccionada) })
    objetoAire.addEventListener('click', function () { elementoPieza("Aire", piezaSeleccionada) })
    objetoTierra.addEventListener('click', function () { elementoPieza("Tierra", piezaSeleccionada) })
    objetoRayo.addEventListener('click', function () { elementoPieza("Rayo", piezaSeleccionada) })
    objetoVida.addEventListener('click', function () { elementoPieza("Vida", piezaSeleccionada) })
    objetoPsique.addEventListener('click', function () { elementoPieza("Psique", piezaSeleccionada) })
    objetoEter.addEventListener('click', function () { elementoPieza("Eter", piezaSeleccionada) })
    objetoLuz.addEventListener('click', function () { elementoPieza("Luz", piezaSeleccionada) })

    function elementoPieza(elementoMagico, pieza) {

        if (edicion == 0) {

            switch (pieza) {

                case "magica1": personaje.magica1Tipo = elementoMagico; break
                case "magica2": personaje.magica2Tipo = elementoMagico; break
                case "magica3": personaje.magica3Tipo = elementoMagico; break

            }

        }

        modalReinos.style.display = "none";

    }




}//

{//MODIFICAR EQUIPO


    ico1SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico1SlotYelmoBtn, personaje.yelmoVal1) })
    ico2SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico2SlotYelmoBtn, personaje.yelmoVal2) })
    ico3SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico3SlotYelmoBtn, personaje.yelmoVal3) })
    txt1SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico1SlotYelmoBtn, personaje.yelmoVal1) })
    txt2SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico2SlotYelmoBtn, personaje.yelmoVal2) })
    txt3SlotYelmoBtn.addEventListener('click', function () { modificarEquipo(ico3SlotYelmoBtn, personaje.yelmoVal3) })


    ico1SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico1SlotHombrerasBtn, personaje.hombrerasVal1) })
    ico2SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico2SlotHombrerasBtn, personaje.hombrerasVal2) })
    ico3SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico3SlotHombrerasBtn, personaje.hombrerasVal3) })
    txt1SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico1SlotHombrerasBtn, personaje.hombrerasVal1) })
    txt2SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico2SlotHombrerasBtn, personaje.hombrerasVal2) })
    txt3SlotHombrerasBtn.addEventListener('click', function () { modificarEquipo(ico3SlotHombrerasBtn, personaje.hombrerasVal3) })


    ico1SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico1SlotPecheraBtn, personaje.pecheraVal1) })
    ico2SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico2SlotPecheraBtn, personaje.pecheraVal2) })
    ico3SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico3SlotPecheraBtn, personaje.pecheraVal3) })
    txt1SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico1SlotPecheraBtn, personaje.pecheraVal1) })
    txt2SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico2SlotPecheraBtn, personaje.pecheraVal2) })
    txt3SlotPecheraBtn.addEventListener('click', function () { modificarEquipo(ico3SlotPecheraBtn, personaje.pecheraVal3) })


    ico1SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico1SlotGuantesBtn, personaje.guantesVal1) })
    ico2SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico2SlotGuantesBtn, personaje.guantesVal2) })
    ico3SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico3SlotGuantesBtn, personaje.guantesVal3) })
    txt1SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico1SlotGuantesBtn, personaje.guantesVal1) })
    txt2SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico2SlotGuantesBtn, personaje.guantesVal2) })
    txt3SlotGuantesBtn.addEventListener('click', function () { modificarEquipo(ico3SlotGuantesBtn, personaje.guantesVal3) })


    ico1SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico1SlotPantalonBtn, personaje.pantalonVal1) })
    ico2SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico2SlotPantalonBtn, personaje.pantalonVal2) })
    ico3SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico3SlotPantalonBtn, personaje.pantalonVal3) })
    txt1SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico1SlotPantalonBtn, personaje.pantalonVal1) })
    txt2SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico2SlotPantalonBtn, personaje.pantalonVal2) })
    txt3SlotPantalonBtn.addEventListener('click', function () { modificarEquipo(ico3SlotPantalonBtn, personaje.pantalonVal3) })


    ico1SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico1SlotBotasBtn, personaje.botasVal1) })
    ico2SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico2SlotBotasBtn, personaje.botasVal2) })
    ico3SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico3SlotBotasBtn, personaje.botasVal3) })
    txt1SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico1SlotBotasBtn, personaje.botasVal1) })
    txt2SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico2SlotBotasBtn, personaje.botasVal2) })
    txt3SlotBotasBtn.addEventListener('click', function () { modificarEquipo(ico3SlotBotasBtn, personaje.botasVal3) })


    ico1SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico1Btn, personaje.magica1Val1) })
    ico2SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico1Btn, personaje.magica1Val2) })
    ico3SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico1Btn, personaje.magica1Val3) })
    txt1SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico1Btn, personaje.magica1Val1) })
    txt2SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico1Btn, personaje.magica1Val2) })
    txt3SlotMagico1Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico1Btn, personaje.magica1Val3) })


    ico1SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico2Btn, personaje.magica2Val1) })
    ico2SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico2Btn, personaje.magica2Val2) })
    ico3SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico2Btn, personaje.magica2Val3) })
    txt1SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico2Btn, personaje.magica2Val1) })
    txt2SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico2Btn, personaje.magica2Val2) })
    txt3SlotMagico2Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico2Btn, personaje.magica2Val3) })


    ico1SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico3Btn, personaje.magica3Val1) })
    ico2SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico3Btn, personaje.magica3Val2) })
    ico3SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico3Btn, personaje.magica3Val3) })
    txt1SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico1SlotMagico3Btn, personaje.magica3Val1) })
    txt2SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico2SlotMagico3Btn, personaje.magica3Val2) })
    txt3SlotMagico3Btn.addEventListener('click', function () { modificarEquipo(ico3SlotMagico3Btn, personaje.magica3Val3) })


    function modificarEquipo(boton, valor) {

        if (edicion == 1) {

            valor = valor + 1



        } else if (edicion == 2 && valor > 0) {

            valor = valor - 1



        }

        switch (boton) {

            case ico1SlotYelmoBtn: personaje.yelmoVal1 = valor; break
            case ico2SlotYelmoBtn: personaje.yelmoVal2 = valor; break
            case ico3SlotYelmoBtn: personaje.yelmoVal3 = valor; break

            case ico1SlotHombrerasBtn: personaje.hombrerasVal1 = valor; break
            case ico2SlotHombrerasBtn: personaje.hombrerasVal2 = valor; break
            case ico3SlotHombrerasBtn: personaje.hombrerasVal3 = valor; break

            case ico1SlotPecheraBtn: personaje.pecheraVal1 = valor; break
            case ico2SlotPecheraBtn: personaje.pecheraVal2 = valor; break
            case ico3SlotPecheraBtn: personaje.pecheraVal3 = valor; break

            case ico1SlotGuantesBtn: personaje.guantesVal1 = valor; break
            case ico2SlotGuantesBtn: personaje.guantesVal2 = valor; break
            case ico3SlotGuantesBtn: personaje.guantesVal3 = valor; break

            case ico1SlotPantalonBtn: personaje.pantalonVal1 = valor; break
            case ico2SlotPantalonBtn: personaje.pantalonVal2 = valor; break
            case ico3SlotPantalonBtn: personaje.pantalonVal3 = valor; break

            case ico1SlotBotasBtn: personaje.botasVal1 = valor; break
            case ico2SlotBotasBtn: personaje.botasVal2 = valor; break
            case ico3SlotBotasBtn: personaje.botasVal3 = valor; break



            case ico1SlotMagico1Btn: personaje.magica1Val1 = valor; break
            case ico2SlotMagico1Btn: personaje.magica1Val2 = valor; break
            case ico3SlotMagico1Btn: personaje.magica1Val3 = valor; break

            case ico1SlotMagico2Btn: personaje.magica2Val1 = valor; break
            case ico2SlotMagico2Btn: personaje.magica2Val2 = valor; break
            case ico3SlotMagico2Btn: personaje.magica2Val3 = valor; break

            case ico1SlotMagico3Btn: personaje.magica3Val1 = valor; break
            case ico2SlotMagico3Btn: personaje.magica3Val2 = valor; break
            case ico3SlotMagico3Btn: personaje.magica3Val3 = valor; break

        }

    }




}// FIN MODIFICAR EQUIPO
