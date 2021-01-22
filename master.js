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
                    tituloDeLaResolucion.innerHTML = "There's a tie! Both you and the CPU have chosen rock.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You lose... Sorry, but the CPU chose paper and you rock.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You win! Congrats. CPU chose scissors, but you rock.";
                    break;
            }
            break;
        case papel:
            switch(cpu) {
                case piedra:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You win! Congrats. CPU chose rock, but you paper.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "There's a tie! Both you and the CPU have chosen paper.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You lose... Sorry, but the CPU chose scissors and you paper.";
                    break;
            }
            break;
        case tijeras:
            switch(cpu) {
                case piedra:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You lose... Sorry, but the CPU chose rock and you scissors.";
                    break;
                case papel:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "You win! Congrats. CPU chose paper, but you scissors.";
                    break;
                case tijeras:
                    pantallaFinal.classList.remove("sinPantallaFinal");
                    tituloDeLaResolucion.innerHTML = "There's a tie! Both you and the CPU have chosen scissors.";
                    break;
            }
            break;
        default:
            pantallaFinal.classList.remove("sinPantallaFinal");
            tituloDeLaResolucion.innerHTML = "Oops! There's an error out there. Please, reload the page.";
    }
}
