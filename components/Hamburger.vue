<template>
  <div>
    <div ref="hamburger" class="hamburger js-hover" @click="toggleMenu">
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
    <svg ref="shapeOverlays" class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg>
  </div>
</template>

<script>
import ShapeOverlays from '../logic/ShapeOverlays'

export default {
  data() {
    return {
      overlay: null,
    }
  },
  mounted() {
    this.overlay = new ShapeOverlays(this.$refs.shapeOverlays)
    this.$router.beforeEach((to, from, next) => {
      this.hideMenu()
      next()
    })
  },
  methods: {
    hideMenu() {
      if (this.overlay.isOpened) {
        this.toggleMenu()
      }
    },
    toggleMenu() {
      if (this.overlay.isAnimating) {
        return false
      }
      const mainNav = document.querySelectorAll('.main-nav')
      this.overlay.toggle()
      if (this.overlay.isOpened === true) {
        mainNav[0].classList.remove('is-closing')
        this.$refs.hamburger.classList.add('is-opened-navi')
        mainNav[0].classList.add('is-opened')
      } else {
        mainNav[0].classList.add('is-closing')
        this.$nextTick(() => {
          this.$refs.hamburger.classList.remove('is-opened-navi')
          mainNav[0].classList.remove('is-opened')
        })
      }
    },
  },
}
</script>
