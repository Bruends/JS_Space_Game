const levels = {
    // clone the meteor object to spawn more than 1
    meteors: [
        {...meteor},
        {...meteor}
    ],

    spawEnemies: function(ctx, score) {    
        // increase meteor and background speed based on score
        // slow
        if(score < 30) {
            this.drawMeteor (ctx, 7);
            //bg config
            background.speed = 7;            
        }

        // now a bit faster
        if(score >= 30 && score < 70) {
            this.drawMeteor (ctx, 12);            
            background.speed  = 12;
        }

        // and faster
        if(score >= 70 && score < 150) {
            this.drawMeteor (ctx, 17);
            background.speed = 17;            
        }

        // and faster 
        if(score >= 150 && score < 200) {
            this.drawMeteor (ctx, 22);
            background.speed = 22;            
        }

        // kachow 
        if(score >= 200) {
            this.drawMeteor (ctx, 27);
            background.speed = 27;            
        }
    },

    drawMeteor: function (ctx, speed) {
        this.meteors[0].speed = speed;
        this.meteors[0].draw(ctx);
        this.meteors[0].collision(player, game);
        
        this.meteors[1].speed = speed;
        this.meteors[1].draw(ctx);
        this.meteors[1].collision(player, game);
        
    }
}