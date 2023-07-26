let nombres = ["Lina", "Oscar", "Maria", "Juan"];

console.log("ARRAY INICIAL", nombres);

//Insertando en una posición específica
nombres.splice(2, 0, "Ana"); 

console.log("ARRAY CON ANA", nombres); 

//Eliminando elementos
nombres.splice(1, 3);

console.log("ARRAY ELIMINANDO", nombres); 

//Eliminando elementos desde cierta posición
nombres.splice(0); 

console.log("ARRAY ELIMINANDO TODO", nombres); 