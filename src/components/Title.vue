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
import Swiper from 'swiper';

export default {
  name: 'Title',
  mounted: function () {
    new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop:true,
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  &-container {
      position: absolute;
      top: 0;
      left: calc(50% - 30vw);
      //min-width: 375px;
      width: 60vw;
      height: 100vh;
      overflow: visible;
    }

    &-wrapper {
      display: flex;
      box-sizing: content-box;
    }

    &-slide {
      box-sizing: content-box;
      width: max-content;
      flex-shrink: 0;
      height: 100vh;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Schnyder Cond XL Demi';
      font-weight: 600;
      font-size: 125.581px;
      line-height: 86%;
      text-transform: uppercase;
      word-break: keep-all;
      mix-blend-mode: darken;
      -webkit-text-stroke: 0.837209px #580300;
      color: transparent;
      transition: color 1s ease-in;
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