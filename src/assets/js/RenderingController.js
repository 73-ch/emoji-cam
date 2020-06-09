import Camera from './Camera';
import Emoji from './Emoji';

export default class RenderingController {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.render_status = false;

    this.resized();

    this.camera = new Camera();

    this.emoji = new Emoji(this);

    window.addEventListener('resize', this.resized.bind(this));
  }

  start() {
    this.render_status = true;
    this.draw();
  }

  stop() {
    this.render_status = false;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.emoji.draw();

    if (this.render_status) requestAnimationFrame(this.draw.bind(this));
  }

  resized() {
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // console.log(this.width, this.height, this.ctx.width,  this.ctx.height);
  }
}
