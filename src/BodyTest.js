import { CharacterUITest } from './CharacterUITest.js';

export default class BodyTest extends PIXI.Container {
  graphic;
  _speed = 1 + Number(Math.random());
  _direction = Math.random() * Math.PI * 2;

  constructor() {
    super();
    this.graphic = new CharacterUITest()
    this.addChild(this.graphic)
  }

  update() {
    this._direction += 0.001;

    this.graphic.rotation = Math.PI - this._direction;
    this.x += this._speed * Math.cos(-this._direction);
    this.y += this._speed * Math.sin(-this._direction);

    // wrap around the screen
    const padding = 10;
    const width = 720;
    const height = 1280;

    if (this.x > width + padding) this.x -= width + padding * 2;
    if (this.x < -padding) this.x += width + padding * 2;
    if (this.y > height + padding) this.y -= height + padding * 2;
    if (this.y < -padding) this.y += height + padding * 2;
  }
}