<template>
  <div class="video-banner">
    <video
      ref="videoPlayer"
      class="video-banner__video"
      :poster="posterImage"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
import headerVideo from "../assets/videos/Header Video.mp4";
export default {
  name: "HeroBanner",
  props: {
    videoSrc: {
      type: String,
      default: headerVideo,
    },
    posterImage: {
      type: String,
      default: "",
    },
  },
  methods: {
    playVideo() {
      this.$refs.videoPlayer.play();
    },
    pauseVideo() {
      this.$refs.videoPlayer.pause();
    },
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  },
};
</script>

<style scoped>
.video-banner {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.video-banner__video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  object-fit: cover;
}

.video-banner__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent overlay */
}

.video-banner__title {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.video-banner__subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
}

.video-banner__cta {
  padding: 12px 30px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.video-banner__cta:hover {
  background-color: #e64a19;
}

@media (max-width: 768px) {
  .video-banner__title {
    font-size: 2rem;
  }

  .video-banner__subtitle {
    font-size: 1rem;
  }
}
</style>
