//p1
function printHeart() {
    console.log("<3");
}
// Menjalankan fungsi
printHeart();


//p2
function multiply(a, b) {
    return a * b;
}
// Menguji fungsi dengan nilai yang diberikan
console.log(multiply(2, 3));  // 6
console.log(multiply(9, 9));  // 81
console.log(multiply(5, 4));  // 20

//p3A
let animal = "Giant Pacific Octopus";

function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}

observe();  // Call the function

//p3B
let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal); // Logs the local variable
}

handleAnimal();  // Call the function
console.log(deadlyAnimal);  // Logs the global variable

//p4
const sayHello = (name) => {
    return `Hello ${name}!`;
};

// Testing the function
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna"));   // "Hello Luna!"
