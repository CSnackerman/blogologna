<template>
  <nav>
    <NuxtLink to="/">
      <img
        alt="Bologna"
        class="logo"
        src="~/assets/svg/logo.svg"
        width="125"
        height="125"
      />
    </NuxtLink>
    <NuxtLink to="/why">Why?</NuxtLink>
    <NuxtLink to="/articles">Articles</NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  nav {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  @mixin on-hover($scale-max) {
    transition: scale 125ms ease-in-out;
    &:hover {
      scale: $scale-max;
    }
  }

  @mixin set-logo {
    $size: 2em;
    width: $size;
    height: $size;
  }

  img {
    display: grid;
    place-content: center;
    @include set-logo;
    @include on-hover(1.2);
  }

  a {
    all: unset;
    cursor: pointer;

    @include on-hover(1.05);

    &:hover {
      color: maroon;
      text-decoration: underline;
    }

    transition: all 50ms ease-in-out;
  }

  @keyframes hover {
    to {
      transform: translateY(-5px);
    }
  }

  .router-link-active {
    rotate: (-5deg);
    animation: hover 1s ease-in-out infinite alternate;
  }
</style>
