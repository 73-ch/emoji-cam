const defaultConstraints = {
  audio: false,
  video: true
};

export default class Camera {
  constructor(constraints = defaultConstraints) {
    this.constraints = constraints;

    this.camera_size = [0, 0];
    this.camera_aspect_ratio = 1.0;
  }

  getVideoElement() {
    if (!this.video_element) this.createHiddenVideo();
    return this.video_element;
  }

  async getCameraStream() {
    if (!this.stream) await this.createCameraStream();
    return this.stream;
  }

  async setDeviceId(device_id) {
    if (this.constraints.video.deviceId && this.constraints.video.deviceId === device_id) return;

    this.constraints.video = {};
    this.constraints.video.deviceId = device_id;
    await this.createCameraStream();
    this.setStreamToVideo();
  }

  async createCameraStream() {
    if (!navigator.mediaDevices) throw new Error("mediaDevices not found");

    if (this.stream) {
      for (let t of this.stream.getTracks()) t.stop();
    }

    this.stream = await navigator.mediaDevices.getUserMedia(this.constraints).catch(e => {
      console.error(e);
    });

    try {
      const track = this.stream.getVideoTracks()[0];

      this.camera_size = [track.getSettings().width, track.getSettings().height];

      this.camera_aspect_ratio = this.camera_size[0] / this.camera_size[1];

      return track.getCapabilities().deviceId;
    } catch (e) {
      console.error("video track is invalid");
    }
  }

  createHiddenVideo(width = this.camera_size[0], height = this.camera_size[1]) {
    this.video_element = document.createElement("video");
    this.video_element.width = width;
    this.video_element.height = height;
    this.video_element.muted = true;
    this.setStreamToVideo();

    return this.video_element;
  }

  setStreamToVideo() {
    if (!this.stream) {
      this.createCameraStream().then(() => {
        this.video_element.srcObject = this.stream;
      });
    } else {
      this.video_element.srcObject = this.stream;
    }
    this.video_element.play();
  }
}
