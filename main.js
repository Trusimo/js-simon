// Visualizzare in pagina (html) 5 numeri casuali.

// Avviare un timer di 30 secondi

// Dopo 30 secondi, nascondere i numeri.

// L’utente deve inserire, uno alla volta, i numeri
// che ha visto precedentemente, tramite un prompt().

// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri
// da indovinare sono stati individuati.

// Creo i 5 numeri
const numericasuali = [];

let n1 = (Math.floor(Math.random() * 100));
let n2 = (Math.floor(Math.random() * 100));
let n3 = (Math.floor(Math.random() * 100));
let n4 = (Math.floor(Math.random() * 100));
let n5 = (Math.floor(Math.random() * 100));

document.getElementById("n1").innerHTML = n1;
document.getElementById("n2").innerHTML = n2;
document.getElementById("n3").innerHTML = n3;
document.getElementById("n4").innerHTML = n4;
document.getElementById("n5").innerHTML = n5;

numericasuali.push(n1, n2, n3, n4, n5);
console.log(numericasuali);

// creo il timer con la condizione di far sparire i numeri allo scadere
let secondi = 5;
countdownInterval = setInterval(function () {

    secondi--;

    document.getElementById("timer").innerHTML = secondi;

    if (secondi === 0) {
        clearInterval(countdownInterval);
        document.getElementById("n1").style.display = 'none';
        document.getElementById("n2").style.display = 'none';
        document.getElementById("n3").style.display = 'none';
        document.getElementById("n4").style.display = 'none';
        document.getElementById("n5").style.display = 'none';

        const numeriutente = [];
        for (let i=0; i<5; i++) {
            const usernumber = prompt("Inserisci il numero");
            numeriutente.push(parseInt(usernumber));
                // come controllo se i numeri corrispondono?
            if (numeriutente === numericasuali ) {
                alert("vittoria");
            }
        }
    }
    }, 1000);