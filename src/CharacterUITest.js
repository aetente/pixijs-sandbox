
export class CharacterUITest extends PIXI.Graphics {
  constructor() {
    super();
    const padding = 10;

    const graphic = new PIXI.Graphics()
    graphic.rect(0, 0, 100, 100);
    graphic.fill(0xfe3366);
    graphic.pivot.set(50,50)
    graphic.x = Math.random() * 720;
    graphic.y = Math.random() * 1280;

    this.addChild(graphic);
  }
}