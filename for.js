// ********************************** FOR LOOP *********************************

for (let index = 1; index < 1000; index++) {
  console.log(index) // Questa riga di codice verrà ripetuta per 10 volte perché parto da 1 e vado avanti fino a che l'indice non sarà 10 (questa sarà l'ultima iterazione)
}
/* Versione senza il loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

Immaginiamoci se dovessi farlo per 100/1000/10000 volte
*/

const names = ["Alberto", "Alex", "Andrea", "Andrè", "Angelo", "Giuseppe"]

// console.log(names[0])
// console.log(names[1])
// ....
for (let index = 0; index < names.length; index++) {
  console.log(names[index])
  // Alla prima iterazione index sarà 0 e quindi names[index] sarà "Alberto"
  // Alla seconda iterazione index sarà 1 e quindi names[index] sarà "Alex"
  // Alla terza iterazione index sarà 2 e quindi names[index] sarà "Andrea"
  // Alla quarta iterazione index sarà 3 e quindi names[index] sarà "Andrè"
  // Alla quinta iterazione index sarà 4 e quindi names[index] sarà "Angelo"
  // Alla sesta iterazione index sarà 5 e quindi names[index] sarà "Giuseppe"
  // Alla fine della sesta iterazione index verrà nuovamente incrementato diventando 6, però ora index non sarà più minore di names.length pertanto si esce dal loop
}

console.log("---------------------- CICLO FOR 'ROTTO' ----------------------")
for (let index = names.length; index > 0; index--) {
  // names.length è 6
  console.log(names[index])
  // Alla prima iterazione index sarà 6 e quindi names[index] sarà undefined
  // All'ultima iterazione index sarà 1 e quindi names[index] sarà "Alex"
  // Poi i diventa 0 e la condizione sarà falsa, quindi non raggiungo mai "Alberto"
}

console.log("---------------------- CICLO FOR DECREMENTANTE ----------------------")
for (let index = names.length - 1; index >= 0; index--) {
  // names.length è 6
  console.log(names[index])
  // Alla prima iterazione index sarà 6 e quindi names[index] sarà undefined
  // All'ultima iterazione index sarà 1 e quindi names[index] sarà "Alex"
  // Poi i diventa 0 e la condizione sarà falsa, quindi non raggiungo mai "Alberto"
}

console.log("---------------------- PARI O DISPARI? ----------------------")
for (let index = 0; index < names.length; index++) {
  console.log("Indice attuale: ", index)
  console.log("Elemento attuale: ", names[index])
  if (index % 2 === 0) {
    console.log(names[index])
  } else {
    console.log("NON LO STAMPO PERCHE' DISPARI")
  }
}
