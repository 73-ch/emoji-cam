import * as faceapi from "face-api.js";
import Camera from "./Camera";
import Square from "@/assets/js/Square";

const MODEL_URL = `./models`;

export default class FaceDetector {
  constructor(camera = new Camera()) {
    this.camera = camera;
    this.ready = false;
    this.updated = false;

    this.results = [];
    this.squares = [];
    this.expressions = [];
  }

  // eslint-disable-next-line class-methods-use-this
  async load() {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
    ]).catch(e => {
      throw e;
    });

    this.ready = true;

    return "model loaded";
  }

  async update() {
    if (!this.ready) throw new Error("model is not loaded.");

    let result = await faceapi
      .detectAllFaces(this.camera.getVideoElement(), new faceapi.TinyFaceDetectorOptions())
      // .withFaceLandmarks()
      .withFaceExpressions();

    try {
      this.results = result.map(e => {
        return faceapi.resizeResults(e, {
          width: this.camera.getVideoElement().width,
          height: this.camera.getVideoElement().height
        });
      });

      this.squares = [];
      this.expressions = [];

      for (let r of this.results) {
        const box = r.detection.box;
        this.expressions.push(r.expressions);
        this.squares.push(new Square([box.x + box.width * 0.5, box.y + box.height * 0.2], box.height));
      }

      this.updated = true;
    } catch (e) {
      this.updated = false;
      return "detection failed";
    }
  }
}
