import * as faceapi from "face-api.js";
import Camera from "./Camera";

const MODEL_URL = `./models`;

const LANDMARKS_NUM = 68;

export default class FaceDetector {
  constructor(camera = new Camera()) {
    this.camera = camera;
    this.landmarks = new Array(LANDMARKS_NUM);
    this.ready = false;
    this.updated = false;

    this.result = {};
    this.position = [0, 0];
    this.height = 0;
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
      .detectSingleFace(this.camera.getVideoElement(), new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    try {
      this.result = faceapi.resizeResults(result, {
        width: this.camera.getVideoElement().width,
        height: this.camera.getVideoElement().height
      });

      const box = this.result.detection.box;

      this.expressions = result.expressions;

      this.position = [box.x + box.width * 0.5, box.y + box.height * 0.2];
      this.height = this.height * 0.7 + box.height * 0.3;
      this.updated = true;
    } catch (e) {
      this.updated = false;
      return "detection failed";
    }
  }
}
