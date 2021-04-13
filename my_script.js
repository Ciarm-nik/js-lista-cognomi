// 1. chiedi all’utente il cognome
var inserisciCognome = prompt("Inserisci il tuo cognome!!!");

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var lista_completa = listaCognomi.push(inserisciCognome);

// 3. stampa la lista ordinata alfabeticamente
console.log(listaCognomi.sort())

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(listaCognomi.indexOf(inserisciCognome) +1)