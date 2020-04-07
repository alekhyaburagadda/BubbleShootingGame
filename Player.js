class Player{
    constructor(x,y){}

display(){
    player=addImage('player',playerImg);
}

keyPressed(){
if(keyCode=== 38){
    player.velocityX=3;
}
if(keyCode===40){
    player.rotate(PI/3.0);
}
if(keyCode===37){
    player.rotate(-45/2.0)
}
if(keyCode===39){
    player.rotate(45/2,0)
}
}
locatingThePlayer(){
    if(player.x>800){
        player.x=0
    }
    if(player.y>800){
        player.y=0
    }
}
playerLife(){
    var playerLife= 200;
    if(player.isTouching(bubblesGroup1||bubblesGroup2||bubblesGroup3||bubblesGroup4||bubblesGroup5)){
    playerLife=playerLife-10;
    }
}
shootLasers(){
    var bulletGroup= createGroup();
    if(keyCode===32){
        var bullet= createSprite(player.x,375,5,10);
        bullet.velocityY=-7;
        bullet.shapeColor="red";
        BulletGroup.add(bullet);
      }
      if(BulletGroup.isTouching(bubblesGroup1)){
        bubblesGroup1.destroyEach();
        BulletGroup.destroyEach();
        playerLife=playerLife+10
      }
      
        if(BulletGroup.isTouching(bubblesGroup2)){
        bubblesGroup2.destroyEach();
        BulletGroup.destroyEach();
        playerLife=playerLife+10
      }
      
        if(BulletGroup.isTouching(bubblesGroup3)){
        bubblesGroup3.destroyEach();
        BulletGroup.destroyEach();
        playerLife=playerLife+10
      }
      
        if(BulletGroup.isTouching(bubblesGroup4)){
        bubblesGroup4.destroyEach();
        BulletGroup.destroyEach();
        playerLife=playerLife+10
      }
      
        if(BulletGroup.isTouching(bubblesGroup5)){
        bubblesGroup5.destroyEach();
        BulletGroup.destroyEach();
        playerLife=playerLife+10
      }
    }
}
