
var player
var pImage,bullet
var imposter
var gameState="1"
var imposterGroup,bulletGroup

function preload(){
  pImage= loadImage("AmongUs1.png");
  pImage2= loadImage("AmongUs2.png");
  IImage1= loadImage("Imposter1.png");
}


function setup(){
  createCanvas(2200,1000);

  player=createSprite(100,130);
  player.addImage(pImage)
  imposterGroup=createGroup();
  bulletGroup=createGroup();
}


function draw(){
  background("teal");
  
  if(keyDown("d")){

    player.x=player.x+10;

  }
  if(keyDown("a")){

    player.x=player.x-10;

  }
  if(keyDown("s")){

    player.y=player.y+10;

  }
  if(keyDown("w")){

    player.y=player.y-10;

  }

  if(keyDown("2")){

    player.addImage(pImage2);
    gameState="2"
  }

  if(keyDown("1")){

    player.addImage(pImage);
    gameState="1"

  }

  if(gameState==="2"){

    if(keyWentDown("space")){

     

      shootBullet();
      for(var i = 0;i<imposterGroup.length;i++){
       
        if(imposterGroup.get(i).isTouching(bulletGroup)){
                             
          imposterGroup.get(i).destroy();
      
        }
    
      }
      
    }

  }
  
  if(gameState==="1"){

    if(keyDown("space")){

      for(var i = 0;i<imposterGroup.length;i++){
        
        if(imposterGroup.get(i).isTouching(player)){
                             
          imposterGroup.get(i).destroy();
      
        }
    
      }

    }

  }

  

  


  





  impos();

  drawSprites();





}





function impos(){


  
  if(frameCount %100===0 ){

    imposter=createSprite(2200,random(100,900))
    imposter.addImage(IImage1)
    imposter.velocityX=-3 
    imposterGroup.add(imposter)
imposter.debug= false
    

  }

}

function shootBullet(){

  bullet=createSprite(player.x+95,player.y+36,20,10)
  bullet.debug= false;
  bullet.setCollider("rectangle",0,0,40,30)
  bullet.velocityX=25
  bullet.shapeColor=("gold");
  bulletGroup.add(bullet);

 
}