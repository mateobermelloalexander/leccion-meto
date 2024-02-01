'use strict'
array = ["PDO-832","GAR-2004","GDA-101","TDR-3912","AGD-1087","PDO-1232","AAA-2001","ADR-782"]
const array = ["PDO-832","GAR-2004","GDA-101","TDR-3912","AGD-1087","PDO-1232","AAA-2001","ADR-782"];

// Seleccionamos  las placas con el formato actual válido
const placasValidas = array.filter(placa => /^[A-Z]{3}-\d{4}$/.test(placa));

// Filtramos  las placas del Azuay
const placasAzuay = array.filter(placa => placa.startsWith("A"));

// Buscamos la placa de un taxi
const placaTaxi = array.find(placa => placa.includes("TAXI"));

// Almacenamos en variables individuales el bloque de letras y el de números de la placa encontrada
const letrasNumeros = placaTaxi ? placaTaxi.match(/^([A-Z]{3})-(\d{4})$/) : null;

if (letrasNumeros) {
    const bloqueLetras = letrasNumeros[1];
    const bloqueNumeros = letrasNumeros[2];
    alert("Placas validas: " + placasValidas.join(", ") + "\n" +
          "Placas del Azuay: " + placasAzuay.join(", ") + "\n" +
          "Placa de taxi: " + placaTaxi + "\n" +
          "Bloque de letras: " + bloqueLetras + "\n" +
          "Bloque de numeros: " + bloqueNumeros);
} else {
    alert("No se encontro una placa de taxi valida.");
}
