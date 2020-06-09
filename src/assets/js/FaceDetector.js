import * as faceapi from "face-api.js";
import Camera from "./Camera";

const MODEL_URL = `http://${location.host}/models/`;

const LANDMARKS_NUM = 68;

export default class FaceDetector {
  constructor(camera = new Camera()) {
    this.camera = camera;
    this.landmarks = new Array(LANDMARKS_NUM);
    this.ready = false;
    this.updated = false;

    this.detections = {};
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

    let detections = await faceapi
      .detectAllFaces(this.camera.getVideoElement(), new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

    try {
      this.detections = faceapi.resizeResults(detections, {
        width: this.camera.getVideoElement().width,
        height: this.camera.getVideoElement().height
      });

      const box = this.detections[0].detection.box;

      this.position = [box.x + box.width * 0.5, box.y + box.height * 0.2];
      this.height = this.height * 0.7 + box.height * 0.3;
      this.updated = true;
    } catch (e) {
      this.updated = false;
      return "detection failed";
    }
  }
}
