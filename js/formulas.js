//INICIATIVA------------------------------------------------------//

personaje.vida = personaje.fuerza * personaje.constitucion
personaje.energia = personaje.destreza * personaje.reflejos
personaje.mana = personaje.inteligencia *  personaje.sabiduria

personaje.fortaleza =  Math.floor(((personaje.constitucion + personaje.fuerza) / 2)) + 10
personaje.agilidad =  Math.floor(((personaje.destreza + personaje.reflejos) / 2)) + 10
personaje.voluntad =  Math.floor(((personaje.inteligencia + personaje.sabiduria)) / 2) + 10

personaje.ataque = Math.floor((personaje.fuerza + personaje.inteligencia) / 3.5) + personaje.destreza 
personaje.esquiva = Math.floor((personaje.destreza + personaje.sabiduria) / 3) + personaje.reflejos
personaje.bloqueo = Math.floor((personaje.constitucion / 3) + personaje.destreza)
personaje.sigilo = Math.floor(((personaje.sabiduria + personaje.inteligencia) / 3) + personaje.destreza - (personaje.constitucion / 3))
personaje.equilibrio = Math.floor((personaje.destreza + personaje.reflejos) / 1.3)
personaje.persuasion = Math.floor((personaje.sabiduria + personaje.inteligencia) / 1.3)

personaje.velocidad = 3 +  Math.floor(((personaje.fuerza + personaje.destreza ) / 2) - (personaje.constitucion / 3))
personaje.acciones = 2 + Math.floor((personaje.constitucion) / 6) + ((personaje.reflejos) / 2)
personaje.iniciativa = Math.floor(((personaje.inteligencia + personaje.reflejos + personaje.destreza) / 1.3) - ((personaje.fuerza + personaje.constitucion) / 3))

//------------------------------------------------------//
