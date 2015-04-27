var array = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77];
var pares = [];
var impares = [];
var multiplicacion = [];


    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        } else {
            impares.push(array[i])
        }
    }
    for (i = 0; i < impares.length; i++) {
        if (impares[i] && pares[i]) {
            multiplicacion.push(pares[i] * impares[i])
        } else {
            multiplicacion.push(impares[i] * 1)
        }
    }

console.log("Los números pares son: " + pares)
console.log("Los números impares son: " + impares)
console.log("Array resultante de la multiplicacion: " + multiplicacion)