class Bubbles{
    constructor(x,y){}

display(){
    var bubblesGroup1= createGroup();
    var bubblesGroup2= createGroup();
    var bubblesGroup3= createGroup();
    var bubblesGroup4= createGroup();
    var bubblesGroup5= createGroup();

    var num= randomNumber(1,6);
    if(num===1){
      spawnEnemy1();
    }
    else if(num===2){
      spawnEnemy2();
    }
     else if(num===3){
      spawnEnemy3();
    }
     else   if(num===4){
      spawnEnemy4();
    }
     else   if(num===5){
      spawnEnemy5();
    }
     else   if(num===6){
      spawnEnemy6();
    }
}
spawnEnemy1(){
if(World.frameCount%50===0){
 var enemyBubble1= createSprite(randomNumber(0,400),0);

enemyBubble1.velocityY=8;
bubbleGroup1.add(enemyBubble1);
}
}
spawnEnemy2(){
    if(World.frameCount%60===0){
     var enemyBubble2= createSprite(randomNumber(100,300),10);
    enemyBubble2.velocityY=7;
    bubbleGroup2.add(enemyBubble2);
    }
    }
spawnEnemy3(){
    if(World.frameCount%70===0){
    var enemyBubble3= createSprite(randomNumber(200,200),20);
    enemyBubble3.velocityY=6;
    bubbleGroup3.add(enemyBubble3);
}
}

spawnEnemy4(){
    if(World.frameCount%80===0){
     var enemyBubble4= createSprite(randomNumber(300,400),30);
    enemyBubble4.velocityY=5;
    bubbleGroup4.add(enemyBubble4);
    }
    }
    spawnEnemy5(){
        if(World.frameCount%40===0){
         var enemyBubble5= createSprite(randomNumber(400,0),30);
        enemyBubble5.velocityY=4;
        bubbleGroup5.add(enemyBubble5);
        }
        }
       
    bubbles= [enemyBubble1,enemyBubble2,enemyBubble3,enemyBubble4,enemyBubble5];
    bubbles=addImage('bubbles',bubblesImg);
}