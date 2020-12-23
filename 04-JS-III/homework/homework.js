// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
}

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var list = [];
    for (var i = 0; i < array.length; i++) {
        list.push(array[i] + 1);
    }
    return list;
}

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var list = "";
    for (var i = 0; i < palabras.length; i++) {
        list = list + palabras[i];

        if (i != palabras.length - 1) {
            list = list + " ";
        }
    }
    return list;
}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    if (array.includes(elemento)) {
        return true;
    } else {
        return false;
    }
}

function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var sumaNum = 0;
    for (var i = 0; i < numeros.length; i++) {
        sumaNum = sumaNum + numeros[i];
    }
    return sumaNum;
}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var sum = 0;
    var total;
    for (var i = 0; i < resultadosTest.length; i++) {
        sum = sum + resultadosTest[i];
    }
    total = sum / resultadosTest.length;
    return total;
}

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var mayor = 0;
    for (var i = 0; i < numeros.length; i++) {
        if (mayor < numeros[i]) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0
       // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    var prod = 1;
    if (arguments.length == "") {
        return 0;
    }
    for (var i = 0; i < arguments.length; i++) {
        prod = prod * arguments[i];

    }
    return prod;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
};