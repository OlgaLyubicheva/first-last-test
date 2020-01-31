<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Ink Lingerie</div>
      <div class="swiper-slide">Ink Lingerie</div>
      <div class="swiper-slide">Ink Lingerie</div>
    </div>
  </div>
</template>

<script>
'strict mode'
import Swiper from 'swiper';

export default {
  name: 'Title',
  methods: {
    cursorActiviti: function (event) {
      const dragMe = document.querySelector('.drag-me');
      if (event.type == 'mouseout') {
        dragMe.style.opacity = 0;
      } else {
        dragMe.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        dragMe.style.opacity = 1;
      }
    }
  },
  mounted: function () {
    new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop:true,
    });

    const slideActive = document.querySelector('.swiper-container');
    slideActive.addEventListener('mousemove', this.cursorActiviti);
    slideActive.addEventListener('mouseout', this.cursorActiviti);
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  &-container {
      position: absolute;
      top: calc(50% - 20vh);
      left: calc(50% - 30vw);
      width: 60vw;
      height: 40vh;
      overflow: visible;
    }

    &-wrapper {
      display: flex;
      box-sizing: content-box;
      height: inherit;
      align-items: center;
    }

    &-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: content-box;
      flex-shrink: 0;
      width: max-content;

      font-family: 'Schnyder Cond XL Demi';
      text-align: center;
      font-weight: 600;
      font-size: 125.581px;
      line-height: 86%;
      text-transform: uppercase;
      word-break: keep-all;
      mix-blend-mode: darken;
      -webkit-text-stroke: 0.837209px #580300;
      color: transparent;
      transition: color 1s ease-in;

      cursor: url('../assets/cursor.svg'), auto;
    }

    &-slide-active {
      color: #580300;
    }

    &-slide-next {
      transform: rotate(1.5deg);
    }

    &-slide-prev {
      transform: rotate(-1.5deg);
    }
  }

  @media screen and (max-width: 1439px) and (min-width: 768px) {
    .swiper-slide {
      font-size: 96px;
    }
  }

  @media screen and (max-width: 767px) {
    .swiper-slide {
      font-size: 48px;
    }
  }

    @media screen and (max-width: 375px) {
    .swiper-container {
      width: 260px;
      left: 57.5px;
    }
  }
</style>