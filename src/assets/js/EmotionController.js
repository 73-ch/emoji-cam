import FaceDetector from "@/assets/js/FaceDetector";
import EmojiRenderer from "@/assets/js/EmojiRenderer";

export default class EmotionController {
  constructor(face_detector = new FaceDetector(), emoji_renderer = new EmojiRenderer()) {
    this.face_detector = face_detector;
    this.emoji_renderer = emoji_renderer;
    this._current_emotion = "neutral";

    this.EMOTION_LIST = ["angry", "disgusted", "fearful", "happy", "neutral", "sad", "surprised"];
  }

  setParams() {}

  get current_emotion() {
    return this._current_emotion;
  }

  set currentEmotion(emotion) {
    if (!this.EMOTION_LIST.includes(emotion)) {
      console.error(`cannot set current emotion: ${emotion}`);
      return;
    }
    this._current_emotion = emotion;
  }
  update() {
    let expression = Object.keys(this.face_detector.expressions).reduce((a, c, arr) => {
      return this.face_detector.expressions[a] > this.face_detector.expressions[c] ? a : c;
    });

    this.emoji_renderer.setEmotion(expression);
  }
}
