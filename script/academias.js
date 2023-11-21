

nivelFuegoBtn.addEventListener('click', function () { SeleccionReinos(nivelFuegoBtn, reinos.fuego,) })
nivelAguaBtn.addEventListener('click', function () { SeleccionReinos(nivelAguaBtn, reinos.agua,) })
nivelAireBtn.addEventListener('click', function () { SeleccionReinos(nivelAireBtn, reinos.aire,) })

nivelTierraBtn.addEventListener('click', function () { SeleccionReinos(nivelTierraBtn, reinos.tierra,) })
nivelRayoBtn.addEventListener('click', function () { SeleccionReinos(nivelRayoBtn, reinos.rayo,) })
nivelLuzBtn.addEventListener('click', function () { SeleccionReinos(nivelLuzBtn, reinos.luz,) })

nivelEterBtn.addEventListener('click', function () { SeleccionReinos(nivelEterBtn, reinos.eter,) })
nivelVidaBtn.addEventListener('click', function () { SeleccionReinos(nivelVidaBtn, reinos.vida,) })
nivelPsiqueBtn.addEventListener('click', function () { SeleccionReinos(nivelPsiqueBtn, reinos.psique,) })



function SeleccionReinos(boton, bono) {


    if (edicion == 1 && bono < 3 && bono > 1 && personaje.experiencia >= ((bono + 1) * 5)) {

        personaje.experiencia = personaje.experiencia - ((bono +1) * 5)
        bono = bono + 1


    }else if (edicion == 1 && bono < 3 && bono == 1 && personaje.experiencia >= (bono * 10)){

        personaje.experiencia = personaje.experiencia - (bono * 10)
        bono = bono + 1


    } else if (edicion == 1 && bono == 0 && personaje.experiencia >= 5) {

        bono = bono + 1
        personaje.experiencia = personaje.experiencia - 5



    } else if (edicion == 2 && bono > 0 && bono !== 1) {

        personaje.experiencia = personaje.experiencia + ((bono) * 5)
        bono = bono - 1

    } else if (edicion == 2 && bono == 1) {

        personaje.experiencia = personaje.experiencia + 5
        bono = bono - 1
    }



    switch (boton) {

        case nivelFuegoBtn: reinos.fuego = bono; break
        case nivelAguaBtn: reinos.agua = bono; break
        case nivelAireBtn: reinos.aire = bono; break
        case nivelTierraBtn: reinos.tierra = bono; break
        case nivelRayoBtn: reinos.rayo = bono; break
        case nivelLuzBtn: reinos.luz = bono; break
        case nivelEterBtn: reinos.eter = bono; break
        case nivelVidaBtn: reinos.vida = bono; break
        case nivelPsiqueBtn: reinos.psique = bono; break

    }
    guardar()

}





nivelVaritaBtn.addEventListener('click', function () { SeleccionMagicos(nivelVaritaBtn, magicos.varita,) })
nivelOrbeBtn.addEventListener('click', function () { SeleccionMagicos(nivelOrbeBtn, magicos.orbe,) })
nivelBaculoBtn.addEventListener('click', function () { SeleccionMagicos(nivelBaculoBtn, magicos.baculo,) })

nivelRunaBtn.addEventListener('click', function () { SeleccionMagicos(nivelRunaBtn, magicos.runa,) })
nivelTotemBtn.addEventListener('click', function () { SeleccionMagicos(nivelTotemBtn, magicos.totem,) })
nivelMagiaBtn.addEventListener('click', function () { SeleccionMagicos(nivelMagiaBtn, magicos.magia,) })

nivelBrazalBtn.addEventListener('click', function () { SeleccionMagicos(nivelBrazalBtn, magicos.brazal,) })
nivelCollarBtn.addEventListener('click', function () { SeleccionMagicos(nivelCollarBtn, magicos.collar,) })
nivelAnilloBtn.addEventListener('click', function () { SeleccionMagicos(nivelAnilloBtn, magicos.anillo,) })




function SeleccionMagicos(boton, bono) {


    if (edicion == 1 && bono < 3 && bono > 0 && personaje.experiencia >= ((bono + 1) * 5)) {

        personaje.experiencia = personaje.experiencia - ((bono +1) * 5)
        bono = bono + 1


    }else if (edicion == 1 && bono < 3 && bono == 1 && personaje.experiencia >= (bono * 10)){

        personaje.experiencia = personaje.experiencia - (bono * 10)
        bono = bono + 1


    } else if (edicion == 1 && bono == 0 && personaje.experiencia >= 5) {

        bono = bono + 1
        personaje.experiencia = personaje.experiencia - 5



    } else if (edicion == 2 && bono > 0 && bono !== 1) {

        personaje.experiencia = personaje.experiencia + ((bono) * 5)
        bono = bono - 1

    } else if (edicion == 2 && bono == 1) {

        personaje.experiencia = personaje.experiencia + 5
        bono = bono - 1
    }

    switch (boton) {

        case nivelVaritaBtn: magicos.varita = bono; break
        case nivelOrbeBtn: magicos.orbe = bono; break
        case nivelBaculoBtn: magicos.baculo = bono; break

        case nivelRunaBtn: magicos.runa = bono; break
        case nivelTotemBtn: magicos.totem = bono; break
        case nivelMagiaBtn: magicos.magia = bono; break

        case nivelBrazalBtn: magicos.brazal = bono; break
        case nivelCollarBtn: magicos.collar = bono; break
        case nivelAnilloBtn: magicos.anillo = bono; break


    }
    guardar()

}







