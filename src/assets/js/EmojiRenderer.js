import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.target = "😎";

    this.squares = []; // square: {height: font_size, position:[x,y]}

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
  setSquare(square) {
    this.positions = [[square]];
  }

  setSquares(squares) {
    this.positions = this.squares;
  }

  draw() {
    super.draw();

    for (let r of this.squares) {
      this.ctl.ctx.font = `${r.height}px serif`;
      this.ctl.ctx.fillText(this.target, r.position[0] - r.height * 0.5, r.positions[1] + r.height * 0.5);
    }
  }
}
