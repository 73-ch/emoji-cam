import Camera from "./Camera";
import EmojiRenderer from "./EmojiRenderer";
import FaceDetector from "./FaceDetector";
import EmotionController from "@/assets/js/EmotionController";
import * as faceapi from "face-api.js";

export default class RenderingController {
  constructor(canvas, camera = new Camera()) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.render_status = false;

    this.resized();

    this.camera = camera;

    this.emoji_renderer = new EmojiRenderer(this);

    this.face_detector = new FaceDetector(this.camera);
    this.face_detector.load().then(() => {}, console.error);

    this.emotion_controller = new EmotionController(this.face_detector, this.emoji_renderer);

    window.addEventListener("resize", this.resized.bind(this));
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

    if (this.face_detector.ready) {
      this.face_detector.update().then(() => {
        this.emoji_renderer.setPosition(this.face_detector.position[0], this.face_detector.position[1]);

        this.emoji_renderer.font_size = this.face_detector.height * 1.4;

        this.emotion_controller.update();
      });
    }

    // if (this.face_detector.updated) {
    //   faceapi.draw.drawDetections(this.canvas, this.face_detector.detections);
    // }

    this.emoji_renderer.draw();

    if (this.render_status) requestAnimationFrame(this.draw.bind(this));
  }

  resized() {
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // console.log(this.width, this.height, this.ctx.width,  this.ctx.height);
  }
}
