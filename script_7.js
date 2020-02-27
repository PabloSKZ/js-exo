while (true) {
    var entry = prompt("Acné Bot")
    if (entry[entry.length-1] == '?') {
        console.log("Ouais ouais ...")
    } else if (entry.match("^[A-Z]+$")) {
        console.log("Pwa, calme-toi...")
    } else if (entry.includes("Fortnite")) {
        console.log("on s'fait une partie soum-soum ?")
    } else if (entry == "") {
        console.log("t'es en PLS ?")
    } else {
        console.log("balek.")
    }
    if (entry == "exit") {
        break;
    }
}