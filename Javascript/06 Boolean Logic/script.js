let distance= 150;
let fuel = 100;
let distanceCondition = distance <=200 && distance >=100;
console.log(distanceCondition);
let isEngineBroken = false;
// the ! means the opposite "NOT operator"
if (!isEngineBroken || distance > 200){
    console.log('wont make it')
}

//&& AND operator, requiers both statments to be TRUE
else if (distanceCondition && fuel >= 100){
    console.log('you will make it');
}


//Challange: distance < 100, need at least 25 fuel

else if(distance < 100 && fuel >=25){
    console.log('you will make it')
}
  