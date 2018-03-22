<template>
  <div>
    <nuxt/>
    <nav class="main-nav">
      <router-link to="/">
        <img src="../assets/nav-images/frontpage.jpg">
        <span>
          Startseite
        </span>
      </router-link>
      <router-link to="/">Zimmer</router-link>
      <router-link to="/">Preise</router-link>
      <router-link to="/">Umgebung</router-link>
      <router-link to="/">Aktivitäten</router-link>
      <router-link to="/">Über Uns</router-link>
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

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.float-left {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

img.albumify {
  border-radius: 2px;
  border: 4px solid #fff;
  transform: rotateZ(-1deg);
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
}

.container {
  margin: 20px auto;
  width: 100%;
  padding: 0 20px;
  max-width: 1000px;

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
  position: fixed;
  top: 0;
  right: 20px;

  a {
    display: inline-block;
    background: white;
    color: #754b18;
    text-align: center;
    text-decoration: none;
    padding: 10px 10px;
    margin: 10px;
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid #754b18;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;
    will-change: box-shadow, transform;

    img {
      display: block;
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
