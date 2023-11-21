setInterval(() => {
    imprimir()
    formulas()
}, 100);


function imprimir(){

//------------------------------------------------------------------//

razaIco.src = "img/nada.png"
nombreTxt.textContent = personaje.nombre
expTxt.textContent = personaje.experiencia

mascotaImg.src = personaje.mascotaIcono
auraIcono.src = personaje.auraIcono

//------------------------------------------------------------------//

fuerzaTxt.textContent = personaje.fuerza;
destrezaTxt.textContent = personaje.destreza;
inteligenciaTxt.textContent = personaje.inteligencia;
constitucionTxt.textContent = personaje.constitucion;
reflejosTxt.textContent = personaje.reflejos;
sabiduriaTxt.textContent = personaje.sabiduria;

//------------------------------------------------------------------//

vidaTxt.textContent = personaje.vida;
energiaTxt.textContent = personaje.energia;
manaTxt.textContent = personaje.mana;

//------------------------------------------------------------------//

vistaTxt.textContent = personaje.vista;
oidoTxt.textContent = personaje.oido;
gustoTxt.textContent = personaje.gusto;
olfatoTxt.textContent = personaje.olfato;
tactoTxt.textContent = personaje.tacto;
visionNocturnaTxt.textContent = personaje.visionNocturna;

//------------------------------------------------------------------//

fortalezaTxt.textContent = personaje.fortaleza;
agilidadTxt.textContent = personaje.agilidad;
voluntadTxt.textContent = personaje.voluntad;

//------------------------------------------------------------------//

ataqueTxt.textContent = personaje.ataque;
esquivaTxt.textContent = personaje.esquiva;
bloqueoTxt.textContent = personaje.bloqueo;
sigiloTxt.textContent = personaje.sigilo;
equilibrioTxt.textContent = personaje.equilibrio;
persuasionTxt.textContent = personaje.persuasion;

//------------------------------------------------------------------//

velocidadTxt.textContent = personaje.velocidad;
accionesTxt.textContent = personaje.acciones;
iniciativaTxt.textContent = personaje.iniciativa;

//------------------------------------------------------------------//

consola.textContent = "CONSOLA";

//------------------------------------------------------------------//

slot1Ico.src = personaje.slot1Tipo

slot1Txt.textContent = personaje.slot1Nombre

ico1Slot1.src = personaje.slot1Ico1
ico2Slot1.src = personaje.slot1Ico2
ico3Slot1.src = personaje.slot1Ico3

txt1Slot1.textContent = personaje.slot1Val1
txt2Slot1.textContent = personaje.slot1Val2
txt3Slot1.textContent = personaje.slot1Val3

//------------------------------------------------------------------//

slot2Ico.src = personaje.slot2Tipo

slot2Txt.textContent = personaje.slot2Nombre

ico1Slot2.src = personaje.slot2Ico1
ico2Slot2.src = personaje.slot2Ico2
ico3Slot2.src = personaje.slot2Ico3

txt1Slot2.textContent = personaje.slot2Val1
txt2Slot2.textContent = personaje.slot2Val2
txt3Slot2.textContent = personaje.slot2Val3

//------------------------------------------------------------------//

fuegoTxt.textContent = personaje.fuego
aguaTxt.textContent = personaje.agua
aireTxt.textContent = personaje.aire
tierraTxt.textContent = personaje.tierra
rayoTxt.textContent = personaje.rayo
vidaReinoTxt.textContent = personaje.vidaReino
psiqueTxt.textContent = personaje.psique
eterTxt.textContent = personaje.eter
luzTxt.textContent = personaje.luz

//------------------------------------------------------------------//

manoTxt.textContent = personaje.magia
varitaTxt.textContent = personaje.varita
baculoTxt.textContent = personaje.baculo
totemTxt.textContent = personaje.totem
runaTxt.textContent = personaje.runa
hojaRunaTxt.textContent = personaje.hojaRuna

anilloTxt.textContent = personaje.anillo
collarTxt.textContent = personaje.collar
brazalTxt.textContent = personaje.brazal

//------------------------------------------------------------------//

ofensivoTxt.textContent = personaje.ofensivo
defensivoTxt.textContent = personaje.defensivo
evasivoTxt.textContent = personaje.evasivo
sigilosoTxt.textContent = personaje.sigiloso
tacticoTxt.textContent = personaje.tactico
salvajeTxt.textContent = personaje.salvaje
misticoTxt.textContent = personaje.mistico
exploradorTxt.textContent = personaje.explorador
montadoTxt.textContent = personaje.montado

//------------------------------------------------------------------//

unaManoTxt.textContent = personaje.unaMano
dosManosTxt.textContent = personaje.dosManos
arcoTxt.textContent = personaje.arco
arrojadizaTxt.textContent = personaje.arrojadiza
escudoTxt.textContent = personaje.escudo
naturalesTxt.textContent = personaje.naturales
armaduraLigeraTxt.textContent = personaje.ligera
armaduraMediaTxt.textContent = personaje.media
armaduraPesadaTxt.textContent = personaje.pesada

//------------------------------------------------------------------//

slotYelmoIco.src = personaje.yelmoIcono
slotYelmoTxt.textContent = personaje.yelmoTipo

ico1SlotYelmo.src = personaje.yelmoIcono1
ico2SlotYelmo.src = personaje.yelmoIcono2
ico3SlotYelmo.src = personaje.yelmoIcono3

txt1SlotYelmo.textContent = personaje.yelmoVal1
txt2SlotYelmo.textContent = personaje.yelmoVal2
txt3SlotYelmo.textContent = personaje.yelmoVal3

//-----------------------//

slotHombrerasIco.src = personaje.hombrerasIcono
slotHombrerasTxt.textContent = personaje.hombrerasTipo

ico1SlotHombreras.src = personaje.hombrerasIcono1
ico2SlotHombreras.src = personaje.hombrerasIcono2
ico3SlotHombreras.src = personaje.hombrerasIcono3

txt1SlotHombreras.textContent = personaje.hombrerasVal1
txt2SlotHombreras.textContent = personaje.hombrerasVal2
txt3SlotHombreras.textContent = personaje.hombrerasVal3

//-----------------------//

slotPecheraIco.src = personaje.pecheraIcono
slotPecheraTxt.textContent = personaje.pecheraTipo

ico1SlotPechera.src = personaje.pecheraIcono1
ico2SlotPechera.src = personaje.pecheraIcono2
ico3SlotPechera.src = personaje.pecheraIcono3

txt1SlotPechera.textContent = personaje.pecheraVal1
txt2SlotPechera.textContent = personaje.pecheraVal2
txt3SlotPechera.textContent = personaje.pecheraVal3

//-----------------------//

slotGuantesIco.src = personaje.guantesIcono
slotGuantesTxt.textContent = personaje.guantesTipo

ico1SlotGuantes.src = personaje.guantesIcono1
ico2SlotGuantes.src = personaje.guantesIcono2
ico3SlotGuantes.src = personaje.guantesIcono3

txt1SlotGuantes.textContent = personaje.guantesVal1
txt2SlotGuantes.textContent = personaje.guantesVal2
txt3SlotGuantes.textContent = personaje.guantesVal3

//-----------------------//

slotPantalonIco.src = personaje.pantalonIcono
slotPantalonTxt.textContent = personaje.pantalonTipo

ico1SlotPantalon.src = personaje.pantalonIcono1
ico2SlotPantalon.src = personaje.pantalonIcono2
ico3SlotPantalon.src = personaje.pantalonIcono3

txt1SlotPantalon.textContent = personaje.pantalonVal1
txt2SlotPantalon.textContent = personaje.pantalonVal2
txt3SlotPantalon.textContent = personaje.pantalonVal3

//-----------------------//

slotBotasIco.src = personaje.botasIcono
slotBotasTxt.textContent = personaje.botasTipo

ico1SlotBotas.src = personaje.botasIcono1
ico2SlotBotas.src = personaje.botasIcono2
ico3SlotBotas.src = personaje.botasIcono3

txt1SlotBotas.textContent = personaje.botasVal1
txt2SlotBotas.textContent = personaje.botasVal2
txt3SlotBotas.textContent = personaje.botasVal3

//------------------------------------------------------------------//

slotMagico1Ico.src = personaje.magica1Icono
slotMagico1Txt.textContent = personaje.magica1Tipo

ico1SlotMagico1.src = personaje.magica1Icono1
ico2SlotMagico1.src = personaje.magica1Icono2
ico3SlotMagico1.src = personaje.magica1Icono3

txt1SlotMagico1.textContent = personaje.magica1Val1
txt2SlotMagico1.textContent = personaje.magica1Val2
txt3SlotMagico1.textContent = personaje.magica1Val3

//-----------------------//

slotMagico2Ico.src = personaje.magica2Icono
slotMagico2Txt.textContent = personaje.magica2Tipo

ico1SlotMagico2.src = personaje.magica2Icono1
ico2SlotMagico2.src = personaje.magica2Icono2
ico3SlotMagico2.src = personaje.magica2Icono3

txt1SlotMagico2.textContent = personaje.magica2Val1
txt2SlotMagico2.textContent = personaje.magica2Val2
txt3SlotMagico2.textContent = personaje.magica2Val3

//-----------------------//

slotMagico3Ico.src = personaje.magica3Icono
slotMagico3Txt.textContent = personaje.magica3Tipo

ico1SlotMagico3.src = personaje.magica3Icono1
ico2SlotMagico3.src = personaje.magica3Icono2
ico3SlotMagico3.src = personaje.magica3Icono3

txt1SlotMagico3.textContent = personaje.magica3Val1
txt2SlotMagico3.textContent = personaje.magica3Val2
txt3SlotMagico3.textContent = personaje.magica3Val3

//------------------------------------------------------------------//

bloqueoTotalTxt.textContent = personaje.bloqueoTotal + personaje.bloqueoNatural
mitigacionTotalTxt.textContent = personaje.mitigacionTotal
rupturaTotalTxt.textContent = personaje.rupturaTotal

//-----------------------//

penalizadorAtaqueTotalTxt.textContent = personaje.penalizadorAtaque
penalizadorEsquivaTotalTxt.textContent = personaje.penalizadorEsquiva
penalizadorSigiloTotalTxt.textContent = personaje.penalizadorSigilo
penalizadorEquilibrioTotalTxt.textContent = personaje.penalizadorEquilibrio
penalizadorVelocidadTotalTxt.textContent = personaje.penalizadorVelocidad
penalizadorAccionesTotalTxt.textContent = personaje.penalizadorAcciones

//------------------------------------------------------------------//

}