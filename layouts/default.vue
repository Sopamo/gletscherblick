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
  </div>
</template>

<style lang="scss">
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

.float-left {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
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

.main-nav {
  position: absolute;
  top: 0;
  right: 20px;

  a {
    display: inline-block;
    background: white;
    color: #754b18;
    text-align: center;
    text-decoration: none;
    padding: 10px 10px 5px 10px;
    margin: 10px;
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid #754b18;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;
    will-change: box-shadow, transform;

    img {
      display: block;
      width: 80px;
      margin: 0 auto 5px auto;
    }

    &:nth-of-type(1) {
      transform: rotateZ(-3deg);
    }

    &:nth-of-type(2) {
      transform: rotateZ(1deg);
    }

    &:nth-of-type(3) {
      transform: rotateZ(-2deg);
    }

    &:nth-of-type(4) {
      transform: rotateZ(2deg);
    }

    &:nth-of-type(5) {
      transform: rotateZ(-3deg);
    }

    &:nth-of-type(6) {
      transform: rotateZ(-1deg);
    }

    &:hover {
      box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2);
      transform: rotateZ(0) translateY(-2px);
    }
  }
}
</style>
