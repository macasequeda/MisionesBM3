//Mayúsculas
let name = "Camila"; 
    console.log(name.toUpperCase());

//Minúsculas
let saludo = "HOLA MUNDO"; 
    console.log(saludo.toLowerCase());

//Inicia con
console.log(saludo.startsWith("HOLA"));

//Finaliza con
console.log(saludo.endsWith("MUNdo"));

//Métodos anidados
    console.log(saludo.toLowerCase().startsWith("hola"));

//Substr
console.log(saludo.substr(0,4)); 
console.log(saludo.substr(5,3)); 

//Substring
console.log(saludo.substring(0,4)); 
console.log(saludo.substring(5,8));

//Reemplazar
saludo = saludo.replace("MUNDO", "GRUPOB3")
console.log(saludo);
//Incluye
console.log(saludo.includes("MUNDO"));