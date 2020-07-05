export default class Square {
  constructor(position, height) {
    this.position = position;
    this.height = height;
  }

  interpolate(tar, t) {
    this.position = this.position.map((e, i) => e * t + tar.position[i] * (1 - t));
    this.height = this.height * t + tar.height * (1 - t);
  }

  distance(tar) {
    return Math.sqrt((this.position[0] - tar.position[0]) ** 2 + (this.position[1] - tar.position[1]));
  }
}
