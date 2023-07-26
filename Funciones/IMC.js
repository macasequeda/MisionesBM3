// Formula de IMC es: imc = peso / (altura^2)

function imc(peso, altura) {
    return peso/(altura ** 2);
}

let imcCalculo = imc(76, 1.68);

console.log("Tu IMC es de: " + imcCalculo);
