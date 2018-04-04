<template>
<div>
  <div class="hamburger js-hover">
    <div class="hamburger__line hamburger__line--01">
      <div class="hamburger__line-in hamburger__line-in--01"></div>
    </div>
    <div class="hamburger__line hamburger__line--02">
      <div class="hamburger__line-in hamburger__line-in--02"></div>
    </div>
    <div class="hamburger__line hamburger__line--03">
      <div class="hamburger__line-in hamburger__line-in--03"></div>
    </div>
    <div class="hamburger__line hamburger__line--cross01">
      <div class="hamburger__line-in hamburger__line-in--cross01"></div>
    </div>
    <div class="hamburger__line hamburger__line--cross02">
      <div class="hamburger__line-in hamburger__line-in--cross02"></div>
    </div>
  </div>
  <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path class="shape-overlays__path"></path>
    <path class="shape-overlays__path"></path>
    <path class="shape-overlays__path"></path>
  </svg>
</div>
</template>

<script>
  import ShapeOverlays from '../logic/ShapeOverlays'

  export default {
    mounted() {
      const elmHamburger = document.querySelector('.hamburger');
      const gNavItems = document.querySelectorAll('.global-menu__item');
      const elmOverlay = document.querySelector('.shape-overlays');
      const overlay = new ShapeOverlays(elmOverlay);

      elmHamburger.addEventListener('click', () => {
        if (overlay.isAnimating) {
          return false;
        }
        overlay.toggle();
        if (overlay.isOpened === true) {
          elmHamburger.classList.add('is-opened-navi');
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
          }
        } else {
          elmHamburger.classList.remove('is-opened-navi');
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
          }
        }
      });
    }
  }
</script>