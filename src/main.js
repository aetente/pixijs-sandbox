import BodyTest from "./BodyTest.js"

//test

const app = new PIXI.Application();

async function init() {
    
    await app.init({ 
        width: 720,
        height: 1280, 
        backgroundColor: 0x1099bb 
    });
    // app.canvas.style.width = "720px";
    // app.canvas.style.height = "1280px";
    document.body.appendChild(app.canvas);

    // const texture = await PIXI.Assets.load('assets/test/explosion1.png');
    // const sprite = new PIXI.Sprite(texture);
    // sprite.anchor.set(0.5);
    // sprite.x = app.screen.width / 2;
    // sprite.y = app.screen.height / 2;
    // app.stage.addChild(sprite);
    // app.ticker.add((ticker) => {
    //     sprite.rotation += 0.01 * ticker.deltaTime;
    // });


    const someContainer = new PIXI.Container();
    app.stage.addChild(someContainer);

    const testLayer = new PIXI.RenderLayer();
    
    const boides = []
    const maxBodies = 100


    for (let i = 0; i < maxBodies; i++) {

        // const graphic = new PIXI.Graphics();
        const body = new BodyTest()
        boides.push(body)
        someContainer.addChild(body);

        body.x = Math.random() * 630;
        body.y = Math.random() * 410;
        // graphic.rect(0, 0, 100, 100);
        // graphic.fill(0xfe3366);
        // graphic.pivot.set(50,50)
        
        // // Position it in the center
        // graphic.x = app.screen.width / 2 - 50;
        // graphic.y = app.screen.height / 2 - 50;
        // app.stage.addChild(graphic);
        testLayer.attach(body.graphic)
    }

    app.stage.addChild(testLayer);

    // Game loop: Rotate the square
    app.ticker.add((ticker) => {
        // graphic.rotation += 0.02 * ticker.deltaTime;
        boides.forEach((body) => body.update());
    });
}

init();