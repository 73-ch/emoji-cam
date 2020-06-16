import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.targets = "😎";

    this._emotions = [];

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

  set emotions(emotions) {
    this._emotions = emotions;
  }

  // 互換性のために追加
  setSquare(square) {
    this.squares = [[square]];
  }

  setSquares(squares) {
    this.squares = squares;
  }

  draw() {
    super.draw();

    this.squares.forEach((s, i) => {
      this.ctl.ctx.font = `${s.height}px serif`;
      this.ctl.ctx.fillText(this.emoji_lookup[this._emotions[i]], s.position[0] - s.height * 0.5, s.position[1] + s.height * 0.5);
    });
  }
}
