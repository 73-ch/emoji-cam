import RenderingObject from "./RenderingObject";
import RenderingController from "./RenderingController";

export default class EmojiRenderer extends RenderingObject {
  constructor(controller = new RenderingController()) {
    super();
    this.ctl = controller;
    this.targets = "😎";

    this._emotions = [];

    this.before_square = [];
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

    this.resetStatics();
  }

  resetStatics() {
    this.statics = {
      angry: 0,
      disgusted: 0,
      fearful: 0,
      happy: 0,
      neutral: 0,
      sad: 0,
      surprised: 0
    };
  }

  getStaticsJson() {
    const sum = Object.values(this.statics).reduce((a, s) => a + s);

    const result = {};

    Object.keys(this.statics).forEach(k => {
      result[k] = this.statics[k] / sum;
    });

    this.resetStatics();

    return result;
  }

  getStaticsText() {
    let result = "";

    Object.keys(this.statics)
      .sort()
      .forEach(k => {
        result += this.statics[k] + "\t";
      });

    result = result.slice(0, -1);

    this.resetStatics();

    return result;
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

    const length = this.squares.length;

    this.squares.forEach((s, i) => {
      if (this.squares.length === this.before_square.length && this.before_square[i].distance(s) < 100) {
        s.interpolate(this.before_square[i], 0.1);
      }

      const scaled_height = s.height * this.size_adjust;
      this.ctl.ctx.font = `${Math.floor(scaled_height)}px serif`;
      this.ctl.ctx.textAlign = "center";

      this.ctl.ctx.fillText(this.emoji_lookup[this._emotions[i]], s.position[0], s.position[1] + scaled_height * 0.5);
      this.statics[this._emotions[i]] += 1.0 / length || 0;

      // this.ctl.ctx.translate(s.position[0] - scaled_height * 0.5, s.position[1] + scaled_height * 0.5);
      // this.ctl.ctx.scale(scaled_height / 500, scaled_height / 500);
      // this.ctl.ctx.fillText(this.emoji_lookup[this._emotions[i]], 0, 0);
      // this.ctl.ctx.resetTransform();
    });

    this.before_square = this.squares;
  }
}
