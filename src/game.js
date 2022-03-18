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

    background.loadSprite();
    player.loadSprite();
    enemy.loadSprite();
    player.setControlls(player);
    
    // game config
    const game = {
        run: function(ctx) {
            // game recursive loop
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                background.draw(ctx);
                // draw player
                player.draw(ctx);

                // draw enemies
                enemies.forEach((enemy) => {
                    enemy.draw(ctx);
                    enemy.collision(player, game);
                });               
                    
                gameLoop = requestAnimationFrame(animate);
            }

            gameLoop = requestAnimationFrame(animate)

        },
        stop: function(){
            player.x = 170
            enemies.forEach(enemy => enemy.y = -50);
        }
    }

    

    // enemies array
    const enemies = [
        {...enemy},
        {...enemy}, 
    ]

    game.run(ctx);
}