<script setup lang="ts">
  import IconReplay from '@/components/icons/IconReplay.vue';
  import IconSubtitle from '@/components/icons/IconSubtitles.vue';
  import IconFullscreen from '@/components/icons/IconFullscreen.vue';

  import { ref, onMounted } from 'vue';

  type HTMLElementEvent<T extends HTMLElement> = Event & {target: T;};

  const videoRef: {value: HTMLVideoElement | null} = ref(null);
  const isPlaying = ref(false);
  // Link to video https://www.pexels.com/ru-ru/video/6981411/ by Mikhail Nilov
  const videoUrl = '/assets/free-video.mp4';
  const currentTime = ref(0);
  const duration = ref(0);
  const isFullscreen = ref(false);

  const togglePlay = () => {
    let video;
    if (videoRef.value) {
      video = videoRef.value as HTMLVideoElement;
    }
    if (video) {
      isPlaying.value ? video.pause() : video.play();
      isPlaying.value = !isPlaying.value;
    }
  };

  const onTimeUpdate = () => {
    let video;
    if (videoRef.value) {
      video = videoRef.value as HTMLVideoElement;
    }
      if (video) {
        currentTime.value = video.currentTime;
        duration.value = video.duration;
      }
    };

  const onPlay = () => {
    isPlaying.value = true;
    console.log(videoRef.value)
  };

  const onPause = () => {
    isPlaying.value = false;
  };

  const onReset = () => {
    let video;
    if (videoRef.value) {
      video = videoRef.value as HTMLVideoElement;
    }
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.play();
    }
  }

  const onFullScreenClick = () => {
    let video;
    if (videoRef.value) {
      video = videoRef.value as HTMLVideoElement;
    }
    if (video) {
      if (!isFullscreen.value) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
        isFullscreen.value = !isFullscreen.value;
      }
    }
  }

  const onRangeChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (videoRef.value) {
      videoRef.value.currentTime = Number(target.value);
    }
  }

  const onRangeClick = () => {
    if (videoRef.value) {
      videoRef.value.pause();
    }
  }

  onMounted(() => {
    const video = videoRef.value;
    if (video) {
      video.addEventListener('play', onPlay);
      video.addEventListener('pause', onPause);
    }
  });
</script>

<template>
  <div div class="video-player">
    <video class="video-player__video" ref="videoRef" :src="videoUrl" @play="onPlay" @pause="onPause" @click="togglePlay" @timeupdate="onTimeUpdate"></video>
    <div class="video-player__controls">
      <div class="video-player__duration">
        <input class="video-player__track" type="range" :max="duration" v-model="currentTime" @input="onRangeChange" @click="onRangeClick"/>
      </div>
      <button class="video-player__icon video-player__icon--replay" type="button" @click="onReset">
        <IconReplay />
      </button>
      <div class="video-player__buttons">
        <button class="video-player__icon video-player__icon--subtitle" type="button">
          <IconSubtitle />
        </button>
        <button class="video-player__icon video-player__icon--fullscreen" type="button" @click="onFullScreenClick">
          <IconFullscreen />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.video-player {
  padding-bottom: 50px;
  background-color: $color-default-white;
}

.video-player__video {
  margin-bottom: -45px;
  
  @include vp-768 {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: -93px;
  }

  @include vp-1200 {
    margin-bottom: -93px;
  }
}

.video-player__controls {
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  margin: 0 20px;
  z-index: 1;

  @include vp-768 {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 35px;
    background-color: $color-black-opacity-3;
  }
}

.video-player__duration {
  display: flex;
  padding: 21px 22px;
  background-color: $color-black-opacity-3;
  grid-column: span 3;

  @include vp-768 {
    order: 2;
    flex-grow: 1;
    background-color: $color-transparent;
  }
}

.video-player__track {
  width: 100%;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    border: none;
    border-radius: 3px;
    background-color: $color-default-white;
  }
}

.video-player__track::-webkit-slider-thumb {
  height: 13px;
  width: 13px;
  margin-top: -5px;
  border: none;
  border-radius: 50%;
  background: $color-default-white;
  -webkit-appearance: none;
}

.video-player__track:focus {
   outline: none;
}

.video-player__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: $color-white-smoke;
  cursor: pointer;

  @include vp-768 {
    background-color: transparent;

    & path {
      fill: $color-default-white;
    }
  }
}

.video-player__icon--replay {
  justify-content: start;
  padding-left: 25px;

  @include vp-768 {
    padding-left: 0;
  }
}

.video-player__icon--fullscreen {
  padding-right: 25px;

  @include vp-768 {
    padding-right: 0;
    order: 1;
  }
}

.video-player__buttons {
  display: flex;
  gap: 30px;
  background-color: $color-white-smoke;
  justify-content: flex-end;

  @include vp-768 {
    order: 3;
    background-color: $color-transparent;
  }
}
</style>
