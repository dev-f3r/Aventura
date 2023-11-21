{//VARIEBLES E INICIO

    window.onload = mundo;


    function mundo() {

        mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'
        mapa.style.backgroundPosition = 'center'
        mapa.style.backgroundRepeat = 'no-repeat'
        mapa.style.backgroundAttachment = 'contain'
        mapa.style.backgroundSize = '97% 97%'

        cuadrante = "MUNDO"
        consolaMapa.innerHTML = info.MAPA


{//LINEAS
    
        A1.style.outline = "1px solid #adadad"
        A2.style.outline = "1px solid #adadad"
        A3.style.outline = "1px solid #adadad"
        A4.style.outline = "1px solid #adadad"
        A5.style.outline = "1px solid #adadad"
        A6.style.outline = "1px solid #adadad"
        A7.style.outline = "1px solid #adadad"
        A8.style.outline = "1px solid #adadad"
        A9.style.outline = "1px solid #adadad"

        B1.style.outline = "1px solid #adadad"
        B2.style.outline = "1px solid #adadad"
        B3.style.outline = "1px solid #adadad"
        B4.style.outline = "1px solid #adadad"
        B5.style.outline = "1px solid #adadad"
        B6.style.outline = "1px solid #adadad"
        B7.style.outline = "1px solid #adadad"
        B8.style.outline = "1px solid #adadad"
        B9.style.outline = "1px solid #adadad"

        C1.style.outline = "1px solid #adadad"
        C2.style.outline = "1px solid #adadad"
        C3.style.outline = "1px solid #adadad"
        C4.style.outline = "1px solid #adadad"
        C5.style.outline = "1px solid #adadad"
        C6.style.outline = "1px solid #adadad"
        C7.style.outline = "1px solid #adadad"
        C8.style.outline = "1px solid #adadad"
        C9.style.outline = "1px solid #adadad"

        D1.style.outline = "1px solid #adadad"
        D2.style.outline = "1px solid #adadad"
        D3.style.outline = "1px solid #adadad"
        D4.style.outline = "1px solid #adadad"
        D5.style.outline = "1px solid #adadad"
        D6.style.outline = "1px solid #adadad"
        D7.style.outline = "1px solid #adadad"
        D8.style.outline = "1px solid #adadad"
        D9.style.outline = "1px solid #adadad"

        E1.style.outline = "1px solid #adadad"
        E2.style.outline = "1px solid #adadad"
        E3.style.outline = "1px solid #adadad"
        E4.style.outline = "1px solid #adadad"
        E5.style.outline = "1px solid #adadad"
        E6.style.outline = "1px solid #adadad"
        E7.style.outline = "1px solid #adadad"
        E8.style.outline = "1px solid #adadad"
        E9.style.outline = "1px solid #adadad"

        F1.style.outline = "1px solid #adadad"
        F2.style.outline = "1px solid #adadad"
        F3.style.outline = "1px solid #adadad"
        F4.style.outline = "1px solid #adadad"
        F5.style.outline = "1px solid #adadad"
        F6.style.outline = "1px solid #adadad"
        F7.style.outline = "1px solid #adadad"
        F8.style.outline = "1px solid #adadad"
        F9.style.outline = "1px solid #adadad"

        G1.style.outline = "1px solid #adadad"
        G2.style.outline = "1px solid #adadad"
        G3.style.outline = "1px solid #adadad"
        G4.style.outline = "1px solid #adadad"
        G5.style.outline = "1px solid #adadad"
        G6.style.outline = "1px solid #adadad"
        G7.style.outline = "1px solid #adadad"
        G8.style.outline = "1px solid #adadad"
        G9.style.outline = "1px solid #adadad"

        H1.style.outline = "1px solid #adadad"
        H2.style.outline = "1px solid #adadad"
        H3.style.outline = "1px solid #adadad"
        H4.style.outline = "1px solid #adadad"
        H5.style.outline = "1px solid #adadad"
        H6.style.outline = "1px solid #adadad"
        H7.style.outline = "1px solid #adadad"
        H8.style.outline = "1px solid #adadad"
        H9.style.outline = "1px solid #adadad"

        I1.style.outline = "1px solid #adadad"
        I2.style.outline = "1px solid #adadad"
        I3.style.outline = "1px solid #adadad"
        I4.style.outline = "1px solid #adadad"
        I5.style.outline = "1px solid #adadad"
        I6.style.outline = "1px solid #adadad"
        I7.style.outline = "1px solid #adadad"
        I8.style.outline = "1px solid #adadad"
        I9.style.outline = "1px solid #adadad"
}//FIN LINEAS

    }

    var cuadrante = "MUNDO"
    var mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'
    var cadena = "0"
    var letrasValor = true;
    var cuadriculaValor = false;

    {//LETRAS
        letras.addEventListener('click', function () {

            if (letrasValor == true) {

                A1Txt.textContent = ""
                A2Txt.textContent = ""
                A3Txt.textContent = ""
                A4Txt.textContent = ""
                A5Txt.textContent = ""
                A6Txt.textContent = ""
                A7Txt.textContent = ""
                A8Txt.textContent = ""
                A9Txt.textContent = ""

                B1Txt.textContent = ""
                B2Txt.textContent = ""
                B3Txt.textContent = ""
                B4Txt.textContent = ""
                B5Txt.textContent = ""
                B6Txt.textContent = ""
                B7Txt.textContent = ""
                B8Txt.textContent = ""
                B9Txt.textContent = ""

                C1Txt.textContent = ""
                C2Txt.textContent = ""
                C3Txt.textContent = ""
                C4Txt.textContent = ""
                C5Txt.textContent = ""
                C6Txt.textContent = ""
                C7Txt.textContent = ""
                C8Txt.textContent = ""
                C9Txt.textContent = ""

                D1Txt.textContent = ""
                D2Txt.textContent = ""
                D3Txt.textContent = ""
                D4Txt.textContent = ""
                D5Txt.textContent = ""
                D6Txt.textContent = ""
                D7Txt.textContent = ""
                D8Txt.textContent = ""
                D9Txt.textContent = ""

                E1Txt.textContent = ""
                E2Txt.textContent = ""
                E3Txt.textContent = ""
                E4Txt.textContent = ""
                E5Txt.textContent = ""
                E6Txt.textContent = ""
                E7Txt.textContent = ""
                E8Txt.textContent = ""
                E9Txt.textContent = ""

                F1Txt.textContent = ""
                F2Txt.textContent = ""
                F3Txt.textContent = ""
                F4Txt.textContent = ""
                F5Txt.textContent = ""
                F6Txt.textContent = ""
                F7Txt.textContent = ""
                F8Txt.textContent = ""
                F9Txt.textContent = ""

                G1Txt.textContent = ""
                G2Txt.textContent = ""
                G3Txt.textContent = ""
                G4Txt.textContent = ""
                G5Txt.textContent = ""
                G6Txt.textContent = ""
                G7Txt.textContent = ""
                G8Txt.textContent = ""
                G9Txt.textContent = ""

                H1Txt.textContent = ""
                H2Txt.textContent = ""
                H3Txt.textContent = ""
                H4Txt.textContent = ""
                H5Txt.textContent = ""
                H6Txt.textContent = ""
                H7Txt.textContent = ""
                H8Txt.textContent = ""
                H9Txt.textContent = ""

                I1Txt.textContent = ""
                I2Txt.textContent = ""
                I3Txt.textContent = ""
                I4Txt.textContent = ""
                I5Txt.textContent = ""
                I6Txt.textContent = ""
                I7Txt.textContent = ""
                I8Txt.textContent = ""
                I9Txt.textContent = ""

                letrasValor = false

            } else {

                A1Txt.textContent = "A1"
                A2Txt.textContent = "A2"
                A3Txt.textContent = "A3"
                A4Txt.textContent = "A4"
                A5Txt.textContent = "A5"
                A6Txt.textContent = "A6"
                A7Txt.textContent = "A7"
                A8Txt.textContent = "A8"
                A9Txt.textContent = "A9"

                B1Txt.textContent = "B1"
                B2Txt.textContent = "B2"
                B3Txt.textContent = "B3"
                B4Txt.textContent = "B4"
                B5Txt.textContent = "B5"
                B6Txt.textContent = "B6"
                B7Txt.textContent = "B7"
                B8Txt.textContent = "B8"
                B9Txt.textContent = "B9"

                C1Txt.textContent = "C1"
                C2Txt.textContent = "C2"
                C3Txt.textContent = "C3"
                C4Txt.textContent = "C4"
                C5Txt.textContent = "C5"
                C6Txt.textContent = "C6"
                C7Txt.textContent = "C7"
                C8Txt.textContent = "C8"
                C9Txt.textContent = "C9"

                D1Txt.textContent = "D1"
                D2Txt.textContent = "D2"
                D3Txt.textContent = "D3"
                D4Txt.textContent = "D4"
                D5Txt.textContent = "D5"
                D6Txt.textContent = "D6"
                D7Txt.textContent = "D7"
                D8Txt.textContent = "D8"
                D9Txt.textContent = "D9"

                E1Txt.textContent = "E1"
                E2Txt.textContent = "E2"
                E3Txt.textContent = "E3"
                E4Txt.textContent = "E4"
                E5Txt.textContent = "E5"
                E6Txt.textContent = "E6"
                E7Txt.textContent = "E7"
                E8Txt.textContent = "E8"
                E9Txt.textContent = "E9"

                F1Txt.textContent = "F1"
                F2Txt.textContent = "F2"
                F3Txt.textContent = "F3"
                F4Txt.textContent = "F4"
                F5Txt.textContent = "F5"
                F6Txt.textContent = "F6"
                F7Txt.textContent = "F7"
                F8Txt.textContent = "F8"
                F9Txt.textContent = "F9"

                G1Txt.textContent = "G1"
                G2Txt.textContent = "G2"
                G3Txt.textContent = "G3"
                G4Txt.textContent = "G4"
                G5Txt.textContent = "G5"
                G6Txt.textContent = "G6"
                G7Txt.textContent = "G7"
                G8Txt.textContent = "G8"
                G9Txt.textContent = "G9"

                H1Txt.textContent = "H1"
                H2Txt.textContent = "H2"
                H3Txt.textContent = "H3"
                H4Txt.textContent = "H4"
                H5Txt.textContent = "H5"
                H6Txt.textContent = "H6"
                H7Txt.textContent = "H7"
                H8Txt.textContent = "H8"
                H9Txt.textContent = "H9"

                I1Txt.textContent = "I1"
                I2Txt.textContent = "I2"
                I3Txt.textContent = "I3"
                I4Txt.textContent = "I4"
                I5Txt.textContent = "I5"
                I6Txt.textContent = "I6"
                I7Txt.textContent = "I7"
                I8Txt.textContent = "I8"
                I9Txt.textContent = "I9"

                letrasValor = true;

            }

            //FIN LETRAS CUADRANTES



        })
    }//FIN LETRAS

    {//CUADRICULA MAPA

        cuadricula.addEventListener('click', function opcionCuadricula() {

            if (cuadriculaValor == true) {

                A1.style.outline = "1px solid #adadad"
                A2.style.outline = "1px solid #adadad"
                A3.style.outline = "1px solid #adadad"
                A4.style.outline = "1px solid #adadad"
                A5.style.outline = "1px solid #adadad"
                A6.style.outline = "1px solid #adadad"
                A7.style.outline = "1px solid #adadad"
                A8.style.outline = "1px solid #adadad"
                A9.style.outline = "1px solid #adadad"

                B1.style.outline = "1px solid #adadad"
                B2.style.outline = "1px solid #adadad"
                B3.style.outline = "1px solid #adadad"
                B4.style.outline = "1px solid #adadad"
                B5.style.outline = "1px solid #adadad"
                B6.style.outline = "1px solid #adadad"
                B7.style.outline = "1px solid #adadad"
                B8.style.outline = "1px solid #adadad"
                B9.style.outline = "1px solid #adadad"

                C1.style.outline = "1px solid #adadad"
                C2.style.outline = "1px solid #adadad"
                C3.style.outline = "1px solid #adadad"
                C4.style.outline = "1px solid #adadad"
                C5.style.outline = "1px solid #adadad"
                C6.style.outline = "1px solid #adadad"
                C7.style.outline = "1px solid #adadad"
                C8.style.outline = "1px solid #adadad"
                C9.style.outline = "1px solid #adadad"

                D1.style.outline = "1px solid #adadad"
                D2.style.outline = "1px solid #adadad"
                D3.style.outline = "1px solid #adadad"
                D4.style.outline = "1px solid #adadad"
                D5.style.outline = "1px solid #adadad"
                D6.style.outline = "1px solid #adadad"
                D7.style.outline = "1px solid #adadad"
                D8.style.outline = "1px solid #adadad"
                D9.style.outline = "1px solid #adadad"

                E1.style.outline = "1px solid #adadad"
                E2.style.outline = "1px solid #adadad"
                E3.style.outline = "1px solid #adadad"
                E4.style.outline = "1px solid #adadad"
                E5.style.outline = "1px solid #adadad"
                E6.style.outline = "1px solid #adadad"
                E7.style.outline = "1px solid #adadad"
                E8.style.outline = "1px solid #adadad"
                E9.style.outline = "1px solid #adadad"

                F1.style.outline = "1px solid #adadad"
                F2.style.outline = "1px solid #adadad"
                F3.style.outline = "1px solid #adadad"
                F4.style.outline = "1px solid #adadad"
                F5.style.outline = "1px solid #adadad"
                F6.style.outline = "1px solid #adadad"
                F7.style.outline = "1px solid #adadad"
                F8.style.outline = "1px solid #adadad"
                F9.style.outline = "1px solid #adadad"

                G1.style.outline = "1px solid #adadad"
                G2.style.outline = "1px solid #adadad"
                G3.style.outline = "1px solid #adadad"
                G4.style.outline = "1px solid #adadad"
                G5.style.outline = "1px solid #adadad"
                G6.style.outline = "1px solid #adadad"
                G7.style.outline = "1px solid #adadad"
                G8.style.outline = "1px solid #adadad"
                G9.style.outline = "1px solid #adadad"

                H1.style.outline = "1px solid #adadad"
                H2.style.outline = "1px solid #adadad"
                H3.style.outline = "1px solid #adadad"
                H4.style.outline = "1px solid #adadad"
                H5.style.outline = "1px solid #adadad"
                H6.style.outline = "1px solid #adadad"
                H7.style.outline = "1px solid #adadad"
                H8.style.outline = "1px solid #adadad"
                H9.style.outline = "1px solid #adadad"

                I1.style.outline = "1px solid #adadad"
                I2.style.outline = "1px solid #adadad"
                I3.style.outline = "1px solid #adadad"
                I4.style.outline = "1px solid #adadad"
                I5.style.outline = "1px solid #adadad"
                I6.style.outline = "1px solid #adadad"
                I7.style.outline = "1px solid #adadad"
                I8.style.outline = "1px solid #adadad"
                I9.style.outline = "1px solid #adadad"

                cuadriculaValor = false


            } else if (cuadriculaValor == false) {

                A1.style.outline = "0px solid #adadad"
                A2.style.outline = "0px solid #adadad"
                A3.style.outline = "0px solid #adadad"
                A4.style.outline = "0px solid #adadad"
                A5.style.outline = "0px solid #adadad"
                A6.style.outline = "0px solid #adadad"
                A7.style.outline = "0px solid #adadad"
                A8.style.outline = "0px solid #adadad"
                A9.style.outline = "0px solid #adadad"

                B1.style.outline = "0px solid #adadad"
                B2.style.outline = "0px solid #adadad"
                B3.style.outline = "0px solid #adadad"
                B4.style.outline = "0px solid #adadad"
                B5.style.outline = "0px solid #adadad"
                B6.style.outline = "0px solid #adadad"
                B7.style.outline = "0px solid #adadad"
                B8.style.outline = "0px solid #adadad"
                B9.style.outline = "0px solid #adadad"

                C1.style.outline = "0px solid #adadad"
                C2.style.outline = "0px solid #adadad"
                C3.style.outline = "0px solid #adadad"
                C4.style.outline = "0px solid #adadad"
                C5.style.outline = "0px solid #adadad"
                C6.style.outline = "0px solid #adadad"
                C7.style.outline = "0px solid #adadad"
                C8.style.outline = "0px solid #adadad"
                C9.style.outline = "0px solid #adadad"

                D1.style.outline = "0px solid #adadad"
                D2.style.outline = "0px solid #adadad"
                D3.style.outline = "0px solid #adadad"
                D4.style.outline = "0px solid #adadad"
                D5.style.outline = "0px solid #adadad"
                D6.style.outline = "0px solid #adadad"
                D7.style.outline = "0px solid #adadad"
                D8.style.outline = "0px solid #adadad"
                D9.style.outline = "0px solid #adadad"

                E1.style.outline = "0px solid #adadad"
                E2.style.outline = "0px solid #adadad"
                E3.style.outline = "0px solid #adadad"
                E4.style.outline = "0px solid #adadad"
                E5.style.outline = "0px solid #adadad"
                E6.style.outline = "0px solid #adadad"
                E7.style.outline = "0px solid #adadad"
                E8.style.outline = "0px solid #adadad"
                E9.style.outline = "0px solid #adadad"

                F1.style.outline = "0px solid #adadad"
                F2.style.outline = "0px solid #adadad"
                F3.style.outline = "0px solid #adadad"
                F4.style.outline = "0px solid #adadad"
                F5.style.outline = "0px solid #adadad"
                F6.style.outline = "0px solid #adadad"
                F7.style.outline = "0px solid #adadad"
                F8.style.outline = "0px solid #adadad"
                F9.style.outline = "0px solid #adadad"

                G1.style.outline = "0px solid #adadad"
                G2.style.outline = "0px solid #adadad"
                G3.style.outline = "0px solid #adadad"
                G4.style.outline = "0px solid #adadad"
                G5.style.outline = "0px solid #adadad"
                G6.style.outline = "0px solid #adadad"
                G7.style.outline = "0px solid #adadad"
                G8.style.outline = "0px solid #adadad"
                G9.style.outline = "0px solid #adadad"

                H1.style.outline = "0px solid #adadad"
                H2.style.outline = "0px solid #adadad"
                H3.style.outline = "0px solid #adadad"
                H4.style.outline = "0px solid #adadad"
                H5.style.outline = "0px solid #adadad"
                H6.style.outline = "0px solid #adadad"
                H7.style.outline = "0px solid #adadad"
                H8.style.outline = "0px solid #adadad"
                H9.style.outline = "0px solid #adadad"

                I1.style.outline = "0px solid #adadad"
                I2.style.outline = "0px solid #adadad"
                I3.style.outline = "0px solid #adadad"
                I4.style.outline = "0px solid #adadad"
                I5.style.outline = "0px solid #adadad"
                I6.style.outline = "0px solid #adadad"
                I7.style.outline = "0px solid #adadad"
                I8.style.outline = "0px solid #adadad"
                I9.style.outline = "0px solid #adadad"


                cuadriculaValor = true


            }






        })

    } //FIN CUADRICULA CUADRANTES

    var info = {
        MAPA: "1.000.000.000 Kg",
        A1: "Hola mapa",
        A2: "",
        A3: "",
        A4: "",
        A5: "",
        A6: "",
        A7: "",
        A8: "",
        A9: "",

        B1: "",
        B2: "",
        B3: "",
        B4: "",
        B5: "",
        B6: "",
        B7: "",
        B8: "",
        B9: "",

        C1: "",
        C2: "",
        C3: "",
        C4: "",
        C5: "",
        C6: "",
        C7: "",
        C8: "",
        C9: "",

        D1: "",
        D2: "",
        D3: "",
        D4: "",
        D5: "",
        D6: "",
        D7: "",
        D8: "",
        D9: "",

        E1: "",
        E2: "",
        E3: "",
        E4: "",
        E5: "",
        E6: "",
        E7: "",
        E8: "",
        E9: "",

        F1: "",
        F2: "",
        F3: "",
        F4: "",
        F5: "",
        F6: "",
        F7: "",
        F8: "",
        F9: "",

        G1: "",
        G2: "",
        G3: "",
        G4: "",
        G5: "",
        G6: "",
        G7: "",
        G8: "",
        G9: "",

        H1: "",
        H2: "",
        H3: "",
        H4: "",
        H5: "",
        H6: "",
        H7: "",
        H8: "",
        H9: "",

        I1: "",
        I2: "",
        I3: "",
        I4: "",
        I5: "",
        I6: "",
        I7: "",
        I8: "",
        I9: "",

        A1A1: "hola maps",


    }

    APP.addEventListener('click', function () {

        window.location = "https://battlerol.net/alfa"

    })

}//FIN VARIABLES E INICIO

