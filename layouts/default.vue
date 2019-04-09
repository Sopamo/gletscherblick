<template>
  <div>
    <nuxt />
    <nav class="main-nav">
      <router-link to="/">
        <img
          src="../assets/nav-images/frontpage.jpg"
          alt="Logo der Pension Gletscherblick"
        />
        <span>
          Startseite
        </span>
      </router-link>
      <router-link to="/zimmer">
        <img
          src="../assets/nav-images/zimmer.jpg"
          alt="Die Zimmer von der Pension Gletscherblick"
        />
        <span>
          Zimmer
        </span>
      </router-link>
      <router-link to="/umgebung">
        <img
          src="../assets/nav-images/umgebung.jpg"
          alt="Die Umgebung von Heiligenblut"
        />
        <span>
          Umgebung
        </span>
      </router-link>
      <router-link to="/skifahren">
        <img
          src="../assets/nav-images/skifahren.jpg"
          alt="Skifahren im Skigebiet Großglockner"
        />
        <span>
          Skifahren
        </span>
      </router-link>
      <router-link to="/aktivitaeten">
        <img
          src="../assets/nav-images/aktivitaeten.jpg"
          alt="Aktivitäten Rund um Heiligenblut"
        />
        <span>
          Aktivitäten
        </span>
      </router-link>
      <router-link to="/ueber-uns">
        <img src="../assets/nav-images/ueber-uns.jpg" alt="Maria und Martin" />
        <span>
          Über Uns
        </span>
      </router-link>
    </nav>
    <Hamburger />
  </div>
</template>

<script>
import Hamburger from '../components/Hamburger'

export default {
  components: {
    Hamburger
  }
}
</script>

<style lang="scss">
@import '../assets/scss/navigation';
@import '../assets/scss/hamburger';
@import '../assets/scss/layout';
</style>
