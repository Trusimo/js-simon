// Visualizzare in pagina (html) 5 numeri casuali.

// Avviare un timer di 30 secondi

// Dopo 30 secondi, nascondere i numeri.

// L’utente deve inserire, uno alla volta, i numeri
// che ha visto precedentemente, tramite un prompt().

// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri
// da indovinare sono stati individuati.

// Creo i 5 numeri
document.getElementById("n1").innerHTML = (Math.floor(Math.random() * 100));
document.getElementById("n2").innerHTML = (Math.floor(Math.random() * 100));
document.getElementById("n3").innerHTML = (Math.floor(Math.random() * 100));
document.getElementById("n4").innerHTML = (Math.floor(Math.random() * 100));
document.getElementById("n5").innerHTML = (Math.floor(Math.random() * 100));

// creo il timer
let secondi = 30;
countdownInterval = setInterval(function () {

    secondi--;

    document.getElementById("timer").innerHTML = secondi;

    if (secondi === 0) {
        clearInterval(countdownInterval);
    }
    }, 1000);