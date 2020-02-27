let number = prompt("Combien d'étage ??")

let space = " "
let sharp = "#"
let stair = ""
let l = 1

for(let j = number; j > 0; j--) {
    for(let i = 1; i < number; i++) {
        stair += space
    }
    for(let k = 0; k < l; k++) {
        stair += sharp
    }
    stair += "\n"
    number--
    l++
}

console.log(stair)