{//CUADRANTES


    A1.addEventListener('click', function () {

        navegar("A1", 'url("https://battlerol.net/creador/img/mapas/A1.png")', info.A1)

    })

    A2.addEventListener('click', function () {

        navegar("A2", 'url("https://battlerol.net/creador/img/mapas/A2.png")', info.A2)

    })

    A3.addEventListener('click', function () {

        navegar("A3", 'url("https://battlerol.net/creador/img/mapas/A3.png")', info.A3)

    })

    A4.addEventListener('click', function () {

        navegar("A4", 'url("https://battlerol.net/creador/img/mapas/A4.png")', info.A4)

    })

    A5.addEventListener('click', function () {

        navegar("A5", 'url("https://battlerol.net/creador/img/mapas/A5.png")', info.A5)

    })

    A6.addEventListener('click', function () {

        navegar("A6", 'url("https://battlerol.net/creador/img/mapas/A6.png")', info.A6)

    })

    A7.addEventListener('click', function () {

        navegar("A7", 'url("https://battlerol.net/creador/img/mapas/A7.png")', info.A7)

    })

    A8.addEventListener('click', function () {

        navegar("A8", 'url("https://battlerol.net/creador/img/mapas/A8.png")', info.A8)

    })

    A9.addEventListener('click', function () {

        navegar("A9", 'url("https://battlerol.net/creador/img/mapas/A9.png")', info.A9)

    })





    B1.addEventListener('click', function () {

        navegar("B1", 'url("https://battlerol.net/creador/img/mapas/B1.png")', info.B1)

    })

    B2.addEventListener('click', function () {

        navegar("B2", 'url("https://battlerol.net/creador/img/mapas/B2.png")', info.B2)

    })

    B3.addEventListener('click', function () {

        navegar("B3", 'url("https://battlerol.net/creador/img/mapas/B3.png")', info.B3)

    })

    B4.addEventListener('click', function () {

        navegar("B4", 'url("https://battlerol.net/creador/img/mapas/B4.png")', info.B4)

    })

    B5.addEventListener('click', function () {

        navegar("B5", 'url("https://battlerol.net/creador/img/mapas/B5.png")', info.B5)

    })

    B6.addEventListener('click', function () {

        navegar("B6", 'url("https://battlerol.net/creador/img/mapas/B6.png")', info.B6)

    })

    B7.addEventListener('click', function () {

        navegar("B7", 'url("https://battlerol.net/creador/img/mapas/B7.png")', info.B7)

    })

    B8.addEventListener('click', function () {

        navegar("B8", 'url("https://battlerol.net/creador/img/mapas/B8.png")', info.B8)

    })

    B9.addEventListener('click', function () {

        navegar("B9", 'url("https://battlerol.net/creador/img/mapas/B9.png")', info.B9)

    })





    C1.addEventListener('click', function () {

        navegar("C1", 'url("https://battlerol.net/creador/img/mapas/C1.png")', info.C1)

    })

    C2.addEventListener('click', function () {

        navegar("C2", 'url("https://battlerol.net/creador/img/mapas/C2.png")', info.C2)

    })

    C3.addEventListener('click', function () {

        navegar("C3", 'url("https://battlerol.net/creador/img/mapas/C3.png")', info.C3)

    })

    C4.addEventListener('click', function () {

        navegar("C4", 'url("https://battlerol.net/creador/img/mapas/C4.png")', info.C4)

    })

    C5.addEventListener('click', function () {

        navegar("C5", 'url("https://battlerol.net/creador/img/mapas/C5.png")', info.C5)

    })

    C6.addEventListener('click', function () {

        navegar("C6", 'url("https://battlerol.net/creador/img/mapas/C6.png")', info.C6)

    })

    C7.addEventListener('click', function () {

        navegar("C7", 'url("https://battlerol.net/creador/img/mapas/C7.png")', info.C7)

    })

    C8.addEventListener('click', function () {

        navegar("C8", 'url("https://battlerol.net/creador/img/mapas/C8.png")', info.C8)

    })

    C9.addEventListener('click', function () {

        navegar("C9", 'url("https://battlerol.net/creador/img/mapas/C9.png")', info.C9)

    })






    D1.addEventListener('click', function () {

        navegar("D1", 'url("https://battlerol.net/creador/img/mapas/D1.png")', info.D1)

    })

    D2.addEventListener('click', function () {

        navegar("D2", 'url("https://battlerol.net/creador/img/mapas/D2.png")', info.D2)

    })

    D3.addEventListener('click', function () {

        navegar("D3", 'url("https://battlerol.net/creador/img/mapas/D3.png")', info.D3)

    })

    D4.addEventListener('click', function () {

        navegar("D4", 'url("https://battlerol.net/creador/img/mapas/D4.png")', info.D4)

    })

    D5.addEventListener('click', function () {

        navegar("D5", 'url("https://battlerol.net/creador/img/mapas/D5.png")', info.D5)

    })

    D6.addEventListener('click', function () {

        navegar("D6", 'url("https://battlerol.net/creador/img/mapas/D6.png")', info.D6)

    })

    D7.addEventListener('click', function () {

        navegar("D7", 'url("https://battlerol.net/creador/img/mapas/D7.png")', info.D7)

    })

    D8.addEventListener('click', function () {

        navegar("D8", 'url("https://battlerol.net/creador/img/mapas/D8.png")', info.D8)

    })

    D9.addEventListener('click', function () {

        navegar("D9", 'url("https://battlerol.net/creador/img/mapas/D9.png")', info.D9)

    })






    E1.addEventListener('click', function () {

        navegar("E1", 'url("https://battlerol.net/creador/img/mapas/E1.png")', info.E1)

    })

    E2.addEventListener('click', function () {

        navegar("E2", 'url("https://battlerol.net/creador/img/mapas/E2.png")', info.E2)

    })

    E3.addEventListener('click', function () {

        navegar("E3", 'url("https://battlerol.net/creador/img/mapas/E3.png")', info.E3)

    })

    E4.addEventListener('click', function () {

        navegar("E4", 'url("https://battlerol.net/creador/img/mapas/E4.png")', info.E4)

    })

    E5.addEventListener('click', function () {

        navegar("E5", 'url("https://battlerol.net/creador/img/mapas/E5.png")', info.E5)

    })

    E6.addEventListener('click', function () {

        navegar("E6", 'url("https://battlerol.net/creador/img/mapas/E6.png")', info.E6)

    })

    E7.addEventListener('click', function () {

        navegar("E7", 'url("https://battlerol.net/creador/img/mapas/E7.png")', info.E7)

    })

    E8.addEventListener('click', function () {

        navegar("E8", 'url("https://battlerol.net/creador/img/mapas/E8.png")', info.E8)

    })

    E9.addEventListener('click', function () {

        navegar("E9", 'url("https://battlerol.net/creador/img/mapas/E9.png")', info.E9)

    })








    F1.addEventListener('click', function () {

        navegar("F1", 'url("https://battlerol.net/creador/img/mapas/F1.png")', info.F1)

    })

    F2.addEventListener('click', function () {

        navegar("F2", 'url("https://battlerol.net/creador/img/mapas/F2.png")', info.F2)

    })

    F3.addEventListener('click', function () {

        navegar("F3", 'url("https://battlerol.net/creador/img/mapas/F3.png")', info.F3)

    })

    F4.addEventListener('click', function () {

        navegar("F4", 'url("https://battlerol.net/creador/img/mapas/F4.png")', info.F4)

    })

    F5.addEventListener('click', function () {

        navegar("F5", 'url("https://battlerol.net/creador/img/mapas/F5.png")', info.F5)

    })

    F6.addEventListener('click', function () {

        navegar("F6", 'url("https://battlerol.net/creador/img/mapas/F6.png")', info.F6)

    })

    F7.addEventListener('click', function () {

        navegar("F7", 'url("https://battlerol.net/creador/img/mapas/F7.png")', info.F7)

    })

    F8.addEventListener('click', function () {

        navegar("F8", 'url("https://battlerol.net/creador/img/mapas/F8.png")', info.F8)

    })

    F9.addEventListener('click', function () {

        navegar("F9", 'url("https://battlerol.net/creador/img/mapas/F9.png")', info.F9)

    })








    G1.addEventListener('click', function () {

        navegar("G1", 'url("https://battlerol.net/creador/img/mapas/G1.png")', info.G1)

    })

    G2.addEventListener('click', function () {

        navegar("G2", 'url("https://battlerol.net/creador/img/mapas/G2.png")', info.G2)

    })

    G3.addEventListener('click', function () {

        navegar("G3", 'url("https://battlerol.net/creador/img/mapas/G3.png")', info.G3)

    })

    G4.addEventListener('click', function () {

        navegar("G4", 'url("https://battlerol.net/creador/img/mapas/G4.png")', info.G4)

    })

    G5.addEventListener('click', function () {

        navegar("G5", 'url("https://battlerol.net/creador/img/mapas/G5.png")', info.G5)

    })

    G6.addEventListener('click', function () {

        navegar("G6", 'url("https://battlerol.net/creador/img/mapas/G6.png")', info.G6)

    })

    G7.addEventListener('click', function () {

        navegar("G7", 'url("https://battlerol.net/creador/img/mapas/G7.png")', info.G7)

    })

    G8.addEventListener('click', function () {

        navegar("G8", 'url("https://battlerol.net/creador/img/mapas/G8.png")', info.G8)

    })

    G9.addEventListener('click', function () {

        navegar("G9", 'url("https://battlerol.net/creador/img/mapas/G9.png")', info.G9)

    })







    H1.addEventListener('click', function () {

        navegar("H1", 'url("https://battlerol.net/creador/img/mapas/H1.png")', info.H1)

    })

    H2.addEventListener('click', function () {

        navegar("H2", 'url("https://battlerol.net/creador/img/mapas/H2.png")', info.H2)

    })

    H3.addEventListener('click', function () {

        navegar("H3", 'url("https://battlerol.net/creador/img/mapas/H3.png")', info.H3)

    })

    H4.addEventListener('click', function () {

        navegar("H4", 'url("https://battlerol.net/creador/img/mapas/H4.png")', info.H4)

    })

    H5.addEventListener('click', function () {

        navegar("H5", 'url("https://battlerol.net/creador/img/mapas/H5.png")', info.H5)

    })

    H6.addEventListener('click', function () {

        navegar("H6", 'url("https://battlerol.net/creador/img/mapas/H6.png")', info.H6)

    })

    H7.addEventListener('click', function () {

        navegar("H7", 'url("https://battlerol.net/creador/img/mapas/H7.png")', info.B7)

    })

    H8.addEventListener('click', function () {

        navegar("H8", 'url("https://battlerol.net/creador/img/mapas/H8.png")', info.H8)

    })

    H9.addEventListener('click', function () {

        navegar("H9", 'url("https://battlerol.net/creador/img/mapas/H9.png")', info.H9)

    })







    I1.addEventListener('click', function () {

        navegar("I1", 'url("https://battlerol.net/creador/img/mapas/I1.png")', info.I1)

    })

    I2.addEventListener('click', function () {

        navegar("I2", 'url("https://battlerol.net/creador/img/mapas/I2.png")', info.I2)

    })

    I3.addEventListener('click', function () {

        navegar("I3", 'url("https://battlerol.net/creador/img/mapas/I3.png")', info.I3)

    })

    I4.addEventListener('click', function () {

        navegar("I4", 'url("https://battlerol.net/creador/img/mapas/I4.png")', info.I4)

    })

    I5.addEventListener('click', function () {

        navegar("I5", 'url("https://battlerol.net/creador/img/mapas/I5.png")', info.I5)

    })

    I6.addEventListener('click', function () {

        navegar("I6", 'url("https://battlerol.net/creador/img/mapas/I6.png")', info.I6)

    })

    I7.addEventListener('click', function () {

        navegar("I7", 'url("https://battlerol.net/creador/img/mapas/I7.png")', info.B7)

    })

    I8.addEventListener('click', function () {

        navegar("I8", 'url("https://battlerol.net/creador/img/mapas/I8.png")', info.I8)

    })

    I9.addEventListener('click', function () {

        navegar("I9", 'url("https://battlerol.net/creador/img/mapas/I9.png")', info.I9)

    })



    //FIN CUADRANTES

}// FIN CUADRANTES

