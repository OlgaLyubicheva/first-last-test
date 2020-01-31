<template>
  <div class="scene">
    <div class="scene__layer-wraper">
      <div
        v-for="(item, index) in images"
        v-bind:key="index + 1"
        class="scene__layer layer1"
        v-bind:class="{active : currentIndex == index}"
        :style="{ backgroundImage: 'url('+ item[0] +')' }"
      ></div>

      <div
        v-for="(item, index) in images"
        v-bind:key="index + 2"
        class="scene__layer layer2"
        v-bind:class="{active : currentIndex == index}"
        :style="{ backgroundImage: 'url('+ item[1] +')' }"
      ></div>

      <div
        v-for="(item, index) in images"
        v-bind:key="index + 3"
        class="scene__layer layer3"
        v-bind:class="{active : currentIndex == index}"
        :style="{ backgroundImage: 'url('+ item[2] +')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundScene',
  data: function () {
    return ({currentIndex: 0,
    images: [
      ['/img/foto1.016989f2.jpg', '/img/foto2.41279e2e.png', '/img/foto3.df0aa40c.png'],
      ['/img/foto2.41279e2e.png', '/img/foto3.df0aa40c.png', '/img/foto1.016989f2.jpg'],
      ['/img/foto3.df0aa40c.png', '/img/foto1.016989f2.jpg', '/img/foto2.41279e2e.png'],
    ]});
  },
  methods: {
    parallax: function (event) {
      document.querySelector('.scene__layer-wraper').style.transform = `translate(${-event.clientX/20}px, ${-event.clientY/15}px)`;
    },

    whatIndex: function () {
      const index = document.querySelector('.swiper-slide-active').dataset.swiperSlideIndex;
      if (index && index !== this.currentIndex) {this.currentIndex = index}
    }
  },
  mounted: function () {
    document.addEventListener('mousemove', this.parallax);
    document.querySelector('.swiper-container').addEventListener('mousemove', this.whatIndex);
  }
}
</script>

<style lang="scss" scoped>
  .scene {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    perspective: 1px; 
    transform-style: preserve-3d;

    &__layer-wraper {
      position: relative;
      transform-style: inherit;
      width: 476px;
      height: 702px;
    }
  
    &__layer {
      transform-style: inherit;
      opacity: 0;
      transition: opacity 0.5s ease-in;
      background-repeat: no-repeat;
      background-color: #E5E5E5;
    }

    .layer1 {
      position: absolute;
      width: inherit;
      height: inherit;
      transform: rotate(1.5deg);

      background: url('../assets/foto1.jpg') no-repeat, #E5E5E5;
      background-size: cover;
      background-position: center;
    }

    .layer2 {
      position: absolute;
      top: 0;
      left: -123%;
      width: 163px;
      height: 226px;
      transform: translateZ(-1px) rotate(1.1deg) scale(2);

      background: url('../assets/foto2.png') no-repeat, #E5E5E5;
      background-size: 240%;
      background-position: center -50px;
    }

    .layer3 {
      position: absolute;
      right: -39%;
      bottom: 13%;
      width: 234px;
      height: 162px;
      transform: rotate(0.53deg) translateZ(0.2px) scale(0.8);

      background: url('../assets/foto3.png') no-repeat, #E5E5E5;
      background-size: 100%;
      background-position: center -70px;
    }

    .active {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1439px) and (min-width: 768px) {
    .scene {
      &__layer-wraper {
        width: 359px;
        height: 530px;
      }
    } 
  }

  @media screen and (max-width: 767px) {
    .layer2, .layer3 {
      display: none;
    }

    .scene {
      &__layer-wraper {
        width: 273px;
        height: 403px;
      }
    } 
  }

  @media screen and (max-width: 375px) {
    .scene {
      &__layer-wraper {
        width: 249.67px;
        height: 368.56px;
      }
    }
  }
</style>