nivelOfensivoBtn.addEventListener('click', function () { SeleccionEstilos(nivelOfensivoBtn, estilos.ofensivo,) })
nivelDefensivoBtn.addEventListener('click', function () { SeleccionEstilos(nivelDefensivoBtn, estilos.defensivo,) })
nivelBerserkerBtn.addEventListener('click', function () { SeleccionEstilos(nivelBerserkerBtn, estilos.berserker,) })

nivelSigiloBtn.addEventListener('click', function () { SeleccionEstilos(nivelSigiloBtn, estilos.sigilo,) })
nivelCazadorBtn.addEventListener('click', function () { SeleccionEstilos(nivelCazadorBtn, estilos.cazador,) })
nivelExploradorBtn.addEventListener('click', function () { SeleccionEstilos(nivelExploradorBtn, estilos.explorador,) })

nivelLiderBtn.addEventListener('click', function () { SeleccionEstilos(nivelLiderBtn, estilos.lider,) })
nivelLegionBtn.addEventListener('click', function () { SeleccionEstilos(nivelLegionBtn, estilos.legion,) })
nivelCaballeriaBtn.addEventListener('click', function () { SeleccionEstilos(nivelCaballeriaBtn, estilos.caballeria,) })




function SeleccionEstilos(boton, bono) {


    if (edicion == 1 && bono < 3 && bono > 1 && personaje.experiencia >= ((bono + 1) * 5)) {

        personaje.experiencia = personaje.experiencia - ((bono +1) * 5)
        bono = bono + 1


    }else if (edicion == 1 && bono < 3 && bono == 1 && personaje.experiencia >= (bono * 10)){

        personaje.experiencia = personaje.experiencia - (bono * 10)
        bono = bono + 1


    } else if (edicion == 1 && bono == 0 && personaje.experiencia >= 5) {

        bono = bono + 1
        personaje.experiencia = personaje.experiencia - 5



    } else if (edicion == 2 && bono > 0 && bono !== 1) {

        personaje.experiencia = personaje.experiencia + ((bono) * 5)
        bono = bono - 1

    } else if (edicion == 2 && bono == 1) {

        personaje.experiencia = personaje.experiencia + 5
        bono = bono - 1
    }


    switch (boton) {

        case nivelOfensivoBtn: estilos.ofensivo = bono; break
        case nivelDefensivoBtn: estilos.defensivo = bono; break
        case nivelBerserkerBtn: estilos.berserker = bono; break

        case nivelSigiloBtn: estilos.sigilo = bono; break
        case nivelCazadorBtn: estilos.cazador = bono; break
        case nivelExploradorBtn: estilos.explorador = bono; break

        case nivelLiderBtn: estilos.lider = bono; break
        case nivelLegionBtn: estilos.legion = bono; break
        case nivelCaballeriaBtn: estilos.caballeria = bono; break
        


    }
    guardar()

}

















nivel1manoBtn.addEventListener('click', function () { SeleccionMarciales(nivel1manoBtn, marciales.unaMano,) })
nivel2manosBtn.addEventListener('click', function () { SeleccionMarciales(nivel2manosBtn, marciales.dosManos,) })
nivelArcoBtn.addEventListener('click', function () { SeleccionMarciales(nivelArcoBtn, marciales.arco,) })

nivelArrojadizaBtn.addEventListener('click', function () { SeleccionMarciales(nivelArrojadizaBtn, marciales.arrojadiza,) })
nivelEscudoBtn.addEventListener('click', function () { SeleccionMarciales(nivelEscudoBtn, marciales.escudo,) })
nivelNaturalBtn.addEventListener('click', function () { SeleccionMarciales(nivelNaturalBtn, marciales.natural,) })

nivelLigeraBtn.addEventListener('click', function () { SeleccionMarciales(nivelLigeraBtn, marciales.ligera,) })
nivelMediaBtn.addEventListener('click', function () { SeleccionMarciales(nivelMediaBtn, marciales.media,) })
nivelPesadaBtn.addEventListener('click', function () { SeleccionMarciales(nivelPesadaBtn, marciales.pesada,) })





function SeleccionMarciales(boton, bono) {


    if (edicion == 1 && bono < 3 && bono > 1 && personaje.experiencia >= ((bono + 1) * 5)) {

        personaje.experiencia = personaje.experiencia - ((bono +1) * 5)
        bono = bono + 1


    }else if (edicion == 1 && bono < 3 && bono == 1 && personaje.experiencia >= (bono * 10)){

        personaje.experiencia = personaje.experiencia - (bono * 10)
        bono = bono + 1


    } else if (edicion == 1 && bono == 0 && personaje.experiencia >= 5) {

        bono = bono + 1
        personaje.experiencia = personaje.experiencia - 5



    } else if (edicion == 2 && bono > 0 && bono !== 1) {

        personaje.experiencia = personaje.experiencia + ((bono) * 5)
        bono = bono - 1

    } else if (edicion == 2 && bono == 1) {

        personaje.experiencia = personaje.experiencia + 5
        bono = bono - 1
    }


    switch (boton) {

        case nivel1manoBtn: marciales.unaMano = bono; break
        case nivel2manosBtn: marciales.dosManos = bono; break
        case nivelArcoBtn: marciales.arco = bono; break

        case nivelArrojadizaBtn: marciales.arrojadiza = bono; break
        case nivelEscudoBtn: marciales.escudo = bono; break
        case nivelNaturalBtn: marciales.natural = bono; break

        case nivelLigeraBtn: marciales.ligera = bono; break
        case nivelMediaBtn: marciales.media = bono; break
        case nivelPesadaBtn: marciales.pesada = bono; break
        


    }
    guardar()

}











