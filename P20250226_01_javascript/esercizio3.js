let secondi = 12560;

let ore = Math.floor(secondi/3600);
let minuti = Math.floor(12560-(ore*60))
let secondires = Math.floor(12560-(ore*3600)-(minuti*60))

console.log("ORE : ")
console.log(ore);
console.log("MINUTE: ")
console.log(minuti)
console.log("SECONDI : ")
console.log(secondires)