export default class EmotionController {
  constructor() {
    this._current_emotion = '';

    this.EMOTION_LIST = ['happy', 'angry', 'sad'];
  }

  setParams() {

  }

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
}
