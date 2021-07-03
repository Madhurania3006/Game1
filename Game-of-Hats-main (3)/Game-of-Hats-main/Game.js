class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        form = new Form()
        form.display();
       }


    }
   
    play(){
      // image(redhat,1000,100,110,110);
       form.hide();
       character = createSprite(200,400);
       character.addImage("character",characterImage); 
       red = createSprite(1250,150)
       red.addImage(redhat)
       red.scale = 0.55;
       task = new Task();
       task.display();
}

    play2(){
     task.hide();
     red.destroy();
     yellow = createSprite(1250,150);
     yellow.addImage(yellowhat);
     yellow.scale = 0.65;
     task2 = new Task2();
     task2.display();
   
    }
}
