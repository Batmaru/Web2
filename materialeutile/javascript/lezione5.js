
// Fase 1 ... HOISTING ... le variabili (SOLO LE DICHIARAZIONI) e le funzioni (TUTTE)

test()  // OK
test2() // undefined

function test() {
    console.log("test");
}

var test2 = function () {
    console.log("test 2");
}

test()
test2()

// test ? è un oggetto ... eseguibile ... 
// test è una variabile

console.log(test);

test()

// override
var test = 10;

// FASE 2 ... 2009 /2015
let test3 = function () {
    console.log("test 3");
}

// ARROW FUNCTION ... funzione anonima
let test4 = () => {
    console.log("test 4");
};

test4();