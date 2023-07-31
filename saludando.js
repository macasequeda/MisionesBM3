//Variables 
let time = 21

if(time <12) {
    console.log("Buenos días"); 
}
if(time >=12) {
    if(time <=18) {
        console.log("Buenas tardes")
    }
} if(time >18) {
    console.log("Buenas noches");
}

//Probando forma else if
let tiempo = 35

if(tiempo <12) {
    console.log("Buenos días")
} else if(tiempo >=12 && tiempo <=18) {
    console.log("Buenas tardes")
} else if(tiempo >18) {
    console.log("Buenas noches")
}