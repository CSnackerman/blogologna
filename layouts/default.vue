<template>
  <header>
    <slot name="header">Missing Header Content</slot>
  </header>
  <main>
    <slot name="main">Missing Main Content</slot>
  </main>
</template>

<style scoped lang="scss">
  header,
  main {
    padding: 0.5em 1.5em;
  }

  main {
    padding-top: 0;
  }

  header {
    z-index: 10;
    margin-bottom: 2em;
    font-size: larger;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: green;
  }

  header::after {
    $height: 0.5em;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -$height;
    height: $height;
    width: 100%;
    background-image: linear-gradient(to bottom, green, rgba(143, 188, 143, 0));
  }
</style>
