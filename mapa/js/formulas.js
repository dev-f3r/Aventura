//INICIATIVA------------------------------------------------------//

function formulas() {
    personaje.vida = personaje.fuerza * personaje.constitucion
    personaje.energia = personaje.destreza * personaje.reflejos
    personaje.mana = personaje.inteligencia * personaje.sabiduria

    personaje.fortaleza = Math.floor(((personaje.constitucion + personaje.fuerza) / 2)) + 10
    personaje.agilidad = Math.floor(((personaje.destreza + personaje.reflejos) / 2)) + 10
    personaje.voluntad = Math.floor(((personaje.inteligencia + personaje.sabiduria)) / 2) + 10

    personaje.ataque = Math.floor(((personaje.fuerza + personaje.inteligencia) / 6) + (personaje.destreza / 1.5))
    personaje.esquiva = Math.floor(((personaje.destreza + personaje.sabiduria) / 6) + (personaje.reflejos / 1.5))
    personaje.bloqueo = personaje.bloqueoTotal + personaje.bloqueoNatural
    personaje.sigilo = Math.floor(((personaje.sabiduria + personaje.inteligencia) / 3) + personaje.destreza - (personaje.constitucion / 2))
    personaje.equilibrio = Math.floor((personaje.destreza + personaje.reflejos) / 1.5)
    personaje.persuasion = Math.floor((personaje.sabiduria + personaje.inteligencia) / 1.5)

    personaje.velocidad = 3 + Math.floor(((personaje.fuerza + personaje.destreza) / 2) - (personaje.constitucion / 3))
    personaje.acciones = 2 + Math.floor((personaje.constitucion) / 6) + ((personaje.reflejos) / 2)
    personaje.iniciativa = Math.floor(((personaje.inteligencia + personaje.reflejos + personaje.destreza) / 1.3) - ((personaje.fuerza + personaje.constitucion) / 3))

    personaje.bloqueoNatural = Math.round(((personaje.constitucion + personaje.inteligencia) / 9) + personaje.destreza / 3)
    personaje.mitigacionNatural = Math.round(((personaje.constitucion + personaje.fuerza + personaje.sabiduria) / 6))
    personaje.rupturaNatural = Math.round((personaje.constitucion) + ((personaje.fuerza + personaje.sabiduria) / 1.5))

    personaje.bloqueoTotal = Math.round(((personaje.yelmoVal1 + personaje.hombrerasVal1 + personaje.pecheraVal1 + personaje.guantesVal1 + personaje.pantalonVal1 + personaje.botasVal1) / 6) + ((personaje.magica1Val1 + personaje.magica2Val1 + personaje.magica3Val1) / 3))
    personaje.mitigacionTotal = personaje.mitigacionNatural + Math.round(((personaje.yelmoVal2 + personaje.hombrerasVal2 + personaje.pecheraVal2 + personaje.guantesVal2 + personaje.pantalonVal2 + personaje.botasVal2) / 6) + ((personaje.magica1Val2 + personaje.magica2Val2 + personaje.magica3Val2) / 3))
    personaje.rupturaTotal = personaje.rupturaNatural + Math.round(((personaje.yelmoVal3 + personaje.hombrerasVal3 + personaje.pecheraVal3 + personaje.guantesVal3 + personaje.pantalonVal3 + personaje.botasVal3) / 6) + ((personaje.magica1Val3 + personaje.magica2Val3 + personaje.magica3Val3) / 3))

    

}

//------------------------------------------------------//


