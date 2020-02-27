var number = prompt("Entre un nombre : ")
var fact = 1

for(let i = number; i > 0; i--) {
    fact *= i
}

console.log("La factorielle de " + number + " est " + fact)