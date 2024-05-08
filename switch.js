// **************************** SWITCH ******************************
// Lo switch-case è un'alternativa semplificata a degli if-else complessi

const numero = 1

switch (numero) {
  case 0:
    console.log("Il numero è uguale a zero!")
    break
  case 1:
    console.log("Il numero è uguale a uno!")
  case 2:
    console.log("Il numero è uguale a due!")
    break
  case 3:
    console.log("Il numero è uguale a tre!")
    break
  case 4:
    console.log("Il numero è uguale a quattro!")
    break
  case 5:
    console.log("Il numero è uguale a cinque!")
    break
  default:
    break
}

const user = {
  name: "Aldo",
}

let hoursOfStudy = 0

switch (user.name) {
  case "Teo":
    hoursOfStudy = 1000
    break
  case "Mario":
    hoursOfStudy = 1
    break
  case "Riccardo":
    hoursOfStudy = 0
    break
  default:
    hoursOfStudy = 1000000
    break
}
console.log("ORE DI STUDIO : " + hoursOfStudy)

const numero2 = 6

switch (true) {
  case numero2 < 5:
    console.log("Il numero è minore di 5")
    break
  case numero2 >= 5 && numero2 < 10:
    console.log("Il numero è maggiore uguale di 5, minore di 10")
    break
  default:
    console.log("Il numero è maggiore di 10")
    break
}
