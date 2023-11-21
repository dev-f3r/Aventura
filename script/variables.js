var conect = JSON.parse(localStorage.getItem('caracteristicas'))


if (conect == null) {

    {//VARIBALES PERSONAJE


        var personaje = {

            nombre: "Seleccionar Raza",
            experiencia: 0,
            experienciaTotal: 0,

        }

        var raza = {

            icono: "img/humano.png",
            nombre: "Seleccionar",
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
            visionNocturna: 1,

            bono1: "",
            bono2: "",
            bono3: "",

        }

        var caracteristicas = {

            fuerza: 1,
            destreza: 1,
            inteligencia: 1,
            constitucion: 1,
            reflejos: 1,
            sabiduria: 1,

        }

        var indicadores = {

            vida: 0,
            modificadorVida: 0,
            vidaMaxima: 0,

            energia: 0,
            modificadorEnergia: 0,
            energiaMaxima: 0,

            mana: 0,
            modificadorMana: 0,
            manaMaximo: 0,

        }

        var sentidos = {

            vista: 1,
            oido: 1,
            olfato: 1,
            gusto: 1,
            tacto: 1,
            visionNocturna: 1,

        }

        var slot1 = {

            tipo: "img/punno.png",
            nombre: "Puño",
            descripcion: "Daga de plata y titanio, con empuñadura de cuero de Huargo",

            ico1: "img/ataque.png",
            ico2: "img/danno.png",
            ico3: "img/rupturahueso.png",

            val1: 0,
            val2: 0,
            val3: 0,

        }

        var slot2 = {

            tipo: "img/punno.png",
            nombre: "Puño",
            descripcion: "Daga de plata y titanio, con empuñadura de cuero de Huargo",

            ico1: "img/ataque.png",
            ico2: "img/danno.png",
            ico3: "img/rupturahueso.png",

            val1: 0,
            val2: 0,
            val3: 0,

        }


    }//VARIABLES PERSONAJES

    {//VARIABLES MOCHILA

        mochila = {

            item1: "",
            item2: "",
            item3: "",
            item4: "",
            item5: "",
            item6: "",
            item7: "",
            item8: "",
            item9: "",
            item11: "",

            pocionVida: 0,
            pocionEnergia: 0,
            pocionMana: 0,

            oro: 0,
            plata: 0,
            cobre: 0,

        }


    }//VARIABLES MOCHILA

    {//VARIABLES HECHIZOS
        hechizos = {

            item1: "",
            item2: "",
            item3: "",
            item4: "",
            item5: "",
            item6: "",
            item7: "",
            item8: "",
            item9: "",
            item10: "",
            item11: "",

            
        }


    }//FIN VARIABLES HECHIZOS

       {//VARIABLES HABILIDADES
        habilidades = {

            item1: "",
            item2: "",
            item3: "",
            item4: "",
            item5: "",
            item6: "",
            item7: "",
            item8: "",
            item9: "",
            item10: "",
            item11: "",

        }


    }//FIN VARIABLES HABILIDADES

    reinos = {
        fuego:0,
        agua:0,
        aire:0,
        tierra:0,
        rayo:0,
        luz:0,
        eter:0,
        vida:0,
        psique:0,
    }

    magicos = {
        varita:0,
        orbe:0,
        baculo:0,
        runa:0,
        totem:0,
        magia:0,
        brazal:0,
        collar:0,
        anillo:0,
    }

    estilos = {

        ofensivo:0,
        defensivo:0,
        berserker:0,
        sigilo:0,
        cazador:0,
        explorador:0,
        lider:0,
        legion:0,
        caballeria:0,



    }


    marciales = {

        unaMano:0,
        dosManos:0,
        arco:0,
        arrojadiza:0,
        escudo:0,
        natural:0,
        ligera:0,
        media:0,
        pesada:0,


    }



    yelmo = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }


    hombreras = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    pechera = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    guantes = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    pantalones = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    botas = {

        tipo:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    
    brazal = {

        texto:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    collar = {

        texto:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    anillo = {

        texto:"NATURAL",
        val1:0,
        val2:0,
        val3:0,

    }

    penalizadores = {

        val1:0,
        val2:0,
        val3:0,
        val4:0,
        val5:0,
        val6:0,

    }


    totales = {

        val1:1,
        val2:0,
        val3:0,


    }



    var mascota = {

        nombre: "Mascota",
        icono: "img/mascota.png",
    
        patas: 0,
    
        fuerzaBase: 0,
        destrezaBase:0,
        inteligenciaBase:0,
        constitucionBase:0,
        reflejosBase:0,
        sabiduriaBase:0,
    
    
        fuerza: 0,
        destreza:0,
        inteligencia:0,
        constitucion:0,
        reflejos:0,
        sabiduria:0,
    
        vista: 0,
        oido:0,
        olfato:0,
        gusto:0,
        tacto:0,
        vOscuridad:0,


        vistaBase: 0,
        oidoBase:0,
        olfatoBase:0,
        gustoBase:0,
        tactoBase:0,
        vOscuridadBase:0,
    
        armaduraFisica: "",
        armaduraFisicaIcono: "img/nada.png",
        armaduraMagica: "",
        armaduraMagicaIcono:"img/nada.png",
    
        arma1: "",
        arma1Icono:"img/nada.png",
        arma1Danno:"img/danno.png",
    
        arma2: "",
        arma2Icono:"img/nada.png",
        arma2Danno: "img/danno.png",
    
        habilidad1: "",
        habilidad2: "",
        habilidad3: "",
        habilidad4: "",
    
    }

   







} else {

    var personajeJson = JSON.parse(localStorage.getItem('personaje'))
    var razaJson = JSON.parse(localStorage.getItem('raza'))
    var caracteristicasJson = JSON.parse(localStorage.getItem('caracteristicas'))
    var sentidosJson = JSON.parse(localStorage.getItem('sentidos'))
    var indicadoresJson = JSON.parse(localStorage.getItem('indicadores'))
    var slot1Json = JSON.parse(localStorage.getItem('slot1'))
    var slot2Json = JSON.parse(localStorage.getItem('slot2'))
    var mochilaJson = JSON.parse(localStorage.getItem('mochila'))
    var hechizosJson = JSON.parse(localStorage.getItem('hechizos'))
    var habilidadesJson = JSON.parse(localStorage.getItem('habilidades'))
    var reinosJson = JSON.parse(localStorage.getItem('reinos'))
    var magicosJson = JSON.parse(localStorage.getItem('magicos'))
    var estilosJson = JSON.parse(localStorage.getItem('estilos'))
    var marcialesJson = JSON.parse(localStorage.getItem('marciales'))
    var yelmoJson = JSON.parse(localStorage.getItem('yelmo'))
    var hombrerasJson = JSON.parse(localStorage.getItem('hombreras'))
    var pecheraJson = JSON.parse(localStorage.getItem('pechera'))
    var guantesJson = JSON.parse(localStorage.getItem('guantes'))
    var pantalonesJson = JSON.parse(localStorage.getItem('pantalones'))
    var botasJson = JSON.parse(localStorage.getItem('botas'))
    var brazalJson = JSON.parse(localStorage.getItem('brazal'))
    var collarJson = JSON.parse(localStorage.getItem('collar'))
    var anilloJson = JSON.parse(localStorage.getItem('anillo'))
    var totalesJson = JSON.parse(localStorage.getItem('totales'))
    var penalizadoresJson = JSON.parse(localStorage.getItem('penalizadores'))
    var mascotaJson = JSON.parse(localStorage.getItem('mascota'))


    {//VARIABLES PERSONAJE
        var personaje = {

            nombre: personajeJson.nombre,
            experiencia: personajeJson.experiencia,
            experienciaTotal: personajeJson.experienciaTotal,

        }

        var raza = {

            icono: razaJson.icono,
            nombre: razaJson.nombre,
            fuerza: razaJson.fuerza,
            destreza: razaJson.destreza,
            inteligencia: razaJson.inteligencia,
            constitucion: razaJson.constitucion,
            reflejos: razaJson.reflejos,
            sabiduria: razaJson.sabiduria,

            vista: razaJson.vista,
            oido: razaJson.oido,
            olfato: razaJson.olfato,
            gusto: razaJson.gusto,
            tacto: razaJson.tacto,
            visionNocturna: razaJson.visionNocturna,

            bono1: razaJson.bono1,
            bono2: razaJson.bono2,
            bono3: razaJson.bono3,

        }

        var caracteristicas = {

            fuerza: caracteristicasJson.fuerza,
            destreza: caracteristicasJson.destreza,
            inteligencia: caracteristicasJson.inteligencia,
            constitucion: caracteristicasJson.constitucion,
            reflejos: caracteristicasJson.reflejos,
            sabiduria: caracteristicasJson.sabiduria

        }

        var sentidos = {

            vista: sentidosJson.vista,
            oido: sentidosJson.oido,
            olfato: sentidosJson.olfato,
            gusto: sentidosJson.gusto,
            tacto: sentidosJson.tacto,
            visionNocturna: sentidosJson.visionNocturna,

        }

        var indicadores = {

            vida: indicadoresJson.vida,
            modificadorVida: indicadoresJson.modificadorVida,
            vidaMaxima: indicadoresJson.vidaMaxima,

            energia: indicadoresJson.energia,
            modificadorEnergia: indicadoresJson.modificadorEnergia,
            energiaMaxima: indicadoresJson.energiaMaxima,

            mana: indicadoresJson.mana,
            modificadorMana: indicadoresJson.modificadorMana,
            manaMaximo: indicadoresJson.energia.manaMaximo,

        }

        var slot1 = {

            tipo: slot1Json.tipo,
            nombre: slot1Json.nombre,
            descripcion: slot1Json.descripcion,

            ico1: slot1Json.ico1,
            ico2: slot1Json.ico2,
            ico3: slot1Json.ico3,

            val1: slot1Json.val1,
            val2: slot1Json.val2,
            val3: slot1Json.val3,

        }

        var slot2 = {

            tipo: slot2Json.tipo,
            nombre: slot2Json.nombre,
            descripcion: slot2Json.descripcion,

            ico1: slot2Json.ico1,
            ico2: slot2Json.ico2,
            ico3: slot2Json.ico3,

            val1: slot2Json.val1,
            val2: slot2Json.val2,
            val3: slot2Json.val3,

        }


    }//FIN VARIABLES PERSONAJE

    {//VARIABLES MOCHILA

        mochila = {

            item1: mochilaJson.item1,
            item2: mochilaJson.item2,
            item3: mochilaJson.item3,
            item4: mochilaJson.item4,
            item5: mochilaJson.item5,
            item6: mochilaJson.item6,
            item7: mochilaJson.item7,
            item8: mochilaJson.item8,
            item9: mochilaJson.item9,
            item10: mochilaJson.item10,
            item11: mochilaJson.item11,

            pocionVida: mochilaJson.pocionVida,
            pocionEnergia: mochilaJson.pocionEnergia,
            pocionMana: mochilaJson.pocionMana,

            oro: mochilaJson.oro,
            plata: mochilaJson.plata,
            cobre: mochilaJson.cobre,

        }


    }//VARIABLES MOCHILA

    {//VARIABLES HECHIZOS
        hechizos = {

            item1: hechizosJson.item1,
            item2: hechizosJson.item2,
            item3: hechizosJson.item3,
            item4: hechizosJson.item4,
            item5: hechizosJson.item5,
            item6: hechizosJson.item6,
            item7: hechizosJson.item7,
            item8: hechizosJson.item8,
            item9: hechizosJson.item9,
            item10: hechizosJson.item10,
            item11: hechizosJson.item11,

        }

    }//FIN VARIABLE HECHIZOS


    {//VARIABLES HABILIDADES
        habilidades = {

            item1: habilidadesJson.item1,
            item2: habilidadesJson.item2,
            item3: habilidadesJson.item3,
            item4: habilidadesJson.item4,
            item5: habilidadesJson.item5,
            item6: habilidadesJson.item6,
            item7: habilidadesJson.item7,
            item8: habilidadesJson.item8,
            item9: habilidadesJson.item9,
            item10: habilidadesJson.item10,
            item11: habilidadesJson.item11,

        }

    }//FIN VARIABLE HABILIDADES



    reinos = {

        fuego:reinosJson.fuego,
        agua:reinosJson.agua,
        aire:reinosJson.aire,
        tierra:reinosJson.tierra,
        rayo:reinosJson.rayo,
        luz:reinosJson.luz,
        eter:reinosJson.eter,
        vida: reinosJson.vida,
        psique:reinosJson.psique,
    }

    magicos = {

        varita: magicosJson.varita,
        orbe: magicosJson.orbe,
        baculo: magicosJson.baculo,
        runa:magicosJson.runa,
        totem:magicosJson.totem,
        magia:magicosJson.magia,
        brazal:magicosJson.brazal,
        collar:magicosJson.collar,
        anillo:magicosJson.anillo,

    }


    estilos = {

        ofensivo: estilosJson.ofensivo,
        defensivo: estilosJson.defensivo,
        berserker: estilosJson.berserker,
        sigilo: estilosJson.sigilo,
        cazador: estilosJson.cazador,
        explorador: estilosJson.explorador,
        lider: estilosJson.lider,
        legion: estilosJson.legion,
        caballeria: estilosJson.caballeria,



    }


    marciales = {

        unaMano:marcialesJson.unaMano,
        dosManos:marcialesJson.dosManos,
        arco:marcialesJson.arco,
        arrojadiza:marcialesJson.arrojadiza,
        escudo:marcialesJson.escudo,
        natural:marcialesJson.natural,
        ligera:marcialesJson.ligera,
        media:marcialesJson.media,
        pesada:marcialesJson.pesada,


    }


    yelmo = {

        tipo:yelmoJson.tipo,
        val1:yelmoJson.val1,
        val2:yelmoJson.val2,
        val3:yelmoJson.val3,

    }


    hombreras = {

        tipo:yelmoJson.tipo,
        val1:yelmoJson.val1,
        val2:yelmoJson.val2,
        val3:yelmoJson.val3,

    }


    
    pechera = {

        tipo:pecheraJson.tipo,
        val1:pecheraJson.val1,
        val2:pecheraJson.val2,
        val3:pecheraJson.val3,

    }

    guantes = {

        tipo:guantesJson.tipo,
        val1:guantesJson.val1,
        val2:guantesJson.val2,
        val3:guantesJson.val3,

    }


    pantalones = {

        tipo:pantalonesJson.tipo,
        val1:pantalonesJson.val1,
        val2:pantalonesJson.val2,
        val3:pantalonesJson.val3,

    }


    botas = {

        tipo:botasJson.tipo,
        val1:botasJson.val1,
        val2:botasJson.val2,
        val3:botasJson.val3,

    }


    brazal = {

        texto:brazalJson.texto,
        val1:brazalJson.val1,
        val2:brazalJson.val2,
        val3:brazalJson.val3,

    }

    collar = {

        texto:collarJson.texto,
        val1:collarJson.val1,
        val2:collarJson.val2,
        val3:collarJson.val3,

    }

    anillo = {

        texto:anilloJson.texto,
        val1:anilloJson.val1,
        val2:anilloJson.val2,
        val3:anilloJson.val3,

    }


    totales = {

        val1:totalesJson.val1,
        val2:totalesJson.val2,
        val3:totalesJson.val3,
        

    }


    penalizadores = {

        val1:penalizadoresJson.val1,
        val2:penalizadoresJson.val2,
        val3:penalizadoresJson.val3,
        val4:penalizadoresJson.val4,
        val5:penalizadoresJson.val5,
        val6:penalizadoresJson.val6,

    }

    mascota = {

        nombre: mascotaJson.nombre,
        icono: mascotaJson.icono,
    
        patas: mascotaJson.patas,
    
        fuerzaBase: mascotaJson.fuerzaBase,
        destrezaBase: mascotaJson.destrezaBase,
        inteligenciaBase: mascotaJson.inteligenciaBase,
        constitucionBase: mascotaJson.constitucionBase,
        reflejosBase: mascotaJson.reflejosBase,
        sabiduriaBase: mascotaJson.sabiduriaBase,
    
    
        fuerza:  mascotaJson.fuerza,
        destreza: mascotaJson.destreza,
        inteligencia: mascotaJson.inteligencia,
        constitucion: mascotaJson.constitucion,
        reflejos: mascotaJson.reflejos,
        sabiduria: mascotaJson.sabiduria,
    
        vista: mascotaJson.vista,
        oido: mascotaJson.oido,
        olfato: mascotaJson.olfato,
        gusto: mascotaJson.gusto,
        tacto: mascotaJson.tacto,
        vOscuridad: mascotaJson.vOscuridad,


        vistaBase: mascotaJson.vistaBase,
        oidoBase: mascotaJson.oidoBase,
        olfatoBase: mascotaJson.olfatoBase,
        gustoBase: mascotaJson.gustoBase,
        tactoBase: mascotaJson.tactoBase,
        vOscuridadBase: mascotaJson.vOscuridadBase,
    
        armaduraFisica: mascotaJson.armaduraFisica,
        armaduraFisicaIcono: mascotaJson.armaduraFisicaIcono,
        armaduraMagica: mascotaJson.armaduraMagica ,
        armaduraMagicaIcono:mascotaJson. armaduraMagicaIcono,
    
        arma1: mascotaJson.arma1,
        arma1Icono:mascotaJson.arma1Icono,
        arma1Danno:mascotaJson.arma1Danno,
    
        arma2: mascotaJson.arma2,
        arma2Icono:mascotaJson.arma2Icono,
        arma2Danno: mascotaJson.arma2Danno,
    
        habilidad1: mascotaJson.habilidad1,
        habilidad2: mascotaJson.habilidad2,
        habilidad3: mascotaJson.habilidad3,
        habilidad4: mascotaJson.habilidad4,

}
    
  













}


{//VARIABLES INICIADAS EN 0



    var edicion = 0



    var salvaciones = {

        fortaleza: 0,
        agilidad: 0,
        voluntad: 0

    }

    var movimiento = {

        velocidad: 0,
        acciones: 0,
        iniciativa: 0,

    }

    var combate = {

        ataque: 0,
        bonoAtaque: 0,
        esquiva: 0,
        bloqueo: 0,
        bonoBloqueo: 0,
        sigilo: 0,
        equilibrio: 0,
        persuasion: 0,

        
        bonoDanno: 0,
        


    }


    var modificador = {

        caracteristicas: 0,
        sentidos: 0,
        salvaciones: 0,
        combate: 0,

        slotsVal1: 0,
        slotsVal2: 0,
        slotsVal3: 0,

        final: 0

    }

    var divisor = {

        caracteristicas: 0,
        sentidos: 0,
        salvaciones: 0,
        combate: 0,
        slot: 0,

    }

    var bonoSalvaciones = {

        fortaleza: 0,
        agilidad: 0,
        voluntad: 0,

    }

    var bonoCombate = {

        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        sigilo: 0,
        equilibrio: 0,
        persuasion: 0,
    }

}//VARIABLES A 0









