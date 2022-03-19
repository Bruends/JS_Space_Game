window.onload = function()
{
    // getting canvas context
    const ctx = document.querySelector("#canvas").getContext("2d");
    ctx.canvas.width  = 400;
    ctx.canvas.height = 550;

    // loading sprites and controls
    background.loadSprite();
    player.loadSprite();
    player.setControlls();
    levels.meteors[0].loadSprite();
    levels.meteors[1].loadSprite();

    // running game
    game.run(ctx);
}