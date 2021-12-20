<template>
  <blockquote><p><slot /></p></blockquote>
</template>

<style lang="scss" scoped>
blockquote {
  background: #f9f9f954;
  border-left: 10px solid #99999929;
  padding: 1em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  font-family: cursive;
  content: '"';
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
