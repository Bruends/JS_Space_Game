window.onload = function()
{
    // getting canvas context
    const ctx = document.querySelector("#canvas").getContext("2d");
    
    // canvas config
    const canvas = {
       width: 400,
       height: 550
    }
    ctx.canvas.width  = 400;
    ctx.canvas.height = 550;
     
    // game config
    const game = {
        run: function(ctx) {
            // game recursive loop
            const animate = () => {
                // draw bg
                ctx.fillStyle ="#222222";
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                // draw player
                player.draw(ctx);

                // draw enemies
                enemies.forEach((enemy) => {
                    enemy.draw(ctx);
                    enemy.collision(player, game);
                });
                // enemies[0].draw(ctx);
                // enemies[0].collision(player, game);
                // enemies[1].draw(ctx);
                // enemies[1].collision(player, game);
                // enemies[2].draw(ctx);
                // enemies[2].collision(player, game);
                    

                gameLoop = requestAnimationFrame(animate);
        }

        gameLoop = requestAnimationFrame(animate)

        },
        stop: function(){
            player.x = 175
            enemies.forEach(enemy => enemy.y = -50);
        }
    }

    player.setControlls(player);

    // enemies array
    const enemies = [
        {...enemy},
        {...enemy},
        {...enemy},
    ]

    game.run(ctx);
}