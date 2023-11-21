{//INICIO

    window.onload = mundo();

    function mundo() {

        mapa.style.backgroundImage = ''
        mapa.style.backgroundPosition = 'center'
        mapa.style.backgroundRepeat = 'no-repeat'
        mapa.style.backgroundAttachment = 'contain'
        mapa.style.backgroundSize = '100% 100%'

        cuadrante = "MUNDO"


        {//GRILLA

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

        }//FIN GRILLA

    }

}//FIN INICIO

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

{//SELECCIONAR SECTOR


    {//----------

        A1.addEventListener('click', function () {

            zoom("A1");

        })

        A2.addEventListener('click', function () {

            zoom("A2");

        })

        A3.addEventListener('click', function () {

            zoom("A3");

        })

        A4.addEventListener('click', function () {

            zoom("A4");

        })

        A5.addEventListener('click', function () {

            zoom("A5");

        })

        A6.addEventListener('click', function () {

            zoom("A6");

        })

        A7.addEventListener('click', function () {

            zoom("A7");

        })

        A8.addEventListener('click', function () {

            zoom("A8");

        })

        A9.addEventListener('click', function () {

            zoom("A9");

        })





        B1.addEventListener('click', function () {

            zoom("B1");

        })

        B2.addEventListener('click', function () {

            zoom("B2");

        })

        B3.addEventListener('click', function () {

            zoom("B3");

        })

        B4.addEventListener('click', function () {

            zoom("B4");

        })

        B5.addEventListener('click', function () {

            zoom("B5");

        })

        B6.addEventListener('click', function () {

            zoom("B6");

        })

        B7.addEventListener('click', function () {

            zoom("B7");

        })

        B8.addEventListener('click', function () {

            zoom("B8");

        })

        B9.addEventListener('click', function () {

            zoom("B9");

        })



        C1.addEventListener('click', function () {

            zoom("C1");

        })

        C2.addEventListener('click', function () {

            zoom("C2");

        })

        C3.addEventListener('click', function () {

            zoom("C3");

        })

        C4.addEventListener('click', function () {

            zoom("C4");

        })

        C5.addEventListener('click', function () {

            zoom("C5");

        })

        C6.addEventListener('click', function () {

            zoom("C6");

        })

        C7.addEventListener('click', function () {

            zoom("C7");

        })

        C8.addEventListener('click', function () {

            zoom("C8");

        })

        C9.addEventListener('click', function () {

            zoom("C9");

        })




        D1.addEventListener('click', function () {

            zoom("D1");

        })

        D2.addEventListener('click', function () {

            zoom("D2");

        })

        D3.addEventListener('click', function () {

            zoom("D3");

        })

        D4.addEventListener('click', function () {

            zoom("D4");

        })

        D5.addEventListener('click', function () {

            zoom("D5");

        })

        D6.addEventListener('click', function () {

            zoom("D6");

        })

        D7.addEventListener('click', function () {

            zoom("D7");

        })

        D8.addEventListener('click', function () {

            zoom("D8");

        })

        D9.addEventListener('click', function () {

            zoom("D9");

        })



        E1.addEventListener('click', function () {

            zoom("E1");

        })

        E2.addEventListener('click', function () {

            zoom("E2");

        })

        E3.addEventListener('click', function () {

            zoom("E3");

        })

        E4.addEventListener('click', function () {

            zoom("E4");

        })

        E5.addEventListener('click', function () {

            zoom("E5");

        })

        E6.addEventListener('click', function () {

            zoom("E6");

        })

        E7.addEventListener('click', function () {

            zoom("E7");

        })

        E8.addEventListener('click', function () {

            zoom("E8");

        })

        E9.addEventListener('click', function () {

            zoom("E9");

        })


        F1.addEventListener('click', function () {

            zoom("F1");

        })

        F2.addEventListener('click', function () {

            zoom("F2");

        })

        F3.addEventListener('click', function () {

            zoom("F3");

        })

        F4.addEventListener('click', function () {

            zoom("F4");

        })

        F5.addEventListener('click', function () {

            zoom("F5");

        })

        F6.addEventListener('click', function () {

            zoom("F6");

        })

        F7.addEventListener('click', function () {

            zoom("F7");

        })

        F8.addEventListener('click', function () {

            zoom("F8");

        })

        F9.addEventListener('click', function () {

            zoom("F9");

        })





        G1.addEventListener('click', function () {

            zoom("G1");

        })

        G2.addEventListener('click', function () {

            zoom("G2");

        })

        G3.addEventListener('click', function () {

            zoom("G3");

        })

        G4.addEventListener('click', function () {

            zoom("G4");

        })

        G5.addEventListener('click', function () {

            zoom("G5");

        })

        G6.addEventListener('click', function () {

            zoom("G6");

        })

        G7.addEventListener('click', function () {

            zoom("G7");

        })

        G8.addEventListener('click', function () {

            zoom("G8");

        })

        G9.addEventListener('click', function () {

            zoom("G9");

        })


        H1.addEventListener('click', function () {

            zoom("H1");

        })

        H2.addEventListener('click', function () {

            zoom("H2");

        })

        H3.addEventListener('click', function () {

            zoom("H3");

        })

        H4.addEventListener('click', function () {

            zoom("H4");

        })

        H5.addEventListener('click', function () {

            zoom("H5");

        })

        H6.addEventListener('click', function () {

            zoom("H6");

        })

        H7.addEventListener('click', function () {

            zoom("H7");

        })

        H8.addEventListener('click', function () {

            zoom("H8");

        })

        H9.addEventListener('click', function () {

            zoom("H9");

        })

        I1.addEventListener('click', function () {

            zoom("I1");

        })

        I2.addEventListener('click', function () {

            zoom("I2");

        })

        I3.addEventListener('click', function () {

            zoom("I3");

        })

        I4.addEventListener('click', function () {

            zoom("I4");

        })

        I5.addEventListener('click', function () {

            zoom("I5");

        })

        I6.addEventListener('click', function () {

            zoom("I6");

        })

        I7.addEventListener('click', function () {

            zoom("I7");

        })

        I8.addEventListener('click', function () {

            zoom("I8");

        })

        I9.addEventListener('click', function () {

            zoom("I9");

        })


    }//---------



    function zoom(cuadranteSeleccionado) {

        if (cuadrante == "MUNDO") {

            mapa.style.backgroundImage = sector.MAPA
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = cuadranteSeleccionado

        } else if (cuadrante != "MUNDO" && cuadrante.length < 4) {

            cuadranteActual = cuadrante.concat(cuadranteSeleccionado)

            mapa.style.backgroundImage = sector.MAPA
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = cuadranteActual



        } else if (cuadrante != "MUNDO" && cuadrante.length == 4) {


            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = cuadrante



        } else if (cuadrante != "MUNDO" && cuadrante.length > 4) {





        }




    }


}//FIN SELECCIONAR SECTOR
































