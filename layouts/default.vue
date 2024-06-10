<template>
  <div class="default-layout">
    <header>
      <NavigationHeader class="nav-header" />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <NavigationFooter class="foot" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
  header {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .nav-header,
  main {
    padding: 0.5em 1.5em;
    margin-bottom: 5em;
  }

  main {
    padding-top: 0;
  }

  @media only screen and (max-width: 600px) {
    main {
      font-size: 0.9em;
      padding: 0.2em 0.5em;
    }
  }

  .nav-header {
    z-index: 10;
    margin-bottom: 2em;
    font-size: larger;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: green;
  }

  .nav-header::after {
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

  .foot {
    position: fixed;
    bottom: 0;
  }
</style>
