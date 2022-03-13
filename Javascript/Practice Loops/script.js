// Inicializacion: var i = 0
// Condición: si i es menor o igual que 100
// Incremento: por cada iteración, sumale 1 al valor de 'i'
// Pista extra: i++ es lo mismo que: i = i + 1
for(var i = 0; i<=100;i++){
    console.log(i)
}

// Creamos una variable total que acumule la suma
var total = 0;

// Creamos un bucle que recorre desde i = 0 hasta que i sea mayor que 10
for (var i = 0; i<=10; i++){
    // En cada vuelta, sumamos la i al total...
    total += i;
}
console.log(total);// La variable total vale 55.

// Now with letters

var message= 'abcdeabcde'
var numberOFA = 0;

// Incrementamos la i en +1 por cada vuelta hasta que sea 
// igual o mayor a la longitud del texto
for (var i = 0; i< message.length; i++){
    	// Comprobamos que la letra en esa posición es la letra 'a'
    if(message[i]==='a'){
        numberOFA +=1;  // Si la letra es 'a', sumamos uno a la variable
    }
}
console.log(numberOFA); // Obtenemos el número 2 (hay dos letras 'a' en message)