{//CRUZETA

    menos.addEventListener('click', function () {

        //   cuadranteVolver = cuadranteSeleccionado.substring(0,1)

        if (cuadrante != "MUNDO" && cuadrante.length < 4) {

            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/PERMAMUNDO.png",)'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'

            cuadrante = "MUNDO"
            consolaMapa.innerHTML = sector.MAPA


        } else if (cuadrante != "MUNDO" && cuadrante.length == 4

            && cuadrante !== "D7G1" && cuadrante !== "D7G2" && cuadrante !== "D7G3"
            && cuadrante !== "D7H1" && cuadrante !== "D7H2" && cuadrante !== "D7H3"
            && cuadrante !== "D7I1" && cuadrante !== "D7I2" && cuadrante !== "D7I3") {


            //PROVISORIO
            cuadrante = "MUNDO"
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/PERMAMUNDO.png")'
            //

            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'


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




    N.addEventListener('click', function () {




        if(cuadrante == "A7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/A7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "A7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "B7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/A7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "A7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "C7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/B7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "B7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "D7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/B7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "B7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "E7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/C7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "C7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "F7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "G7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/F7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "F7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "H7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/G7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "G7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "I7"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/H7.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "H7"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }
      
      
        
      
        if (cuadrante == "D7I1") {
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7H1"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "D7H1"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7G1"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
      
        }else if(cuadrante == "D7G1"){
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7G1"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
        
          }




          if (cuadrante == "D7I2") {
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7H2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
        
          }else if(cuadrante == "D7H2"){
        
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7G2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
        
          }else if(cuadrante == "D7G2"){
        
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7G2"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
          
            }




            if (cuadrante == "D7I3") {
      
                mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H3.png")'
                mapa.style.backgroundPosition = 'center'
                mapa.style.backgroundRepeat = 'no-repeat'
                mapa.style.backgroundAttachment = 'contain'
                mapa.style.backgroundSize = '100% 100%'
            
                cuadrante = "D7H3"
                consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
            
              }else if(cuadrante == "D7H3"){
            
                mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G3.png")'
                mapa.style.backgroundPosition = 'center'
                mapa.style.backgroundRepeat = 'no-repeat'
                mapa.style.backgroundAttachment = 'contain'
                mapa.style.backgroundSize = '100% 100%'
            
                cuadrante = "D7G3"
                consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
            
              }else if(cuadrante == "D7G3"){
            
                  mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G3.png")'
                  mapa.style.backgroundPosition = 'center'
                  mapa.style.backgroundRepeat = 'no-repeat'
                  mapa.style.backgroundAttachment = 'contain'
                  mapa.style.backgroundSize = '100% 100%'
              
                  cuadrante = "D7G3"
                  consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br> Poblacion Total 785 Habitantes </br> Minas de Plata 1.400 Kg </br> Madriguera de Tortakla"
              
                }




























      
      })
      
      
      S.addEventListener('click', function () {
      
      
      
        if (cuadrante == "D7G1") {
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7H1"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
      
        }else if(cuadrante == "D7H1"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I1.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7I1"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
      
        }else if(cuadrante == "D7I1"){
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I1.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7I1"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
        
          }




          if (cuadrante == "D7G2") {
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7H2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
        
          }else if(cuadrante == "D7H2"){
        
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7I2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
        
          }else if(cuadrante == "D7I2"){
        
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7I2"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
          
            }





            if (cuadrante == "D7G3") {
      
                mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H3.png")'
                mapa.style.backgroundPosition = 'center'
                mapa.style.backgroundRepeat = 'no-repeat'
                mapa.style.backgroundAttachment = 'contain'
                mapa.style.backgroundSize = '100% 100%'
            
                cuadrante = "D7H3"
                consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
            
              }else if(cuadrante == "D7H3"){
            
                mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I3.png")'
                mapa.style.backgroundPosition = 'center'
                mapa.style.backgroundRepeat = 'no-repeat'
                mapa.style.backgroundAttachment = 'contain'
                mapa.style.backgroundSize = '100% 100%'
            
                cuadrante = "D7I3"
                consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
            
              }else if(cuadrante == "D7I3"){
            
                  mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I3.png")'
                  mapa.style.backgroundPosition = 'center'
                  mapa.style.backgroundRepeat = 'no-repeat'
                  mapa.style.backgroundAttachment = 'contain'
                  mapa.style.backgroundSize = '100% 100%'
              
                  cuadrante = "D7I3"
                  consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 156 Habitantes"
              
                }
      
      })
      
      
      
      E.addEventListener('click', function () {
      
        if (cuadrante == "D7G1") {
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7G2"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
      
        }else if(cuadrante == "D7G2"){
      
          mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G3.png")'
          mapa.style.backgroundPosition = 'center'
          mapa.style.backgroundRepeat = 'no-repeat'
          mapa.style.backgroundAttachment = 'contain'
          mapa.style.backgroundSize = '100% 100%'
      
          cuadrante = "D7G3"
          consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
      
        }


        if (cuadrante == "D7H1") {
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7H2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
        
          }else if(cuadrante == "D7H2"){
        
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H3.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7H3"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
        
          }



          if (cuadrante == "D7I1") {
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7I2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
        
          }else if(cuadrante == "D7I2"){
        
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I3.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7I3"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
        
          }
      
      })
      
      
      
      O.addEventListener('click', function () {
      
        if (cuadrante == "D7G3") {
      
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7G2"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
        
          }else if(cuadrante == "D7G2"){
        
            mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
            mapa.style.backgroundPosition = 'center'
            mapa.style.backgroundRepeat = 'no-repeat'
            mapa.style.backgroundAttachment = 'contain'
            mapa.style.backgroundSize = '100% 100%'
        
            cuadrante = "D7G1"
            consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
        
          }
  
  
          if (cuadrante == "D7H3") {
        
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7H2"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
          
            }else if(cuadrante == "D7H2"){
          
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7H1"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
          
            }
  
  
  
            if (cuadrante == "D7I3") {
        
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7I2"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 560 Habitantes"
          
            }else if(cuadrante == "D7I2"){
          
              mapa.style.backgroundImage = 'url("https://battlerol.net/creador/img/mapas/D7I1.png")'
              mapa.style.backgroundPosition = 'center'
              mapa.style.backgroundRepeat = 'no-repeat'
              mapa.style.backgroundAttachment = 'contain'
              mapa.style.backgroundSize = '100% 100%'
          
              cuadrante = "D7I1"
              consolaMapa.innerHTML = "Islas Geas </br>Tierras de Aldariss </br>Poblacion Total 370 Habitantes"
          
            }
        
        })

}//FIN CRUZETA














































{//REFRESCO

    setInterval(() => {
        imprimirMapa()
    }, 30);


    function imprimirMapa() {

        cuadranteTxt.textContent = "CUADRANTE " + cuadrante
        cadena = cuadrante.length + 2

        if (cuadrante == "MUNDO") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/MUNDO.png")'
            consolaMapa.innerHTML = sector.A1
        }


    {//CUADRANTES MAYORES

        if (cuadrante == "A1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A1.png")'
            consolaMapa.innerHTML = sector.A1

        } else if (cuadrante == "A2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "A9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/A9.png")'
            consolaMapa.innerHTML = sector.A1
        }






        if (cuadrante == "B1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "B9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/B9.png")'
            consolaMapa.innerHTML = sector.A1
        }






        if (cuadrante == "C1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "C9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/C9.png")'
            consolaMapa.innerHTML = sector.A1
        }


        if (cuadrante == "D1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7.png")'
            consolaMapa.innerHTML = sector.A1

        } else if (cuadrante == "D8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "D9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D9.png")'
            consolaMapa.innerHTML = sector.A1
        }






        if (cuadrante == "E1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "E9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/E9.png")'
            consolaMapa.innerHTML = sector.A1
        }



        if (cuadrante == "F1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "F9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/F9.png")'
            consolaMapa.innerHTML = sector.A1
        }





        if (cuadrante == "G1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "G9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/G9.png")'
            consolaMapa.innerHTML = sector.A1
        }





        if (cuadrante == "H1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "H9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/H9.png")'
            consolaMapa.innerHTML = sector.A1
        }




        if (cuadrante == "I1") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I1.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I2") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I2.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I3") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I3.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I4") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I4.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I5") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I5.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I6") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I6.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I7") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I7.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I8") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I8.png")'
            consolaMapa.innerHTML = sector.A1
        } else if (cuadrante == "I9") {

            mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/I9.png")'
            consolaMapa.innerHTML = sector.A1
        }



    }//FIN CUADRANTES MAYORES

