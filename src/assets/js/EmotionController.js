import FaceDetector from "@/assets/js/FaceDetector";
import EmojiRenderer from "@/assets/js/EmojiRenderer";

export default class EmotionController {
  constructor(face_detector = new FaceDetector(), emoji_renderer = new EmojiRenderer()) {
    this.face_detector = face_detector;
    this.emoji_renderer = emoji_renderer;
    this._current_emotion = "neutral";

    this.manual_mode = false;

    this.EMOTION_LIST = ["neutral", "angry", "disgusted", "fearful", "happy", "sad", "surprised"];
  }

  setParams() {}

  get current_emotion() {
    return this._current_emotion;
  }

  set current_emotion(emotion) {
    if (!this.EMOTION_LIST.includes(emotion)) {
      console.error(`cannot set current emotion: ${emotion}`);
      return;
    }
    this._current_emotion = emotion;
  }
  update() {
    const expressions = [];

    if (this.manual_mode) {
      for (let e of this.face_detector.expressions) {
        expressions.push(this._current_emotion);
      }
    } else {
      for (let e of this.face_detector.expressions) {
        expressions.push(
          Object.keys(e).reduce((a, c) => {
            return e[a] > e[c] ? a : c;
          })
        );
      }
    }

    this.emoji_renderer.emotions = expressions;
  }
}
