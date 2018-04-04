<template>
  <div>
    <nuxt/>
    <nav class="main-nav">
      <router-link to="/">
        <img src="../assets/nav-images/frontpage.jpg" alt="Logo der Pension Gletscherblick">
        <span>
          Startseite
        </span>
      </router-link>
      <router-link to="/zimmer">
        <img src="../assets/nav-images/zimmer.jpg" alt="Die Zimmer von der Pension Gletscherblick">
        <span>
          Zimmer
        </span>
      </router-link>
      <router-link to="/umgebung">
        <img src="../assets/nav-images/umgebung.jpg" alt="Die Umgebung von Heiligenblut">
        <span>
          Umgebung
        </span>
      </router-link>
      <router-link to="/skifahren">
        <img src="../assets/nav-images/skifahren.jpg" alt="Skifahren im Skigebiet Großglockner">
        <span>
          Skifahren
        </span>
      </router-link>
      <router-link to="/aktivitaeten">
        <img src="../assets/nav-images/aktivitaeten.jpg" alt="Aktivitäten Rund um Heiligenblut">
        <span>
          Aktivitäten
        </span>
      </router-link>
      <router-link to="/ueber-uns">
        <img src="../assets/nav-images/ueber-uns.jpg" alt="Maria und Martin">
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

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f5e2c8;
}

h2, h3 {
  font-family: 'Kalam', cursive;
  color: #41392e;
}

h2 {
  font-size: 36px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  margin-top: 5px;
}

.float-left {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
}

img.albumify {
  border-radius: 2px;
  border: 4px solid #fff;
  transform: rotateZ(-1deg);
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
}

.text-center {
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.container {
  margin: 20px auto;
  width: 100%;
  padding: 0 20px;
  max-width: 1000px;
  clear: both;

  &.max-width {
    margin: 0;
    max-width: none;
    padding: 0;
  }
}

.large-up {
  margin-top: 80px;
}

.main-image-wrapper {
  width: 100%;
  height: 700px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;

  h1 {
    position: absolute;
    top: 200px;
    left: 200px;
    color: white;
    font-size: 56px;
    line-height: 36px;

    small {
      font-size: 30.5px;
    }
  }
}
.main-image {
  width: 100%;
}
.two-part {
  display: flex;
  padding: 0;
  flex-wrap: wrap;

  .part {
    flex: 1;
    width: 50%;

    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
  }
}

@media screen and (max-width: 999px) {
  .two-part {
    padding: 0 20px;

    .part {
      width: 100%;
      margin: 0;
      flex: none;

      &:first-child {
        margin-bottom: 20px;
      }
    }
  }

  .container {
    &.large-up {
      margin-top: 20px;
    }

    img.albumify {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }

  .main-image-wrapper {
    height: 30vh;

    h1 {
      top: 40px;
      left: 0;
      right: 0;
      text-align: center;
      margin: 0;
      font-size: 36px;
      line-height: 36px;

      br {
        display: none;
      }

      small {
        display: block;
        font-size: 24px;
      }
    }
  }
}
</style>
