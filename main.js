let usuario = prompt(`Hola! Ingresa tu nombre de usuario para continuar`);
let numero1 = Number(prompt(`Ingresa el primer numero`));
let numero2 = Number(prompt(`Ingresa otro numero`));

let operacion = prompt(`Ingresa el simbolo de la operacion a realizar: '+' para sumar, '-' para restar, '*' para multiplicar y '/' para dividir`);

if (operacion == `+`) {
    alert(`Hola ${usuario}, la suma de ${numero1} y ${numero2} dan como resultado ` + (numero1 + numero2));
} 
else if (operacion == `-`) {
    alert(`Hola ${usuario}, la resta de ${numero1} y ${numero2} dan como resultado ` + (numero1 - numero2));
}
else if (operacion == `*`) {
    alert(`Hola ${usuario}, la multiplicacion de ${numero1} y ${numero2} dan como resultado ` + (numero1 * numero2));
}
else if (operacion == `/`) {
    alert(`Hola ${usuario}, la division de ${numero1} y ${numero2} dan como resultado ` + (numero1 / numero2));
}
else {
    alert(`Lo sentimos ${usuario}, el simbolo ingresado no es valido.`);
}