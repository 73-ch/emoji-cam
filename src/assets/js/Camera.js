const defaultConstraints = {
  audio: false,
  video: true
};

export default class Camera {
  constructor(constraints = defaultConstraints) {
    this.constraints = constraints;

    this.size = [0, 0];

    this.createCameraStream().then(
      () => {},
      error => {
        console.error(error);
      }
    );
  }

  getVideoElement(width = this.size[0], height = this.size[1]) {
    if (!this.stream) {
      this.createCameraStream().then(() => {
        this.video_element.srcObject = this.stream;
      });
    }
    if (!this.video_element) this.createHiddenVideo(width, height);
    return this.video_element;
  }

  async getCameraStream() {
    if (!this.stream) await this.createCameraStream();
    return this.stream;
  }

  async createCameraStream() {
    if (!navigator.mediaDevices) throw new Error("mediaDevices not found");

    this.stream = await navigator.mediaDevices
      .getUserMedia(this.constraints)
      .catch(e => {
        console.error(e);
      });

    try {
      this.size = [
        this.stream.getVideoTracks()[0].getSettings().width,
        this.stream.getVideoTracks()[0].getSettings().height
      ];
    } catch (e) {
      console.error("video track is invalid");
    }
  }

  createHiddenVideo(width = this.size[0], height = this.size[1]) {
    this.video_element = document.createElement("video");

    this.video_element.srcObject = this.stream;
    this.video_element.muted = true;
    this.video_element.width = width;
    this.video_element.height = height;
    this.video_element.play();
  }
}
