//PERSONAJE------------------------------------------------------//

var personaje = {


    nombre: "Seleccionar Raza",
    raza: "",
    icono: "img/humano.png",
    experiencia: 0,
    experienciaTotal: 0,

    mascotaIcono: "img/nada.png",
    auraIcono: "img/nada.png",


    //------------------------------------------------------//

    caracteristicas: 0,

    //------------------------------------------------------//

    fuerza: 3,
    destreza: 4,
    inteligencia: 3,
    constitucion: 4,
    reflejos: 3,
    sabiduria: 4,

    fuerzaRaza: 0,
    destrezaRaza: 0,
    inteligenciaRaza: 0,
    constitucionRaza: 0,
    reflejosRaza: 0,
    sabiduriaRaza: 0,

    fuerzBono: 0,
    destrezaBono: 0,
    inteligenciBono: 0,
    constitucioBono: 0,
    reflejoBono: 0,
    sabiduriBono: 0,

    fuerzaMod: 0,
    destrezaMod: 0,
    inteligenciaMod: 0,
    constitucionMod: 0,
    reflejosMod: 0,
    sabiduriaMod: 0,

    //------------------------------------------------------//

    indicadores: 0,

    //------------------------------------------------------//

    vida: 0,
    vidaBase: 0,
    vidaMod: 0,

    energia: 0,
    energiaBase: 0,
    energiaMod: 0,

    mana: 0,
    manaBase: 0,
    manaMod: 0,

    //------------------------------------------------------//

    sentidos: 0,

    //------------------------------------------------------//

    vista: 3,
    oido: 3,
    olfato: 3,
    gusto: 3,
    tacto: 3,
    visionNocturna: 0,

    vistaRaza: 3,
    oidoRaza: 3,
    olfatoRaza: 3,
    gustoRaza: 3,
    tactoRaza: 3,
    visionNocturnaRaza: 0,

    vistaBono: 0,
    oidoBono: 0,
    olfatoBono: 0,
    gustoBono: 0,
    tactoBono: 0,
    visionNocturnaBono: 0,

    vistaMod: 0,
    oidoMod: 0,
    olfatoMod: 0,
    gustoMod: 0,
    tactoMod: 0,
    visionNocturnaMod: 0,

    //------------------------------------------------------//

    salvaciones: 0,

    //------------------------------------------------------//

    fortaleza: 0,
    agilidad: 0,
    voluntad: 0,

    fortalezaMod: 0,
    agilidadMod: 0,
    voluntadMod: 0,

    //------------------------------------------------------//

    combate: 0,

    //------------------------------------------------------//

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    sigilo: 0,
    equilibrio: 0,
    persuasion: 0,

    ataqueBase: 0,
    esquivaBase: 0,
    bloqueoBase: 0,
    sigiloBase: 0,
    equilibrioBase: 0,
    persuasionBase: 0,

    ataqueMod: 0,
    esquivaMod: 0,
    bloqueoMod: 0,
    sigiloMod: 0,
    equilibrioMod: 0,
    persuasionMod: 0,

    //------------------------------------------------------//

    movimiento: 0,

    //------------------------------------------------------//

    velocidad: 0,
    acciones: 0,
    iniciativa: 0,

    velocidadMod: 0,
    accionesMod: 0,
    iniciativaMod: 0,

    //------------------------------------------------------//

    slot1: "",

    //------------------------------------------------------//

    slot1Tipo: "img/nada.png",
    slot1Nombre: "Nada",
    slot1Descripcion: "Descripcion",

    slot1Ico1: "img/nada.png",
    slot1Ico2: "img/nada.png",
    slot1Ico3: "img/nada.png",

    slot1Val1: 0,
    slot1Val2: 0,
    slot1Val3: 0,

    //------------------------------------------------------//

    slot2: "",

    //------------------------------------------------------//

    slot2Tipo: "img/nada.png",
    slot2Nombre: "Nada",
    slot2Descripcion: "Descripcion",

    slot2Ico1: "img/nada.png",
    slot2Ico2: "img/nada.png",
    slot2Ico3: "img/nada.png",

    slot2Val1: 0,
    slot2Val2: 0,
    slot2Val3: 0,

    //------------------------------------------------------//

    mochila: "",

    //------------------------------------------------------//

    mochilaItem1: "",
    mochilaItem2: "",
    mochilaItem3: "",
    mochilaItem4: "",
    mochilaItem5: "",
    mochilaItem6: "",
    mochilaItem7: "",
    mochilaItem8: "",
    mochilaItem9: "",
    mochilaItem11: "",

    pocionVida: 0,
    pocionEnergia: 0,
    pocionMana: 0,

    oro: 0,
    plata: 0,
    cobre: 0,


    //------------------------------------------------------//

    hechizos: "",

    //------------------------------------------------------//

    hechizosItem1: "",
    hechizosItem2: "",
    hechizosItem3: "",
    hechizosItem4: "",
    hechizosItem5: "",
    hechizosItem6: "",
    hechizosItem7: "",
    hechizosItem8: "",
    hechizosItem9: "",
    hechizosItem11: "",

    //------------------------------------------------------//

    habilidades: "",

    //------------------------------------------------------//

    habilidadesItem1: "",
    habilidadesItem2: "",
    habilidadesItem3: "",
    habilidadesItem4: "",
    habilidadesItem5: "",
    habilidadesItem6: "",
    habilidadesItem7: "",
    habilidadesItem8: "",
    habilidadesItem9: "",
    habilidadesItem11: "",

    //------------------------------------------------------//

    Reinos: "",

    //------------------------------------------------------//

    fuego: 0,
    agua: 0,
    aire: 0,
    tierra: 0,
    rayo: 0,
    luz: 0,
    eter: 0,
    vidaReino: 0,
    psique: 0,

    //------------------------------------------------------//

    magicos: "",

    //------------------------------------------------------//

    magia: 0,
    varita: 0,
    baculo: 0,
    runa: 0,
    totem: 0,
    hojaRuna: 0,
    brazal: 0,
    collar: 0,
    anillo: 0,

    //------------------------------------------------------//

    estilos: "",

    //------------------------------------------------------//

    ofensivo: 0,
    defensivo: 0,
    evasivo: 0,
    sigiloso: 0,
    tactico: 0,
    salvaje: 0,
    explorador: 0,
    mistico: 0,
    montado: 0,

    //------------------------------------------------------//

    marciales: "",

    //------------------------------------------------------//

    unaMano: 0,
    dosManos: 0,
    arco: 0,
    arrojadiza: 0,
    escudo: 0,
    naturales: 0,
    ligera: 0,
    media: 0,
    pesada: 0,

    //------------------------------------------------------//

    armaduraFisica: "",

    //------------------------------------------------------//

    yelmoIcono: "img/nada.png",
    yelmoTipo: "NATURAL",
    yelmoIcono1: "img/nada.png",
    yelmoIcono2: "img/nada.png",
    yelmoIcono3: "img/nada.png",
    yelmoVal1: 0,
    yelmoVal2: 0,
    yelmoVal3: 0,



    pecheraIcono: "img/nada.png",
    pecheraTipo: "NATURAL",
    pecheraIcono1: "img/nada.png",
    pecheraIcono2: "img/nada.png",
    pecheraIcono3: "img/nada.png",
    pecheraVal1: 0,
    pecheraVal2: 0,
    pecheraVal3: 0,



    hombrerasIcono: "img/nada.png",
    hombrerasTipo: "NATURAL",
    hombrerasIcono1: "img/nada.png",
    hombrerasIcono2: "img/nada.png",
    hombrerasIcono3: "img/nada.png",
    hombrerasVal1: 0,
    hombrerasVal2: 0,
    hombrerasVal3: 0,



    guantesIcono: "img/nada.png",
    guantesTipo: "NATURAL",
    guantesIcono1: "img/nada.png",
    guantesIcono2: "img/nada.png",
    guantesIcono3: "img/nada.png",
    guantesVal1: 0,
    guantesVal2: 0,
    guantesVal3: 0,



    pantalonIcono: "img/nada.png",
    pantalonTipo: "NATURAL",
    pantalonIcono1: "img/nada.png",
    pantalonIcono2: "img/nada.png",
    pantalonIcono3: "img/nada.png",
    pantalonVal1: 0,
    pantalonVal2: 0,
    pantalonVal3: 0,



    botasIcono: "img/nada.png",
    botasTipo: "NATURAL",
    botasIcono1: "img/nada.png",
    botasIcono2: "img/nada.png",
    botasIcono3: "img/nada.png",
    botasVal1: 0,
    botasVal2: 0,
    botasVal3: 0,

    //------------------------------------------------------//

    armaduraMagica: "",

    //------------------------------------------------------//

    magica1Icono: "img/nada.png",
    magica1Tipo: "NATURAL",
    magica1Icono1: "img/nada.png",
    magica1Icono2: "img/nada.png",
    magica1Icono3: "img/nada.png",
    magica1Val1: 0,
    magica1Val2: 0,
    magica1Val3: 0,



    magica2Icono: "img/nada.png",
    magica2Tipo: "NATURAL",
    magica2Icono1: "img/nada.png",
    magica2Icono2: "img/nada.png",
    magica2Icono3: "img/nada.png",
    magica2Val1: 0,
    magica2Val2: 0,
    magica2Val3: 0,



    magica3Icono: "img/nada.png",
    magica3Tipo: "NATURAL",
    magica3Icono1: "img/nada.png",
    magica3Icono2: "img/nada.png",
    magica3Icono3: "img/nada.png",
    magica3Val1: 0,
    magica3Val2: 0,
    magica3Val3: 0,

    //------------------------------------------------------//

    penalizadores: "",

    //------------------------------------------------------//

    penalizadorAtaque: 0,
    penalizadorEsquiva: 0,
    penalizadorSigilo: 0,
    penalizadorEquilibrio: 0,
    penalizadorVelocidad: 0,
    penalizadorAcciones: 0,

    //------------------------------------------------------//

    armaduraTotal: "",

    //------------------------------------------------------//

    bloqueoTotal: 0,
    mitigacionTotal: 0,
    rupturaTotal: 0,
    
    bloqueoMod:0,
    mitigacionMod:0,
    rupturaMod:0,

    bloqueoNatural: 0,
    mitigacionNatural:0,
    rupturaNatural:0,


    //------------------------------------------------------//

};

//FIN PERSONAJE------------------------------------------------------//