{//SELECCION CUADRANTES

    function navegar(cuadranteSeleccionado, imagenMapa, infoMapa) {



        if (cuadrante == "MUNDO") {

            mapa.style.backgroundImage = imagenMapa
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = cuadranteSeleccionado
            consolaMapa.innerHTML = infoMapa

        } else if (cuadrante != "MUNDO" && cuadrante.length < 4) {


            cuadranteActual = cuadrante.concat(cuadranteSeleccionado)

            switch (cuadranteActual) {

                case "A1A1":

                    imagenMapa = imagenMapa
                    infoMapa = info.A1A1;

                    break


                case "D7H1":

                    imagenMapa = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'
                    infoMapa = info.A1;

                    break




            }


            mapa.style.backgroundImage = imagenMapa
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = cuadranteActual
            consolaMapa.innerHTML = infoMapa



        } else if (cuadrante.length >= 3) {

        }

    }

}//FIN ELECCION CUADRANTES



{//CRUZETA

    menos.addEventListener('click', function () {

        //   cuadranteVolver = cuadranteSeleccionado.substring(0,1)

        if (cuadrante != "MUNDO" && cuadrante.length < 4) {

            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '97% 97%'

            cuadrante = "MUNDO"
            consolaMapa.innerHTML = info.MAPA


        } else if (cuadrante != "MUNDO" && cuadrante.length == 4

            && cuadrante !== "D7G1" && cuadrante !== "D7G2" && cuadrante !== "D7G3"
            && cuadrante !== "D7H1" && cuadrante !== "D7H2" && cuadrante !== "D7H3"
            && cuadrante !== "D7I1" && cuadrante !== "D7I2" && cuadrante !== "D7I3") {


            //PROVISORIO
            cuadrante = "MUNDO"
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'
            //

            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '97% 97%'


        } else if (cuadrante == "D7G1" || cuadrante == "D7G2" || cuadrante == "D7G3"
            || cuadrante == "D7H1" || cuadrante == "D7H2" || cuadrante == "D7H3"
            || cuadrante == "D7I1" || cuadrante == "D7I2" || cuadrante == "D7I3") {

            //PROVISORIO
            cuadrante = "D7"
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7.png")'
            //

            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

        }

    })

}//FIN CRUZETA










