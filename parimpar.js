const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
    console.log("Entrada inválida! Por favor, digite um número válido.");
} else if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
