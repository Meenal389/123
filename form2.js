class Form2{
    constructor(){
        this.button=createButton("RESTART")
    }
        display(){
   
            this.button.position(displayWidth-250,displayHeight/2-370)
            this.button.style('width', '200px');
            this.button.style('height', '47px');
            this.button.style('background', 'yellow');
            this.button.style('font-size','20px')
            
   
            this.button.mousePressed(()=>{
                gameState="1"
                clear()
                sea.visible = false;
                story.visible=false;
                intro1.visible=true;
                reset.display()
                obstacleGroup.destroyEach()
                coinGroup.destroyEach()
                starfish.visible = false;
                obstacleGroup.destroyEach()
                coinGroup.destroyEach()
                intro3.visible=false;
                river.visible = false;
                duck.visible = false;
                enemyGroup.destroyEach()
            })
           
        }
   
   }