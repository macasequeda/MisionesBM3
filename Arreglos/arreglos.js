let array =[1, "Cami", true, 32, "Juan", false, "Nayibe", 48];

//Posición
let pos = array[4];

console.log("Esta es mi posición 4: " + pos);

//Recorrer un arreglo

for (let i = 0; i < array.length; i++) {
    console.log("Este es mi dato en la posición " + i + ": " + array[i]);
}

//Reasignando un valor.
array[3] = "Hola";
console.log(array[3]);

for (let i = 0; i < array.length; i++) {
    console.log("Este es mi dato en la posición " + i + ": " + array[i]);
}
