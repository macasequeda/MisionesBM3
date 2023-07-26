let persona = {
    name: "Pedro",
    apellido: "Suarez",
    edad: 35, 
    estatura: 1.71
}
console.log("Objeto Persona", persona);
let llave = "name"
console.log(persona[llave]);
console.log(persona.apellido);
console.log(persona["edad"]);
console.log(persona["estatura"]);

persona.peso = 75;
console.log("Objeto Persona Modificado", persona); 

persona.edad = 33; 
console.log("Objeto Persona Modificado edad", persona); 

delete persona.estatura; 
console.log("Objeto Persona eliminando", persona); 

