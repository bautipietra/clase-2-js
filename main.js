let numero = Number(prompt(`Ingresa un numero menor a 20 y te mostraremos los numeros que hay en el medio`));

if (numero < 10) {
    for (numero; numero < 25; numero++) {
        console.log(numero);
    }
}
else {
    console.log(`El numero ingresado es mayor a 25`)
}