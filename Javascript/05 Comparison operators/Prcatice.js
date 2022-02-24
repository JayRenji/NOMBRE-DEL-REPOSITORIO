// Crea una variable llamada 'age' y asignale el valor 17 (número)
var age=17;
if (age === 17){
  console.log('I am 17');
}
 

// Crea una variable llamada 'isUsa' y asignale el valor booleano true
var isUsa=true;


// Crea una variable llamada 'youCanDrive' y asignale el valor booleano false
var youCandDrive=false;


// Crea una condición que nos diga si una persona con 17 años puede conducir ->
// Tendrás que asignar el valor true a 'youCanDrive' si la variable 'age' es mayor a 18 años, pero si está en USA y es mayor de 16 años también asigna el valor true a 'youCanDrive'.
if ( age>=18 || age>=16 && isUsa){
 console.log('You can drive here');
youCandDrive=true;
} 
 