{//REFRESCO

    setInterval(() => {
        imprimirMapa()
    }, 20);


    function imprimirMapa() {

        cuadranteTxt.textContent = "CUADRANTE " + cuadrante
        cadena = cuadrante.length + 2

        if (cuadrante == "MUNDO") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'

        }


        if (cuadrante == "A1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A1.png")'

        } else if (cuadrante == "A2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A2.png")'

        } else if (cuadrante == "A3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A3.png")'

        } else if (cuadrante == "A4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A4.png")'

        } else if (cuadrante == "A5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A5.png")'

        } else if (cuadrante == "A6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A6.png")'

        } else if (cuadrante == "A7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A7.png")'

        } else if (cuadrante == "A8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A8.png")'

        } else if (cuadrante == "A9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A9.png")'

        }







        if (cuadrante == "B1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B1.png")'

        } else if (cuadrante == "B2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B2.png")'

        } else if (cuadrante == "B3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B3.png")'

        } else if (cuadrante == "B4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B4.png")'

        } else if (cuadrante == "B5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B5.png")'

        } else if (cuadrante == "B6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B6.png")'

        } else if (cuadrante == "B7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B7.png")'

        } else if (cuadrante == "B8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B8.png")'

        } else if (cuadrante == "B9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B9.png")'

        }






        if (cuadrante == "C1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C1.png")'

        } else if (cuadrante == "C2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C2.png")'

        } else if (cuadrante == "C3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C3.png")'

        } else if (cuadrante == "C4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C4.png")'

        } else if (cuadrante == "C5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C5.png")'

        } else if (cuadrante == "C6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C6.png")'

        } else if (cuadrante == "C7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C7.png")'

        } else if (cuadrante == "C8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C8.png")'

        } else if (cuadrante == "C9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C9.png")'

        }


        if (cuadrante == "D1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D1.png")'

        } else if (cuadrante == "D2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D2.png")'

        } else if (cuadrante == "D3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D3.png")'

        } else if (cuadrante == "D4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D4.png")'

        } else if (cuadrante == "D5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D5.png")'

        } else if (cuadrante == "D6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D6.png")'

        } else if (cuadrante == "D7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7.png")'
            

        } else if (cuadrante == "D8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D8.png")'

        } else if (cuadrante == "D9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D9.png")'

        }






        if (cuadrante == "E1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E1.png")'

        } else if (cuadrante == "E2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E2.png")'

        } else if (cuadrante == "E3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E3.png")'

        } else if (cuadrante == "E4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E4.png")'

        } else if (cuadrante == "E5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E5.png")'

        } else if (cuadrante == "E6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E6.png")'

        } else if (cuadrante == "E7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E7.png")'

        } else if (cuadrante == "E8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E8.png")'

        } else if (cuadrante == "E9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E9.png")'

        }



        if (cuadrante == "F1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F1.png")'

        } else if (cuadrante == "F2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F2.png")'

        } else if (cuadrante == "F3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F3.png")'

        } else if (cuadrante == "F4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F4.png")'

        } else if (cuadrante == "F5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F5.png")'

        } else if (cuadrante == "F6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F6.png")'

        } else if (cuadrante == "F7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F7.png")'

        } else if (cuadrante == "F8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F8.png")'

        } else if (cuadrante == "F9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F9.png")'

        }





        if (cuadrante == "G1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G1.png")'

        } else if (cuadrante == "G2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G2.png")'

        } else if (cuadrante == "G3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G3.png")'

        } else if (cuadrante == "G4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G4.png")'

        } else if (cuadrante == "G5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G5.png")'

        } else if (cuadrante == "G6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G6.png")'

        } else if (cuadrante == "G7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G7.png")'

        } else if (cuadrante == "G8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G8.png")'

        } else if (cuadrante == "G9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G9.png")'

        }





        if (cuadrante == "H1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H1.png")'

        } else if (cuadrante == "H2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H2.png")'

        } else if (cuadrante == "H3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H3.png")'

        } else if (cuadrante == "H4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H4.png")'

        } else if (cuadrante == "H5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H5.png")'

        } else if (cuadrante == "H6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H6.png")'

        } else if (cuadrante == "H7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H7.png")'

        } else if (cuadrante == "H8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H8.png")'

        } else if (cuadrante == "H9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H9.png")'

        }




        if (cuadrante == "I1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I1.png")'

        } else if (cuadrante == "I2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I2.png")'

        } else if (cuadrante == "I3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I3.png")'

        } else if (cuadrante == "I4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I4.png")'

        } else if (cuadrante == "I5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I5.png")'

        } else if (cuadrante == "I6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I6.png")'

        } else if (cuadrante == "I7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I7.png")'

        } else if (cuadrante == "I8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I8.png")'

        } else if (cuadrante == "I9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I9.png")'

        }

























        if (cuadrante == "D7G1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'

        } else if (cuadrante == "D7G2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'

        } else if (cuadrante == "D7G3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G3.png")'

        } else if (cuadrante == "D7G4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }else if (cuadrante == "D7G5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  else if (cuadrante == "D7G6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  else if (cuadrante == "D7G7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  else if (cuadrante == "D7G8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  else if (cuadrante == "D7G9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  


        if (cuadrante == "D7H1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'

        } else if (cuadrante == "D7H2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'

        } else if (cuadrante == "D7H3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H3.png")'

        }  else if (cuadrante == "D7H4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'

        }  



        if (cuadrante == "D7I1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I1.png")'

        } else if (cuadrante == "D7I2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'

        } else if (cuadrante == "D7I3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I3.png")'

        }


















        mapa.style.backgroundImage = mapaCuadrante


    }

}//FIN REFRESCO







