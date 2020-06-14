import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.target = "😎";

    this.positions = [];
    this.font_size = 500;

    this.emoji_lookup = {
      angry: "😡",
      disgusted: "🤢",
      fearful: "😰",
      happy: "🤩",
      neutral: "🙂",
      sad: "🥺",
      surprised: "😳"
    };
  }

  setEmotion(emotion) {
    if (emotion in this.emoji_lookup) {
      this.target = this.emoji_lookup[emotion];
    } else {
      console.error(`given ${emotion} is not defined`);
    }
  }

  // 互換性のために追加
  setPosition(x, y) {
    this.positions = [[x, y]];
  }

  setPositions(positions) {
    this.positions = positions;
  }

  draw() {
    super.draw();
    this.ctl.ctx.font = `${this.font_size}px serif`;

    for (let p of this.positions) {
      this.ctl.ctx.fillText(this.target, p[0] - this.font_size * 0.5, p[1] + this.font_size * 0.5);
    }
  }
}
