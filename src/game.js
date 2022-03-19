// game config
const game = {
    score: 0,
    playing: false,
    countScore: null,

    run: function(ctx) {        
        this.draw(ctx);
    },

    draw: function(ctx) {
        // game recursive loop
        const animate = () => {
            // clear canvas 
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw bg
            background.draw(ctx);

            if(this.playing) {
                // draw characters
                player.draw(ctx);
                levels.spawEnemies(ctx, this.score)

                // draw score
                ctx.font = "25px 'Press Start 2P'";
                ctx.fillStyle = "#00ff00";
                ctx.textAlign = "center";
                ctx.fillText(this.score, 350, 50);
            }

            gameLoop = requestAnimationFrame(animate);
        }

        gameLoop = requestAnimationFrame(animate)
    },

    start: function(){
        menu.hide();
        this.playing = true;

        this.countScore = setInterval(() => {
            this.score++;
        }, 100)
    },
    
    stop: function(){
        // setting new hi-score
        if(this.score > getHiScore())
            setHiScore(this.score);

        // stop character rendering
        this.playing = false;
        
        // show menu
        menu.show();

        // reseting enemies position
        levels.meteors.forEach(meteor => meteor.y = -90);
       
        // reseting player position
        player.changePos(2);       

        // stop score count
        clearInterval(this.countScore);

        // reseting score
        this.score = 0;        
    },

    setGameControlls: function () {
        document.addEventListener("keydown", (event) => {
            if(event.key == " ") {
                this.start();
            }
        })  
    }
}
