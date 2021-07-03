class Task2{
    constructor(){
        this.button6 = createButton('3: Shopkeeper');
        this.button7 = createButton('2: Bookkeeper ');
        this.button8 = createButton('1: letter');
        this.button9 = createButton('4: letterbox');
        this.question  = createElement('h2');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
}

    hide(){
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.question.hide();
        this.greeting.hide();
        this.title.hide();
}

    display(){
        this.button6.position(displayWidth/4+80,displayHeight/4+160);
        this.button7.position(displayWidth/4+270,displayHeight/4+100);
        this.button8.position(displayWidth/4+80,displayHeight/4+100);
        this.button9.position(displayWidth/4+270,displayHeight/4+160);
        this.greeting.position(600,300); 
        this.title.position(600,200);
       
       this.button6.mousePressed(()=>{
           this.button6.hide();
           this.button7.hide();
           this.button8.hide();
           this.button9.hide();
           this.question.hide();
           this.greeting.html("Wrong Answer")
           this.greeting.style('color','red');
      glass_break.play();     
    })
    
         this.button7.mousePressed(()=>{
            this.button6.hide();
             this.button7.hide();
             this.button8.hide();
             this.button9.hide();
             yellow.x = 200;
             yellow.y = 200;
            
          this.greeting.html('Correct Answer');
          this.greeting.style('color','rgb(0, 255, 0)');
          // this.title.html("press SPACE key for task-2")
          applause.play(); 
         })

         this.button8.mousePressed(()=>{
        
          this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
             this.greeting.html("Wrong Answer");
             this.greeting.style('color','red');
            //  this.title.html("press SPACE key for task-2")
             glass_break.play()
         })

         this.button9.mousePressed(()=>{
             this.button6.hide();
             this.button7.hide();
             this.button8.hide();
             this.button9.hide();
            this.greeting.html("You're answer is wrong");
            this.greeting.style('color','red');
            // this.title.html("press SPACE key for task-2")
           glass_break.play()
         })
        
        this.question.html("QUESTION 2:-What English word has three consecutive double letters? ");
        this.question.position(50,50);
       this.question.style('color','Yellow')
    }
    
}