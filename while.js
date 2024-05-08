// *************************************** WHILE *****************************
// Un ciclo è un costrutto che consente di eseguire un certo numero di volte un blocco di istruzioni
// Il ciclo WHILE è uno dei cicli tradizionali più famosi ed utilizzati.
// E' estremamente utile in tutti i casi in cui vogliamo ripetere delle istruzioni un numero NON PRECISATO DI VOLTE

console.log("-------------------------- CICLO INCREMENTANTE --------------------------")
let counter = 90 // Numero dal quale partire

while (counter < 100) {
  // Nelle parentesi inserisco la condizione che verrà valutata ad OGNI ITERAZIONE DEL CICLO
  // 90 è minore di 100? SI
  console.log("Il numero corrente è: ", counter) // "Il numero corrente è: 90
  // counter = counter + 1 // counter diventa 91
  counter++ // scorciatoia che equivale a fare counter = counter + 1, oppure counter+=1
  // appena arrivo all'ultima riga prima della parentesi graffa si ritorna su e la condizione viene valutata nuovamente, se sarà vera si rientra nel ciclo se falsa si esce
}

// N.B. Uno degli errori più comuni coi cicli while è quello di non impostare correttamente la condizione oppure di non inserire un incremento od un decremento che in qualche maniera forzi ad uscire dopo tot iterazioni. Ciò risulterebbe in un LOOP INFINITO, il che è nella gran parte dei casi un problema

console.log("VALORE DI COUNTER: ", counter)

console.log("-------------------------- CICLO DECREMENTANTE --------------------------")
let counter2 = 10

while (counter2 > 0) {
  console.log("Il numero corrente è: ", counter2)
  counter2 = counter2 - 2
  // counter--
}

console.log("------------------------ CICLO CON NUMERO RANDOM DI RIPETIZIONI ------------------------")

let counter3 = 0

while (counter3 < 5) {
  const increment = Math.random() // Genera un numero random tra 0 e 1
  console.log("Il valore corrente é: ", counter3)
  counter3 = counter3 + increment
}

console.log("-------------------------- DO WHILE --------------------------")

// Il DO-WHILE è una variante del while in cui la condizione invece di essere valutata immediatamente, verrà valutata alla fine dell'iterazione. Ciò significa che sicuramente almeno una volta il codice verrà eseguito, a differenza del while in cui se la condizione è falsa non eseguiremo niente

let counter4 = 10

do {
  console.log("Il valore corrente é: ", counter4)
  counter4++
} while (counter4 < 1000)
