<template functional>
  <div class="c-loader" :class="{ '-pane': props.pane }">
    <div class="c-loader__spinner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/loader';
</style>
