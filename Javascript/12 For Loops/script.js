let population = 100;

population *= 1.05;

/*let j = 0;
while (j<10 ){
    result = population *= 1.05;
    j++;
    console.log (result);
}*/

for (let j = 0; j<10; j++){
    population *= 1.05;
}

console.log (population);