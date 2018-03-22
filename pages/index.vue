<template>
<div>
  <section class="container max-width">
    <div class="main-image-wrapper">
      <img src="../assets/frontpage.jpg" class="main-image">
      <h1 class="intro-text">
        Herzlich Willkommen<br>
        <br>
        <small>bei der Familienpension Gletscherblick<br>
        in Heiligenblut</small>
      </h1>
    </div>
  </section>
  <section class="container large-up">
    <img src="../assets/blick-nach-heiligenblut.jpg" width="500" alt="Blick von der Sonnenterrasse nach Heiligenblut" class="albumify float-left">
    Heiligenblut, mitten im Nationalpark Hohe Tauern, liegt Ihnen zu Füßen, während Sie von der Sonnenterrasse unserer Pension aus das Glocknermassiv bewundern. <br>
    <br>
    Unser Familienbetrieb liegt knapp fünf Gehminuten vom Ortszentrum entfernt auf einem kleinen Hügel ohne öffentlichen Straßenverkehr.
  </section>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
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
</style>