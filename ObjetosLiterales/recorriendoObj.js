let persona = {
    name: "Pedro",
    apellido: "Suarez",
    edad: 35, 
    estatura: 1.71
} 

// Usando métodos específicos para objetos
for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
        console.log(persona[llave]);
    }
}

//Usando propiedad Object.keys
 let llaves = Object.keys(persona);
 console.log("LLAVES---", llaves); 
 for(let i=0; i<llaves.length; i++) {
    let llave = llaves[i];
    console.log(persona[llave]); 
 }
