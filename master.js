let piedra = 0;
let papel = 1;
let tijeras = 2;

let opcionCPU = Math.floor(Math.random() * 3);

let pantallaFinal = document.getElementById("pantallaFinal");
let tituloDeLaResolucion = document.getElementById("tituloDeLaResolucion");

// CON UN SWITCH

function jugar(user, cpu) {
    switch(user) {
        case piedra:
            switch(cpu) {
                case piedra:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido piedra.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Gana el CPU con papel! Lamentablemente has escogido piedra.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido tijeras, y tú piedra.";
                    break;
            }
            break;
        case papel:
            switch(cpu) {
                case piedra:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido piedra, y tú papel.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido papel.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Gana el CPU con tijeras! Lamentablemente has escogido papel.";
                    break;
            }
            break;
        case tijeras:
            switch(cpu) {
                case piedra:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Gana el CPU con piedra! Lamentablemente has escogido tijeras.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido papel, y tú tijeras.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido tijeras.";
                    break;
            }
            break;
        default:
            pantallaFinal.classList.remove("sinPantallaFinal");
            tituloDeLaResolucion.innerHTML = "Hubo un error en el juego.";
    }
}

// CON UN CONDICIONAL IF/ELSE

// function jugar(user, cpu) {
//     if(user != cpu) {
//         if(user == piedra && cpu == tijeras) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido tijeras, y tú piedra.";
//         } else if(user == piedra && cpu == papel) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Gana el CPU con papel! Lamentablemente has escogido piedra.";
//         } else if(user == papel && cpu == piedra) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido piedra, y tú papel.";
//         } else if(user == papel && cpu == tijeras) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Gana el CPU con tijeras! Lamentablemente has escogido papel.";
//         } else if(user == tijeras && cpu == papel) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Ganaste! El CPU ha escogido papel, y tú tijeras.";
//         } else if(user == tijeras && cpu == piedra) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Gana el CPU con piedra! Lamentablemente has escogido tijeras.";
//         } else {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Hubo un error en el juego (Error 1).";
//         }
//     } else {
//         if(user = cpu == piedra) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido piedra.";
//         } else if(user = cpu == papel) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido papel.";
//         } else if(user = cpu == tijeras) {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Empate! Tanto tú como el CPU han escogido tijeras.";
//         } else {
//             pantallaFinal.classList.remove("sinPantallaFinal");
//             tituloDeLaResolucion.innerHTML = "Hubo un error en el juego (Error 2).";
//         }
//     }
// }
