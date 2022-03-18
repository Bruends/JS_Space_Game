// player config
const player = {
    width: 50,
    height: 50,
    x: 170,
    y: 470,
    sprite: null,    

    loadSprite(){
        this.sprite = new Image();
        this.sprite.src = "sprites/player.png";
        this.sprite.width = this.width;
        this.sprite.height = this.height;
    },

    draw: function (ctx) {
        // ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.drawImage(this.sprite, this.x, this.y);
        ctx.fill();
    },

    setControlls: function(player) {
        // controls
        document.addEventListener('keydown', (event) => {
            if (event.key == 'w' || event.key == 'ArrowUp') {
                if(player.x < canvas.width - player.width)
                        player.x = 170;
            }
            if (event.key == 'ArrowRight' || event.key == 'd') {
                if(player.x < canvas.width - player.width)
                        player.x = 300;
            }
            if (event.key == 'ArrowLeft' || event.key == 'a') {
                if(player.x > 0)
                    player.x = 20;
            }
        });    
    }
}