class Task{
    constructor(){
        this.button2 = createButton('Peter');
        this.button3 = createButton('Peetr');
        this.button4 = createButton('fnfn');
        this.button5 = createButton('fvfv');
        this.question  = createElement('h2');
        this.greeting = createElement('h2');
        this.title = createElement('h2');

       
     }
    hide(){
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.question.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.button2.position(displayWidth/4+270,displayHeight/4+100);
        this.button3.position(displayWidth/4+100,displayHeight/4+100);
        this.button4.position(displayWidth/4+270,displayHeight/4+160);
        this.button5.position(displayWidth/4+100,displayHeight/4+160);
      
        this.greeting.position(600,300); 
        this.title.position(600,200);
       
       this.button2.mousePressed(()=>{
       
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
         this.question.hide();
         red.x = 200;
         red.y = 200;
          this.greeting.html("Correct Answer")
          this.greeting.style('color','rgb(0, 255, 0)');
        this.title.html("press SPACE key for task-2")
        applause.play();      
    })
    
         this.button3.mousePressed(()=>{
            this.button2.hide();
             this.button3.hide();
             this.button4.hide();
             this.button5.hide();
            this.greeting.html('wrong');
          this.greeting.style('color','red');
          this.title.html("press SPACE key for task-2")
          glass_break.play();
         })

         this.button4.mousePressed(()=>{
        
          this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
             this.greeting.html("Wrong Answer");
             this.greeting.style('color','red');
             this.title.html("press SPACE key for task-2")
             glass_break.play()
         })

         this.button5.mousePressed(()=>{
             this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
            this.greeting.html("You're answer is wrong");
            this.greeting.style('color','red');
            this.title.html("press SPACE key for task-2")
         glass_break.play()
         })
        
        this.question.html("Question :- Peter's father has five sons. The names of four sons are Fefe, Fifi, Fafa and Fufu respectively. What is the name of the fifth son? 🤔")
        this.question.position(70,10);
       this.question.style('color','white')
    }
    
}