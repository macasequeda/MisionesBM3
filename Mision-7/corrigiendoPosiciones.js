//Un programa que inserta cada uno de los elementos del arreglo nuevoArreglo, en el arreglo resultante del reto anterior arr, e imprima cada uno de los elementos en la consola. 

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"]; 

//Nuevo Arreglo

let newArray =["Quinto", "Sexto"]; 
arr.splice(4, 0, "Quinto", "Sexto")


console.log(arr)