{//CUADRANTES MENORES 

    if (cuadrante == "D7A1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7A9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }





    if (cuadrante == "D7B1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7B9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }



    if (cuadrante == "D7C1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7C9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }




    if (cuadrante == "D7D1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7D9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }





    if (cuadrante == "D7E1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7E9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }





    if (cuadrante == "D7F1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7F9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }





    if (cuadrante == "D7G1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G1.png")'
        consolaMapa.innerHTML = sector.D7G1
    } else if (cuadrante == "D7G2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G2.png")'
        consolaMapa.innerHTML = sector.D7G2
    } else if (cuadrante == "D7G3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7G3.png")'
        consolaMapa.innerHTML = sector.D7G3
    } else if (cuadrante == "D7G4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7G5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7G6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7G7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7G8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7G9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }






    if (cuadrante == "D7H1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H1.png")'
        consolaMapa.innerHTML = sector.D7H1
    } else if (cuadrante == "D7H2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H2.png")'
        consolaMapa.innerHTML = sector.D7H2
    } else if (cuadrante == "D7H3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7H3.png")'
        consolaMapa.innerHTML = sector.D7H3
    } else if (cuadrante == "D7H4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7H5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7H6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7H7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7H8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7H9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }



    if (cuadrante == "D7I1") {

        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I1.png")'
        consolaMapa.innerHTML = sector.D7I1
    } else if (cuadrante == "D7I2") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
        consolaMapa.innerHTML = sector.D7I2
    } else if (cuadrante == "D7I3") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/D7I2.png")'
        consolaMapa.innerHTML = sector.D7I3
    } else if (cuadrante == "D7I4") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7I5") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7I6") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7I7") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7I8") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    } else if (cuadrante == "D7I9") {
    
        mapaCuadrante = 'url("https://battlerol.net/creador/img/mapas/AGUASINEXPLORADAS.png")'
        consolaMapa.innerHTML = sector.A1
    }

}//FIN CUADRANTES MENORES














        mapa.style.backgroundImage = mapaCuadrante


    }

}//FIN REFRESCO