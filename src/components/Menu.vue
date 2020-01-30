<template>
  <nav class="menu">
    <div class="menu__btn">
      <div class="menu__line"></div>
      <div class="menu__line"></div>
    </div>
      <ul class="menu__list">
        <li class="menu__listItem"> <a href="#">Commercial</a> </li>
        <li class="menu__listItem"> <a href="#">Editorial</a> </li>
        <li class="menu__listItem"> <a href="#">Reportage</a> </li>
        <li class="menu__listItem"> <a href="#">Meet me</a> </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped>
  .menu {
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 10;

    &__list {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &__listItem {
      font-family: 'TT Travels', 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      text-align: right;
      letter-spacing: 0.02em;
      text-transform: capitalize;

      a {
        color: inherit;
        font: inherit;
        text-decoration: none;
      }
    }

    &__btn {
    cursor: pointer;
    transition: 0.5s ease-out;
    display: none;
    }
    &__line {
      width: 28px;
      height: 3px;
      background-color: black;
      margin-bottom: 5px;
      transition: 0.5s ease-out;
    }
  }

  @media screen and (max-width: 768px) {
    .menu {
      &__list {
        display: none;
      }

      &__btn {
        display: block;
      }
    }
  }

</style>