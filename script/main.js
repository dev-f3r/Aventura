var conect = JSON.parse(localStorage.getItem('caracteristicas'))

var edicion = 0

var raza = {

    icono: "img/humano.png",
    nombre: "Humano",
    fuerza: 3,
    destreza: 3,
    inteligencia: 3,
    constitucion: 3,
    reflejos: 3,
    sabiduria: 3,

    vista: 4,
    oido: 4,
    olfato: 3,
    gusto: 4,
    tacto: 3,
    visionNocturna: 0,

    bono1: "",
    bono2: "",
    bono3: "",

}

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

    bonoDanno: caracteristicas.fuerza,

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



if (conect = null) {

    {//VARIBALES PERSONAJE


        var personaje = {

            nombre: "Humano",
            experiencia: 0,
            experienciaTotal: 0,

        }

        var caracteristicas = {

            fuerza: 3,
            destreza: 3,
            inteligencia: 3,
            constitucion: 3,
            reflejos: 3,
            sabiduria: 3

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

            vista: 4,
            oido: 4,
            olfato: 3,
            gusto: 4,
            tacto: 3,
            visionNocturna: 0,

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

} else {



    var personajeJson = JSON.parse(localStorage.getItem('personaje'))
    var caracteristicasJson = JSON.parse(localStorage.getItem('caracteristicas'))
    var sentidosJson = JSON.parse(localStorage.getItem('sentidos'))
    var indicadoresJson = JSON.parse(localStorage.getItem('indicadores'))
    var slot1Json = JSON.parse(localStorage.getItem('slot1'))
    var slot2Json = JSON.parse(localStorage.getItem('slot2'))
    var mochilaJson = JSON.parse(localStorage.getItem('mochila'))



    var personaje = {

        nombre: personajeJson.nombre,
        experiencia: personajeJson.experiencia,
        experienciaTotal: personajeJson.experienciaTotal,

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
        modificadorVida: indicadoresJson.modificador,
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

}


localStorage.setItem('personaje', JSON.stringify(personaje))
localStorage.setItem('caracteristicas', JSON.stringify(caracteristicas))
localStorage.setItem('sentidos', JSON.stringify(sentidos))
localStorage.setItem('indicadores', JSON.stringify(indicadores))
localStorage.setItem('slot1', JSON.stringify(slot1))
localStorage.setItem('slot2', JSON.stringify(slot2))
localStorage.setItem('mochila', JSON.stringify(mochila))











































{//VARIBALES PERSONAJE

    var edicion = 0

    var raza = {

        icono: "img/humano.png",
        nombre: "Humano",
        fuerza: 3,
        destreza: 3,
        inteligencia: 3,
        constitucion: 3,
        reflejos: 3,
        sabiduria: 3,

        vista: 4,
        oido: 4,
        olfato: 3,
        gusto: 4,
        tacto: 3,
        visionNocturna: 0,

        bono1: "",
        bono2: "",
        bono3: "",

    }

    var personaje = {

        nombre: "Humano",
        experiencia: 0,
        experienciaTotal: 0,

    }

    var conect = JSON.parse(localStorage.getItem('caracteristicas'))

    if (conect = null) {

        var caracteristicas = {

            fuerza: 3,
            destreza: 3,
            inteligencia: 3,
            constitucion: 3,
            reflejos: 3,
            sabiduria: 3

        }



    } else {

        var caracteristicasJson = JSON.parse(localStorage.getItem('caracteristicas'))

        var caracteristicas = {

            fuerza: caracteristicasJson.fuerza,
            destreza: 3,
            inteligencia: 3,
            constitucion: 3,
            reflejos: 3,
            sabiduria: 3

        }


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

        vista: 4,
        oido: 4,
        olfato: 3,
        gusto: 4,
        tacto: 3,
        visionNocturna: 0,

    }

    var salvaciones = {

        fortaleza: 0,
        agilidad: 0,
        voluntad: 0

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

        bonoDanno: caracteristicas.fuerza,

    }

    var movimiento = {

        velocidad: 0,
        acciones: 0,
        iniciativa: 0,

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




    localStorage.setItem('caracteristicas', JSON.stringify(caracteristicas))
    localStorage.setItem('sentidos', JSON.stringify(sentidos))
    localStorage.setItem('indicadores', JSON.stringify(indicadores))
    localStorage.setItem('modificador', JSON.stringify(modificador))
    localStorage.setItem('slot1', JSON.stringify(slot1))
    localStorage.setItem('slot2', JSON.stringify(slot2))


}//VARIABLES PERSONAJES

















var conect = JSON.parse(localStorage.getItem('caracteristicas'))

if (conect = null) {

    var caracteristicas = {

        fuerza: 3,
        destreza: 3,
        inteligencia: 3,
        constitucion: 3,
        reflejos: 3,
        sabiduria: 3

    }