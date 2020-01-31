<template>
  <header class="header">
    <!-- logo -->
    <a href="#"><img class="logo" alt="Name of company" src="./assets/logo.png"></a>
    <!-- end logo -->

    <Menu msg=""/>
    <BackgroundScene />
    <Title />

    <span class="drag-me">Drag me</span>
  </header>
</template>

<script>
import Menu from './components/Menu';
import BackgroundScene from './components/BackgroundScene';
import Title from './components/Title';

export default {
  name: 'app',
  components: {
    Menu,
    BackgroundScene,
    Title
  }
}
</script>

<style>
@import './fonts.css';

html {
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  background: #E5E5E5;
}

.header {
  position: relative;
  min-width: 375px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url('./assets/Vector.svg') no-repeat, #FFFFFF;
  background-size: contain;
  background-position: center;
  color: #000000;
}

.logo {
  width: 102px;
  height: 16px;
  object-fit: contain;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 9;
}

.drag-me {
    position: absolute;
    top: -5px;
    left: 15px;
    width: 40px;
    height: 10px;
    opacity: 0;
    transition: opacity 0.5s ease-in;

    font-family: 'TT Travels', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 8px;
    line-height: 10px;
  
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #000000;
  }

</style>
