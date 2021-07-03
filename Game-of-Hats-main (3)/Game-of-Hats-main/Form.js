class Form{
    
    
    constructor(){
        this.button= createButton("PLAY");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
     
      
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
     
    }
    
    
    display(){
     this.title.html("Game of Hats");
     this.title.position(displayWidth/2-50,20);
     this.button.position(displayWidth/2,displayHeight/2);
     this.greeting.html("All the best !");
     this.greeting.position(displayWidth/2-70,displayHeight/4)
     this.button.mousePressed(()=>{
     this.button.hide();
     game.play();
    })
    }

    
}
