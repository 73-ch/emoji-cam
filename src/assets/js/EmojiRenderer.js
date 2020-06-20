import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.targets = "😎";

    this._emotions = [];

    this.squares = []; // square: {height: font_size, position:[x,y]}

    this.size_adjust = 1.0;
    this.ctl.ctx.font = `500px serif`;

    this.emoji_lookup = {
      angry: "😡",
      disgusted: "😟",
      fearful: "😨",
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
      const scaled_height = s.height * this.size_adjust;
      this.ctl.ctx.font = `${Math.floor(scaled_height)}px serif`;
      this.ctl.ctx.fillText(
        this.emoji_lookup[this._emotions[i]],
        s.position[0] - scaled_height * 0.5,
        s.position[1] + scaled_height * 0.5
      );

      // this.ctl.ctx.translate(s.position[0] - scaled_height * 0.5, s.position[1] + scaled_height * 0.5);
      // this.ctl.ctx.scale(scaled_height / 500, scaled_height / 500);
      // this.ctl.ctx.fillText(this.emoji_lookup[this._emotions[i]], 0, 0);
      // this.ctl.ctx.resetTransform();
    });
  }
}
