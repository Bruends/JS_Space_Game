// player config
const player = {
    width: 50,
    height: 50,
    x: 175,
    y: 470,

    draw: function (ctx) {
        ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    },

    setControlls: function(player) {
        // controls
        document.addEventListener('keydown', (event) => {
            if (event.key == 'ArrowRight' || event.key == 'd') {
                if(player.x < canvas.width - player.width)
                        player.x += 50;
            }
            if (event.key == 'ArrowLeft' || event.key == 'a') {
                if(player.x > 0)
                    player.x -= 50;
            }
        });    
    }
}