import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.target = "😎";

    this.position = [this.ctl.width * 0.5, this.ctl.height * 0.5];
    this.font_size = 500;

    this.emoji_lookup = {
      happy: "😄",
      sad: "😢",
      angry: "😡"
    };
  }

  setEmotion(emotion) {
    if (emotion in this.emoji_lookup) {
      this.target = this.emoji_lookup[emotion];
    } else {
      console.error(`given ${emotion} is not defined`);
    }
  }

  setPosition(x, y) {
    this.position = [x, y];
  }

  draw() {
    super.draw();
    this.ctl.ctx.font = `${this.font_size}px serif`;

    this.ctl.ctx.fillText(
      this.target,
      this.position[0] - this.font_size * 0.5,
      this.position[1] + this.font_size * 0.5
    );
  }
}
