<template>
  <div>
    <nuxt class="clearfix" />
    <nav class="main-nav" :class="{ 'is-scrolled-down': isScrolledDown }">
      <router-link to="/">
        <img src="../assets/nav-images/frontpage.jpg" alt="Logo der Pension Gletscherblick" />
        <span>
          Startseite
        </span>
      </router-link>
      <router-link to="/pension">
        <img src="../assets/nav-images/pension.jpg" alt="Pension Gletscherblick" />
        <span>
          Pension
        </span>
      </router-link>
      <router-link to="/zimmer">
        <img src="../assets/nav-images/zimmer.jpg" alt="Die Zimmer von der Pension Gletscherblick" />
        <span>
          Zimmer & <br>
          Buchung
        </span>
      </router-link>
      <router-link to="/umgebung">
        <img src="../assets/nav-images/umgebung.jpg" alt="Die Umgebung von Heiligenblut" />
        <span>
          Umgebung
        </span>
      </router-link>
      <router-link to="/kontakt">
        <img src="../assets/nav-images/ueber-uns.jpg" alt="Maria und Martin" />
        <span>
          Kontakt
        </span>
      </router-link>
    </nav>
    <Hamburger />
    <footer>
      <div class="container">
        Familienpension Gletscherblick |
        <router-link to="/impressum">
          Impressum
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import Hamburger from '../components/Hamburger'

export default {
  components: {
    Hamburger,
  },
  data() {
    return {
      isScrolledDown: false,
    }
  },
  mounted() {
    if (window.innerWidth > 999) {
      this.registerScrollHandler()
    }
  },
  methods: {
    registerScrollHandler() {
      let passiveIfSupported = false

      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', {
            get: function() {
              passiveIfSupported = { passive: true }
            },
          })
        )
      } catch (err) {}

      window.addEventListener(
        'scroll',
        event => {
          this.isScrolledDown = window.scrollY > 20
        },
        passiveIfSupported
      )
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/navigation';
@import '../assets/scss/hamburger';
@import '../assets/scss/buttons';
@import '../assets/scss/layout';
</style>
