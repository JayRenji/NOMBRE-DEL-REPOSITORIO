//challange
let player = {
    health : 100,
    fun : 0,
    energy : 100,
   
    eat: function(food){
        if(food == 'apple'){
            this.health += 10;
        }
        else if(food == 'candy'){
            this.health -= 5;
            this.fun += 5;
        }
    },
    playBall: function (){
        this.fun += 10;
        this.energy -= 5;
    },
    sleep: function(){
        this.energy += 5;
    },
};

player.eat('apple');
player.eat('apple');
player.playBall();
player.eat('candy');
player.eat('candy');
player.eat('apple');
player.eat('apple');
player.eat('apple');
player.playBall();
player.eat('candy');
player.eat('candy');
player.eat('apple');
player.eat('apple');
player.eat('apple');
player.playBall();
player.eat('candy');
player.eat('candy');
player.eat('apple');
player.playBall();
player.playBall();
player.playBall();
player.playBall();
player.playBall();
player.sleep();
player.sleep();
player.sleep();
player.sleep();
player.sleep();
player.sleep();

console.log(player);


