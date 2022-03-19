
// game config
const game = {
    score: 0,

    run: function(ctx) {
        setInterval(() => {
            this.score++;
        }, 200)
        this.draw(ctx);
    },

    draw: function(ctx) {
        // game recursive loop
        const animate = () => {
            // clear canvas 
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw bg
            background.draw(ctx);

            // draw characters
            player.draw(ctx);
            levels.spawEnemies(ctx, this.score)

            // draw score
            ctx.font = "25px Arial MS";
            ctx.fillStyle = "#00ff00";
            ctx.textAlign = "center";
            ctx.fillText(this.score, 350, 50);
            gameLoop = requestAnimationFrame(animate);
        }

        gameLoop = requestAnimationFrame(animate)
    },
        stop: function(){
            this.score = 0;
        }
    }
