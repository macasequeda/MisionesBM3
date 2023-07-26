
/*
Imagina que queremos hacer un programa que imprima los números del 10 al 20 pero saltando cada otro número, es decir, que imprima 10, 12, 14, 16, 18 y 20.
El primer paso antes de escribir el ciclo es identificar las diferentes partes del ciclo: la inicialización, la condición, el incrementador y el cuerpo.
*/

//inicializar i: 10
//condición: i menor o igual a 20
//incrementador me sume 2
//cuerpo: Imprimir en terminal el valor

for (let i = 10; i <= 20; i = i+2) {
    console.log("El número es " + i )
}
