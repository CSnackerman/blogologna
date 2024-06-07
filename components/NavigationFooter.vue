<template>
  <nav>
    <NuxtLink to="/whoami">who am i?</NuxtLink>
    <NuxtLink to="/contact">contact me</NuxtLink>
    <NuxtLink to="/faq">faq</NuxtLink>
    <NuxtLink to="/privacy">privacy policy</NuxtLink>
    <NuxtLink to="/sitemap">sitemap</NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  nav {
    font-size: 0.7em;
    opacity: 0.8;
    display: flex;
    justify-content: space-around;
    background-color: olivedrab;
    width: 100%;
    padding: 0.5em;
  }

  a {
    all: unset;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }

  .router-link-active {
    color: pink;
  }
</style>
