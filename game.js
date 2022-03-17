window.onload = function()
{
    // getting canvas context
    const ctx = document.querySelector("#canvas").getContext("2d");
    
    // canvas config
    const canvas = {
       width: 400,
       height: 550
    }
    ctx.canvas.width  = canvas.width;
    ctx.canvas.height = canvas.height;

    // player config
    const player = {
        width: 50,
        height: 50,
        x: 175,
        y: canvas.height - 80,

        draw: function() {
            ctx.fillStyle ="#00ff00";
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
    }

    // enemy config
    const enemy = {
        width: 50,
        height: 50,
        x: 80,
        y: -90,

        fall: function(speed){
            if(this.y > 590) {
                this.y = -90;
                this.x = Math.random() * (canvas.width - this.width - 0);
            }
            
            this.y += speed
        },

        draw: function() {
            this.fall(6);
            ctx.fillStyle ="#ff0000";
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        },

        collision: function() {
            // checking collision
            if (player.x < this.x + this.width &&
                player.x + player.width > this.x &&
                player.y < this.y + this.height &&
                player.y + player.height > this.y) 
            {
                this.y = -90;
                alert("game over");
            }
        }
    }

    // controls
    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowRight') {
            if(player.x < canvas.width - player.width)
                player.x += 30;
        }
        if (event.key == 'ArrowLeft') {
            if(player.x > 0)
                player.x -= 30;
        }
    })

    // game recursive loop
    const animate = () => {
        // draw bg
        ctx.fillStyle ="#222222";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // draw player
        player.draw();

        // draw enemies
        enemy.draw();
        enemy.collision();

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate)
}